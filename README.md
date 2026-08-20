# MSFC Test Lab Tour App

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Private-orange)](https://ctuckersolutions.github.io/TestLabTourApp) [![Internal Use Only](https://img.shields.io/badge/Use-Internal%20Only-red)]()

A self-guided Progressive Web App (PWA) for exploring NASA Marshall Space Flight Center's Test Laboratory facilities. **Internal training and visitor resource only** — designed for iPad deployment on internal WiFi with offline capability.

> **⚠️ Access Restricted**: This app is hosted on a private GitHub Enterprise repository. The live site is accessible only to invited collaborators who authenticate via GitHub. It is not publicly accessible and is intended solely for internal NASA Marshall Test Laboratory tours and training.

## Overview

The MSFC Test Lab Tour App provides visitors with an immersive, self-paced exploration of NASA Marshall's world-class test facilities — where hardware bound for the Moon and Mars is pushed to its limits. The app features:

- **18 tour stops** across multiple test laboratories
- **Rich multimedia content** — photos, videos, narration, technical specs
- **Curated tours** for different audience types and time constraints
- **Offline-first design** for reliable operation without internet dependency
- **Progressive Web App** that installs on iPads as a native-like experience

## Key Features

### Content Structure
- **Multi-tab navigation per stop**: About, Science, History, People & Projects, Specs, More Info
- **Interactive quizzes** to test understanding of key concepts
- **Historical context** with photo galleries and institutional memory
- **Technical specifications** for engineering-minded visitors
- **Contact CTAs** on every stop to facilitate collaboration

### User Experience
- **Search & filter** by building, test capability, or curated tour
- **Light/dark theme** with persistent preference
- **Responsive design** optimized for iPad portrait orientation
- **Accessibility features** including skip links, ARIA labels, semantic HTML
- **Deep linking** via QR codes for direct navigation to specific stops

### Technical Capabilities
- **Offline operation** via service worker caching
- **Installable** as standalone app on iOS/Android
- **Fast performance** with local asset caching
- **View transitions** for smooth navigation (where supported)

## Project Structure

```
tourapp-GitHubhosted/
├── index.html              # Main app shell
├── manifest.json           # PWA manifest for installation
├── service-worker.js       # Offline caching strategy
├── css/                    # Stylesheets
│   ├── variables.css       # Design tokens
│   ├── base.css           # Global styles
│   ├── components.css     # Reusable components
│   ├── tabs.css           # Tab navigation
│   ├── search.css         # Search & filters
│   └── lab-cards.css      # Lab category cards
├── js/                     # JavaScript modules
│   ├── app.js             # View switching & routing
│   ├── render.js          # Dynamic content rendering
│   ├── render-tabs.js     # Stop detail tabs
│   ├── search.js          # Search functionality
│   ├── beats.js           # Tab state management
│   └── narration.js       # Audio playback
├── data/                   # Content data
│   ├── stops.js           # Tour stop definitions
│   └── tours.js           # Curated tour configurations
├── media/                  # Images, videos, audio
│   └── [stop-specific folders]
├── OnePagers/              # PDF fact sheets per facility
└── content/                # Markdown source content
```

## Tech Stack

- **Frontend**: Vanilla JavaScript (ES5+ compatible for broad device support)
- **Styling**: CSS custom properties, flexbox, grid
- **Hosting**: GitHub Pages with private repository access control
- **PWA**: Service Worker API, Web App Manifest
- **Media**: Images (JPEG/PNG), MP4 video, MP3/TTS audio

## Deployment & Access Control

### Private Hosting Model

This app uses **GitHub Enterprise Cloud** with **private GitHub Pages** to ensure the content is accessible only to authorized users:

| Feature | Configuration | Purpose |
|---------|---------------|---------|
| **Repository** | Private repository in `CTuckerSolutions` organization | Source code and content not publicly visible |
| **GitHub Pages** | Private visibility enabled (Enterprise feature) | Live site requires GitHub authentication |
| **Access Control** | Invite-only via repository collaborators | Only users with Read access can view the site |
| **Authentication** | GitHub login required to view site | URL is shielded from public; no anonymous access |

**Live URL**: `https://ctuckersolutions.github.io/TestLabTourApp`  
**Access**: Authentication required — visitors must log in with a GitHub account that has been granted Read access to the repository

### Why Private Hosting?

1. **Internal use only**: This is a training and visitor resource for on-site NASA Marshall tours, not a public-facing application
2. **Content control**: Photos, technical details, and facility information are cleared for guided tours but not for unrestricted public distribution
3. **Change management**: Updates can be tested and validated before deployment without public visibility
4. **Operational security**: Facility details, building numbers, and technical capabilities are contextual to guided tours with NASA personnel present

### Who Has Access?

- **Repository contributors**: NASA Marshall Test Laboratory staff with write access (can edit content)
- **Collaborators**: Invited users with Read access (can view the live site)
- **TestLabTours account**: Shared read-only account used by all tour iPads (see [SETUP.md](./SETUP.md))

**To request access**: Contact the project coordinator (see Contact section below)

### iPad Deployment Model

The app is deployed to **10 iPads in rotation** across the Test Laboratory:

1. All iPads logged into a **shared GitHub account** (`TestLabTours`) with read-only access
2. Visitors browse the app in Safari — no individual login required
3. **Offline-capable** after first load via service worker caching
4. Updates push automatically when developers commit to `main` branch
5. iPads connect to **NASA Guest WiFi** (internal network only)

See [SETUP.md](./SETUP.md) for detailed iPad configuration and credential management.

## Development

### Adding New Tour Stops
See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed instructions on adding content.

Quick overview:
1. Add stop definition to `data/stops.js`
2. Add media assets to `media/[stop-name]/`
3. Test locally by opening `index.html` in a browser
4. Commit and push to deploy

### Local Development
```bash
# Clone the repo
git clone https://github.com/CTuckerSolutions/TestLabTourApp.git
cd TestLabTourApp

# Open in browser (service worker requires localhost or HTTPS)
python -m http.server 8080
# or
npx serve
```

Then navigate to `http://localhost:8080`

### Making Changes
```bash
# Create a branch for your changes
git checkout -b feature/your-feature-name

# Make edits, test locally

# Commit and push
git add .
git commit -m "Description of changes"
git push org feature/your-feature-name

# Create PR for review
```

## Browser Support

- **iOS Safari 14+** (primary target)
- **Chrome/Edge 90+** (desktop testing)
- **Firefox 88+** (graceful degradation)

Progressive enhancement approach: core functionality works everywhere, enhanced features (view transitions, service worker) activate where supported.

## Content Sources

- **Photos**: Cleared assets from images.nasa.gov (credit: NASA/Charles Beason)
- **Video**: NASA Marshall official YouTube channel
- **Narration**: Text-to-speech placeholders (production will use recorded voice talent)
- **Technical specs**: Test Laboratory Compendium (internal reference)

## Usage Restrictions & License

**⚠️ INTERNAL USE ONLY**

This application and its content are restricted to:
- On-site guided tours at NASA Marshall Space Flight Center
- Internal training for Test Laboratory personnel
- Authorized facility visits coordinated through Test Laboratory staff

**Not authorized for**:
- Public distribution or sharing outside NASA Marshall
- Reproduction or republishing of content without permission
- Use on non-authorized devices or networks
- Access by individuals without appropriate clearance/escort

**Content**: Photos and videos are cleared NASA assets subject to NASA media usage guidelines. Technical specifications and facility details are contextual to guided tours with NASA personnel present.

**Hosting**: Private GitHub Enterprise repository — unauthorized access attempts are logged and may be investigated.

## Contact

**Project Coordinator**: Cherrelle Tucker  
**Organization**: NASA Marshall Space Flight Center, Test Laboratory

For questions about the tour content or to request a facility visit, use the "Work with the Test Lab" contact form in the app.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history and recent updates.
