# Tour Guide Quick Start - Integration Instructions

## Files Created

1. **css/quickstart-modal.css** - Modal styles
2. **js/quickstart.js** - Modal behavior and logic
3. **tour-guide-quickstart.html** - Standalone preview/mockup

## Integration Steps

### 1. Add CSS to index.html

In the `<head>` section, after the existing stylesheet links (around line 21):

```html
<link rel="stylesheet" href="css/quickstart-modal.css">
```

### 2. Add JavaScript to index.html

Before the closing `</body>` tag, after existing scripts:

```html
<script src="js/quickstart.js"></script>
```

### 3. Add Button to Header

In the `<header class="appbar">` section (around line 29), replace:

```html
  <header class="appbar">
    <div class="badge" aria-hidden="true"><img src="media/shared/img/Test-Lab-logo.png" alt="Test Lab"></div>
    <div class="spacer"></div>
    <button class="barbtn" id="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode">🌙</button>
  </header>
```

With:

```html
  <header class="appbar">
    <div class="badge" aria-hidden="true"><img src="media/shared/img/Test-Lab-logo.png" alt="Test Lab"></div>
    <div class="spacer"></div>
    <button class="tour-guide-btn" id="tour-guide-help-btn" aria-label="Tour Guide Help">
      <span>🎯</span> Tour Guide Help
    </button>
    <button class="barbtn" id="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode">🌙</button>
  </header>
```

### 4. Add Modal HTML

Add this modal HTML right after the opening `<body>` tag (around line 23), before the `<div class="shell">`:

```html
<!-- Tour Guide Quick Start Modal -->
<div class="quickstart-modal" id="quickstart-modal">
  <div class="quickstart-content">
    <button class="quickstart-close" onclick="closeQuickStart()" aria-label="Close">×</button>

    <div class="quickstart-header">
      <div class="quickstart-icon">🎯</div>
      <div>
        <h1 class="quickstart-title">Tour Guide Quick Start</h1>
        <p class="quickstart-subtitle">Anyone can lead an engaging Test Lab tour with this app</p>
      </div>
    </div>

    <!-- How to Use This App -->
    <div class="quickstart-section">
      <h3><span>📱</span> How to Use This App</h3>
      <ol class="quickstart-steps">
        <li><strong>Choose Your Stop:</strong> Tap "Start the tour" or browse by Test Lab to find the facility you're showing.</li>
        <li><strong>Read the "About" Tab:</strong> This is your script. The hook, narration, and "Why It Matters" sections give you everything to introduce the facility.</li>
        <li><strong>Navigate Through Tabs:</strong> Science, History, People & Projects, Specs, and More Info provide depth for follow-up questions.</li>
        <li><strong>Use "Ask Your Host" Questions:</strong> Pre-written questions visitors might ask — great for anticipating what to prepare.</li>
        <li><strong>Share the Quiz:</strong> Interactive quiz questions engage visitors and reinforce key facts.</li>
      </ol>
    </div>

    <!-- What's in Each Stop -->
    <div class="quickstart-section">
      <h3><span>📚</span> What's in Each Stop</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <strong>About</strong>
          <p>Hook line, narration, why it matters — your opening script</p>
        </div>
        <div class="feature-card">
          <strong>Science</strong>
          <p>How it works, technical capabilities, deep dive content</p>
        </div>
        <div class="feature-card">
          <strong>History</strong>
          <p>Timeline, major milestones, historic achievements</p>
        </div>
        <div class="feature-card">
          <strong>People & Projects</strong>
          <p>Programs, hardware tested, business units supported</p>
        </div>
        <div class="feature-card">
          <strong>Specs</strong>
          <p>"By the numbers" key facts and technical specifications</p>
        </div>
        <div class="feature-card">
          <strong>More Info</strong>
          <p>Related stops, contact info, one-pagers, work with us</p>
        </div>
      </div>
    </div>

    <!-- Tips for Great Tours -->
    <div class="quickstart-section">
      <h3><span>⭐</span> Tips for Great Tours</h3>
      <div class="quickstart-tips">
        <p><strong>Start with the hook:</strong> Each stop has an opening line designed to grab attention. Use it verbatim or as inspiration.</p>
        <p><strong>Read ahead:</strong> Scan the "About" and "Science" tabs before visitors arrive so you know the key points.</p>
        <p><strong>Point out the "Look For" callout:</strong> These highlight specific visual details visitors should notice.</p>
        <p><strong>Have the quiz ready:</strong> Great for groups — ask it aloud and let people discuss before revealing the answer.</p>
        <p><strong>Don't memorize everything:</strong> It's okay to glance at the app mid-tour. Visitors appreciate you checking facts over guessing.</p>
        <p><strong>Use "Ask Your Host" as prep:</strong> These questions help you think through what visitors might ask — but you're not expected to know every answer off the top of your head.</p>
      </div>
    </div>

    <!-- You Don't Need to Be an Expert -->
    <div class="quickstart-section">
      <h3><span>💡</span> You Don't Need to Be an Expert</h3>
      <p>This app was built so <strong>any Test Lab representative</strong> can pick it up and lead a professional tour — no prior facility knowledge required. The content is verified, the structure is consistent, and every stop gives you a script to follow.</p>
      <p><strong>If you don't know the answer to a question:</strong> It's perfectly fine to say "I'm not sure, but I can find out" and note it down. Visitors appreciate honesty over guessing.</p>
      <p><strong>Offline mode:</strong> This app works without WiFi once it's loaded, so you can use it anywhere on campus.</p>
    </div>

    <!-- Actions -->
    <div class="quickstart-actions">
      <button class="btn secondary" onclick="closeQuickStart()">Got it, let's go</button>
      <button class="btn red" onclick="closeQuickStart(); show('map')">Browse Tour Stops →</button>
    </div>

    <!-- Don't show again -->
    <div class="checkbox-row">
      <input type="checkbox" id="dont-show-again" onchange="toggleDontShowAgain(this.checked)">
      <label for="dont-show-again">Don't show this again</label>
    </div>
  </div>
</div>
```

## How It Works

**Automatic Display:**
- Shows automatically on first visit (stored in localStorage)
- Won't show again if user checks "Don't show this again"

**Manual Access:**
- Click "Tour Guide Help" button in header anytime
- Accessible via keyboard (Escape key closes modal)

**Mobile Responsive:**
- Button text hides on mobile, shows only icon
- Modal adapts to small screens
- Feature grid stacks vertically on narrow viewports

## Preview

To preview the standalone mockup:
- Open `tour-guide-quickstart.html` in a browser

## Testing

After integration:
1. Clear localStorage and reload to see first-visit behavior
2. Click "Tour Guide Help" button to manually open
3. Check "Don't show again" and reload to verify it stays hidden
4. Test on mobile viewport
5. Test keyboard navigation (Escape key, Tab through buttons)
