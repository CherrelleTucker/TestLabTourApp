# iPad Setup & Deployment Guide

Complete instructions for deploying the MSFC Test Lab Tour App to iPads for visitor use.

## Overview

The MSFC Test Lab Tour App is an **internal-only training and visitor resource** hosted on private GitHub Enterprise infrastructure. The app runs as a **private GitHub Pages site** accessible only to authenticated users — the URL is shielded from the public and requires GitHub login to access.

iPads are pre-authenticated with a **shared read-only GitHub account** (`TestLabTours`) so visitors can browse the app during on-site tours without needing individual GitHub accounts. This controlled-access model ensures:

- Content is visible only to authorized personnel and escorted visitors
- Technical facility details remain contextual to guided tours
- Updates can be validated before deployment
- Access can be audited via GitHub's built-in logging

**This is not a public-facing application.** It is designed exclusively for on-site NASA Marshall Test Laboratory tours and internal training.

## Prerequisites

- [ ] GitHub Enterprise Cloud organization (`CTuckerSolutions`)
- [ ] Private repository with Pages enabled (`TestLabTourApp`)
- [ ] Test Lab Apple ID account (for device management)
- [ ] TestLabTours GitHub account (for app access)
- [ ] 10 iPads (iOS 14+ recommended) with Safari
- [ ] NASA Guest WiFi access

## Accounts Summary

This deployment requires **three distinct accounts** working together:

| Account | Purpose | Who Uses It | Where It's Used |
|---------|---------|-------------|-----------------|
| **Test Lab Apple ID** | Device unlock & management | Tour guides (setup only) | iPad Settings → Sign in |
| **TestLabTours GitHub** | App authentication | All 10 iPads (pre-configured) | Safari → github.com |
| **NASA Guest WiFi** | Network connectivity | All devices | iPad Settings → Wi-Fi |

### Account Relationships

```
┌─────────────────────────────────────────────────────────────────┐
│                        DEPLOYMENT OVERVIEW                       │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┐
│  Tour Guide      │  Unlocks iPad with Test Lab Apple ID
│  (Setup Phase)   │  password: MSFCet01
└────────┬─────────┘
         │
         ↓
┌──────────────────────────────────────────────────────────────────┐
│  iPad (10 devices)                                               │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  iOS Settings                                              │  │
│  │  • Signed in with: Test Lab Apple ID                      │  │
│  │  • Connected to: NASA Guest WiFi                          │  │
│  └────────────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  Safari Browser                                            │  │
│  │  • Logged into GitHub as: TestLabTours                    │  │
│  │  • Session stays active (cookies persist)                 │  │
│  └────────────────────────────────────────────────────────────┘  │
└───────────────────────────────┬──────────────────────────────────┘
                                │
                                │ HTTPS request over NASA Guest WiFi
                                ↓
┌──────────────────────────────────────────────────────────────────┐
│  GitHub Enterprise Cloud                                         │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  CTuckerSolutions Organization                             │  │
│  │  └─ TestLabTourApp Repository (Private)                    │  │
│  │     • TestLabTours has Read access                         │  │
│  │     • GitHub checks authentication                         │  │
│  └────────────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  GitHub Pages (Private)                                    │  │
│  │  • URL: ctuckersolutions.github.io/TestLabTourApp          │  │
│  │  • Serves HTML, CSS, JS, images, audio                    │  │
│  │  • Only accessible to authenticated users                 │  │
│  └────────────────────────────────────────────────────────────┘  │
└───────────────────────────────┬──────────────────────────────────┘
                                │
                                │ App content delivered
                                ↓
┌──────────────────────────────────────────────────────────────────┐
│  Visitor Experience                                              │
│  • Opens "Test Lab Tour" icon from iPad home screen              │
│  • No login required (iPad already authenticated)                │
│  • Browses tour stops, watches videos, takes quizzes             │
│  • App works offline after first load (service worker caching)  │
└──────────────────────────────────────────────────────────────────┘
```

### Data Flow

1. **Initial Setup** (one-time per iPad):
   - Tour guide unlocks iPad → Test Lab Apple ID
   - iPad connects → NASA Guest WiFi
   - Safari logs into → GitHub (TestLabTours account)
   - Safari navigates to → GitHub Pages URL
   - App loads and caches → Service Worker stores assets locally

