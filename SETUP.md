# iPad Setup & Deployment Guide

Complete instructions for deploying the MSFC Test Lab Tour App to iPads for visitor use.

## Overview

The app runs as a **private GitHub Pages site** accessible only to authenticated users. iPads are logged into a **shared guest GitHub account** so visitors can browse without individual authentication.

## Prerequisites

- [ ] GitHub Enterprise Cloud organization (`CTuckerSolutions`)
- [ ] Private repository with Pages enabled (`TestLabTourApp`)
- [ ] Guest GitHub account created and invited with **Read** access
- [ ] 10 iPads (iOS 14+ recommended) with Safari
- [ ] Internal WiFi network with internet access

## One-Time Setup

### 1. Create Guest Account

If not already done:

```
1. Create new Google/email account (e.g., msfc-tour-guest@gmail.com)
2. Sign up for GitHub using that email
3. Invite account to CTuckerSolutions org with Read access to TestLabTourApp repo
4. Accept invitation
5. Document credentials in secure location for tour guides
```

**Security note**: This account has read-only access to one private repo. Even if credentials leak, no write access exists.

### 2. Enable Private GitHub Pages

In the `TestLabTourApp` repository:

```
Settings → Pages → Build and deployment
  Source: Deploy from a branch
  Branch: main / (root)
  
Settings → Pages → GitHub Pages visibility
  Change visibility to: Private
  ✓ Only people with access to this repository can view this site
```

**Pages URL**: `https://ctuckersolutions.github.io/TestLabTourApp`

### 3. Test Authentication

1. Open an incognito/private browser window
2. Navigate to the Pages URL
3. Verify GitHub login prompt appears
4. Log in with guest account credentials
5. Verify site loads correctly
6. Confirm all media/assets load (check browser console for 404s)

## iPad Configuration

Repeat for each of the 10 iPads:

### Step 1: Update iOS (if needed)
```
Settings → General → Software Update
  Install iOS 14 or later if available
```

### Step 2: Configure Safari
```
Settings → Safari
  ✓ Enable JavaScript
  ✓ Block Pop-ups: OFF (for potential lightbox features)
  ✓ Prevent Cross-Site Tracking: OFF (for GitHub auth to persist)
  ✓ Block All Cookies: OFF
```

### Step 3: Log Into GitHub
```
1. Open Safari
2. Navigate to https://github.com/login
3. Enter guest account credentials
4. Complete 2FA if enabled (save device as trusted)
5. Verify "Signed in as [guest-account-name]" in top-right
```

### Step 4: Install as PWA
```
1. Navigate to https://ctuckersolutions.github.io/TestLabTourApp
2. Wait for site to fully load
3. Tap Share button (square with arrow)
4. Scroll down → select "Add to Home Screen"
5. Edit name if desired (default: "Test Lab Tour")
6. Tap "Add"
7. Verify app icon appears on home screen
```

### Step 5: Configure for Kiosk Use
```
Settings → Screen Time → Content & Privacy Restrictions
  Screen Time: ON
  Content & Privacy Restrictions: ON
  → Allowed Apps
    ✓ Safari: ON
    ✓ Camera: OFF (unless QR scanning needed)
  → Content Restrictions
    → Web Content: Limit Adult Websites (or Allowed Websites Only)
      Add: https://ctuckersolutions.github.io
```

**Optional - Guided Access** (locks iPad to single app):
```
Settings → Accessibility → Guided Access
  Guided Access: ON
  Passcode Settings → Set Guided Access Passcode
  
To activate:
  1. Open Tour App
  2. Triple-click Side/Home button
  3. Tap "Start" in top-right
  
To exit (tour guide only):
  Triple-click Side/Home → Enter passcode → End
```

### Step 6: Test Offline Capability
```
1. Open the app (from home screen icon or Safari)
2. Browse 2-3 tour stops (ensures caching happens)
3. Enable Airplane Mode
4. Force-quit Safari (swipe up from app switcher)
5. Re-open Tour App
6. Verify all visited stops load correctly offline
7. Disable Airplane Mode
```

### Step 7: Set Homepage (Optional)
```
Settings → Safari → Homepage
  Enter: https://ctuckersolutions.github.io/TestLabTourApp
  
Now Safari opens directly to tour app on launch
```

## Physical iPad Preparation

### Recommended Accessories
- **Protective case** with stand (portrait orientation)
- **Charging dock** at tour guide desk
- **Screen protector** (anti-glare if used outdoors)
- **Cleaning wipes** for shared-use hygiene

### Labeling
Apply label to back of case:
```
MSFC Test Lab Tour App
iPad [1-10]
For visitor use only
Return to Tour Guide desk after tour
```

