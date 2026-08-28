# TODO: Secure GitHub Token for Request Information Feature

## Problem
The Request Information feature requires a GitHub Personal Access Token to trigger the repository_dispatch event, but storing it client-side is insecure.

## Current State
- Token has been removed from `js/request-info.js`
- Feature is non-functional until token is configured securely
- Code checks for empty token and shows alert to contact administrator

## Recommended Solution
Use GitHub Actions with repository secrets:

1. **Store PAT in GitHub repository secrets**
   - Go to repo Settings → Secrets and variables → Actions
   - Add new secret named `PERSONAL_ACCESS_TOKEN`
   - Paste the GitHub PAT with `repo` scope

2. **Create GitHub Action workflow**
   - Create `.github/workflows/send-info-request.yml`
   - Triggered by `repository_dispatch` event type: `information-request`
   - Uses the secret token to send email via GitHub API or email service

3. **Update client-side code**
   - Remove token entirely from `js/request-info.js`
   - App calls public webhook endpoint instead
   - Action handles secure operations server-side

## Alternative Options
- Serverless function (Netlify/Vercel/AWS Lambda) with environment variables
- Backend service to proxy requests

## Files Affected
- `js/request-info.js` - Already updated to remove token
- `.github/workflows/` - New workflow file needed