2. **Visitor Use** (every tour):
   - Visitor taps app icon → Safari opens pre-authenticated session
   - If online → Fresh content from GitHub Pages
   - If offline → Cached content from Service Worker
   - No visitor login required (iPad session persists)

3. **Content Updates** (developer workflow):
   - Developer commits to `main` branch → GitHub Pages rebuilds (2-3 min)
   - Next time iPad loads app → Fetches updated content
   - Service Worker caches new version → Works offline

## Actual Hardware Configuration

### Apple ID Account (Device Management)
**Name**: Test Lab  
**Date of Birth**: 1/1/1960  
**Email**: testlabtours@gmail.com  
**Password**: `MSFCet01`

**Purpose**: This Apple ID is used to unlock and sign in to all iPads. It provides device management and iCloud services. The Gmail account also serves as the tour scheduling calendar — see Tour Calendar Setup below.

### GitHub Account (App Access)
**Username**: `TestLabTours`  
**Password**: `GettinNASA26`  
**Organization**: CTuckerSolutions  
**Repository Access**: Read-only to `TestLabTourApp`

**Purpose**: This GitHub account authenticates iPads to view the private GitHub Pages site. Visitors never see this login — iPads stay signed in.

### Network Access
**WiFi Network**: NASA Guest  
**Authentication**: *(document any required credentials or portal login)*

**Purpose**: iPads must connect to NASA Guest WiFi to reach GitHub Pages. After first load, app works offline via service worker caching.

### Security Note
- Apple ID: Controls device access, should be known only to tour guides
- GitHub account: Read-only access to one private repo, no write permissions
- Credentials documented here for operational continuity (not visitor-facing)

### Quick Reference Card (Tour Guides)

Print and keep with iPads:

```
┌─────────────────────────────────────────────────────────────┐
│           MSFC TEST LAB TOUR APP — QUICK REFERENCE          │
├─────────────────────────────────────────────────────────────┤
│  ACCOUNTS NEEDED                                            │
│  ──────────────────────────────────────────────────────────│
│  ① iPad Unlock:                                            │
│     Apple ID: Test Lab                                      │
│     Email: testlabtours@gmail.com                          │
│     Password: MSFCet01                                      │
│                                                             │
│  ② WiFi:                                                    │
│     Network: NASA Guest                                     │
│                                                             │
│  ③ App Access:                                             │
│     GitHub: TestLabTours                                    │
│     Password: GettinNASA26                                  │
│     (Usually stays logged in)                              │
│  ──────────────────────────────────────────────────────────│
│  TOUR CALENDAR                                              │
│  • Schedule tours in Google Calendar: testlabtours@gmail.com│
│  • Calendar syncs to all iPads via iCloud automatically    │
│  • Calendar widget on home screen shows upcoming tours     │
│  ──────────────────────────────────────────────────────────│
│  VISITOR INSTRUCTIONS                                       │
│  • Tap "Test Lab Tour" icon on home screen                 │
│  • Browse, watch videos, take quizzes                      │
│  • No login needed (already authenticated)                 │
│  • Works offline after first visit                         │
│  • Return iPad to tour guide desk when finished            │
│  ──────────────────────────────────────────────────────────│
│  TROUBLESHOOTING                                            │
│  Problem: "Sign in to GitHub" prompt                       │
│  Fix: Enter TestLabTours / GettinNASA26                    │
│                                                             │
│  Problem: Content not loading                              │
│  Fix: Check NASA Guest WiFi connection                     │
│                                                             │
│  Problem: App frozen                                        │
│  Fix: Force-quit Safari, reopen app                        │
│                                                             │
│  Problem: Calendar not updating                            │
│  Fix: Check WiFi, wait 15min for iCloud sync               │
└─────────────────────────────────────────────────────────────┘
```

## One-Time Setup

### 1. Apple ID Setup (Already Complete)

The Test Lab Apple ID is already configured. For reference, the account was created with:
- Name: Test Lab
- DOB: 1/1/1960
- Email: *(document actual email)*
- Password: `MSFCet01`

All 10 iPads should be signed into this Apple ID under Settings → [Your Name].

### 2. Enable Private GitHub Pages (Already Complete)

The `TestLabTourApp` repository is configured with **private GitHub Pages** (a GitHub Enterprise Cloud feature):