### Charging Station
Set up central charging location:
- 10-port USB charging hub
- Cable management for 10 iPads
- Sign: "Tour iPads — Return here when finished"

## Tour Guide Instructions

Provide printed card with each iPad:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MSFC TEST LAB TOUR — IPAD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FOR VISITORS:
1. Tap "Test Lab Tour" icon on home screen
2. Browse tour stops, watch videos, take quizzes
3. Use search bar to find specific facilities
4. App works offline after first load
5. Return iPad to Tour Guide desk when finished

FOR TOUR GUIDES:
• App is already logged in — no visitor login needed
• Session stays active unless browser is cleared
• If login expires, credentials are in [secure location]
• To factory reset: Settings → General → Reset → 
  Erase All Content and Settings (NOT recommended)

TROUBLESHOOTING:
• "Sign in to GitHub" prompt appears
  → Session expired, re-enter guest credentials
• Content not loading offline
  → Reconnect to WiFi, browse a few stops to re-cache
• App frozen or unresponsive
  → Force-quit Safari, reopen app
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Maintenance

### Weekly
- [ ] Check all iPads for charged battery
- [ ] Verify app still loads on 2-3 sample iPads
- [ ] Clean screens with microfiber cloth

### Monthly
- [ ] Test GitHub session on all iPads (spot-check login status)
- [ ] Check for iOS updates and install if available
- [ ] Verify no content is broken (404s, missing media)

### As Needed
- [ ] Re-authenticate if sessions expire across multiple iPads
- [ ] Clear Safari cache if performance degrades (Settings → Safari → Clear History and Website Data — will require re-login)

## Updating Content

When new tour stops or features are added to the app:

1. **Developer pushes changes** to `main` branch
2. **GitHub Pages automatically rebuilds** (2-3 minutes)
3. **iPads fetch updates on next load** (no action needed)
4. **Service worker caches new content** for offline use

**No need to touch individual iPads** — updates propagate automatically.

To force immediate update on one iPad:
```
1. Open Tour App in Safari
2. Pull down to refresh (or reload page)
3. Browse new content to cache it offline
```

## Security Considerations

### What's Protected
✅ Source code (repo is private)  
✅ Deployment pipeline (only org members can push)  
✅ Content editing (requires write access)

### What's Accessible
⚠️ Anyone with guest account credentials can view the live site  
⚠️ Session cookies persist across browser restarts (convenience trade-off)

### Mitigation
- Guest account has **read-only** access (can't modify anything)
- Credentials stored in **secure location** (not on iPads themselves)
- Audit GitHub access logs monthly (Settings → Security → Audit log)
- Rotate guest account password annually

## Troubleshooting

### iPad shows "404 - Page not found"
**Cause**: GitHub Pages not enabled or build failed  
**Fix**: Check repo Settings → Pages → ensure "Your site is live at..."

### Login prompt appears after iPad was working
**Cause**: GitHub session expired (typically 30+ days)  
**Fix**: Re-enter guest account credentials, check "Keep me signed in"

### App loads but media is missing
**Cause**: Assets not committed to repo, or 404 in network tab  
**Fix**: Verify all media files exist in repo, check browser console for errors

### Offline mode not working
**Cause**: Service worker not registered, or cache not primed  
**Fix**: Reconnect to WiFi, open app, browse 2-3 stops, verify in Safari Dev Tools (Develop → [iPad name] → Service Workers)

### App is slow or unresponsive
**Cause**: Cache bloat, old iOS version, or low storage  
**Fix**: Clear Safari cache (Settings → Safari → Clear History and Data), check available storage, update iOS

### "This site can't provide a secure connection" error
**Cause**: GitHub Pages HTTPS certificate issue (rare)  
**Fix**: Wait 10 minutes and retry, or check https://www.githubstatus.com

## Rollback Procedure

If a deployment breaks the app:

1. **Identify last working commit**:
   ```bash
   git log --oneline
   ```

2. **Revert to that commit**:
   ```bash
   git revert <commit-hash>
   git push org main
   ```

3. **Wait 2-3 minutes for Pages rebuild**

4. **Test on one iPad before declaring fixed**

## Support Contacts

- **App issues**: Cherrelle Tucker (project coordinator)
- **GitHub access**: CTuckerSolutions org admin
- **iPad hardware**: [Your IT support contact]
- **Tour scheduling**: [Tour POC from agenda]

## Appendix: Guest Account Credentials

**Location**: [Document where credentials are stored]  
**Format**:
```
GitHub Username: [guest-account-username]
Password: [stored in password manager / secure location]
2FA backup codes: [if enabled, stored separately]
```

**Access audit**: Review who has accessed these credentials quarterly.
