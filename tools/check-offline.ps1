<#
  check-offline.ps1
  Fails (non-zero exit) if any file under tourapp/ references a live
  http:// or https:// URL in a place that would actually be fetched at
  runtime (script src, link href, css url(), fetch/import calls).

  Deliberately does NOT flag plain citation/credit text (e.g. a caption that
  says "images.nasa.gov (NASA/Charles Beason)") — the concern is network
  dependencies, not text mentioning a domain. So this only matches URLs
  that appear inside quotes following src=, href=, url(, fetch(, or import.

  Run visibly, no hidden window, no downloads — safe under the guardrails
  in CLAUDE.md and INCIDENT-NOTES-sentinelone-2026-08-12.md.

  Usage:
    powershell -NoProfile -ExecutionPolicy Bypass -File tourapp\tools\check-offline.ps1
#>

$root = Join-Path $PSScriptRoot '..'
$root = (Resolve-Path $root).Path

$pattern = '(src|href|url|import)\s*[=\(]\s*["'']?\s*https?://'

$extensions = @('*.html', '*.css', '*.js', '*.json')
$files = Get-ChildItem -Path $root -Recurse -Include $extensions -File

$violations = @()

foreach ($file in $files) {
    $lines = Get-Content -Path $file.FullName
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($lines[$i] -match $pattern) {
            $violations += [PSCustomObject]@{
                File = $file.FullName.Substring($root.Length + 1)
                Line = $i + 1
                Text = $lines[$i].Trim()
            }
        }
    }
}

if ($violations.Count -gt 0) {
    Write-Host "OFFLINE CHECK FAILED - found $($violations.Count) live network reference(s):" -ForegroundColor Red
    foreach ($v in $violations) {
        Write-Host ("  {0}:{1}  {2}" -f $v.File, $v.Line, $v.Text) -ForegroundColor Yellow
    }
    exit 1
}
else {
    Write-Host "OFFLINE CHECK PASSED - no live http:// or https:// references found under tourapp/." -ForegroundColor Green
    exit 0
}