```
Settings → Pages → Build and deployment
  Source: Deploy from a branch
  Branch: main / (root)
  
Settings → Pages → GitHub Pages visibility
  Visibility: Private ✓
  ✓ Only people with access to this repository can view this site
```

**What this means**:
- The repository is **private** (source code not publicly visible)
- GitHub Pages is set to **private visibility** (requires authentication to view)
- Anyone attempting to access the URL without a GitHub account with repository access is blocked
- GitHub login prompt appears for unauthenticated visitors
- Access is logged by GitHub for audit purposes

**Pages URL**: `https://ctuckersolutions.github.io/TestLabTourApp`  
**Access required**: GitHub account with Read permission to `CTuckerSolutions/TestLabTourApp`

**Enterprise requirement**: Private GitHub Pages is only available with GitHub Enterprise Cloud ($21/month organization subscription). Without Enterprise, GitHub Pages sites are always public even if the repository is private.

### 3. Managing Repository Access

To grant or revoke access to the app, manage repository collaborators:

**To add access** (e.g., new tour guide, temporary collaborator):
```
Repository Settings → Collaborators and teams
  → Add people
  Enter GitHub username or email
  Role: Read (view-only access to app)
  Send invitation
```

**To remove access** (e.g., person no longer needs access):
```
Repository Settings → Collaborators and teams
  Find person in list
  Click [...] → Remove
```

**Access audit**:
```
Repository → Insights → Traffic
  View visitor count and referring sites
  
Organization → Settings → Audit log
  Filter by TestLabTourApp repository
  Review access events
```

**Best practices**:
- Grant **Read** access only (never Write unless they edit content)
- Use personal GitHub accounts for staff, shared account (`TestLabTours`) for iPads only
- Review collaborator list quarterly and remove inactive users
- Document reason for access in a separate tracking sheet (who, why, when added)

### 4. Test Authentication

1. Open an incognito/private browser window
2. Navigate to the Pages URL
3. Verify GitHub login prompt appears
4. Log in with TestLabTours credentials
5. Verify site loads correctly
6. Confirm all media/assets load (check browser console for 404s)

## iPad Configuration

Repeat for each of the 10 iPads:

### Step 1: Verify Apple ID Login
```
Settings → [Your Name at top]
  Verify signed in as "Test Lab"
  
If not signed in:
  Settings → Sign in to your iPad
  Apple ID: [Test Lab email]
  Password: MSFCet01
  Complete 2FA if prompted
```

### Step 2: Connect to NASA Guest WiFi
```
Settings → Wi-Fi
  Select: NASA Guest
  Enter credentials if prompted
  Verify internet access (open Safari, test any website)
```

### Step 3: Update iOS (if needed)
```
Settings → General → Software Update
  Install iOS 14 or later if available
```

### Step 4: Configure Safari
```
Settings → Safari
  ✓ Enable JavaScript
  ✓ Block Pop-ups: OFF (for potential lightbox features)
  ✓ Prevent Cross-Site Tracking: OFF (for GitHub auth to persist)
  ✓ Block All Cookies: OFF
```

### Step 5: Log Into GitHub
```
1. Open Safari
2. Navigate to https://github.com/login
3. Enter credentials:
   Username: TestLabTours
   Password: GettinNASA26
4. Complete 2FA if enabled (save device as trusted)
5. Verify "Signed in as TestLabTours" in top-right
```

### Step 6: Install as PWA
```
1. Navigate to https://ctuckersolutions.github.io/TestLabTourApp
2. Wait for site to fully load
3. Tap Share button (square with arrow)
4. Scroll down → select "Add to Home Screen"
5. Edit name if desired (default: "Test Lab Tour")
6. Tap "Add"
7. Verify app icon appears on home screen
```

### Step 7: Configure for Kiosk Use
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

### Step 8: Test Offline Capability
```
1. Open the app (from home screen icon or Safari)
2. Browse 2-3 tour stops (ensures caching happens)
3. Enable Airplane Mode
4. Force-quit Safari (swipe up from app switcher)
5. Re-open Tour App
6. Verify all visited stops load correctly offline
7. Disable Airplane Mode
```

### Step 9: Set Homepage (Optional)
```
Settings → Safari → Homepage
  Enter: https://ctuckersolutions.github.io/TestLabTourApp
  
Now Safari opens directly to tour app on launch
```

### Step 10: Add Tour Calendar Widget
```
1. From home screen, long-press empty space until apps jiggle
2. Tap + button (top-left corner)
3. Search for "Calendar" widget
4. Select widget size (Medium or Large recommended)
5. Tap "Add Widget"
6. Position widget on home screen near Tour App icon
7. Tap "Done"

The widget will display upcoming events from the testlabtours@gmail.com calendar,
which syncs automatically via iCloud to the Test Lab Apple ID.
```

**Tour Calendar Setup**:
- Tours are scheduled in **Google Calendar** at testlabtours@gmail.com
- The Gmail account is synced to the **Test Lab Apple ID**
- Calendar events automatically sync to all 10 iPads via iCloud
- The iOS Calendar widget displays upcoming tours without opening the app
- Visitors can see tour schedule at a glance on iPad home screen

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
• iPad unlock: Test Lab Apple ID / password: MSFCet01
• GitHub login: TestLabTours / password: GettinNASA26
• To factory reset: Settings → General → Reset → 
  Erase All Content and Settings (NOT recommended)

TROUBLESHOOTING:
• "Sign in to GitHub" prompt appears
  → Session expired, re-enter: TestLabTours / GettinNASA26
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
- [ ] Update tour schedule in testlabtours@gmail.com Google Calendar (syncs automatically to iPads)

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

## Security & Compliance

### Access Control Model

**Three-layer security**:
1. **Private repository**: Source code and content not publicly visible on GitHub
2. **Private Pages**: Live site requires GitHub authentication (Enterprise Cloud feature)
3. **Invite-only collaborators**: Only explicitly granted accounts can access

**What this protects**:
- Technical facility details and specifications
- Building layouts and equipment configurations  
- Photos and videos cleared for guided tours (not unrestricted public use)
- Internal operational procedures and contacts

### Audit & Compliance

**Access logging**:
- GitHub automatically logs all repository access attempts
- Audit log available: Organization → Settings → Audit log
- Filter by `TestLabTourApp` repository to review access events
- Logs retained per GitHub Enterprise retention policy

**Quarterly review checklist**:
- [ ] Review collaborator list, remove inactive users
- [ ] Audit access logs for unusual activity
- [ ] Verify TestLabTours account credentials still valid
- [ ] Confirm all 10 iPads still authenticated
- [ ] Check for unauthorized access attempts (GitHub will show failed logins)

### Incident Response

**If credentials are compromised**:
1. Immediately change TestLabTours GitHub password
2. Sign out all iPads and re-authenticate with new password
3. Review GitHub audit log for unauthorized access
4. Notify project coordinator and IT security

**If unauthorized access detected**:
1. Remove compromised collaborator from repository immediately
2. Review what they accessed (GitHub shows page views, downloads)
3. Consider rotating TestLabTours credentials as precaution
4. Document incident for records

### Content Sensitivity

**Classification**: Unclassified but internal-use only  
**Export control**: Not subject to ITAR/EAR (contains no controlled technical data)  
**Media clearance**: All photos/videos are NASA public release assets (images.nasa.gov)  
**Use restriction**: Content is contextual to on-site guided tours with NASA personnel present

**Not authorized for**:
- Public redistribution or posting to social media
- Use by individuals without NASA escort or clearance
- Reproduction in external presentations without permission

## Request Information Setup

The app includes a feature that allows visitors to request Test Lab capability documents (one-pagers/PDFs). When a visitor submits a request, a GitHub Issue is automatically created and an email notification is sent to `cherrelle.j.tucker@nasa.gov`.

### First-Time Configuration

This feature requires one-time setup before it will work in production.

#### Step 1: Create GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Configure the token:
   - **Note**: `TestLabTourApp Workflow Trigger`
   - **Expiration**: 90 days (or 1 year, but set calendar reminder to renew)
   - **Scopes**: Check `repo` (includes all sub-scopes)
     - For private repositories: `repo` is required
     - For public repositories: `public_repo` is sufficient
4. Click **"Generate token"**
5. **Copy the token immediately** (you won't see it again)
   - Token format: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

#### Step 2: Add Token to Application

1. Open file: `js/request-info.js`
2. Find line 11: `const GITHUB_TOKEN = 'REPLACE_WITH_YOUR_TOKEN';`
3. Replace `'REPLACE_WITH_YOUR_TOKEN'` with your actual token:
   ```javascript
   const GITHUB_TOKEN = 'ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
   ```
4. Save, commit, and push:
   ```bash
   git add js/request-info.js
   git commit -m "Configure GitHub token for Request Information feature"
   git push org main
   ```

**Security Note**: The token is visible in the JavaScript source code. This is acceptable because:
- Repository is private (source not publicly visible)
- Token only has permission to trigger workflows (narrow scope)
- No sensitive operations can be performed with this token
- Token can be regenerated if compromised

#### Step 3: Configure Receiving Email for Notifications

1. Go to: https://github.com/settings/emails
2. Check if `cherrelle.j.tucker@nasa.gov` is listed as a verified email
3. If not:
   - Click **"Add email address"**
   - Enter: `cherrelle.j.tucker@nasa.gov`
   - Click **"Add"**
   - Check your NASA email inbox for verification email from GitHub
   - Click the verification link
4. Go to: https://github.com/settings/notifications
5. Under **"Default notifications email"**:
   - Select: `cherrelle.j.tucker@nasa.gov`
6. Under **"Participating, @mentions and custom"**:
   - Check: ✓ **Email**
7. Under **"Watching"**:
   - Check: ✓ **Email**
8. Scroll down and click **"Save"**

#### Step 4: Watch the Repository for Issues

1. Go to: https://github.com/CTuckerSolutions/TestLabTourApp
2. Click **"Watch"** button (top-right, next to Star)
3. Select **"Custom"**
4. Check: ✓ **Issues** (uncheck others if you only want issue notifications)
5. Click **"Apply"**

#### Step 5: Add Issue Label

1. Stay on: https://github.com/CTuckerSolutions/TestLabTourApp
2. Click **"Issues"** tab
3. Click **"Labels"** button (next to Milestones)
4. Click **"New label"**
5. Configure label:
   - **Name**: `information-request`
   - **Description**: `Visitor requested Test Lab capability documents`
   - **Color**: `#d93f0b` (orange) or `#fbca04` (yellow)
6. Click **"Create label"**

#### Step 6: Test the Feature

1. Open the tour app: https://ctuckersolutions.github.io/TestLabTourApp
2. Navigate to **Contact** page
3. Click **"Request Information"** button
4. Fill out the test form:
   - **Name**: Test User
   - **Email**: cherrelle.j.tucker@nasa.gov
   - **Organization/Role**: NASA MSFC / Test
   - **Select 1-2 PDFs** (e.g., Test Lab Overview, Propulsion Test Lab)
   - **Comments**: Testing information request feature
5. Click **"Submit Request"**
6. Verify success message appears

Within 1-2 minutes, verify:
- **GitHub Actions**: Go to repo → Actions tab → Should see "Process Information Request" workflow running/completed
- **GitHub Issues**: Go to repo → Issues tab → Should see new issue with title "Information Request: Test User (NASA MSFC / Test)"
- **Email**: Check `cherrelle.j.tucker@nasa.gov` inbox → Should receive GitHub issue notification

If any step fails, see Troubleshooting section below.

### Fulfilling Information Requests

When a visitor submits a request, you will receive an email notification from GitHub. Here's the workflow:

#### Step 1: Receive Notification
- Email from: `notifications@github.com`
- Subject: `[CTuckerSolutions/TestLabTourApp] Information Request: [Name] ([Organization]) #[issue number]`
- Body contains: Name, Email, Organization, List of requested PDFs, Comments

#### Step 2: Gather PDFs
1. Open the GitHub issue (click link in email or go to Issues tab)
2. Note which PDFs were requested (checklist format)
3. Navigate to `OnePagers/` directory in the repository
4. Download the requested PDF files to your computer
   - Option A: GitHub web interface → Navigate to file → Click "Download"
   - Option B: Clone/pull repo locally → Copy files from `OnePagers/` folder

#### Step 3: Send to Requester
1. Compose email to requester's address (listed in issue)
2. Subject: `MSFC Test Lab Information Request`
3. Attach requested PDF files
4. Example body:
   ```
   Hello [Name],

   Thank you for your interest in NASA Marshall Space Flight Center's Test Laboratory capabilities.

   Attached are the capability documents you requested:
   - [List PDFs attached]

   If you have any questions or would like to discuss testing opportunities, please feel free to reply to this email.

   Best regards,
   Cherrelle Tucker
   Project Coordinator
   NASA Marshall Test Laboratory
   ```
5. Send email

#### Step 4: Close Issue
1. Return to GitHub issue
2. Check off the boxes for PDFs you sent: `- [x] Test Lab Overview`
3. Add comment: "Materials sent to requester on [date]"
4. Click **"Close issue"** button

### Troubleshooting Request Information Feature

#### Issue: Form submits but no GitHub Issue created

**Possible causes:**
- GitHub token not configured or invalid
- Token expired (need to regenerate)
- GitHub Actions workflow file missing or broken
- Network connectivity issue

**Debugging steps:**
1. Check GitHub Actions tab → Look for failed workflow runs
2. Click failed run → View error logs
3. Verify token in `js/request-info.js` is correct (not placeholder text)
4. Check token expiration: GitHub Settings → Tokens → Check expiration date
5. Verify workflow file exists: `.github/workflows/information-request.yml`

#### Issue: GitHub Issue created but no email received

**Possible causes:**
- Email not verified on GitHub account
- Notifications not enabled
- Repository not being watched
- Email caught in spam filter

**Resolution:**
1. Verify email: GitHub Settings → Emails → Check for verification status
2. Check notification settings: GitHub Settings → Notifications → Ensure "Email" checked
3. Check repository watch: Repo page → Watch → Ensure "Issues" is checked
4. Check spam folder in `cherrelle.j.tucker@nasa.gov` inbox
5. Check GitHub notification delivery: GitHub Settings → Notifications → "Notification delivery" section

#### Issue: Visitor sees "GitHub token not configured" error

**Cause**: Token in `js/request-info.js` is still set to placeholder value

**Resolution:**
1. Open `js/request-info.js`
2. Verify line 11 has actual token (starts with `ghp_`)
3. If still placeholder, follow Step 2 above to add real token
4. Commit and push changes

#### Issue: Form validation errors

**Cause**: Required fields not filled out

**Resolution**: User must provide:
- Name (required)
- Email (required, must be valid format)
- Organization/Role (required)
- At least one PDF selected (required)
- Comments are optional

### Token Rotation

GitHub Personal Access Tokens expire based on the expiration date you set. When the token is about to expire:

1. **3 days before expiration**: Set calendar reminder
2. **Generate new token**: Follow Step 1 above
3. **Update application**: Follow Step 2 above
4. **Test**: Follow Step 6 above
5. **Revoke old token**: GitHub Settings → Tokens → Click old token → "Delete"

**Best practice**: Set 90-day expiration and rotate quarterly, or 1-year expiration with annual rotation and calendar reminder.

## Support Contacts

- **App issues**: Cherrelle Tucker (project coordinator) - cherrelle.j.tucker@nasa.gov
- **GitHub access**: CTuckerSolutions org admin
- **iPad hardware**: [Your IT support contact]
- **Tour scheduling**: [Tour POC from agenda]
- **Information requests**: cherrelle.j.tucker@nasa.gov (receives all visitor requests)

## Appendix: Account Credentials Reference

### Apple ID (Device Management)
```
Name: Test Lab
Date of Birth: 1/1/1960
Email: [document actual email address]
Password: MSFCet01
```
**Purpose**: Unlock iPads, iCloud services, App Store access  
**Who needs this**: Tour guides, IT support

### GitHub Account (App Access)
```
Username: TestLabTours
Password: GettinNASA26
Organization: CTuckerSolutions
Repository: TestLabTourApp (Read-only access)
```
**Purpose**: Authenticate iPads to view private GitHub Pages site  
**Who needs this**: Tour guides (for re-authentication if sessions expire)

### WiFi Network
```
Network: NASA Guest
Credentials: [document if portal login required]
```
**Purpose**: Internet access for initial app load and updates  
**Note**: App works offline after first visit to each stop

---

**Security Considerations**:
- Apple ID: Change password annually or if compromised
- GitHub account: Read-only access limits damage from credential leak
- This document: Store in secure location accessible to tour operations staff
- Access audit: Review who has accessed these credentials quarterly

**Last Updated**: 2026-08-20
