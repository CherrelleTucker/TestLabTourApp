/*
  Single source of truth for every tour stop.
  Add a new facility by appending an object to this array — no HTML edits
  required. `id` must be unique; it's used for routing (#<id>), the QR
  generator (make_qr.py reads this same file), and directory order (array
  order = tour order, `nextStopId` drives the "Next stop" button).

  This is loaded as a plain <script> (not fetch()'d JSON) so it works when
  the tour is opened directly via file:// as well as from a local server —
  file:// blocks fetch() of local JSON in most browsers, but a <script> tag
  always works. The array below is still valid JSON on its own (everything
  between the outer [ ] ), so make_qr.py parses it with json.loads() after
  stripping the "window.STOPS = " wrapper — one file, two consumers, nothing
  to keep in sync by hand.
*/
window.STOPS = [
  {
    "id": "stop",
    "qrFile": "01-flat-floor",
    "title": "Flight Robotics Lab: \"Flat Floor\"",
    "shortTitle": "Flat Floor",
    "location": "Building 4619 · Contact Dynamics Simulation Lab",
    "locationShort": "Building 4619",
    "subtitle": "Contact Dynamics Simulation Lab · Building 4619",
    "lab": "Structural Dynamics",
    "tourTime": "~30 min",
    "groupSize": "Up to 20",
    "accessible": true,
    "chips": ["Lander Systems", "Adv. Space Transportation"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 49.5, "yPct": 48.1 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view centered on the Flight Robotics Lab / Flat Floor Facility, Building 4619, on the NASA Marshall campus.",
      "credit": "USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/flat-floor",
    "hero": {
      "src": "img/hero.jpg",
      "alt": "Inside the Flat Floor Facility at NASA Marshall, high-intensity lights set at a low angle cast long, hard shadows across the air-bearing floor to recreate the lighting of the Moon's South Pole.",
      "credit": "NASA/Charles Beason (2025) · Flat Floor Facility, Building 4619 · <b>images.nasa.gov</b> · cleared for public release"
    },
    "orientPhoto": {
      "src": "img/bg.jpg",
      "alt": "A wide view inside the Flat Floor Facility at NASA Marshall: a lunar lander mock-up rigged on the left, technicians on the fabric-covered air-bearing floor amid rock props, and the low-angle light rig recreating the Moon's South Pole sun on the right.",
      "credit": "NASA/Charles Beason (2025) · Flat Floor Facility, Building 4619 · <b>images.nasa.gov</b> · cleared for public release"
    },
    "callouts": [
      { "xPct": 27.0, "yPct": 38.0, "label": "Lunar lander mock-up on its test rig" },
      { "xPct": 84.0, "yPct": 36.0, "label": "Low-angle light rig recreating the lunar South Pole sun" },
      { "xPct": 60.0, "yPct": 68.0, "label": "Air-bearing floor, covered for a lunar-terrain test" },
      { "xPct": 44.0, "yPct": 56.0, "label": "Test engineers working the floor" }
    ],
    "thumb": "img/hero-alt.jpg",
    "heroBg": "img/bg.jpg",
    "factbox": "A 44 × 86&nbsp;ft air-bearing floor — the largest of its kind in the world — lets full-size hardware \"float\" to rehearse docking in near-zero gravity.",
    "narration": {
      "durationLabel": "~38 sec · produced narration",
      "audio": "audio/narration.mp3",
      "text": "Before two spacecraft ever meet in orbit, they meet here. You're standing at the Flat Floor — forty-four by eighty-six feet of precision air-bearing floor, the largest of its kind in the world. On it, full-size hardware floats on a cushion of air, free to drift the way it would in space. Now look up. Those low, harsh lights are recreating the Sun at the Moon's South Pole, where long shadows can hide the ground itself. This is where engineers and astronauts learn to dock, to land, and to handle the unforgiving light of the Moon — before it ever counts."
    },
    "hook": "Before two spacecraft ever meet in orbit, they meet here.",
    "cuePoints": { "hook": 0, "explainer": 4, "wowStat": 18, "media": 26, "why": 33 },
    "whyItMatters": "Before two spacecraft ever meet in orbit, they meet here. The Flat Floor recreates near-zero gravity in three axes so engineers can test how a vehicle behaves at the exact moment of docking or capture — when getting it wrong is not an option.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 1,
    "keyfacts": [
      { "num": "44×86", "label": "feet of air-bearing floor", "detail": "The largest precision air-bearing floor in the world" },
      { "num": "1/16,000", "label": "coefficient of friction", "detail": "How little resistance the air film leaves for a floating test article" },
      { "num": "6", "label": "degrees of freedom", "detail": "Full motion across a large operating space" },
      { "num": "20k", "label": "lb payload capability", "detail": "Full-scale hardware, not just models" },
      { "num": "160×40×23", "label": "ft manipulator work volume", "detail": "The overhead 8-DOF manipulator's full range of motion, from 1990s rendezvous-and-capture testing" }
    ],
    "deepDive": {
      "summary": "Go deeper: how it works",
      "open": true,
      "html": "A dynamic lighting simulator reproduces the motion and brightness of the sun — including the harsh, low-angle lighting of the Moon's South Pole — so Artemis III crews and hardware can train for conditions that can otherwise hide the ground itself. The same floor doubles as a test bed for a very different kind of present-day work: small, tethered &ldquo;space tug&rdquo; simulators that fly across the epoxy on air bearings to rehearse in-space servicing and assembly. In one recent demonstration, a tug simulator flew up to a floating weld platform, where two aluminum parts were clamped together and joined by a laser welder mounted on a robotic arm — a rehearsal for repairing and building hardware in orbit instead of only on the ground.<br><br>Long before Artemis, this room went by a different name: the Flight Robotics Laboratory. Through the 1980s and &lsquo;90s, an overhead 8-degree-of-freedom manipulator — with a working volume of 160 by 40 by 23 feet — flew simulated targets across the floor so engineers could test automatic rendezvous-and-capture algorithms for Space Shuttle and Space Station docking mechanisms, years before any of that hardware flew.<br><br>The epoxy floor itself dates to the late 1960s and has been re-poured and re-leveled several times since — the current surface is its fourth pour, precise enough that a test article the size of a small car can be nudged into motion by a light push and glide for minutes without noticeably slowing. Self-leveling epoxy floors like this one are genuinely hard to get flat enough for the job — even small dips or high spots are enough to send a floating test article drifting off course. Overhead, the DOTS gantry — Dynamic Overhead Target System — carries sensor payloads across the floor to simulate a target vehicle's approach from above, independent of whatever is floating below."
    },
    "detailImage": {
      "src": "img/detail-1.jpg",
      "alt": "A test engineer in low-fidelity gear stands in stark light and deep shadow on the Flat Floor, rehearsing lunar surface operations for Artemis III.",
      "credit": "NASA/Charles Beason (2025) · Lunar lighting simulation for Artemis III · supports the Human Landing System (HLS) Program · <b>images.nasa.gov</b>"
    },
    "lookFor": "Find the high-intensity lights set low to the floor. Those long, hard shadows <em>are</em> the Moon's South Pole — recreated here so crews can train for light that can hide the ground itself.",
    "galleryTitle": "More from the flat floor",
    "gallery": [
      {
        "src": "img/gallery-1.jpg",
        "alt": "Wide interior view of the Flight Robotics Laboratory's mirror-polished precision air-bearing floor at NASA Marshall, with an overhead manipulator arm and a simulated rendezvous docking mechanism (SRDM) test rig, 1985.",
        "credit": "NASA/MSFC (1985) · Flight Robotics Laboratory, Building 4619 · <b>images.nasa.gov</b>",
        "caption": "The same floor in 1985, when it went by the name Flight Robotics Laboratory and was used to rehearse Space Shuttle and Space Station docking."
      },
      {
        "src": "img/gallery-2.jpg",
        "alt": "Two NASA test engineers in low-fidelity white protective suits use a wrench to adjust hardware on the Flat Floor under low-angle lunar lighting simulation.",
        "credit": "NASA/Charles Beason (2025) · Flat Floor Facility, Building 4619 · <b>images.nasa.gov</b>",
        "caption": "Forty years later, the same room: engineers rehearsing Artemis III surface operations under simulated lunar lighting."
      }
    ],
    "askYourHost": [
      "How do you keep a floating test article from drifting off the edge of the floor?",
      "Has hardware bound for a real docking mission ever trained on this exact floor?",
      "What happens if a test article gets too close to the lunar-Sun lights?",
      "The in-space welding demo here was flown by a human pilot — what would it take to make that autonomous?"
    ],
    "quiz": {
      "question": "Quick one — why simulate that harsh, low-angle light?",
      "options": [
        { "text": "To make the lab look dramatic for visitors", "correct": false },
        { "text": "So crews can train for the real shadows at the lunar South Pole", "correct": true },
        { "text": "To keep the air-bearing floor cool", "correct": false }
      ],
      "correctFeedback": "✓ Exactly. The South Pole Sun sits very low, casting long shadows that can mask slopes and rocks — so crews rehearse in that exact light, here on Earth.",
      "wrongFeedback": "Not quite — it's about training for the real, hazardous shadows of the lunar South Pole."
    },
    "video": {
      "sectionTitle": "Watch",
      "src": "video/narration-clip.mp4",
      "poster": "img/hero.jpg",
      "title": "NASA Marshall test footage (placeholder)",
      "credit": "NASA/MSFC · Marshall propulsion test, from <b>images.nasa.gov</b> · <b>placeholder clip</b> for the Flat&nbsp;Floor–specific video. This is a downloaded NASA file played locally — exactly how the offline tablet serves video (no streaming, no signal needed). Production clip ships with captions (508)."
    },
    "cta": {
      "heading": "Could your hardware use this floor?",
      "body": "The Test Lab partners with NASA programs, other agencies, and industry for docking, proximity-operations, and robotic simulation testing."
    },
    "onePagers": [
      {
        "title": "Test Lab capability one-pager (PDF)",
        "description": "Official NASA fact sheet · cleared for public release",
        "path": "OnePagers/ET01_TEST LAB_3_1_21 .pdf"
      },
      {
        "title": "Structural Dynamics Test Lab (ET40) one-pager (PDF)",
        "description": "Official NASA fact sheet · cleared for public release",
        "path": "OnePagers/ET40 SDT _3_1_21.pdf"
      }
    ],
    "wayfindNext": { "nextStopId": "stop2", "label": "Next: Structural Test Stands" },
    "nextStopId": "stop2"
  },
  {
    "id": "stop2",
    "qrFile": "02-struct",
    "title": "Structural Test Stands: Testing to Failure",
    "shortTitle": "Structural Test Stands",
    "location": "Test Stands 4693 & 4697",
    "locationShort": "Test Stands 4693 & 4697",
    "subtitle": "Test Stands 4693 &amp; 4697",
    "lab": "Structural Strength",
    "tourTime": "~25 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["Adv. Space Transportation"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 49.5, "yPct": 76.2 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view centered on the Structural Test Stands, Test Stands 4693 &amp; 4697, on the NASA Marshall campus.",
      "credit": "USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/structural-test-stands",
    "hero": {
      "src": "img/hero.jpg",
      "alt": "A 149-foot Space Launch System liquid hydrogen tank test article stands inside a towering steel structural test stand at NASA Marshall.",
      "credit": "NASA/MSFC · SLS liquid hydrogen tank test article in Test Stand 4693 (2019) · <b>images.nasa.gov</b> · cleared for public release"
    },
    "callouts": [
      { "xPct": 47.0, "yPct": 34.0, "label": "Forward dome of the LH2 tank test article" },
      { "xPct": 79.0, "yPct": 52.0, "label": "Mobile crane lifting the tank into the stand" },
      { "xPct": 16.0, "yPct": 89.0, "label": "Ground crew, dwarfed by the tank" },
      { "xPct": 27.0, "yPct": 38.0, "label": "Tiered work platforms on the test stand" }
    ],
    "thumb": "img/hero.jpg",
    "factbox": "Here engineers push full-size rocket tanks with the crushing forces of launch — and then keep pushing, until the metal finally gives. On purpose.",
    "narration": {
      "durationLabel": "~42 sec · produced narration",
      "audio": "audio/narration.mp3",
      "text": "This is where we try to break rockets — on purpose. Towering test stands grab a full-size rocket fuel tank and squeeze, pull, and pressurize it with the same brutal forces of launch, and then some. One Space Launch System tank held on past two hundred and sixty percent of the loads it will ever see in flight before it finally buckled. Thousands of sensors and high-speed cameras catch the exact instant it gives way. Why push all the way to failure? Because the only way to know a structure is truly safe is to find its edge — here, on the ground, where no crew is counting on it."
    },
    "hook": "This is where we try to break rockets — on purpose.",
    "cuePoints": { "hook": 0, "explainer": 4, "wowStat": 19, "media": 29, "why": 36 },
    "whyItMatters": "A rocket has to survive the violence of launch with crew or irreplaceable cargo aboard. The only way to <em>prove</em> a structure is strong enough is to find the point where it isn't — on the ground, where a failure is data, not disaster. These stands grip a tank and apply millions of pounds of push, pull, and pressure.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 3,
    "keyfacts": [
      { "num": "215", "label": "feet tall", "detail": "Test Stand 4693, a twin-tower stand built to load full-size core-stage tanks" },
      { "num": "38", "label": "hydraulic load lines", "detail": "Driving a 149 ft, 27.6-ft-diameter tank through the worst loads of ascent — on the ground" },
      { "num": "9M", "label": "lb of compression (4697)", "detail": "Test Stand 4697's L-shaped reaction floor can also apply 300,000 lb of shear" },
      { "num": "260%", "label": "of flight loads survived", "detail": "An SLS tank held on past 2.6× its expected loads before buckling" },
      { "num": "1000s", "label": "of sensors", "detail": "Capturing stress, pressure and temperature at the instant of failure" }
    ],
    "deepDive": {
      "summary": "Go deeper: the largest test-to-failure ever",
      "open": true,
      "html": "On June 24, 2020, engineers ran the SLS liquid oxygen tank to its breaking point — the largest controlled test-to-failure of a NASA rocket-stage pressurized tank ever conducted. High-speed cameras and microphones recorded the exact moment of buckling, turning a deliberate failure into a precise map of the structure's true limits.<br><br>The two stands work as a matched pair with very different jobs. Test Stand 4693 is a 215-foot twin-tower structure built to bend and twist the SLS core stage's liquid hydrogen tank: 38 separate hydraulic load lines attach to the 149-foot test article and pull it through the tension, compression, and bending loads of a real ascent, all at once, in whatever combination a real launch would produce. Test Stand 4697, the shorter and wider L-shaped sibling with a 60×60-foot reaction floor and a 185,000-pound steel reaction ring at its base, squeezed the liquid oxygen tank with up to 9 million pounds of compression and 300,000 pounds of shear — numbers large enough that the stand itself, not just the tank, had to be engineered not to move. Construction on 4693 began in 2014; 4697 followed in 2015–2016. Both stands were retained after the Artemis I test campaign for future large-structure testing."
    },
    "detailImage": {
      "src": "img/detail-1.jpg",
      "alt": "The buckled, ruptured wall of a Space Launch System propellant tank after a deliberate test-to-failure at NASA Marshall.",
      "credit": "NASA/MSFC · SLS liquid oxygen tank after its controlled test-to-failure (June 24, 2020) · <b>images.nasa.gov</b>"
    },
    "galleryTitle": "More from the structural test stands",
    "gallery": [
      {
        "src": "img/gallery-1.jpg",
        "alt": "A crane lifts the 149-foot Space Launch System liquid hydrogen tank test article toward Test Stand 4693 at NASA Marshall, January 2019.",
        "credit": "NASA/MSFC/Tyler Martin (Jan. 14, 2019) · <b>images.nasa.gov</b>",
        "caption": "The largest piece of SLS core-stage structural test hardware, on its way into Test Stand 4693."
      },
      {
        "src": "img/gallery-2.jpg",
        "alt": "The Space Launch System liquid hydrogen tank test article is lowered into Test Stand 4693 at NASA Marshall, January 2019.",
        "credit": "NASA/MSFC/Tyler Martin (Jan. 14, 2019) · <b>images.nasa.gov</b>",
        "caption": "Lining up a 149-foot tank with millimeter precision before it's locked into the stand."
      },
      {
        "src": "img/gallery-3.jpg",
        "alt": "A crane lowers the first steel tier of a new structural test stand, Test Stand 4697, into place at NASA Marshall, January 2016.",
        "credit": "NASA/MSFC/Fred Deaton (Jan. 6, 2016) · <b>images.nasa.gov</b>",
        "caption": "Building the stand itself: the first steel tier of the 85-foot-tall Test Stand 4697 goes in for welding."
      },
      {
        "src": "img/gallery-4.jpg",
        "alt": "NASA engineers lift the final Space Launch System structural test article, a liquid oxygen tank, into Test Stand 4697 at NASA Marshall, July 2019.",
        "credit": "NASA/MSFC/Tyler Martin (July 10, 2019) · <b>images.nasa.gov</b>",
        "caption": "The last of the SLS core-stage structural test articles goes into Test Stand 4697."
      },
      {
        "src": "img/gallery-5.jpg",
        "alt": "A mobile crane guides the Space Launch System liquid hydrogen tank test article by cable toward Test Stand 4693 at NASA Marshall, January 2019.",
        "credit": "NASA/MSFC/Tyler Martin (Jan. 14, 2019) · <b>images.nasa.gov</b>",
        "caption": "Cable rigging keeps the 149-foot tank test article level as it's threaded toward the stand."
      },
      {
        "src": "img/gallery-6.jpg",
        "alt": "Ground crew watch as the Space Launch System liquid hydrogen tank test article is guided into the open bay of Test Stand 4693, January 2019.",
        "credit": "NASA/MSFC/Tyler Martin (Jan. 14, 2019) · <b>images.nasa.gov</b>",
        "caption": "A wider view of the same lift, showing how much of the tower the tank test article fills."
      },
      {
        "src": "img/gallery-7.jpg",
        "alt": "The Space Launch System liquid hydrogen tank test article nears its final resting position inside Test Stand 4693, January 2019.",
        "credit": "NASA/MSFC/Tyler Martin (Jan. 14, 2019) · <b>images.nasa.gov</b>",
        "caption": "Nearly seated, after a multi-hour lift, before load lines could be attached."
      },
      {
        "src": "img/gallery-8.jpg",
        "alt": "A second angle of the Space Launch System liquid oxygen tank structural test article being lowered into Test Stand 4697 at NASA Marshall, July 2019.",
        "credit": "NASA/MSFC/Tyler Martin (July 10, 2019) · <b>images.nasa.gov</b>",
        "caption": "Another frame from the same July 2019 lift that seated the final piece of SLS structural test hardware."
      },
      {
        "src": "img/gallery-9.jpg",
        "alt": "Crews move the Block 1B Space Launch System payload adapter from its manufacturing building into Structural Test Stand 4697 at NASA Marshall, March 2024.",
        "credit": "NASA/MSFC/Brandon Hancock (March 13, 2024) · <b>images.nasa.gov</b>",
        "caption": "Years after the core-stage tanks, a newer SLS Block 1B payload adapter arrives for its own round of structural testing."
      },
      {
        "src": "img/gallery-10.jpg",
        "alt": "A crane lowers an early steel tier of Test Stand 4697 into place during construction at NASA Marshall, January 2016.",
        "credit": "NASA/MSFC/Fred Deaton (Jan. 6, 2016) · <b>images.nasa.gov</b>",
        "caption": "The widest view of the same January 2016 lift that built gallery-3's close-up — Test Stand 4697 taking shape tier by tier."
      },
      {
        "src": "img/gallery-11.jpg",
        "alt": "A large workforce gathers in front of the completed Test Stand 4693 towers at NASA Marshall under a gray sky, with a mobile crane still in place.",
        "credit": "NASA/MSFC/Emmett Given (Aug. 9, 2016) · <b>images.nasa.gov</b>",
        "caption": "Construction crew, engineers, and a pair of visiting NASA astronauts gather at Test Stand 4693 during a T-38 jet fly-over of the finished structure."
      },
      {
        "src": "img/gallery-12.jpg",
        "alt": "A daytime exterior view of the completed Test Stand 4697 structure at NASA Marshall, its stepped steel towers rising against a blue sky.",
        "credit": "NASA/MSFC/Fred Deaton (Sept. 7, 2016) · <b>images.nasa.gov</b>",
        "caption": "Test Stand 4697, steelwork complete and empty, waiting to receive its first cryogenic tank test article."
      },
      {
        "src": "img/gallery-13.jpg",
        "alt": "A NASA official speaks to a crowd beside a steel beam destined for Test Stand 4693 during the structure's topping-out ceremony, April 2016.",
        "credit": "NASA/MSFC/Emmett Given (April 12, 2016) · <b>images.nasa.gov</b>",
        "caption": "Tim Flores addresses the crowd at Test Stand 4693's topping-out ceremony — the traditional marking of a structure's final beam."
      },
      {
        "src": "img/gallery-14.jpg",
        "alt": "The Space Launch System liquid oxygen tank test article travels by road transporter past a Dodd Road street sign en route to Test Stand 4697, July 2019.",
        "credit": "NASA/MSFC/Fred Deaton (July 9, 2019) · <b>images.nasa.gov</b>",
        "caption": "From the Pegasus barge dock to the west test area: the LOX tank test article makes its slow overland move across Marshall's campus."
      },
      {
        "src": "img/gallery-15.jpg",
        "alt": "The Space Launch System liquid oxygen tank test article arrives at dusk in the west test area, with Test Stands 4693 and 4697 visible behind it, July 2019.",
        "credit": "NASA/MSFC/Fred Deaton (July 10, 2019) · <b>images.nasa.gov</b>",
        "caption": "The LOX test article is lifted onto its transporter before final move into Test Stand 4697."
      },
      {
        "src": "img/gallery-16.jpg",
        "alt": "Construction workers rig a steel beam stenciled \"Space Launch System · Journey to Mars\" for the topping-out of Test Stand 4697, with an American flag and both towers visible, March 2016.",
        "credit": "NASA/MSFC/Emmett Given (March 4, 2016) · <b>images.nasa.gov</b>",
        "caption": "The final beam, marked for the journey to Mars, goes up to top out Test Stand 4697."
      },
      {
        "src": "img/gallery-17.jpg",
        "alt": "An SLS program manager speaks to the construction crew at the topping-out ceremony for Test Stand 4697, March 2016.",
        "credit": "NASA/MSFC/Emmett Given (March 4, 2016) · <b>images.nasa.gov</b>",
        "caption": "SLS Deputy Program Manager Jerry Cook thanks the crew: \"Your work is critical to the journey to Mars.\""
      }
    ],
    "lookFor": "Look up at the height of the stand around you — it has to be this big to grip a rocket tank end-to-end and pull with the force of liftoff.",
    "askYourHost": [
      "What does it actually sound like when a tank buckles at 260% of its rated load?",
      "Do engineers know roughly where a tank will fail before the test, or is that the whole point?",
      "Has a tank ever failed sooner than expected — and what happened next?"
    ],
    "quiz": {
      "question": "Quick one — why deliberately test a tank to failure?",
      "options": [
        { "text": "To recycle old flight hardware", "correct": false },
        { "text": "To find the structure's true limit so flight tanks stay safe", "correct": true },
        { "text": "Because it's cheaper than building a real one", "correct": false }
      ],
      "correctFeedback": "✓ Exactly. Pushing a tank past its expected loads reveals its true margin — so the flight article never has to find that limit itself.",
      "wrongFeedback": "Not quite — it's about finding the structure's true limit on the ground, so flight tanks stay safe."
    },
    "video": {
      "sectionTitle": "Watch",
      "src": "video/test-to-failure.mp4",
      "poster": "img/hero.jpg",
      "title": "SLS liquid oxygen tank test-to-failure (timelapse)",
      "credit": "NASA/MSFC · SLS liquid oxygen tank test-to-failure, timelapse (June 24, 2020) · <b>images.nasa.gov</b> · plays locally / offline. Production clip ships with captions (508)."
    },
    "cta": {
      "heading": "Need to qualify a structure?",
      "body": "The Test Lab runs static and dynamic structural testing for launch vehicles and spacecraft — to flight loads and beyond."
    },
    "onePagers": [
      {
        "title": "Test Lab capability one-pager (PDF)",
        "description": "Official NASA fact sheet · cleared for public release",
        "path": "OnePagers/ET01_TEST LAB_3_1_21 .pdf"
      },
      {
        "title": "Structural Strength Test Lab (ET30) one-pager (PDF)",
        "description": "Official NASA fact sheet · cleared for public release",
        "path": "OnePagers/ET30_SSTL _3_1_21.pdf"
      }
    ],
    "wayfindNext": { "nextStopId": "stop3", "label": "Next: Thermal Vacuum Testing" },
    "nextStopId": "stop3"
  },
  {
    "id": "stop3",
    "qrFile": "03-thermal-vac",
    "title": "Thermal Vacuum Testing: Space on Earth",
    "shortTitle": "Thermal Vacuum Testing",
    "location": "Environmental test chamber (XRCF)",
    "locationShort": "Environmental chamber (XRCF)",
    "subtitle": "Environmental test chamber (XRCF)",
    "lab": "Experimental Fluids & Environmental",
    "tourTime": "~20 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["Mission & Payload Ops"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 50.6, "yPct": 49.0 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view centered on the thermal vacuum test chamber (XRCF) on the NASA Marshall campus.",
      "credit": "USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/thermal-vacuum",
    "hero": {
      "src": "img/hero.jpg",
      "alt": "NASA's IMAP spacecraft, wrapped in gold and silver thermal blanketing, sits inside a large cylindrical thermal-vacuum test chamber at NASA Marshall.",
      "credit": "NASA/MSFC · NASA's IMAP spacecraft inside the thermal-vacuum chamber (XRCF) · <b>images.nasa.gov</b> · cleared for public release"
    },
    "callouts": [
      { "xPct": 50.0, "yPct": 54.0, "label": "IMAP spacecraft under thermal blanketing" },
      { "xPct": 22.0, "yPct": 28.0, "label": "Cryogenic shroud panels lining the chamber" },
      { "xPct": 29.0, "yPct": 62.0, "label": "Access gantry for spacecraft installation" },
      { "xPct": 50.0, "yPct": 89.0, "label": "Vacuum pump grille at the chamber's base" }
    ],
    "thumb": "img/hero.jpg",
    "factbox": "Seal a spacecraft inside, pump out the air, and swing the temperature from searing to frigid — space, recreated on the ground, before anything flies.",
    "narration": {
      "durationLabel": "~35 sec · produced narration",
      "audio": "audio/narration.mp3",
      "text": "Before a spacecraft ever launches, it has to prove it can survive space — and that journey starts right here. Inside this chamber, powerful pumps strip away the air until what's left is the near-perfect vacuum of orbit, while the temperature swings between searing heat and deep cold, just like sunlight and shadow in space. Spacecraft like NASA's IMAP probe spend days sealed inside, every system watched, making sure nothing fails when it matters most. It's space — without leaving Huntsville."
    },
    "hook": "Before a spacecraft ever launches, it has to prove it can survive space — and that journey starts right here.",
    "cuePoints": { "hook": 0, "explainer": 8, "wowStat": 19, "media": 26, "why": 31 },
    "whyItMatters": "Space is merciless: a hard vacuum, and sunlight-to-shadow temperature swings that can warp or crack hardware. Before a spacecraft is trusted with a mission, it has to prove it works in those exact conditions — so it spends days sealed in this chamber while engineers watch every system.",
    "keyfactsTitle": "What happens in the chamber",
    "wowStat": 2,
    "keyfacts": [
      { "num": "Vacuum", "label": "air pumped away", "detail": "Recreating the near-emptiness of orbit" },
      { "num": "Hot ⇄ Cold", "label": "thermal extremes", "detail": "Sunlight-to-shadow swings, cycled again and again" },
      { "num": "20×60", "label": "ft chamber size", "detail": "One of the largest thermal-vacuum chambers anywhere at NASA" },
      { "num": "Days", "label": "sealed and watched", "detail": "Every system monitored before the spacecraft is cleared to fly" }
    ],
    "deepDive": {
      "summary": "Go deeper: a recent resident, and a longer heritage",
      "open": true,
      "html": "NASA's IMAP — the Interstellar Mapping and Acceleration Probe — was put through its paces in this chamber at Marshall before heading toward launch, arriving at the XRCF in March 2025 and going into the chamber days later. The facility (the X-ray &amp; Cryogenic Facility, or XRCF) has been operating since 1991 and is, by design, the world's largest X-ray optical test facility as well as NASA's premier cryogenic optical test facility — two identities most visitors never see, because the vacuum chamber itself is where the tour stops.<br><br>That dual mission has a real pedigree: the Chandra X-ray Observatory's mirror assembly was calibrated here before its 1999 launch, using the facility's long X-ray beam path to characterize optics that still can't be tested any other way on Earth. Years later, engineers cryo-tested segments of the James Webb Space Telescope's primary mirror in the same building, chilling gold-coated beryllium to the deep-cold temperatures it would need to survive at its permanent home a million miles from Earth. IMAP is simply the latest mission to need what this building has offered since the early 1990s: a space cold, dark, and empty enough to trust.<br><br>A 1999 upgrade extended that reach further, adding the ability to cryo-test lightweight visible optics down to 20 Kelvin — roughly &minus;424&deg;F, deep-space cold. For JWST's mirror testing here, engineers even injected helium gas into the vacuum chamber itself, using it to help control and even out the mirror's temperature during the cryogenic run (NTRS 20020022671)."
    },
    "detailImage": {
      "src": "img/detail-1.jpg",
      "alt": "The massive circular door of the thermal-vacuum chamber is sealed shut on NASA's IMAP spacecraft at NASA Marshall.",
      "credit": "NASA/MSFC · The chamber door sealing on NASA's IMAP spacecraft · <b>images.nasa.gov</b>"
    },
    "galleryTitle": "More from the thermal-vacuum chamber",
    "gallery": [
      {
        "src": "img/gallery-1.jpg",
        "alt": "NASA's IMAP spacecraft is loaded into the thermal-vacuum chamber of the XRCF at NASA Marshall, March 2025.",
        "credit": "NASA/Johns Hopkins APL/Princeton/Ed Whitman (March 19, 2025) · <b>images.nasa.gov</b>",
        "caption": "IMAP goes in: loaded into the XRCF chamber ahead of a battery of environmental tests."
      },
      {
        "src": "img/gallery-2.jpg",
        "alt": "A wing of the James Webb Space Telescope's primary mirror is installed in the XRCF at NASA Marshall prior to cryogenic testing, 2013.",
        "credit": "NASA/MSFC/Fred Deaton (March 22, 2013) · <b>images.nasa.gov</b>",
        "caption": "Years before IMAP, this same chamber tested a wing of the James Webb Space Telescope's mirror at cryogenic temperatures."
      },
      {
        "src": "img/gallery-3.jpg",
        "alt": "An aerial photograph of NASA Marshall's XRCF buildings 4718 and 4708, 2019.",
        "credit": "NASA/MSFC/Fred Deaton (2019) · <b>images.nasa.gov</b>",
        "caption": "The XRCF complex from above — unassuming buildings hiding some of Marshall's largest vacuum chambers."
      },
      {
        "src": "img/gallery-4.jpg",
        "alt": "A wide aerial photograph of NASA Marshall's XRCF, buildings 4718, 4755, and 4708, with the external guide tube visible running to a distant instrument chamber, 2019.",
        "credit": "NASA/MSFC/Fred Deaton (July 31, 2019) · <b>images.nasa.gov</b>",
        "caption": "A wider pullback of the XRCF complex, showing the full guide tube running out to its own instrument chamber."
      },
      {
        "src": "img/gallery-5.jpg",
        "alt": "A medium-altitude aerial photograph of NASA Marshall's XRCF buildings 4718 and 4708, showing the guide tube and a grid parking lot, 2019.",
        "credit": "NASA/MSFC/Fred Deaton (July 31, 2019) · <b>images.nasa.gov</b>",
        "caption": "A third vantage on the same 2019 flyover — the XRCF's guide tube from yet another angle."
      },
      {
        "src": "img/gallery-6.jpg",
        "alt": "The Chandra X-ray Observatory's High Resolution Mirror Assembly is lifted by overhead crane out of its test structure at the XRCF, 1997.",
        "credit": "NASA/MSFC (1997) · <b>images.nasa.gov</b>",
        "caption": "Nearly three decades before IMAP, the Chandra X-ray Observatory's mirrors were tested in this same building."
      },
      {
        "src": "img/gallery-7.jpg",
        "alt": "Technicians integrate the Chandra X-ray Observatory's High Resolution Camera with its mirror assembly inside Marshall's 24-foot Vacuum Chamber at the XRCF, 1997.",
        "credit": "NASA/MSFC (March 16, 1997) · <b>images.nasa.gov</b>",
        "caption": "Chandra's camera and mirrors, mated inside the same 24-foot vacuum chamber lineage later used for JWST and IMAP."
      },
      {
        "src": "img/gallery-8.jpg",
        "alt": "The massive circular door of the XRCF thermal-vacuum chamber stands open as a technician in a cleanroom suit reaches toward it, IMAP visible inside.",
        "credit": "NASA/Johns Hopkins APL/Princeton/Ed Whitman (2025) · <b>images.nasa.gov</b>",
        "caption": "The chamber door, open and waiting — IMAP already inside, moments before it seals shut for testing."
      }
    ],
    "lookFor": "Notice the size and seal of the chamber door — it has to hold a perfect vacuum inside against the full weight of the atmosphere pushing in.",
    "askYourHost": [
      "How long does it take to pump this chamber down to a near-vacuum before a test even starts?",
      "Has anything ever gone wrong once a spacecraft was already sealed inside?",
      "What's the closest a test here ever came to a real launch deadline?"
    ],
    "quiz": {
      "question": "Quick one — why test a spacecraft in vacuum and temperature extremes?",
      "options": [
        { "text": "To clean the spacecraft before launch", "correct": false },
        { "text": "To prove it survives the real conditions of space first", "correct": true },
        { "text": "To make the spacecraft lighter", "correct": false }
      ],
      "correctFeedback": "✓ Exactly. Vacuum and thermal cycling here recreate what the spacecraft will actually face in orbit — so failures happen on the ground, not in flight.",
      "wrongFeedback": "Not quite — it's about proving the spacecraft survives the real vacuum and temperature extremes of space."
    },
    "video": null,
    "cta": {
      "heading": "Headed for space?",
      "body": "The Test Lab provides thermal-vacuum and environmental testing to qualify spacecraft and payloads for the conditions of orbit and beyond."
    },
    "onePagers": [
      {
        "title": "Test Lab capability one-pager (PDF)",
        "description": "Official NASA fact sheet · cleared for public release",
        "path": "OnePagers/ET01_TEST LAB_3_1_21 .pdf"
      },
      {
        "title": "V-20 Thermal Vacuum Chamber one-pager (PDF)",
        "description": "Official NASA fact sheet · cleared for public release",
        "path": "OnePagers/V-20 One Pager 100323.pdf"
      },
      {
        "title": "Environmental Test Facility one-pager (PDF)",
        "description": "Official ET20 fact sheet · cleared for public release",
        "path": "OnePagers/ET20_ETF_6_13_23.pdf"
      }
    ],
    "wayfindNext": { "nextStopId": "stop4", "label": "Next: F-1 Engine Test Stand" },
    "nextStopId": "stop4"
  },
  {
    "id": "stop4",
    "qrFile": "04-f1-engine",
    "title": "F-1 Engine Test Stand: One Engine at a Time",
    "shortTitle": "F-1 Engine Test Stand",
    "location": "Building 4696 · West Test Area",
    "locationShort": "Building 4696, West Test Area",
    "subtitle": "West Test Area &middot; Building 4696",
    "lab": "Propulsion",
    "tourTime": "~20 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["Adv. Space Transportation", "History"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 46.5, "yPct": 85.0 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view centered on the F-1 Engine Test Stand, Building 4696, West Test Area, on the NASA Marshall campus.",
      "credit": "USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/f1-engine-test-stand-4696",
    "hero": {
      "src": "img/hero.jpg",
      "alt": "An F-1 rocket engine test-fires in the F-1 Engine Static Test Stand at NASA Marshall Space Flight Center, 1967.",
      "credit": "NASA/MSFC (1967) &middot; F-1 engine firing in the F-1 Engine Static Test Stand &middot; <b>images.nasa.gov</b> &middot; cleared for public release"
    },
    "orientPhoto": {
      "src": "img/drawing-1.jpg",
      "alt": "A HAER measured section drawing of the F-1 Engine Static Test Stand, showing the full tower in elevation from its bedrock foundation through the flame deflector, work platforms, and stacked kerosene (RP-1) and liquid-oxygen tanks at the top.",
      "credit": "Historic American Engineering Record, Library of Congress &middot; measured building section, HAER AL-129-L &middot; <b>loc.gov</b>"
    },
    "callouts": [
      { "xPct": 44.0, "yPct": 22.0, "label": "Liquid-oxygen (LOX) tank, stacked at the top" },
      { "xPct": 44.0, "yPct": 44.0, "label": "Kerosene (RP-1) tank" },
      { "xPct": 38.0, "yPct": 74.0, "label": "Flame deflector, cooled by 136,000 gal/min of water" },
      { "xPct": 58.0, "yPct": 87.0, "label": "Control area and mechanical room, below grade" }
    ],
    "thumb": "img/hero.jpg",
    "factbox": "Five F-1 engines lifted every Saturn V off the pad with 7.5 million pounds of thrust. Before any of them flew, each one proved itself here, alone, at full power.",
    "narration": {
      "durationLabel": "~40 sec · produced narration",
      "audio": "audio/narration.mp3",
      "text": "The most powerful rocket engine ever flown was never tested five at a time — it was tested one at a time, right here. This vertical stand, keyed forty feet into bedrock, held a single F-1 engine while it produced one and a half million pounds of thrust — enough, on its own, to lift a fully loaded Boeing 747. Only after an individual engine proved itself here, again and again, was it cleared to be bolted alongside four others onto the base of a Saturn Five. Every trip to the Moon started with this one engine, screaming, in this one stand."
    },
    "hook": "The most powerful rocket engine ever flown was never tested five at a time — it was tested one at a time, right here.",
    "cuePoints": { "hook": 0, "explainer": 9, "wowStat": 21, "media": 29, "why": 35 },
    "whyItMatters": "A Saturn V's first stage flew on five F-1 engines at once — but a single bad engine could doom a mission. The only way to trust a cluster of five was to fully characterize one at a time: how it started, how it ran flat-out, and whether it stayed stable under the violence of combustion. That certainty was built here, one static firing at a time.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 1,
    "keyfacts": [
      { "num": "1.5M", "label": "lbf per engine", "detail": "A single F-1 engine's thrust at full power" },
      { "num": "5", "label": "engines per Saturn V", "detail": "Clustered on the S-IC first stage for 7.5 million lbf combined" },
      { "num": "239", "label": "feet tall", "detail": "The test stand's elevation, keyed ~40 ft into bedrock" }
    ],
    "deepDive": {
      "summary": "Go deeper: bombing your own engine, on purpose",
      "open": true,
      "html": "Construction on the stand began in 1961 in Marshall's West Test Area and was completed in 1964, purpose-built to develop the F-1. Isolating a single engine let engineers deliberately push it toward its limits &mdash; including inducing and studying combustion instability &mdash; without risking four other engines or an entire stage.<br><br>The F-1 program's most notorious problem was combustion instability: under certain conditions, the flame inside the chamber could fall into a self-sustaining pressure oscillation violent enough to destroy the engine in milliseconds. Engineers couldn't wait for it to happen on its own, so they made it happen on command &mdash; detonating small explosive charges inside a running engine's combustion chamber to deliberately trigger instability, then measuring how fast (or whether) the engine damped the disturbance and recovered. It sounds reckless; it was actually the only reliable way to prove an engine design was stable enough to trust with a crew. Every characteristic later relied on in a five-engine cluster, instability recovery included, was proven here first, one firing &mdash; and one bomb &mdash; at a time.<br><br>Aetron's 1963 design specified the stand's structure to withstand an upward load of up to 3.4 million pounds of thrust &mdash; more than double the 1.5 million lbf the F-1 actually produced. That margin turned out to be more than enough: the stand's entire operating life ran from its first F-1 firing on 8 July 1965 to its last recorded test on 13 February 1969, a little over three and a half years (HAER AL-129-L)."
    },
    "detailImage": {
      "src": "img/detail-1.jpg",
      "alt": "Flame and exhaust blast outward from an F-1 engine test firing at the Saturn Static Test Stand in Marshall's West Test Area, 1964.",
      "credit": "NASA/MSFC (1964) &middot; F-1 engine test firing, West Test Area &middot; <b>images.nasa.gov</b>"
    },
    "galleryTitle": "More from the F-1 Engine Test Stand",
    "gallery": [
      {
        "src": "img/gallery-1.jpg",
        "alt": "An F-1 engine test-fires on the newly modified Saturn IB Static Test Stand at NASA Marshall, December 1963.",
        "credit": "NASA/MSFC (Dec. 5, 1963) &middot; <b>images.nasa.gov</b>",
        "caption": "The most powerful rocket engine ever fired at Marshall, on a stand freshly modified to hold it."
      },
      {
        "src": "img/gallery-2.jpg",
        "alt": "Flame and exhaust blast outward from an F-1 engine test firing at the Saturn S-IB Static Test Stand at NASA Marshall, March 1964.",
        "credit": "NASA/MSFC (March 1964) &middot; <b>images.nasa.gov</b>",
        "caption": "A single F-1's exhaust, blasting outward &mdash; five of these together lifted the entire Saturn V first stage."
      },
      {
        "src": "img/gallery-3.jpg",
        "alt": "An aerial photograph of NASA Marshall's West Test Area with the F-1 Engine Test Stand in the foreground, 2019.",
        "credit": "NASA/MSFC/Fred Deaton (2019) &middot; <b>images.nasa.gov</b>",
        "caption": "The West Test Area from above, more than five decades after the F-1's last firing here."
      },
      {
        "src": "img/gallery-4.jpg",
        "alt": "A HAER color photograph looking directly into the flame deflector at the base of the F-1 Engine Static Test Stand, showing its welded steel manifold and water-cooling ports between the stand's concrete piers.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; flame deflector, F-1 Engine Static Test Stand &middot; HAER AL-129-L &middot; <b>loc.gov</b>",
        "caption": "The stand's flame deflector, or \"flame bucket\" &mdash; a welded steel chute cooled by 136,000 gallons of water per minute so it wouldn't melt under an F-1's exhaust."
      },
      {
        "src": "img/gallery-5.jpg",
        "alt": "An F-1 engine test-fires on the newly modified Saturn IB Static Test Stand at NASA Marshall at dusk, December 1963.",
        "credit": "NASA/MSFC (Dec. 1, 1963) &middot; <b>images.nasa.gov</b>",
        "caption": "A dusk test firing, four days before the shot used elsewhere in this gallery &mdash; the same engine program, a different night."
      },
      {
        "src": "img/gallery-6.jpg",
        "alt": "A wide color view of an F-1 engine test firing at the F-1 Engine Test Stand in Marshall's West Test Area.",
        "credit": "NASA/MSFC &middot; <b>images.nasa.gov</b>",
        "caption": "A wide establishing view of a live test firing &mdash; the whole stand, not just the flame."
      },
      {
        "src": "img/gallery-7.jpg",
        "alt": "A 1993 ground-level view of Marshall's quiet F-1 Engine Test Stand, no longer in active use.",
        "credit": "NASA/MSFC (1993) &middot; <b>images.nasa.gov</b>",
        "caption": "The stand in 1993, decades after its last F-1 firing &mdash; quiet, but still standing."
      },
      {
        "src": "img/gallery-8.jpg",
        "alt": "Excavation underway for the single-engine F-1 test stand in Marshall's West Test Area, October 1962.",
        "credit": "NASA/MSFC (Oct. 26, 1962) &middot; <b>images.nasa.gov</b>",
        "caption": "Before there was a stand, there was a hole &mdash; excavation for the F-1's foundation, keyed into bedrock."
      },
      {
        "src": "img/gallery-9.jpg",
        "alt": "Mid-construction view of the F-1 test stand, showing all four tower legs underway, September 1963.",
        "credit": "NASA/MSFC (Sept. 30, 1963) &middot; <b>images.nasa.gov</b>",
        "caption": "All four tower legs rising at once &mdash; the stand taking shape a year after ground was broken."
      },
      {
        "src": "img/gallery-10.jpg",
        "alt": "Near-complete F-1 test stand with its flame deflector already installed, November 1963.",
        "credit": "NASA/MSFC (Nov. 20, 1963) &middot; <b>images.nasa.gov</b>",
        "caption": "Nearly finished, flame deflector already in place &mdash; a little over a year from the first F-1 firing here."
      },
      {
        "src": "img/drawing-1.jpg",
        "alt": "A HAER measured section drawing of the F-1 Engine Static Test Stand, showing the full tower in elevation from its bedrock foundation through the flame deflector, work platforms, and stacked kerosene (RP-1) and liquid-oxygen tanks at the top.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured building section, HAER AL-129-L &middot; <b>loc.gov</b>",
        "caption": "A full cross-section of the test stand, from its bedrock-anchored foundation up through the flame deflector to the stacked RP-1 and liquid-oxygen tanks at the top."
      },
      {
        "src": "img/drawing-2.jpg",
        "alt": "A HAER illustrated sequence titled \"The F-1 Static Test Stand: Loading and Testing the Engine,\" showing engine arrival, hoisting, mounting, and firing steps alongside F-1 facts and a Saturn V stage diagram.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; loading and testing sequence, HAER AL-129-L &middot; <b>loc.gov</b>",
        "caption": "Step by step: how a single F-1 engine arrived, was hoisted into the stand, mounted, and fired."
      },
      {
        "src": "img/drawing-3.jpg",
        "alt": "A HAER illustrated exploded diagram of the F-1 Engine Test Stand's flame deflector and coolant manifold.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; flame deflector diagram, HAER AL-129-L &middot; <b>loc.gov</b>",
        "caption": "How the flame deflector actually survived an F-1's exhaust: an exploded view of its coolant manifold."
      },
      {
        "src": "img/drawing-4.jpg",
        "alt": "A HAER illustrated site plan and aerial view of Marshall's West Test Area, with a legend identifying the blockhouse, viewing bunker, pump house, reservoir tanks, cable tunnel, and LN2 tanks.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; West Test Area site plan, HAER AL-129-L &middot; <b>loc.gov</b>",
        "caption": "The whole West Test Area laid out: blockhouse, viewing bunker, pump house, and the tanks that fed the stand."
      },
      {
        "src": "img/drawing-5.jpg",
        "alt": "A HAER axonometric illustration of the F-1 Engine Test Stand's fuel delivery, water delivery/fire suppression, and derrick crane systems.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; systems and components, HAER AL-129-L &middot; <b>loc.gov</b>",
        "caption": "The systems hidden behind the tower: fuel delivery, fire-suppression water, and the crane that moved the engines."
      }
    ],
    "lookFor": "Picture the stand gripping a single engine, alone &mdash; not the five-engine cluster you see on a Saturn V. Every engine that ever flew earned its place here first, by itself.",
    "askYourHost": [
      "How many successful firings did a single F-1 engine need before it was cleared for a Saturn V?",
      "What happened to an engine that failed a test in this stand?",
      "Could people elsewhere on Marshall's campus feel or hear a test firing here?"
    ],
    "quiz": {
      "question": "Quick one &mdash; why test the F-1 one engine at a time instead of testing a full five-engine cluster from the start?",
      "options": [
        { "text": "It was cheaper to build a smaller stand", "correct": false },
        { "text": "To fully prove and characterize a single engine before trusting five together", "correct": true },
        { "text": "Because the Saturn V only needed one engine at first", "correct": false }
      ],
      "correctFeedback": "&#10003; Exactly. A single bad engine could doom a five-engine cluster &mdash; so each F-1 had to prove itself completely on its own before flying alongside four others.",
      "wrongFeedback": "Not quite &mdash; it's about proving one engine completely before ever trusting a cluster of five."
    },
    "video": null,
    "cta": {
      "heading": "Testing propulsion hardware?",
      "body": "The Test Lab's West Test Area heritage runs from the F-1 through today's SLS and commercial engine programs &mdash; static-fire testing at scale."
    },
    "onePagers": [
      {
        "title": "Test Lab capability one-pager (PDF)",
        "description": "Official NASA fact sheet · cleared for public release",
        "path": "OnePagers/ET01_TEST LAB_3_1_21 .pdf"
      },
      {
        "title": "Propulsion Test Lab (ET10) one-pager (PDF)",
        "description": "Official NASA fact sheet · cleared for public release",
        "path": "OnePagers/ET10_PTL 3_1_21.pdf"
      }
    ],
    "wayfindNext": { "nextStopId": "stop5", "label": "Next: Neutral Buoyancy Simulator" },
    "nextStopId": "stop5"
  },
  {
    "id": "stop5",
    "qrFile": "05-nbs",
    "title": "Neutral Buoyancy Simulator: Rehearsing Weightlessness",
    "shortTitle": "Neutral Buoyancy Simulator",
    "location": "Former Building 4705 (demolished, Dec 2025)",
    "locationShort": "Former Building 4705",
    "subtitle": "Legacy site &middot; Building 4705, 1968&ndash;1997",
    "lab": "Experimental Fluids & Environmental",
    "tourTime": "~15 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["History", "Mission & Payload Ops"],
    "available": true,
    "legacySite": true,
    "hazards": [],
    "campusPin": { "xPct": 38.7, "yPct": 29.7 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view centered on the former Neutral Buoyancy Simulator building site on the NASA Marshall campus.",
      "credit": "USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/neutral-buoyancy-simulator-4705",
    "hero": {
      "src": "img/hero.jpg",
      "alt": "Dr. Wernher von Braun, suited in a full space suit and diving equipment, prepares to enter Marshall's Neutral Buoyancy Simulator, 1967.",
      "credit": "NASA/MSFC (1967) &middot; Dr. Wernher von Braun suited for the Neutral Buoyancy Simulator &middot; <b>images.nasa.gov</b> &middot; cleared for public release"
    },
    "orientPhoto": {
      "src": "img/drawing-1.jpg",
      "alt": "A HAER measured cross-section drawing, Section A-A, of the Neutral Buoyancy Simulator, showing the tank's cutaway interior with its rows of observation portholes, roof exhaust fans, and the adjoining support offices and control room.",
      "credit": "Historic American Engineering Record, Library of Congress &middot; measured cross-section drawing, Section A-A &middot; HAER No. AL-129-B, Sheet 6 of 11 &middot; <b>loc.gov</b>"
    },
    "callouts": [
      { "xPct": 30.0, "yPct": 45.0, "label": "Tank wall, ringed with observation portholes" },
      { "xPct": 32.0, "yPct": 20.0, "label": "Roof exhaust fans" },
      { "xPct": 64.0, "yPct": 60.0, "label": "Support offices" },
      { "xPct": 85.0, "yPct": 55.0, "label": "Control room — managed divers' breathing air and safety" }
    ],
    "thumb": "img/hero.jpg",
    "factbox": "A 1.5-million-gallon tank made weightlessness practicable on Earth for three decades &mdash; long enough to help save Skylab and rehearse fixing the Hubble Space Telescope. Demolition began December 2025.",
    "narration": {
      "durationLabel": "~46 sec · produced narration",
      "audio": "audio/narration.mp3",
      "text": "You're standing where NASA first learned to fake weightlessness at scale. From 1968 to 1997, a tank seventy-five feet across and forty feet deep &mdash; nearly a million and a half gallons of water &mdash; let astronauts train underwater for the true weightlessness of orbit. When Skylab launched damaged in 1973, the fix was rehearsed here first. When astronauts serviced the Hubble Space Telescope, they practiced the repair here first. This facility closed in 1997 when a larger lab opened in Houston, and its tank was demolished in December 2025 &mdash; but the training method it proved out is still how NASA prepares for every spacewalk today."
    },
    "hook": "You're standing where NASA first learned to fake weightlessness at scale.",
    "cuePoints": { "hook": 0, "explainer": 5, "wowStat": 21, "media": 32, "why": 40 },
    "whyItMatters": "Weightlessness can't be faked on the ground &mdash; except underwater, where buoyancy can be tuned to cancel out gravity. That let astronauts rehearse real repair tasks, with real tools, for hours at a time, long before ever reaching orbit. This tank proved the method that saved a space station and kept the Hubble Space Telescope working for decades.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 0,
    "keyfacts": [
      { "num": "1.5M", "label": "gallons", "detail": "75 ft across, 40 ft deep &mdash; NASA's first large-scale weightlessness trainer" },
      { "num": "1968&ndash;97", "label": "years in operation", "detail": "Closed when JSC's larger Neutral Buoyancy Laboratory opened" },
      { "num": "2025", "label": "demolition began", "detail": "The tank came down in December 2025" }
    ],
    "deepDive": {
      "summary": "Go deeper: saving Skylab and servicing Hubble",
      "open": true,
      "html": "When Skylab's meteoroid shield tore away during launch in 1973, engineers rehearsed the emergency repair procedures underwater here before the crew ever attempted them in orbit &mdash; helping save the station. Decades later, astronauts including Kathryn Thornton and Jeffrey Hoffman trained here for Hubble Space Telescope servicing, and the facility supported early International Space Station and Japanese Experimental Module mockup testing before closing in 1997.<br><br>Before any tank existed, the whole concept was proven after-hours in 1965, when MSFC engineer Charles Cooper and colleague Charles Stocks flooded a hollow, plugged gyroscope mockup inside an out-of-service metal-quenching tank until it hung neutrally buoyant &mdash; the improvised test that convinced Marshall managers to fund a full-scale facility. In recognition of the role that facility went on to play across Skylab, Space Shuttle, and Hubble missions, it was designated a National Historic Landmark in 1985 (HAER AL-129-B)."
    },
    "detailImage": {
      "src": "img/detail-1.jpg",
      "alt": "Astronaut Jeffrey Hoffman trains underwater in Marshall's Neutral Buoyancy Simulator for Hubble Space Telescope servicing, 1995.",
      "credit": "NASA/MSFC (1995) &middot; Astronaut Jeffrey Hoffman training for Hubble Space Telescope servicing in the NBS &middot; <b>images.nasa.gov</b>"
    },
    "galleryTitle": "More from the Neutral Buoyancy Simulator",
    "gallery": [
      {
        "src": "img/gallery-1.jpg",
        "alt": "Astronauts Mark Lee and Mike Gernhardt, with a technician, participate in a Nitrox breathing system test in Marshall's Neutral Buoyancy Simulator, 1993.",
        "credit": "NASA/MSFC (Sept. 3, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "Testing a Nitrox breathing system underwater &mdash; even the diving gear itself needed validating here."
      },
      {
        "src": "img/gallery-2.jpg",
        "alt": "International Space Station hardware undergoes underwater testing in Marshall's Neutral Buoyancy Simulator, 1994.",
        "credit": "NASA/MSFC (March 4, 1994) &middot; <b>images.nasa.gov</b>",
        "caption": "Early International Space Station testing &mdash; this tank trained astronauts years before the ISS ever flew."
      },
      {
        "src": "img/gallery-3.jpg",
        "alt": "Photo Voltaic Module testing underway in Marshall's Neutral Buoyancy Simulator, 1993.",
        "credit": "NASA/MSFC (Dec. 7, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "Rehearsing solar-array handling underwater, long before any astronaut touched the real hardware in orbit."
      },
      {
        "src": "img/gallery-4.jpg",
        "alt": "A Marshall scientist practices working on a Hubble Space Telescope mockup in the Neutral Buoyancy Simulator, 1986.",
        "credit": "NASA/MSFC (1986) &middot; <b>images.nasa.gov</b>",
        "caption": "Hubble servicing rehearsal began years before launch &mdash; this tank taught NASA how to fix a telescope in orbit."
      },
      {
        "src": "img/gallery-5.jpg",
        "alt": "A HAER photograph looking across the Neutral Buoyancy Simulator's tank from the top deck, showing the diver entry stairway descending into the water beside a breathing-air control console with gauges and hose reels.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; Neutral Buoyancy Simulator tank, entry stairway and breathing-air console &middot; HAER No. AL-129-B-6 &middot; <b>loc.gov</b>",
        "caption": "Divers descended this stairway into the tank's warm water, breathing air routed through the console at right."
      },
      {
        "src": "img/gallery-6.jpg",
        "alt": "Astronauts Mark Lee and Mike Gernhardt, with a technician, participate in a Nitrox breathing system test in Marshall's Neutral Buoyancy Simulator, 1993.",
        "credit": "NASA/MSFC (Sept. 3, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "A second frame from the same Nitrox test &mdash; even routine breathing-gas checks got a full underwater rehearsal."
      },
      {
        "src": "img/gallery-7.jpg",
        "alt": "Astronaut Scott Parazynski participates in a Nitrox breathing system test in Marshall's Neutral Buoyancy Simulator, 1993.",
        "credit": "NASA/MSFC (Sept. 1, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "Two days earlier, Scott Parazynski ran the same Nitrox trial &mdash; validating the gear before the full crew followed."
      },
      {
        "src": "img/gallery-8.jpg",
        "alt": "Astronaut Mark Lee participates in a Nitrox breathing system test in Marshall's Neutral Buoyancy Simulator, 1993.",
        "credit": "NASA/MSFC (Sept. 3, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "Another angle from the same Nitrox-test day, tracking Mark Lee underwater."
      },
      {
        "src": "img/gallery-9.jpg",
        "alt": "Astronaut Mark Lee participates in a Nitrox breathing system test in Marshall's Neutral Buoyancy Simulator, 1993.",
        "credit": "NASA/MSFC (Sept. 3, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "One more frame from that day's Nitrox trial, the tank's scale visible behind him."
      },
      {
        "src": "img/gallery-10.jpg",
        "alt": "International Space Station hardware undergoes underwater testing in Marshall's Neutral Buoyancy Simulator, 1994.",
        "credit": "NASA/MSFC (March 4, 1994) &middot; <b>images.nasa.gov</b>",
        "caption": "A second view of the same 1994 ISS hardware test."
      },
      {
        "src": "img/gallery-11.jpg",
        "alt": "Testing of the Japanese Experimental Module is conducted in Marshall's Neutral Buoyancy Simulator, 1993.",
        "credit": "NASA/MSFC (Feb. 23, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "International partners' hardware trained here too &mdash; Japan's Experimental Module got its underwater rehearsal in 1993."
      },
      {
        "src": "img/gallery-12.jpg",
        "alt": "Japanese Experimental Module testing continues in Marshall's Neutral Buoyancy Simulator, with NASDA lettering visible on the module mockup, 1993.",
        "credit": "NASA/MSFC (Feb. 23, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "A closer view from the same session, NASDA's lettering plainly visible on the mockup wall."
      },
      {
        "src": "img/gallery-13.jpg",
        "alt": "Three suited astronauts train underwater at the tank wall of Marshall's Neutral Buoyancy Simulator in preparation for Hubble Space Telescope servicing, 1995.",
        "credit": "NASA/MSFC (Feb. 9, 1995) &middot; <b>images.nasa.gov</b>",
        "caption": "Hubble servicing needed more than one pair of hands &mdash; three astronauts trained together at the tank wall."
      },
      {
        "src": "img/gallery-14.jpg",
        "alt": "Astronauts Tamara Jernigan and David Wolf train underwater in Marshall's Neutral Buoyancy Simulator for International Space Station Alpha extravehicular activities, 1995.",
        "credit": "NASA/MSFC (July 12, 1995) &middot; <b>images.nasa.gov</b>",
        "caption": "Tamara Jernigan and David Wolf rehearsed early space-station spacewalks here, years before the ISS existed."
      },
      {
        "src": "img/gallery-15.jpg",
        "alt": "Astronauts Susan Helms and Carl Walz train underwater in Marshall's Neutral Buoyancy Simulator for International Space Station Alpha extravehicular activities, 1995.",
        "credit": "NASA/MSFC (July 18, 1995) &middot; <b>images.nasa.gov</b>",
        "caption": "A week later, Susan Helms and Carl Walz ran the same ISS EVA rehearsal."
      },
      {
        "src": "img/gallery-16.jpg",
        "alt": "Astronaut Thomas Akers gets assistance donning a training version of the Space Shuttle spacesuit before an underwater training session at Marshall's Neutral Buoyancy Simulator, 1993.",
        "credit": "NASA/MSFC (June 15, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "Suiting up for STS-61 &mdash; the mission that would rescue the flawed Hubble Space Telescope &mdash; started here in Marshall's tank."
      },
      {
        "src": "img/gallery-17.jpg",
        "alt": "Astronauts Kathryn Thornton and Thomas Akers, scheduled for Hubble servicing spacewalks, prepare suit-glove ring hardware before training in Marshall's Neutral Buoyancy Simulator, 1993.",
        "credit": "NASA/MSFC (June 15, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "Kathryn Thornton and Thomas Akers, the two spacewalkers of STS-61, checking glove-ring hardware before going underwater."
      },
      {
        "src": "img/gallery-18.jpg",
        "alt": "Astronauts Jeffrey Hoffman and Story Musgrave monitor an underwater training session from the control room of Marshall's Neutral Buoyancy Simulator, 1993.",
        "credit": "NASA/MSFC (June 15, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "From the control room, Jeffrey Hoffman and Story Musgrave watched their crewmate train on the wall of monitors."
      },
      {
        "src": "img/gallery-19.jpg",
        "alt": "Astronaut Claude Nicollier waits to take the controls of a remote manipulator system simulator during training at Marshall's Neutral Buoyancy Simulator, 1993.",
        "credit": "NASA/MSFC (June 15, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "The robotic arm that would hold Hubble steady during repairs got its own rehearsal, alongside the divers in the tank."
      },
      {
        "src": "img/gallery-20.jpg",
        "alt": "Astronaut Thomas Akers uses a power wrench on a Hubble Space Telescope mockup during underwater training at Marshall's Neutral Buoyancy Simulator, 1993.",
        "credit": "NASA/MSFC (June 15, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "Every tool Hubble's repair would require, including this power wrench, was tested here first."
      },
      {
        "src": "img/gallery-21.jpg",
        "alt": "Safety divers prepare a Hubble Space Telescope mockup for a training session in Marshall's Neutral Buoyancy Simulator, 1993.",
        "credit": "NASA/MSFC (June 1, 1993) &middot; <b>images.nasa.gov</b>",
        "caption": "Before any astronaut entered the water, safety divers staged the Hubble mockup for one of 32 training sessions that June."
      },
      {
        "src": "img/gallery-22.jpg",
        "alt": "Dr. Wernher von Braun submerges into Marshall's Neutral Buoyancy Simulator, viewed from above through the tank's hatch opening, 1967.",
        "credit": "NASA/MSFC (Nov. 14, 1967) &middot; <b>images.nasa.gov</b>",
        "caption": "Marshall's director wasn't just suiting up for a photo &mdash; he went all the way under, viewed here from above."
      },
      {
        "src": "img/gallery-23.jpg",
        "alt": "Dr. Wernher von Braun submerges underwater in Marshall's Neutral Buoyancy Simulator, 1967.",
        "credit": "NASA/MSFC (Nov. 14, 1967) &middot; <b>images.nasa.gov</b>",
        "caption": "Another moment from von Braun's underwater tryout, the same day the tank opened for business."
      },
      {
        "src": "img/gallery-24.jpg",
        "alt": "Dr. Wernher von Braun is fitted with a space suit and diving equipment ahead of a tryout in Marshall's Neutral Buoyancy Simulator, 1967.",
        "credit": "NASA/MSFC (Nov. 14, 1967) &middot; <b>images.nasa.gov</b>",
        "caption": "Even the center director had to suit up like everyone else before going in the water."
      },
      {
        "src": "img/gallery-25.jpg",
        "alt": "Mercury astronaut L. Gordon Cooper checks the neck ring of Dr. Wernher von Braun's space suit before von Braun submerges into Marshall's Neutral Buoyancy Simulator, 1967.",
        "credit": "NASA/MSFC (Nov. 14, 1967) &middot; <b>images.nasa.gov</b>",
        "caption": "A Mercury astronaut, Gordon Cooper, double-checked von Braun's suit &mdash; a reminder of how new this whole idea still was in 1967."
      },
      {
        "src": "img/gallery-26.jpg",
        "alt": "Dr. Wernher von Braun leaves the suiting-up van wearing a pressure suit, preparing for a tryout in Marshall's Neutral Buoyancy Simulator, 1967.",
        "credit": "NASA/MSFC (Nov. 14, 1967) &middot; <b>images.nasa.gov</b>",
        "caption": "Suited and ready, von Braun heads from the suiting van toward the tank that would train astronauts for three decades."
      },
      {
        "src": "img/gallery-27.jpg",
        "alt": "Divers work with a USAF D-21 airlock module during an underwater test of Skylab hardware in Marshall's Neutral Buoyancy Simulator, 1970.",
        "credit": "NASA/MSFC (Nov. 18, 1970) &middot; <b>images.nasa.gov</b>",
        "caption": "Three years before Skylab's famous rescue, this tank was already rehearsing its airlock hardware."
      },
      {
        "src": "img/gallery-28.jpg",
        "alt": "An emergency procedure to deploy a twin-pole sunshade over the damaged Skylab workshop is rehearsed underwater in Marshall's Neutral Buoyancy Simulator, 1973.",
        "credit": "NASA/MSFC (May 1973) &middot; <b>images.nasa.gov</b>",
        "caption": "The parasol that saved Skylab from overheating was rehearsed here first, underwater, days after the station launched damaged."
      },
      {
        "src": "img/gallery-29.jpg",
        "alt": "Astronauts Russell Schweickart and Edward Gibson rehearse freeing Skylab's jammed solar array panels underwater in Marshall's Neutral Buoyancy Simulator, 1973.",
        "credit": "NASA/MSFC (May 1973) &middot; <b>images.nasa.gov</b>",
        "caption": "A tangled strap threatened to leave Skylab without power &mdash; Schweickart and Gibson worked out the fix underwater before the crew ever tried it in orbit."
      },
      {
        "src": "img/gallery-30.jpg",
        "alt": "The Saturn I liquid-oxygen tank is aligned with the end spider beam during fabrication in Building 4705 at Marshall Space Flight Center, 1960.",
        "credit": "NASA/MSFC (Jan. 25, 1960) &middot; <b>images.nasa.gov</b>",
        "caption": "Before it held water for weightlessness training, this building fabricated Saturn I rocket tanks &mdash; seen here eight years before the NBS tank was built inside it."
      },
      {
        "src": "img/gallery-31.jpg",
        "alt": "The Saturn V S-IC-T fuel tank assembly is mated to its liquid-oxygen tank in Building 4705 at Marshall Space Flight Center, 1964.",
        "credit": "NASA/MSFC (Dec. 1, 1964) &middot; <b>images.nasa.gov</b>",
        "caption": "Building 4705's earlier life: mating fuel and oxygen tanks for the Saturn V's first stage, four years before it became a swimming pool for astronauts."
      },
      {
        "src": "img/gallery-32.jpg",
        "alt": "The Saturn V S-IC-T static-test stage is assembled in the horizontal assembly station in Building 4705 at Marshall Space Flight Center, 1965.",
        "credit": "NASA/MSFC (1965) &middot; <b>images.nasa.gov</b>",
        "caption": "The same high bay, still building rocket stages &mdash; the conversion to a neutral buoyancy tank was still three years away."
      },
      {
        "src": "img/gallery-33.jpg",
        "alt": "A Historic American Engineering Record photograph shows a wide exterior establishing view of the Neutral Buoyancy Simulator's hangar-style high bay, Building 4705.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; exterior view, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B-1 &middot; <b>loc.gov</b>",
        "caption": "From the outside, the NBS looked like any other hangar on Marshall's campus &mdash; nothing revealed the 1.5-million-gallon tank inside."
      },
      {
        "src": "img/gallery-34.jpg",
        "alt": "A Historic American Engineering Record photograph shows the Neutral Buoyancy Simulator's high-bay door open, with a marquee reading NEUTRAL BUOYANCY SIMULATOR visible above the doorway.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; exterior view with marquee, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B-2 &middot; <b>loc.gov</b>",
        "caption": "The building's own signage, confirming exactly what went on inside."
      },
      {
        "src": "img/gallery-35.jpg",
        "alt": "A Historic American Engineering Record photograph shows the interior tank wall of the Neutral Buoyancy Simulator, with catwalks, observation portholes, and an American flag mounted on the wall.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; interior tank wall, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B-3 &middot; <b>loc.gov</b>",
        "caption": "The same portholes seen in the cutaway drawing, photographed from the catwalk that ringed the tank."
      },
      {
        "src": "img/gallery-36.jpg",
        "alt": "A Historic American Engineering Record photograph shows the drained Neutral Buoyancy Simulator tank from above, with catwalks and an MSFC stencil visible on the tank structure.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; drained tank, aerial interior view, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B-4 &middot; <b>loc.gov</b>",
        "caption": "Empty of water, the tank's true scale &mdash; 75 feet across and 40 feet deep &mdash; becomes obvious from above."
      },
      {
        "src": "img/gallery-37.jpg",
        "alt": "A Historic American Engineering Record photograph shows the drained Neutral Buoyancy Simulator tank from another angle, including the wall flag and a control/observation area.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; drained tank interior, control/observation area, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B-5 &middot; <b>loc.gov</b>",
        "caption": "The observation area that let engineers on the surface track every diver in the empty tank below."
      },
      {
        "src": "img/gallery-38.jpg",
        "alt": "A Historic American Engineering Record title sheet for the Neutral Buoyancy Simulator, including a site map, vicinity map, Alabama state map, and a 1995 photograph.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; title/index sheet, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B, Sheet 1 of 11 &middot; <b>loc.gov</b>",
        "caption": "The federal record confirms it: the high bay was built in 1955 by the Army at Redstone Arsenal, and the NBS tank was built into it in 1963."
      },
      {
        "src": "img/gallery-39.jpg",
        "alt": "A Historic American Engineering Record First Level Plan of the Neutral Buoyancy Simulator, labeling rooms including chemical/chlorine storage, water filtration, the metal fabrication shop, EVA-suit maintenance, and the test monitoring and control room.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; First Level Plan, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B, Sheet 2 of 11 &middot; <b>loc.gov</b>",
        "caption": "A full floor plan of the ground level &mdash; keeping 1.5 million gallons of water clean and breathable took an entire building of its own support systems."
      },
      {
        "src": "img/gallery-40.jpg",
        "alt": "A Historic American Engineering Record Second Level Plan of the Neutral Buoyancy Simulator, labeling the tank itself, EVA suit system repair and maintenance, the fabric shop, and the high-bay machine shop.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; Second Level Plan, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B, Sheet 3 of 11 &middot; <b>loc.gov</b>",
        "caption": "The tank itself sat on this level, ringed by the shops that kept suits and tools ready for the next training run."
      },
      {
        "src": "img/gallery-41.jpg",
        "alt": "A Historic American Engineering Record Third Level Plan of the Neutral Buoyancy Simulator, labeling the remote manipulator simulator control room, locker rooms, and a fabric shop.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; Third Level Plan, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B, Sheet 4 of 11 &middot; <b>loc.gov</b>",
        "caption": "The robotic-arm simulator that Claude Nicollier trained on had its own dedicated control room on this level."
      },
      {
        "src": "img/gallery-42.jpg",
        "alt": "A Historic American Engineering Record Fourth Level Plan of the Neutral Buoyancy Simulator, labeling the overhead crane rail, EVA umbilical cleaning and storage, astronaut/EVA suit lifts, an emergency hyperbaric chamber, and the astronaut monitoring and control room.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; Fourth Level Plan, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B, Sheet 5 of 11 &middot; <b>loc.gov</b>",
        "caption": "An emergency hyperbaric chamber sat one level up &mdash; a reminder that sending divers into a 40-foot tank for hours at a time carried real risk."
      },
      {
        "src": "img/gallery-43.jpg",
        "alt": "A Historic American Engineering Record Section B-B drawing, an interior cross-section elevation of the Neutral Buoyancy Simulator tank and its support structure.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; Section B-B, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B, Sheet 7 of 11 &middot; <b>loc.gov</b>",
        "caption": "A second cross-section, cut from a different angle than the drawing already on display at this stop."
      },
      {
        "src": "img/gallery-44.jpg",
        "alt": "A Historic American Engineering Record drawing showing the South Elevation of the Neutral Buoyancy Simulator, both closed and with the bay door partially open, with the NEUTRAL BUOYANCY SIMULATOR signage labeled directly on the drawing.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; South Elevation, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B, Sheet 8 of 11 &middot; <b>loc.gov</b>",
        "caption": "Two views of the same wall, door closed and door open &mdash; the building's only real hint from outside that anything unusual was happening within."
      },
      {
        "src": "img/gallery-45.jpg",
        "alt": "A Historic American Engineering Record drawing showing the West Elevation of the Neutral Buoyancy Simulator building.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; West Elevation, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B, Sheet 9 of 11 &middot; <b>loc.gov</b>",
        "caption": "The building's west face, drawn to the same measured standard as the rest of this National Historic Landmark survey."
      },
      {
        "src": "img/gallery-46.jpg",
        "alt": "A Historic American Engineering Record drawing showing the North Elevation of the Neutral Buoyancy Simulator building.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; North Elevation, Neutral Buoyancy Simulator &middot; HAER No. AL-129-B, Sheet 10 of 11 &middot; <b>loc.gov</b>",
        "caption": "The north face completes the building's four elevations in the historic record."
      },
      {
        "src": "img/gallery-47.jpg",
        "alt": "A Historic American Engineering Record axonometric cutaway diagram of the Neutral Buoyancy Simulator complex, labeling the water control system, control room, and tank structure.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; axonometric cutaway diagram, Neutral Buoyancy Simulator Complex &middot; HAER No. AL-129-B, Sheet 11 of 11 &middot; <b>loc.gov</b>",
        "caption": "One drawing, the whole system: water control, control room, and tank, all labeled together in this cutaway of the complex."
      },
      {
        "src": "img/drawing-1.jpg",
        "alt": "A HAER measured cross-section drawing, Section A-A, of the Neutral Buoyancy Simulator, showing the tank's cutaway interior with its rows of observation portholes, roof exhaust fans, and the adjoining support offices and control room.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured cross-section drawing, Section A-A &middot; HAER No. AL-129-B, Sheet 6 of 11 &middot; <b>loc.gov</b>",
        "caption": "A cutaway section through the tank reveals the full 40-foot depth and its rings of observation portholes, with the control room and support offices attached at right."
      }
    ],
    "lookFor": "There's no tank here anymore &mdash; this drawing is how the room was laid out before it came down: the 40-foot-deep tank on the left, the control room and support offices attached at right. Thirty years of spacewalk training happened inside that cutaway before the facility closed in 1997 and was demolished in late 2025.",
    "askYourHost": [
      "What convinced NASA that a water tank was a good stand-in for weightlessness?",
      "How did underwater training actually differ from a real spacewalk, according to the astronauts who did both?",
      "Why was this facility retired instead of upgraded when Houston's larger lab opened?"
    ],
    "quiz": {
      "question": "Quick one &mdash; what made this facility possible as a weightlessness trainer?",
      "options": [
        { "text": "Astronauts trained in zero gravity aircraft here instead", "correct": false },
        { "text": "Underwater buoyancy can be tuned to cancel out the effect of gravity", "correct": true },
        { "text": "The facility used a giant centrifuge", "correct": false }
      ],
      "correctFeedback": "&#10003; Exactly. Divers carefully balanced a suited astronaut's buoyancy so they neither floated up nor sank &mdash; simulating weightlessness for hours at a time.",
      "wrongFeedback": "Not quite &mdash; the trick was underwater buoyancy, carefully tuned to neither float nor sink."
    },
    "video": null,
    "cta": {
      "heading": "Curious about spacewalk training today?",
      "body": "The method proved out here now lives on at NASA Johnson Space Center's Neutral Buoyancy Laboratory, where astronauts still train underwater for every spacewalk."
    },
    "wayfindNext": { "nextStopId": "stop6", "label": "Next: Dynamic Test Stand" },
    "nextStopId": "stop6"
  },
  {
    "id": "stop6",
    "qrFile": "06-dynamic-test-stand",
    "title": "Dynamic Test Stand: Shaking the Whole Stack",
    "shortTitle": "Dynamic Test Stand",
    "location": "Former Building 4550 (demolished, Jan 2026)",
    "locationShort": "Former Building 4550",
    "subtitle": "Legacy site &middot; West Test Area, Building 4550",
    "lab": "Structural Dynamics",
    "tourTime": "~15 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["History", "Adv. Space Transportation"],
    "available": true,
    "legacySite": true,
    "hazards": [],
    "campusPin": { "xPct": 68.3, "yPct": 79.9 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view centered on the former Dynamic Test Stand site, West Test Area, on the NASA Marshall campus.",
      "credit": "USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/dynamic-test-stand-4550",
    "hero": {
      "src": "img/hero.jpg",
      "alt": "The Space Shuttle Orbiter Enterprise is installed in liftoff configuration inside the towering Dynamic Test Stand at NASA Marshall Space Flight Center, 1978.",
      "credit": "NASA/MSFC (1978) &middot; Space Shuttle Orbiter Enterprise installed for Mated Vertical Ground Vibration Test &middot; <b>images.nasa.gov</b> &middot; cleared for public release"
    },
    "callouts": [
      { "xPct": 53.5, "yPct": 11.5, "label": "Overhead crane hoist" },
      { "xPct": 44.0, "yPct": 38.0, "label": "Orbiter Enterprise's nose" },
      { "xPct": 48.0, "yPct": 52.0, "label": "Enterprise markings on the fuselage" },
      { "xPct": 40.0, "yPct": 84.0, "label": "Ground crew watching the lift" }
    ],
    "thumb": "img/hero.jpg",
    "factbox": "Here, engineers stacked an entire Space Shuttle in its liftoff configuration &mdash; orbiter, tank, and boosters together &mdash; just to shake it and find out how it would move.",
    "narration": {
      "durationLabel": "~46 sec · produced narration",
      "audio": "audio/narration.mp3",
      "text": "A rocket doesn't just fly straight up &mdash; it flexes, bends, and vibrates as it goes. Getting those vibrations wrong can shake a vehicle apart. Right here, in 1978, engineers assembled the Space Shuttle Orbiter Enterprise, its external tank, and its twin solid rocket boosters into full liftoff configuration &mdash; the first time the entire Shuttle stack had ever been mated vertically &mdash; and then deliberately shook the whole thing. The Mated Vertical Ground Vibration Test measured exactly how the stack would flex in flight, long before any Shuttle ever left the ground. This stand stood until January 2026, when it was brought down along with the nearby T-Tower."
    },
    "hook": "A rocket doesn't just fly straight up &mdash; it flexes, bends, and vibrates as it goes. Getting those vibrations wrong can shake a vehicle apart.",
    "cuePoints": { "hook": 0, "explainer": 10, "wowStat": 24, "media": 33, "why": 41 },
    "whyItMatters": "A launch vehicle isn't rigid &mdash; it bends and resonates as engines fire and aerodynamic forces build. If a vehicle's structure resonates at the wrong frequency, the result can be catastrophic. Before the Space Shuttle ever flew, its complete stack was assembled here and shaken on purpose, so engineers could measure its true vibration modes and make sure the real thing would fly safely.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 0,
    "keyfacts": [
      { "num": "360", "label": "feet tall", "detail": "Topped by a 64-ft derrick — once the tallest man-made structure in North Alabama" },
      { "num": "1978", "label": "first full-stack test", "detail": "First time orbiter, tank, and boosters were mated vertically" },
      { "num": "MVGVT", "label": "the test's name", "detail": "Mated Vertical Ground Vibration Test — measuring how the stack would flex in flight" },
      { "num": "2026", "label": "demolished", "detail": "Imploded January 10, 2026, alongside the nearby T-Tower" }
    ],
    "deepDive": {
      "summary": "Go deeper: why shake a whole rocket",
      "open": true,
      "html": "Built in 1964, this 360-foot tower — topped by a 64-foot derrick and, for a time, the tallest man-made structure in North Alabama — was originally built to test the Saturn V: fully assembled Saturn V vehicles were suspended inside it and shaken to find their bending modes, the same low-frequency flex patterns that dictated how the real rocket's guidance system would have to respond in flight.<br><br>The stand later hosted the Space Shuttle's Mated Vertical Ground Vibration Test in 1978 &mdash; the first time an orbiter, external tank, and both solid rocket boosters were stacked together vertically anywhere. Deliberately vibrating the full assembly let engineers validate computer models of how the real Shuttle would flex and resonate during ascent, catching structural risks on the ground instead of in flight. Even after Shuttle testing wound down, the stand kept working: it was last used in the early 2000s for microgravity research before standing dormant for two more decades, until its implosion in January 2026.<br><br>Built into one bay along the stand's east side starting in 1968, a lesser-known feature called the Zero Gravity Drop Tower let a shielded capsule fall 294 feet down vertical guide rails while air thrusters pushed it faster than ordinary free-fall, letting test packages inside float free of the capsule floor for as long as 4.3 seconds before the capsule slammed into a catch tube, where a trapped-air cushion and 5 feet of rubberized horsehair matting brought it to a stop (HAER AL-129-C).<br><br>The HAER measured-drawing set fills in who built what: the Saturn V-era test platforms inside the stand went up starting in 1967 under contractor MCA, while the Shuttle-era retrofit platforms were built by the T.H. Taylor Corporation in 1978&ndash;79. The stand's hydrodynamic support system, which let the suspended test article sway on a virtually frictionless cushion, was designed by Martin Marietta, and its Saturn V-era shaker system was supplied by Ling-Temco-Vought. The documented Shuttle MVGVT campaign itself ran from October 1978 through February 1979, conducted under NASA's Structures and Mechanics Test and Analysis Section (HAER AL-129-C)."
    },
    "detailImage": {
      "src": "img/detail-1.jpg",
      "alt": "Workmen lower a solid rocket booster nose cone into place inside the Dynamic Test Stand at NASA Marshall, 1978.",
      "credit": "NASA/MSFC (1978) &middot; Solid rocket booster nose cone installation, Dynamic Test Stand &middot; <b>images.nasa.gov</b>"
    },
    "galleryTitle": "More from the Dynamic Test Stand",
    "gallery": [
      {
        "src": "img/gallery-1.jpg",
        "alt": "An External Tank is installed into the Dynamic Test Stand at Marshall Space Flight Center for the Mated Vertical Ground Vibration Test, 1978.",
        "credit": "NASA/MSFC (Sept. 29, 1978) &middot; <b>images.nasa.gov</b>",
        "caption": "At 154 feet long and 27 feet across, the External Tank is lowered into the stand ahead of mating with the solid rocket boosters."
      },
      {
        "src": "img/gallery-2.jpg",
        "alt": "The Space Shuttle Orbiter Enterprise is installed in liftoff configuration into the Dynamic Test Stand at Marshall Space Flight Center, 1978.",
        "credit": "NASA/MSFC (Oct. 1, 1978) &middot; <b>images.nasa.gov</b>",
        "caption": "Orbiter Enterprise goes in last, completing the first full Shuttle stack ever assembled vertically."
      },
      {
        "src": "img/gallery-3.jpg",
        "alt": "Workmen lower a solid rocket booster nose cone to complete stacking of the left-side SRB in the Dynamic Test Stand, 1978.",
        "credit": "NASA/MSFC (Sept. 1978) &middot; <b>images.nasa.gov</b>",
        "caption": "Finishing the left-side booster stack, piece by piece, before the tank and orbiter join it."
      },
      {
        "src": "img/gallery-4.jpg",
        "alt": "A black-and-white archival photograph of the Saturn V Dynamic Test Stand, Building 4550, rising above the tree line at NASA Marshall Space Flight Center's East Test Area, with its 175-ton derrick crane visible near the roofline.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; Saturn V Dynamic Test Stand, exterior view &middot; HAER No. AL-129-C-1 &middot; <b>loc.gov</b>",
        "caption": "The 360-foot Dynamic Test Stand towers over the East Test Area's tree line, its derrick crane visible near the roof."
      },
      {
        "src": "img/drawing-1.jpg",
        "alt": "A HAER measured drawing titled \"Zero Gravity Drop Tower,\" showing an axonometric cutaway of the drop-tower shelters built into one bay of the Dynamic Test Stand, plus section, plan, and elevation views of the drop capsule and catch tube.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, \"Zero Gravity Drop Tower,\" HAER No. AL-129-C, Sheet 20 of 20 &middot; <b>loc.gov</b>",
        "caption": "The Zero Gravity Drop Tower built into one bay of the stand, where a shielded capsule free-fell 294 feet to test hardware in near-weightlessness."
      },
      {
        "src": "img/gallery-5.jpg",
        "alt": "A double-exposure photograph captures the Space Shuttle Orbiter Enterprise being hoisted toward the open bay of the Dynamic Test Stand at sunset, its tiered work platforms glowing gold in the low light, at NASA Marshall Space Flight Center, 1978.",
        "credit": "NASA/MSFC (1978) &middot; double exposure, Orbiter Enterprise lift into the Dynamic Test Stand &middot; <b>images.nasa.gov</b>",
        "caption": "A double-exposure frame catches Enterprise mid-lift at sunset, the stand's tiered work platforms glowing gold in the low light."
      },
      {
        "src": "img/gallery-6.jpg",
        "alt": "A HAER color photograph of the Dynamic Test Stand rising above a foreground of insulated cryogenic supply piping and valves, framed by a pine tree against a deep blue sky.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; color photograph, Dynamic Test Stand exterior &middot; HAER No. AL-129-C (photo number illegible on the physical border) &middot; <b>loc.gov</b>",
        "caption": "Insulated cryogenic supply lines lead the eye toward the stand itself in this HAER color photograph."
      },
      {
        "src": "img/gallery-7.jpg",
        "alt": "A HAER color photograph of the Dynamic Test Stand under a bright blue sky with scattered clouds, a length of elevated cryogenic piping and a control valve running through the foreground grass.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; color photograph, Dynamic Test Stand exterior &middot; HAER No. AL-129-C (photo number partially legible, not confirmable) &middot; <b>loc.gov</b>",
        "caption": "Another angle on the stand's cryogenic supply piping, shot the same day as the previous photo."
      },
      {
        "src": "img/gallery-8.jpg",
        "alt": "A black-and-white HAER photograph of the Dynamic Test Stand under construction, its derrick partly erected, with the older Redstone Test Stand and Static Test Tower visible in the distance across the West Test Area.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; Dynamic Test Stand under construction &middot; HAER No. AL-129-C-2 &middot; <b>loc.gov</b>",
        "caption": "The stand mid-construction, its derrick only partly built, with two older MSFC test stands visible in the distance."
      },
      {
        "src": "img/gallery-9.jpg",
        "alt": "A black-and-white HAER photograph of the completed Dynamic Test Stand and its derrick crane, framed by a dead tree and a stand of pines in an open field.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; Dynamic Test Stand exterior view &middot; HAER No. AL-129-C-3 &middot; <b>loc.gov</b>",
        "caption": "The finished stand and derrick, seen from across the field at Marshall's East Test Area."
      },
      {
        "src": "img/gallery-10.jpg",
        "alt": "A black-and-white HAER photograph showing the Dynamic Test Stand and its derrick alongside a second, smaller test tower under construction, with a third, unfinished tower visible at far left, all rising above the tree line of the West Test Area.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; Dynamic Test Stand with adjacent test towers &middot; HAER No. AL-129-C-8 &middot; <b>loc.gov</b>",
        "caption": "The Dynamic Test Stand towers over two smaller test structures rising nearby in the West Test Area."
      },
      {
        "src": "img/drawing-2.jpg",
        "alt": "The HAER title sheet for the Saturn V Dynamic Test Stand, Building 4550, showing an aerial photo of the stand with Orbiter Enterprise partially installed, a site-vicinity map of Huntsville, Alabama, and a summary of the stand's history and the HAER recording project.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, title sheet &middot; HAER No. AL-129-C, Sheet 1 of 20 &middot; <b>loc.gov</b>",
        "caption": "The HAER survey's title sheet, summarizing the stand's history as a National Historic Landmark."
      },
      {
        "src": "img/drawing-3.jpg",
        "alt": "A HAER measured drawing showing a 2007 site map of Marshall Space Flight Center's East Test Area, with the Dynamic Test Stand, the Redstone Test Stand, and the Static Test Tower labeled within the West and East Test Areas.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, East Test Area site map, 2007 &middot; HAER No. AL-129-C, Sheet 2 of 20 &middot; <b>loc.gov</b>",
        "caption": "The stand's place on Marshall's test-area map, alongside its older neighbors the Redstone Test Stand and the Static Test Tower."
      },
      {
        "src": "img/drawing-4.jpg",
        "alt": "A HAER measured drawing of the Dynamic Test Stand's ground floor plan, showing the hoist houses, equipment rooms, and structural bay layout at grade level.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, ground floor plan &middot; HAER No. AL-129-C, Sheet 3 of 20 &middot; <b>loc.gov</b>",
        "caption": "The ground-floor layout of the stand's hoist houses and equipment rooms."
      },
      {
        "src": "img/drawing-5.jpg",
        "alt": "A HAER measured drawing of the Dynamic Test Stand's floor plans for levels 2 through 4.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, floor plans, levels 2&ndash;4 &middot; HAER No. AL-129-C, Sheet 4 of 20 &middot; <b>loc.gov</b>",
        "caption": "Floor plans for levels 2 through 4 of the stand's interior."
      },
      {
        "src": "img/drawing-6.jpg",
        "alt": "A HAER measured drawing of the Dynamic Test Stand's floor plans for levels 5 through 7.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, floor plans, levels 5&ndash;7 &middot; HAER No. AL-129-C, Sheet 5 of 20 &middot; <b>loc.gov</b>",
        "caption": "Floor plans for levels 5 through 7 of the stand's interior."
      },
      {
        "src": "img/drawing-7.jpg",
        "alt": "A HAER measured drawing of the Dynamic Test Stand's floor plans for levels 8 through 10.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, floor plans, levels 8&ndash;10 &middot; HAER No. AL-129-C, Sheet 6 of 20 &middot; <b>loc.gov</b>",
        "caption": "Floor plans for levels 8 through 10 of the stand's interior."
      },
      {
        "src": "img/drawing-8.jpg",
        "alt": "A HAER measured drawing of the Dynamic Test Stand's floor plans for levels 11 through 13.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, floor plans, levels 11&ndash;13 &middot; HAER No. AL-129-C, Sheet 7 of 20 &middot; <b>loc.gov</b>",
        "caption": "Floor plans for levels 11 through 13 of the stand's interior."
      },
      {
        "src": "img/drawing-9.jpg",
        "alt": "A HAER measured drawing of the Dynamic Test Stand's floor plan for level 14 and the roof.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, floor plan, level 14 &amp; roof &middot; HAER No. AL-129-C, Sheet 8 of 20 &middot; <b>loc.gov</b>",
        "caption": "The top floor plan and roof layout, near the derrick's base 360 feet up."
      },
      {
        "src": "img/drawing-10.jpg",
        "alt": "A HAER measured drawing titled \"1963 Elevations (Saturn V),\" showing north, south, east, and west elevations of the Dynamic Test Stand as originally built, with level heights labeled up to 367 feet.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, \"1963 Elevations (Saturn V)\" &middot; HAER No. AL-129-C, Sheet 9 of 20 &middot; <b>loc.gov</b>",
        "caption": "All four elevations of the stand as originally built for Saturn V testing in 1963, rising to 367 feet."
      },
      {
        "src": "img/drawing-11.jpg",
        "alt": "A HAER measured drawing titled \"1975 Elevations (Shuttle),\" showing the Dynamic Test Stand's four elevations after its retrofit for Space Shuttle dynamic testing.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, \"1975 Elevations (Shuttle)\" &middot; HAER No. AL-129-C, Sheet 10 of 20 &middot; <b>loc.gov</b>",
        "caption": "The same four elevations after the stand's 1975 retrofit for Space Shuttle vibration testing."
      },
      {
        "src": "img/drawing-12.jpg",
        "alt": "A HAER measured drawing, an isometric view of the Saturn V-era test platform assembly built inside the Dynamic Test Stand, constructed by MCA starting in 1967.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, Saturn V platform assembly isometric &middot; HAER No. AL-129-C, Sheet 11 of 20 &middot; <b>loc.gov</b>",
        "caption": "The Saturn V-era test platform assembly, built inside the stand by MCA starting in 1967."
      },
      {
        "src": "img/drawing-13.jpg",
        "alt": "A HAER measured drawing, an isometric view of the Space Shuttle-era test platform assembly retrofit inside the Dynamic Test Stand by the T.H. Taylor Corporation, 1978&ndash;79.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, Shuttle platform assembly isometric &middot; HAER No. AL-129-C, Sheet 12 of 20 &middot; <b>loc.gov</b>",
        "caption": "The Shuttle-era test platform assembly, retrofit by the T.H. Taylor Corporation in 1978&ndash;79."
      },
      {
        "src": "img/drawing-14.jpg",
        "alt": "A HAER measured drawing detailing the Dynamic Test Stand's derricks and craft-loading mechanism.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, derricks &amp; craft loading &middot; HAER No. AL-129-C, Sheet 13 of 20 &middot; <b>loc.gov</b>",
        "caption": "How the stand's derricks lifted flight hardware into place for testing."
      },
      {
        "src": "img/drawing-15.jpg",
        "alt": "A HAER measured drawing titled \"Derrick Reeving,\" showing archival photos of the 200-ton and 40-ton derrick hooks and blocks, a diagram of the block-and-tackle reeving path, and hoist-house floor plans.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, \"Derrick Reeving\" &middot; HAER No. AL-129-C, Sheet 14 of 21 as printed on this sheet &middot; <b>loc.gov</b>",
        "caption": "How the derrick's 200-ton main hook and 40-ton auxiliary hook were reeved through their block-and-tackle system. This sheet's own title block prints \"14 OF 21\" &mdash; an inconsistency in the original document, since every other sheet in the set reads \"OF 20.\""
      },
      {
        "src": "img/drawing-16.jpg",
        "alt": "A HAER measured drawing detailing the Dynamic Test Stand's hydrodynamic support system, designed by Martin Marietta.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, hydrodynamic supports &middot; HAER No. AL-129-C, Sheet 15 of 20 &middot; <b>loc.gov</b>",
        "caption": "The hydrodynamic support system, designed by Martin Marietta, that let the test article sway freely on a virtually frictionless cushion."
      },
      {
        "src": "img/drawing-17.jpg",
        "alt": "A HAER measured drawing detailing the Dynamic Test Stand's snubber and restoration system.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, snubber &amp; restoration system &middot; HAER No. AL-129-C, Sheet 16 of 20 &middot; <b>loc.gov</b>",
        "caption": "The snubber and restoration system that limited how far the suspended test article could sway before pulling it back to center."
      },
      {
        "src": "img/drawing-18.jpg",
        "alt": "A HAER measured drawing detailing the Saturn V-era test-article configurations used in the Dynamic Test Stand.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, Saturn V test configurations &middot; HAER No. AL-129-C, Sheet 17 of 20 &middot; <b>loc.gov</b>",
        "caption": "The different Saturn V test-article configurations run through the stand."
      },
      {
        "src": "img/drawing-19.jpg",
        "alt": "A HAER measured drawing detailing the placement of the Ling-Temco-Vought electro-dynamic shaker system used for Saturn V vibration testing.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, shaker placement diagram &middot; HAER No. AL-129-C, Sheet 18 of 20 &middot; <b>loc.gov</b>",
        "caption": "Where the Ling-Temco-Vought shaker system was mounted to vibrate the suspended Saturn V test article."
      },
      {
        "src": "img/drawing-20.jpg",
        "alt": "A HAER measured drawing titled \"Shuttle Dynamic Testing,\" describing the Mated Vertical Ground Vibration Test's electro-dynamic shaker system, symmetric and asymmetric loading diagrams for launch and boost configurations, and a shaker schedule table.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, \"Shuttle Dynamic Testing\" &middot; HAER No. AL-129-C, Sheet 19 of 20 &middot; <b>loc.gov</b>",
        "caption": "The Shuttle-era MVGVT shaker setup, run by NASA's Structures and Mechanics Test and Analysis Section between October 1978 and February 1979."
      }
    ],
    "lookFor": "There's no stand here anymore &mdash; this marks where a full Space Shuttle stack was assembled and shaken on purpose, before the structure was imploded in January 2026.",
    "askYourHost": [
      "What does deliberately shaking a full Shuttle stack actually look like in practice?",
      "Did the 1978 vibration test turn up anything that changed the Shuttle's design?",
      "Why was this stand demolished now, decades after its last test?"
    ],
    "quiz": {
      "question": "Quick one &mdash; why deliberately vibrate a fully stacked launch vehicle on the ground?",
      "options": [
        { "text": "To test the paint job under stress", "correct": false },
        { "text": "To measure how the real structure will flex and resonate in flight", "correct": true },
        { "text": "To simulate an earthquake at the launch pad", "correct": false }
      ],
      "correctFeedback": "&#10003; Exactly. Every structure has its own vibration modes &mdash; measuring them on the ground let engineers confirm the Shuttle wouldn't resonate itself apart during ascent.",
      "wrongFeedback": "Not quite &mdash; the point was measuring the real structure's flex and resonance before it ever flew."
    },
    "video": {
      "sectionTitle": "Watch: the 2026 implosion",
      "src": "video/clip.mp4",
      "poster": "img/hero.jpg",
      "title": "NASA Marshall implodes the Dynamic Test Stand and T-Tower, January 2026",
      "credit": "NASA/MSFC (Jan. 10, 2026) &middot; Tyson Eason, Alex Russell, Mark McKinley, Paul Lockhart &middot; <b>images.nasa.gov</b> &middot; plays locally / offline. Production clip ships with captions (508)."
    },
    "cta": {
      "heading": "Building something that needs to survive vibration?",
      "body": "The Test Lab's structural dynamics heritage, proven on the Saturn V and Space Shuttle, continues in Marshall's active vibration and modal test facilities today."
    },
    "wayfindNext": { "nextStopId": "stop7", "label": "Next: The T-Tower" },
    "nextStopId": "stop7"
  },
  {
    "id": "stop7",
    "qrFile": "07-t-tower",
    "title": "The T-Tower: Two Engines, Side by Side",
    "shortTitle": "The T-Tower",
    "location": "Former Building 4572 (demolished, Jan 2026)",
    "locationShort": "Former Building 4572",
    "subtitle": "Legacy site &middot; Propulsion and Structural Test Facility, Building 4572",
    "lab": "Propulsion",
    "tourTime": "~15 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["History", "Adv. Space Transportation"],
    "available": true,
    "legacySite": true,
    "hazards": [],
    "campusPin": { "xPct": 73.0, "yPct": 92.2 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view centered on the former T-Tower site, Building 4572, on the NASA Marshall campus.",
      "credit": "USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/t-tower-4572",
    "hero": {
      "src": "img/hero.jpg",
      "alt": "The Propulsion and Structural Test Facility, known as the T-Tower, at NASA Marshall Space Flight Center in Huntsville, Alabama.",
      "credit": "NASA/MSFC (2016) &middot; Propulsion and Structural Test Facility, Building 4572 &middot; <b>images.nasa.gov</b> &middot; cleared for public release"
    },
    "callouts": [
      { "xPct": 50.0, "yPct": 65.0, "label": "Rusted flame deflector opening" },
      { "xPct": 52.0, "yPct": 33.0, "label": "Roll-up access door" },
      { "xPct": 20.0, "yPct": 83.0, "label": "Stairway to the test deck" },
      { "xPct": 83.0, "yPct": 73.0, "label": "Pressurized gas tank" }
    ],
    "thumb": "img/hero.jpg",
    "factbox": "Shaped like its nickname, the T-Tower let engineers fire two rocket stages side by side and compare identical burns &mdash; a rare stand built to test in pairs.",
    "narration": {
      "durationLabel": "~36 sec · produced narration",
      "audio": "audio/narration.mp3",
      "text": "Most test stands hold one rocket stage at a time. This one, nicknamed the T-Tower for its shape, was built to hold two &mdash; letting engineers fire a matched pair of Saturn One or Saturn One B stages side by side and directly compare identical burns. Originally built in 1951 and later modified for the Saturn program, it produced up to one point six million pounds of combined thrust. Decades later it still stood, until it was imploded in January 2026 alongside the nearby Dynamic Test Stand."
    },
    "hook": "Most test stands hold one rocket stage at a time. This one, nicknamed the T-Tower for its shape, was built to hold two &mdash; letting engineers fire a matched pair of Saturn One or Saturn One B stages side by side and directly compare identical burns.",
    "cuePoints": { "hook": 0, "explainer": 18, "wowStat": 25, "media": 30, "why": 33 },
    "whyItMatters": "Rocket engines are never perfectly identical, even off the same production line. Firing two stages side by side, under the same conditions, let engineers spot real differences between units &mdash; catching manufacturing or design problems that a single test could hide. That dual-position design made the T-Tower one of the more unusual stands ever built at Marshall.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 3,
    "keyfacts": [
      { "num": "175", "label": "feet tall", "detail": "On a 20×30 ft base, shaped like a T — hence the nickname" },
      { "num": "1957", "label": "originally built", "detail": "Built by the Army Ballistic Missile Agency; designed by Heinz Hilten" },
      { "num": "2", "label": "test positions", "detail": "A rare dual-position stand for direct side-by-side comparison" },
      { "num": "1.6M", "label": "lbf combined thrust", "detail": "Saturn I/IB S-I and S-IB stage static firings" }
    ],
    "deepDive": {
      "summary": "Go deeper: older than NASA itself",
      "open": true,
      "html": "The T-Tower predates NASA by three years. Built in 1957 by the Army Ballistic Missile Agency and designed by engineer Heinz Hilten, it rose 175 feet on a modest 20-by-30-foot base — a T-shaped footprint that gave the stand its nickname long before anyone thought to call it the Propulsion and Structural Test Facility. It's believed to be the site of the first static firings of a clustered multi-engine rocket stage anywhere, years before Saturn: von Braun's team used it to prove that bolting multiple engines together into one stage was even survivable, let alone controllable.<br><br>The stand transferred from the Army to the newly formed NASA in 1960 and was modified in 1961 to permit static firing of the Saturn I/IB S-I and S-IB stages, becoming the S-IB Static Test Stand. Its dual-position design let engineers run two nominally identical stages side by side and compare their performance directly &mdash; a powerful way to separate real hardware variation from measurement noise. Saturn I, Saturn IB, and Redstone components all passed through it, and its very last work, decades later, tested Space Shuttle solid rocket motor hardware in the 1990s.<br><br>HAER's measured drawings record that starting in 1963, the T-Tower's west position was reinforced to static-fire early Saturn V F-1 engine development hardware &mdash; a stopgap while Test Stand 4670 in the West Test Area was still under construction &mdash; while its east side kept running Chrysler's Saturn I booster acceptance tests. By 1964 each side of the aging 1957 structure withstood roughly 12 million pounds of thrust, twenty times the 1.5 million it had originally been built for (HAER AL-129-D).<br><br>HAER's three measured-drawing sheets trace that growth in three dated phases. Phase I, in 1957, was the original U.S. Army Ordnance Corps tower built to static-fire the Redstone and Jupiter missiles. Phase II, around 1960, came right as Redstone Arsenal's rocket work transferred to the newly formed NASA and the tower was reinforced to test the first Saturn I S-I stages. Phase III, in 1964, added the west-position reinforcement for early Saturn V F-1 engine work described above &mdash; three structural generations layered onto one 1957 frame (HAER AL-129-D, Sheets 1&ndash;3 of 3)."
    },
    "detailImage": {
      "src": "img/detail-1.jpg",
      "alt": "A Saturn I S-I stage test-fires at the S-IB Static Test Stand, the T-Tower, at NASA Marshall Space Flight Center, 1964.",
      "credit": "NASA/MSFC (1964) &middot; Saturn I S-I stage test firing at the T-Tower &middot; <b>images.nasa.gov</b>"
    },
    "galleryTitle": "More from the T-Tower",
    "gallery": [
      {
        "src": "img/gallery-1.jpg",
        "alt": "A dual-position Saturn I/IB test underway at the T-Tower at NASA Marshall Space Flight Center, 1980.",
        "credit": "NASA/MSFC (Sept. 23, 1980) &middot; <b>images.nasa.gov</b>",
        "caption": "Two stages, side by side, mid-burn &mdash; the dual-position setup that gave the T-Tower its name."
      },
      {
        "src": "img/gallery-2.jpg",
        "alt": "An exterior view of the Propulsion and Structural Test Facility, Building 4572, at NASA Marshall Space Flight Center, 2016.",
        "credit": "NASA/MSFC/Fred Deaton (2016) &middot; <b>images.nasa.gov</b>",
        "caption": "The T-Tower as it stood in 2016, decades after its last Saturn firing."
      },
      {
        "src": "img/gallery-3.jpg",
        "alt": "A Saturn S-IB stage sits in the foreground of the Propulsion and Structural Test Facility at NASA Marshall Space Flight Center, 2016.",
        "credit": "NASA/MSFC/Fred Deaton (2016) &middot; <b>images.nasa.gov</b>",
        "caption": "A preserved Saturn S-IB stage stands near the very tower that once tested its kind."
      },
      {
        "src": "img/gallery-4.jpg",
        "alt": "A HAER archival photograph of a Saturn I S-I booster's aft end, viewed head-on, showing the ring of clustered H-1 engine nozzles at the base of the stage tested at the T-Tower.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; Saturn I S-I booster, clustered H-1 engine array &middot; HAER No. AL-129-D-6 &middot; <b>loc.gov</b>",
        "caption": "The ring of clustered H-1 engine nozzles on a Saturn I S-I booster &mdash; the kind of multi-engine stage the T-Tower was built to prove could survive firing together."
      },
      {
        "src": "img/gallery-5.jpg",
        "alt": "A three-quarter angle view of the Propulsion and Structural Test Facility showing the yellow-painted flame deflector opening at its base, with a Saturn stage's clustered engine ring resting on the ground nearby, NASA Marshall Space Flight Center, 2016.",
        "credit": "NASA/MSFC/Fred Deaton (2016) &middot; <b>images.nasa.gov</b>",
        "caption": "A three-quarter view of the tower's flame deflector opening, its interior scorched and rusted after decades of static firings."
      },
      {
        "src": "img/gallery-6.jpg",
        "alt": "A closer three-quarter angle view of the Propulsion and Structural Test Facility's flame deflector opening, with the building's \"4572A\" door signage visible at lower right, NASA Marshall Space Flight Center, 2016.",
        "credit": "NASA/MSFC/Fred Deaton (2016) &middot; <b>images.nasa.gov</b>",
        "caption": "A closer look at the same flame deflector opening, with the building's \"4572A\" door signage visible at lower right."
      },
      {
        "src": "img/gallery-7.jpg",
        "alt": "A head-on close-up of the ring of eight H-1 engine nozzles at the aft end of a Saturn S-IB stage (SA-T) near the T-Tower, NASA Marshall Space Flight Center, 2016.",
        "credit": "NASA/MSFC/Fred Deaton (2016) &middot; <b>images.nasa.gov</b>",
        "caption": "The clustered H-1 engine nozzles of the preserved Saturn S-IB stage (SA-T) that still sits near the tower today."
      },
      {
        "src": "img/gallery-8.jpg",
        "alt": "A close-up of a single H-1 engine, with its surrounding plumbing and gimbal hardware, installed on the Saturn S-IB stage (SA-T) near the T-Tower, NASA Marshall Space Flight Center, 2016.",
        "credit": "NASA/MSFC/Fred Deaton (2016) &middot; <b>images.nasa.gov</b>",
        "caption": "One of the eight H-1 engines up close, its fuel and hydraulic lines still intact decades after the stage last flew."
      },
      {
        "src": "img/gallery-9.jpg",
        "alt": "A wide side elevation view of the forward end of the Saturn S-IB stage (SA-T), with the T-Tower's gantry crane visible in the background, NASA Marshall Space Flight Center, 2016.",
        "credit": "NASA/MSFC/Fred Deaton (2016) &middot; <b>images.nasa.gov</b>",
        "caption": "The stage's forward end, with the T-Tower's overhead gantry crane looming behind it."
      },
      {
        "src": "img/gallery-10.jpg",
        "alt": "A head-on wide view of the forward end of the Saturn S-IB stage's thrust structure ring, with mockup Space Shuttle and solid rocket booster hardware resting at the tower's base, NASA Marshall Space Flight Center, 2016.",
        "credit": "NASA/MSFC/Fred Deaton (2016) &middot; <b>images.nasa.gov</b>",
        "caption": "The same stage's forward thrust ring, framed head-on, with a Space Shuttle orbiter mockup and Thiokol solid rocket motor segment parked at the tower's base."
      },
      {
        "src": "img/gallery-11.jpg",
        "alt": "A wide view of the Saturn S-IB stage (SA-T) in the foreground with the full T-Tower structure rising behind it under a partly cloudy sky, NASA Marshall Space Flight Center, 2016.",
        "credit": "NASA/MSFC/Fred Deaton (2016) &middot; <b>images.nasa.gov</b>",
        "caption": "The preserved stage and the tower that tested its kind, framed together one more time."
      },
      {
        "src": "img/gallery-12.jpg",
        "alt": "A HAER archival aerial photograph looking straight down into the T-Tower's circular flame trench opening, with a segmented rocket casing resting on the pavement nearby.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; overhead view of flame trench opening &middot; HAER No. AL-129-D &middot; <b>loc.gov</b>",
        "caption": "Looking straight down into the flame trench opening at the tower's base &mdash; the photo number on this print's border was too glare-washed to confirm, so it's credited by survey code only."
      },
      {
        "src": "img/gallery-13.jpg",
        "alt": "A HAER archival photograph of the T-Tower from a distance, with a mobile crane beside it and a historic-site marker sign and a rocket stage segment in the foreground.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; distant view with crane and historic-site marker &middot; HAER No. AL-129-D-2 &middot; <b>loc.gov</b>",
        "caption": "A HAER survey photo of the tower from across the pad, with the mobile crane once used to stack test stages beside it."
      },
      {
        "src": "img/gallery-14.jpg",
        "alt": "A HAER archival photograph of the T-Tower's upper superstructure from an oblique angle, with a mobile crane visible at lower left.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; oblique view of upper superstructure &middot; HAER No. AL-129-D-3 &middot; <b>loc.gov</b>",
        "caption": "The tower's crossbraced upper superstructure, seen from below and to one side."
      },
      {
        "src": "img/gallery-15.jpg",
        "alt": "A HAER archival photograph of the T-Tower's three-quarter front elevation from a distance, with two low support buildings visible nearby.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; three-quarter front elevation &middot; HAER No. AL-129-D-4 &middot; <b>loc.gov</b>",
        "caption": "A wider three-quarter view of the tower alongside the low support buildings that once served it."
      },
      {
        "src": "img/gallery-16.jpg",
        "alt": "A HAER archival photograph of a long low support building in the foreground with the T-Tower and its crane visible behind it.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; support building with tower and crane beyond &middot; HAER No. AL-129-D-5 &middot; <b>loc.gov</b>",
        "caption": "One of the tower's low-slung support buildings, with the tower and crane rising behind it."
      },
      {
        "src": "img/drawing-1.jpg",
        "alt": "A HAER measured drawing titled \"Static Test Tower, Phase III — c. 1964,\" showing a northwest elevation of the T-Tower alongside a Saturn V F-1 engine inset and a timeline of construction and test milestones from 1961 to 1965.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, \"Static Test Tower, Phase III — c. 1964\" &middot; HAER No. AL-129-D, Sheet 3 of 3 &middot; <b>loc.gov</b>",
        "caption": "By 1964 the tower's west position had been reinforced to test-fire early Saturn V F-1 engine hardware while its east side kept running Saturn I booster acceptance tests."
      },
      {
        "src": "img/drawing-2.jpg",
        "alt": "A HAER measured drawing titled \"Static Test Tower, Phase I — c. 1957,\" showing a northwest elevation of the original U.S. Army static test tower with a Jupiter missile timeline and specifications inset.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, \"Static Test Tower, Phase I — c. 1957\" &middot; HAER No. AL-129-D, Sheet 1 of 3 &middot; <b>loc.gov</b>",
        "caption": "The tower's original 1957 form, built by the Army Ordnance Corps to static-fire the Redstone and Jupiter missiles &mdash; three years before NASA existed."
      },
      {
        "src": "img/drawing-3.jpg",
        "alt": "A HAER measured drawing titled \"Static Test Tower, Phase II — c. 1960,\" showing a northwest elevation with a Saturn I S-I stage mounted for test, alongside a timeline covering the Army-to-NASA transition and specifications for the Saturn I rocket.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, \"Static Test Tower, Phase II — c. 1960\" &middot; HAER No. AL-129-D, Sheet 2 of 3 &middot; <b>loc.gov</b>",
        "caption": "By 1960 the stand had been modified for the Saturn I program, right as Redstone Arsenal's rocket facilities were transferred to the newly formed NASA Marshall Space Flight Center."
      }
    ],
    "lookFor": "There's no tower here anymore &mdash; this marks where NASA ran matched, side-by-side rocket stage tests for over three decades, before the structure was imploded in January 2026.",
    "askYourHost": [
      "What exactly are engineers comparing when two rocket stages fire side by side?",
      "Why was a dual-position stand unusual enough to earn its own nickname?",
      "What was the last thing tested here before it came down?"
    ],
    "quiz": {
      "question": "Quick one &mdash; why build a stand that could test two rocket stages side by side?",
      "options": [
        { "text": "To finish testing twice as fast", "correct": false },
        { "text": "To directly compare two nominally identical stages and catch real differences", "correct": true },
        { "text": "Because a single stage wasn't heavy enough to test alone", "correct": false }
      ],
      "correctFeedback": "&#10003; Exactly. Running two stages under the same conditions let engineers isolate genuine hardware differences from test-to-test variation.",
      "wrongFeedback": "Not quite &mdash; the value was in direct comparison between two supposedly identical stages."
    },
    "video": {
      "sectionTitle": "Watch: the 2026 implosion",
      "src": "video/clip.mp4",
      "poster": "img/hero.jpg",
      "title": "NASA Marshall implodes the Dynamic Test Stand and T-Tower, January 2026",
      "credit": "NASA/MSFC (Jan. 10, 2026) &middot; Tyson Eason, Alex Russell, Mark McKinley, Paul Lockhart &middot; <b>images.nasa.gov</b> &middot; plays locally / offline. Production clip ships with captions (508)."
    },
    "cta": {
      "heading": "Need comparative test data?",
      "body": "Marshall's propulsion test heritage, from paired Saturn firings to today's single- and multi-engine test campaigns, still runs through the Test Lab."
    },
    "wayfindNext": { "nextStopId": "stop8", "label": "Next: Solid Propulsion Test Area" },
    "nextStopId": "stop8"
  },
  {
    "id": "stop8",
    "qrFile": "08-solid-propulsion",
    "title": "Solid Propulsion Test Area: Small Motors, Big Answers",
    "shortTitle": "Solid Propulsion Test Area",
    "location": "SPTA, East Test Area",
    "locationShort": "East Test Area (SPTA)",
    "subtitle": "East Test Area &middot; Solid Propulsion Test Area (SPTA)",
    "lab": "Propulsion",
    "tourTime": "~15 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["Adv. Space Transportation"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 74.8, "yPct": 84.1 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view centered on the Solid Propulsion Test Area (SPTA), East Test Area, on the NASA Marshall campus.",
      "credit": "USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/solid-propulsion-test-area",
    "hero": {
      "src": "img/hero.jpg",
      "alt": "A 26-foot solid rocket motor test-fires at the Solid Propulsion Test Area at NASA Marshall Space Flight Center, 1989.",
      "credit": "NASA/MSFC (1989) &middot; First test firing of the Modified NASA Motor at the Solid Propulsion Test Area &middot; <b>images.nasa.gov</b> &middot; cleared for public release"
    },
    "orientPhoto": {
      "src": "img/detail-1.jpg",
      "alt": "The Solid Propellant Test Article stand at NASA Marshall's Solid Propulsion Test Area, a compact steel structure with twin stairways up to a firing platform and a test motor mounted at its center.",
      "credit": "NASA/MSFC (1991) &middot; Solid Propellant Test Article stand with the Modified NASA Motor &middot; <b>images.nasa.gov</b>"
    },
    "callouts": [
      { "xPct": 48.0, "yPct": 38.0, "label": "Test stand identification — Building 4520" },
      { "xPct": 20.0, "yPct": 50.0, "label": "Stairs up to the firing platform" },
      { "xPct": 48.0, "yPct": 58.0, "label": "Test motor mounted for firing" },
      { "xPct": 30.0, "yPct": 14.0, "label": "Overhead hoist for loading test motors" }
    ],
    "thumb": "img/hero.jpg",
    "factbox": "A small stand with an outsized job: firing scaled-down solid rocket motors to learn what nozzle and insulation materials can actually survive.",
    "narration": {
      "durationLabel": "~38 sec · produced narration",
      "audio": "audio/narration.mp3",
      "text": "Not every test needs a giant stand. This one is just twelve feet wide and twenty-four feet tall, built in 1989 &mdash; and it does one job very well. It fires a scaled-down solid rocket motor, forty-eight inches across, to find out how well insulation and nozzle materials hold up against real burning propellant. One early test here ran a hundred-thousand-pound-thrust motor for thirty seconds straight, part of NASA's effort to give young engineers hands-on experience with solid rocket motor technology &mdash; and to catch material problems small, before they ever became big ones."
    },
    "hook": "Not every test needs a giant stand. This one is just twelve feet wide and twenty-four feet tall, built in 1989 &mdash; and it does one job very well.",
    "cuePoints": { "hook": 0, "explainer": 10, "wowStat": 21, "media": 28, "why": 34 },
    "whyItMatters": "Solid rocket motors can't be shut off once ignited, so their nozzles and internal insulation have to survive the full burn on the first try. Testing full-scale motors for every material change would be slow and expensive. This smaller stand let engineers fire representative motors repeatedly, comparing insulation and nozzle materials directly and refining the analysis models used on much larger boosters.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 2,
    "keyfacts": [
      { "num": "1989", "label": "stand built", "detail": "12 ft wide × 12 ft long × 24 ft high" },
      { "num": "48\"", "label": "motor diameter", "detail": "The Modified NASA Motor (M-NASA) test article" },
      { "num": "100k", "label": "lbf thrust", "detail": "A 26-foot motor test-fired for 30 seconds in an early campaign" }
    ],
    "deepDive": {
      "summary": "Go deeper: NASA's Solid Propulsion Integrity Program",
      "open": true,
      "html": "The SPTA stand supported NASA's Solid Propulsion Integrity Program, giving engineers the techniques, tools, and hands-on experience to better design, build, and verify solid rocket motors. Test campaigns evaluated internal non-asbestos insulation materials, nozzle designs, and new inspection techniques &mdash; work that fed directly into the design and safety margins of much larger operational solid rocket boosters.<br><br>The test article itself, the Modified NASA Motor, is a scaled-down stand-in for much larger flight hardware: a 48-inch-diameter solid motor fitted with a 12-foot blast tube and a 10-inch throat, loaded with roughly 12,000 pounds of propellant split across two cartridges. That's a fraction of the propellant mass in an operational booster, but it burns with the same chemistry, the same combustion pressures, and the same thermal assault on internal insulation — which is exactly the point. A problem that shows up here, on a motor small enough to build and fire cheaply and often, is a problem caught long before it could ever show up on a booster carrying a crew or a payload.<br><br>SPIP itself was bigger than any one stand: a 1993 program paper describes it as an effort to give NASA and industry engineers shared reliability standards and a common engineering database covering nozzles, motor cases, bondlines, propellant, and insulation &mdash; so a material lesson learned on a small motor here could be trusted and reused across every solid rocket motor program, not just relearned project by project."
    },
    "detailImage": {
      "src": "img/detail-1.jpg",
      "alt": "The Solid Propellant Test Article stand holds a Modified NASA Motor test article at NASA Marshall's Solid Propulsion Test Area.",
      "credit": "NASA/MSFC (1991) &middot; Solid Propellant Test Article stand with the Modified NASA Motor &middot; <b>images.nasa.gov</b>"
    },
    "gallery": [
      {
        "src": "img/gallery-1.jpg",
        "alt": "A test firing at the Solid Propulsion Test Area shows an off-nominal, flared exhaust plume — the 'roman candle effect' — used to study nozzle erosion on redesigned solid rocket motors, seen through pine trees at Marshall Space Flight Center, 1998.",
        "credit": "NASA/MSFC (Mar. 24, 1998) &middot; nozzle-erosion test of a 48-inch M-NASA motor, \"roman candle effect\" &middot; <b>images.nasa.gov</b>",
        "caption": "Not every test goes to plan on purpose &mdash; this firing shows the flared, off-nominal plume engineers used to study nozzle erosion on redesigned solid rocket motors."
      }
    ],
    "lookFor": "Notice how small this stand is compared to the towering structural stands elsewhere on the tour &mdash; it doesn't need to be big to answer big questions about materials.",
    "askYourHost": [
      "How do you scale down a solid rocket motor and still trust the results at full size?",
      "What's the biggest material problem this stand ever caught early?",
      "Why does insulation matter so much once a solid motor is burning?"
    ],
    "quiz": {
      "question": "Quick one &mdash; why test solid rocket motor materials on a small scale here instead of only on full-size boosters?",
      "options": [
        { "text": "Small motors are easier to transport", "correct": false },
        { "text": "It's faster and cheaper to compare insulation and nozzle materials on representative motors", "correct": true },
        { "text": "Full-size boosters can't be test-fired at all", "correct": false }
      ],
      "correctFeedback": "&#10003; Exactly. Representative-scale motors let engineers compare materials quickly and repeatedly, refining the models later trusted on full-size boosters.",
      "wrongFeedback": "Not quite &mdash; the point is faster, cheaper comparison of materials before committing to full-scale hardware."
    },
    "video": null,
    "cta": {
      "heading": "Evaluating propulsion materials?",
      "body": "The Test Lab's solid propulsion heritage supports insulation, nozzle, and case-material testing for solid rocket motor programs."
    },
    "wayfindNext": { "nextStopId": "stop9", "label": "Next: Test Stand 4670" },
    "nextStopId": "stop9"
  },
  {
    "id": "stop9",
    "qrFile": "09-test-stand-4670",
    "title": "Test Stand 4670: Holding Down the Moon Rocket",
    "shortTitle": "Test Stand 4670",
    "location": "Building 4670 \u00b7 West Test Area",
    "locationShort": "Building 4670, West Test Area",
    "subtitle": "West Test Area &middot; Building 4670",
    "lab": "Propulsion",
    "tourTime": "~20 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["Adv. Space Transportation", "History"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 47.8, "yPct": 82.0 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view centered on Test Stand 4670, Building 4670, West Test Area, on the NASA Marshall campus.",
      "credit": "USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/test-stand-4670-s-ic",
    "hero": {
      "src": "img/hero.jpg",
      "alt": "An archival color photograph of the Saturn V S-IC Static Test Facility, Test Stand 4670, in Marshall's West Test Area, showing the tower structure that restrained a Saturn V first stage during static firing.",
      "credit": "Historic American Engineering Record, Library of Congress &middot; Saturn V S-IC Static Test Facility, West Test Area, HAER No. AL-129-K &middot; <b>loc.gov</b> &middot; no known restrictions"
    },
    "callouts": [
      { "xPct": 18.0, "yPct": 20.0, "label": "Crane for handling stage hardware" },
      { "xPct": 52.0, "yPct": 27.0, "label": "Steel superstructure atop the test tower" },
      { "xPct": 47.0, "yPct": 50.0, "label": "Red access towers along the stand face" },
      { "xPct": 65.0, "yPct": 76.0, "label": "Propellant feed lines at the stand's base" }
    ],
    "thumb": "img/hero.jpg",
    "factbox": "Five F-1 engines. Seven and a half million pounds of thrust. This stand's entire job was to bolt down a Saturn V first stage and refuse to let go.",
    "narration": {
      "durationLabel": "~46 sec · produced narration",
      "audio": "audio/narration.mp3",
      "text": "A Saturn Five's first stage produced seven and a half million pounds of thrust from five F-1 engines &mdash; and before any of it ever flew, the whole stage had to be bolted down right here and fired anyway. Built between 1963 and 1965 in Marshall's West Test Area, this stand was designed to hold up to twelve million pounds of force, engineered so the ground, not the rocket, would win that fight. Its only counterpart in the country sits at Stennis Space Center. After the Saturn Five program ended, the stand kept working &mdash; testing Space Shuttle external tank hardware and Space Shuttle Main Engines for decades. It's still in Marshall's active test inventory today."
    },
    "hook": "A Saturn Five's first stage produced seven and a half million pounds of thrust from five F-1 engines &mdash; and before any of it ever flew, the whole stage had to be bolted down right here and fired anyway.",
    "cuePoints": { "hook": 0, "explainer": 14, "wowStat": 27, "media": 35, "why": 41 },
    "whyItMatters": "An S-IC first stage could never be flight-tested before its first real launch &mdash; the only way to prove five F-1 engines would perform together was to bolt the entire stage down and fire it exactly as it would fly, except restrained. That required a structure strong enough to out-muscle a Saturn V, which is precisely what this stand was built to be.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 1,
    "keyfacts": [
      { "num": "7.5M", "label": "lbf thrust restrained", "detail": "Five F-1 engines firing together on the S-IC first stage" },
      { "num": "12M", "label": "lbf design capacity", "detail": "Built with a wide margin over the Saturn V's own thrust" },
      { "num": "1965", "label": "construction complete", "detail": "Built 1963\u20131965 in Marshall's West Test Area" }
    ],
    "deepDive": {
      "summary": "Go deeper: three careers, one stand",
      "open": true,
      "html": "Documented by the Library of Congress's Historic American Engineering Record (HAER AL-129-K), this stand's only structural equivalent in the United States is at NASA's Stennis Space Center. After proving out the Saturn V's S-IC stage, it went on to support Space Shuttle external tank testing and Space Shuttle Main Engine (SSME) test campaigns: three very different programs sharing one very tall piece of steel."
    },
    "detailImage": {
      "src": "img/detail-1.jpg",
      "alt": "A second archival HAER photograph of the Saturn V S-IC Static Test Facility at Marshall Space Flight Center's West Test Area, showing structural detail of the test stand.",
      "credit": "Historic American Engineering Record, Library of Congress &middot; Saturn V S-IC Static Test Facility structural detail, HAER No. AL-129-K &middot; <b>loc.gov</b>"
    },
    "galleryTitle": "More from Test Stand 4670",
    "gallery": [
      {
        "src": "img/gallery-1.jpg",
        "alt": "A third archival HAER large-format photograph of the Saturn V S-IC Static Test Facility, Test Stand 4670, in Marshall's West Test Area.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; HAER No. AL-129-K-1 &middot; <b>loc.gov</b>",
        "caption": "A third angle on the same structure that once restrained a full Saturn V first stage at full power."
      },
      {
        "src": "img/drawing-1.jpg",
        "alt": "A HAER measured-drawing title sheet for the Saturn V S-IC Static Test Stand, with a site plan of Marshall's West Test Area and a photo of an S-IC static firing.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured-drawing title sheet, HAER No. AL-129-K, Sheet 1 of 9 &middot; <b>loc.gov</b>",
        "caption": "Sheet 1 of the HAER measured-drawing set: a site plan of the West Test Area alongside a photo of the stand mid-firing."
      },
      {
        "src": "img/drawing-2.jpg",
        "alt": "A HAER axonometric cutaway drawing of the Saturn V S-IC Static Test Stand, labeling the concrete towers, steel superstructure, flame deflector, derrick, and other major components.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured axonometric drawing, HAER No. AL-129-K, Sheet 2 of 9 &middot; <b>loc.gov</b>",
        "caption": "A dimensioned cutaway of the stand's structure, keyed to its concrete towers, flame deflector, and 300-ton derrick."
      },
      {
        "src": "img/drawing-3.jpg",
        "alt": "A HAER drawing titled \"Test Stand Evolution\" showing the Saturn V S-IC Static Test Stand's configuration in 1962, 1972, and 1988, tracing changes to its propellant tanks and structure across three test programs.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, \"Test Stand Evolution,\" HAER No. AL-129-K, Sheet 3 of 9 &middot; <b>loc.gov</b>",
        "caption": "Three configurations of the same stand, 26 years apart — Saturn V in 1962, Space Shuttle External Tank testing in 1972, and the Advanced Technology Engine Test Stand in 1988."
      },
      {
        "src": "img/drawing-4.jpg",
        "alt": "A HAER measured floor-plan drawing of the Saturn V S-IC Static Test Stand showing the Foundation and Subgrade Plan and the Grade Level Elevation, with the flame deflector tracks and trench, corner towers, and terminal/equipment rooms labeled.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, floor plans (foundation/grade level), HAER No. AL-129-K, Sheet 4 of 9 &middot; <b>loc.gov</b>",
        "caption": "Underground first: the foundation plan and grade-level flame deflector trench the whole stand sits on top of."
      },
      {
        "src": "img/drawing-5.jpg",
        "alt": "A HAER measured floor-plan drawing of the Saturn V S-IC Static Test Stand showing the Engine Removal Platform, Hold Down Arm Platform, and Hydraulic Equipment Platforms, each with an isometric cutaway view.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, floor plans (engine removal/hold-down/hydraulic platforms), HAER No. AL-129-K, Sheet 5 of 9 &middot; <b>loc.gov</b>",
        "caption": "The working levels where crews reached the S-IC stage's engines and the hold-down arms that refused to let it move."
      },
      {
        "src": "img/drawing-6.jpg",
        "alt": "A HAER measured floor-plan drawing of the Saturn V S-IC Static Test Stand showing Level 15, Level 17, Level 22, and Level 27 (top of structure) platforms, including the 200-ton capacity derrick.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, floor plans (upper levels), HAER No. AL-129-K, Sheet 6 of 9 &middot; <b>loc.gov</b>",
        "caption": "The top of the stand, 267 feet up: Level 27 and the 200-ton derrick used to lower stage hardware into place."
      },
      {
        "src": "img/drawing-7.jpg",
        "alt": "A HAER measured elevation drawing of the Saturn V S-IC Static Test Stand showing the West and South elevations.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, building elevations (west/south), HAER No. AL-129-K, Sheet 7 of 9 &middot; <b>loc.gov</b>",
        "caption": "The stand's west and south faces, drawn full height: derrick booms and all."
      },
      {
        "src": "img/drawing-8.jpg",
        "alt": "A HAER measured elevation drawing of the Saturn V S-IC Static Test Stand showing the East and North elevations, with the 200-ton and 150-ton capacity derricks labeled.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured drawing, building elevations (east/north), HAER No. AL-129-K, Sheet 8 of 9 &middot; <b>loc.gov</b>",
        "caption": "Two derricks, two capacities: 200 tons and 150 tons, both dwarfed by the structure they served."
      },
      {
        "src": "img/drawing-9.jpg",
        "alt": "A HAER measured section drawing of the Saturn V S-IC Static Test Stand, cut looking east and looking north, showing the LOX and LH2 run tanks, the \"Norman Beam\" thrust structure, and the SSME flame impingement point.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; measured section drawing, HAER No. AL-129-K, Sheet 9 of 9 &middot; <b>loc.gov</b>",
        "caption": "A cutaway view straight through the stand, showing exactly where a rocket's exhaust was meant to go."
      }
    ],
    "lookFor": "Picture a fully stacked Saturn V first stage bolted into this structure, all five engines lit at once: and the stand not moving.",
    "askYourHost": [
      "How does the ground stay put when five F-1 engines fire at once, straight down?",
      "What was it like to stand nearby during an actual S-IC static fire?",
      "Why build in nearly double the thrust capacity the Saturn V would ever need?"
    ],
    "quiz": {
      "question": "Quick one &mdash; why build a stand designed for 12 million lbf when the Saturn V's S-IC stage only produced 7.5 million?",
      "options": [
        { "text": "To leave room for testing future, more powerful rockets", "correct": true },
        { "text": "Because engineers overestimated the Saturn V's thrust", "correct": false },
        { "text": "To make the stand look more impressive", "correct": false }
      ],
      "correctFeedback": "&#10003; Exactly. Building in margin meant the stand could outlast any single program: which is exactly what let it move on to Shuttle external tank and SSME testing after Apollo ended.",
      "wrongFeedback": "Not quite &mdash; the extra capacity was deliberate margin, which is why the stand outlived the Saturn V program itself."
    },
    "video": null,
    "cta": {
      "heading": "Need to hold down something powerful?",
      "body": "Test Stand 4670 remains in Marshall's active test inventory, with a multi-program heritage running from the Saturn V through the Space Shuttle era to today."
    },
    "wayfindNext": { "nextStopId": "stop10", "label": "Next: Redstone Test Stand" },
    "nextStopId": "stop10"
  },
  {
    "id": "stop10",
    "qrFile": "10-redstone",
    "title": "Redstone Test Stand: Where It Starts",
    "shortTitle": "Redstone Test Stand",
    "location": "Dodd Road, MSFC / Redstone Arsenal",
    "locationShort": "Dodd Road",
    "subtitle": "National Historic Landmark &middot; Dodd Road",
    "lab": "Propulsion",
    "tourTime": "~15 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["History"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 59.0, "yPct": 75.0 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view centered on the Redstone Test Stand, Dodd Road, on the NASA Marshall campus.",
      "credit": "USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/redstone-test-stand",
    "hero": {
      "src": "img/hero.jpg",
      "alt": "The Redstone Test Stand at NASA Marshall Space Flight Center, the oldest test stand on center, designated a National Historic Landmark.",
      "credit": "NASA/MSFC (1988) &middot; The Redstone Test Stand, a National Historic Landmark &middot; <b>images.nasa.gov</b> &middot; cleared for public release"
    },
    "callouts": [
      { "xPct": 19.0, "yPct": 30.0, "label": "Open steel gantry — the Redstone Test Stand" },
      { "xPct": 58.0, "yPct": 22.0, "label": "Redstone rocket mounted for a static firing" },
      { "xPct": 80.0, "yPct": 73.0, "label": "Domed concrete bunker beside the stand" },
      { "xPct": 40.0, "yPct": 60.0, "label": "Access road linking the stand to the highway" }
    ],
    "thumb": "img/hero.jpg",
    "factbox": "The oldest test stand on center, and the start of the whole story: Redstone missiles fired here became the rocket that put the first American in space.",
    "narration": {
      "durationLabel": "~44 sec · produced narration",
      "audio": "audio/narration.mp3",
      "text": "Every test stand on this tour traces back to this one. In the early 1950s, Wernher von Braun's Army Ballistic Missile Agency team static-fired Redstone missiles right here &mdash; the oldest test stand still standing on Marshall's campus. That same Redstone design, modified into the Mercury-Redstone launch vehicle, went on to carry Alan Shepard on America's first human spaceflight in 1961. The stand earned National Historic Landmark status in 1986. Twelve years and one moon landing later, the lessons learned firing a single Redstone engine here helped build the stands that would hold down a five-engine Saturn Five."
    },
    "hook": "Every test stand on this tour traces back to this one.",
    "cuePoints": { "hook": 0, "explainer": 4, "wowStat": 20, "media": 30, "why": 38 },
    "whyItMatters": "Every rocket test program at Marshall has roots here. Before Saturn, before the Space Shuttle, this stand proved out the Redstone: the missile-turned-launch-vehicle that gave America its first astronaut in space. The static-fire test method itself, proven here first, shaped every stand built afterward.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 1,
    "keyfacts": [
      { "num": "1950s", "label": "Redstone test campaign", "detail": "Army Ballistic Missile Agency era, before NASA existed" },
      { "num": "1961", "label": "Alan Shepard's flight", "detail": "A modified Redstone launched America's first astronaut" },
      { "num": "1985", "label": "National Historic Landmark", "detail": "Designated by the U.S. Department of the Interior" }
    ],
    "deepDive": {
      "summary": "Go deeper: from missile to Mercury-Redstone",
      "open": true,
      "html": "Assembled and tested at what became Marshall Space Flight Center, the Mercury-Redstone launch vehicle was derived directly from the Army's Redstone missile, itself proven on this stand. Engineers here installed a Mercury capsule and its escape system atop the booster and test-fired the assembly before it was ever trusted to carry a human being. The stand is documented by the Library of Congress's Historic American Engineering Record (HAER AL-129-A).<br><br>With almost all of the stand's $25,000 construction budget sunk into its concrete foundation, there was no money left to build a proper instrumentation bunker &mdash; so Test Lab engineers cleaned out two decommissioned railroad tank cars that had once hauled chemicals at the arsenal during World War II, packed them with recording and control equipment, and buried them under a mound of earth about 100 yards from the stand (HAER AL-129-A)."
    },
    "detailImage": {
      "src": "img/detail-1.jpg",
      "alt": "A Mercury capsule and launch escape system being installed atop a Redstone booster at the Redstone Test Stand, prior to test firing of the Mercury-Redstone launch vehicle.",
      "credit": "NASA/MSFC (1950s) &middot; Mercury capsule and escape system installed on a Redstone booster &middot; <b>images.nasa.gov</b>"
    },
    "galleryTitle": "More from the Redstone Test Stand",
    "gallery": [
      {
        "src": "img/gallery-1.jpg",
        "alt": "Installation of a Mercury capsule onto a Redstone booster at the Redstone Test Stand at NASA Marshall Space Flight Center, 1960.",
        "credit": "NASA/MSFC (1960) &middot; <b>images.nasa.gov</b>",
        "caption": "Mating a Mercury capsule to its Redstone booster, right here, before the vehicle ever left the ground."
      },
      {
        "src": "img/gallery-2.jpg",
        "alt": "Jupiter-C Missile No. 27, a modified Redstone missile, under assembly at the Army Ballistic Missile Agency, Redstone Arsenal, 1958.",
        "credit": "NASA/MSFC (Jan. 31, 1958) &middot; <b>images.nasa.gov</b>",
        "caption": "The Jupiter-C, another Redstone derivative, under assembly during the same era this stand was active."
      },
      {
        "src": "img/gallery-3.jpg",
        "alt": "A 1976 ceremony marking the Redstone Test Stand's entry into the National Register of Historic Places at NASA Marshall Space Flight Center.",
        "credit": "NASA/MSFC (Oct. 2, 1976) &middot; <b>images.nasa.gov</b>",
        "caption": "Local and NASA officials mark the stand's entry into the National Register of Historic Places, a decade before its National Historic Landmark designation."
      },
      {
        "src": "img/gallery-4.jpg",
        "alt": "The German Rocket Team, led by Dr. Wernher von Braun, poses for a group photograph at Fort Bliss, Texas, shortly after World War II.",
        "credit": "NASA/MSFC (c. 1940s) &middot; <b>images.nasa.gov</b>",
        "caption": "The team that would eventually build and test the Redstone: von Braun and roughly 120 of his Peenemünde colleagues, newly arrived in the United States."
      },
      {
        "src": "img/gallery-5.jpg",
        "alt": "A Redstone missile mounted in the Interim Test Stand's steel gantry at Redstone Arsenal, restrained for a static test firing, with the cold-calibration tower, work platforms, and a \"Historic Redstone Test Site\" sign visible.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; Redstone Rocket Test Stand with missile mounted for firing &middot; HAER No. AL-129-A-3 &middot; <b>loc.gov</b>",
        "caption": "A Redstone missile mounted and restrained in the Interim Test Stand's gantry, ready for a static firing."
      },
      {
        "src": "img/drawing-1.jpg",
        "alt": "A HAER measured axonometric drawing titled \"Instrumentation and Control Tanks, c. 1959,\" showing a cutaway of two salvaged railroad tank cars buried in an earthen mound near the Redstone Test Stand and packed with recording and control equipment.",
        "credit": "Historic American Engineering Record, Library of Congress &middot; \"Instrumentation and Control Tanks, c. 1959,\" measured drawing &middot; HAER No. AL-129-A, Sheet 5 of 7 &middot; <b>loc.gov</b>",
        "caption": "A cutaway of the two salvaged railroad tank cars buried near the stand, repurposed to house instruments there was no budget to shelter in a proper bunker."
      },
      {
        "src": "img/gallery-6.jpg",
        "alt": "A Mercury capsule being lifted into position on a Redstone booster at the Redstone Test Stand, viewed from below as a worker on a suspended platform guides it into place, 1960.",
        "credit": "NASA/MSFC (1960) &middot; <b>images.nasa.gov</b>",
        "caption": "A second angle on the same 1960 installation — a worker on a crane-suspended platform guides the capsule into place."
      },
      {
        "src": "img/gallery-7.jpg",
        "alt": "Dr. William R. Lucas accepts a certificate marking the Redstone Test Stand's entry into the National Register of Historic Places from Madison County Commission Chairman James Record, with Huntsville architect Harvie Jones, Oct. 2, 1976.",
        "credit": "NASA/MSFC (Oct. 2, 1976) &middot; <b>images.nasa.gov</b>",
        "caption": "A closer look at the same ceremony: MSFC Center Director Dr. William R. Lucas accepts the certificate."
      },
      {
        "src": "img/gallery-8.jpg",
        "alt": "A bronze plaque at the Redstone Test Stand designating it an Alabama Historic Civil Engineering Landmark, 1979.",
        "credit": "NASA/MSFC &middot; <b>images.nasa.gov</b>",
        "caption": "Nine years before its National Historic Landmark status, the stand was already recognized as an Alabama Historic Civil Engineering Landmark."
      },
      {
        "src": "img/gallery-9.jpg",
        "alt": "A bronze plaque at the Redstone Test Stand designating it a National Historic Landmark in 1985, from the National Park Service, U.S. Department of the Interior.",
        "credit": "NASA/MSFC &middot; <b>images.nasa.gov</b>",
        "caption": "The stand's official National Historic Landmark plaque, made formal by the Department of the Interior."
      },
      {
        "src": "img/gallery-10.jpg",
        "alt": "Twelve members of the German Rocket Team, including Dr. Wernher von Braun and Dr. Kurt Debus, pose in front of Building 4488 at Redstone Arsenal.",
        "credit": "NASA/MSFC (c. 1950s) &middot; <b>images.nasa.gov</b>",
        "caption": "A smaller, later portrait of the rocket team's leadership — the same group whose work led directly to this stand."
      }
    ],
    "lookFor": "This modest stand looks nothing like the towering structures elsewhere on the tour: and that's the point. Everything here started small.",
    "askYourHost": [
      "What does it take for a test stand to earn National Historic Landmark status?",
      "How different was a Redstone static fire from what happens at the bigger stands on this tour?",
      "Is this stand still usable today, or purely preserved now?"
    ],
    "quiz": {
      "question": "Quick one &mdash; what launch vehicle was directly derived from the Redstone missile tested here?",
      "options": [
        { "text": "The Saturn V", "correct": false },
        { "text": "The Mercury-Redstone, which launched Alan Shepard in 1961", "correct": true },
        { "text": "The Space Shuttle", "correct": false }
      ],
      "correctFeedback": "&#10003; Exactly. The Mercury-Redstone launch vehicle was a modified Redstone missile, proven on this very stand before carrying America's first astronaut.",
      "wrongFeedback": "Not quite &mdash; the Redstone missile tested here became the Mercury-Redstone, which launched Alan Shepard."
    },
    "video": null,
    "cta": {
      "heading": "Curious where Marshall's test heritage began?",
      "body": "This National Historic Landmark marks the starting point of a test stand lineage that runs through every other stop on this tour."
    },
    "wayfindNext": { "nextStopId": "stop11", "label": "Next: Test Stand 116" },
    "nextStopId": "stop11"
  },
  {
    "id": "stop11",
    "qrFile": "11-test-stand-116",
    "title": "Test Stand 116: Five Facilities, One Number",
    "shortTitle": "Test Stand 116",
    "location": "Building 116 \u00b7 East Test Area",
    "locationShort": "Building 116, East Test Area",
    "subtitle": "East Test Area &middot; Building 116",
    "lab": "Propulsion",
    "tourTime": "~15 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["Adv. Space Transportation"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 74.6, "yPct": 84.4 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view centered on Test Stand 116, Building 116, East Test Area, on the NASA Marshall campus.",
      "credit": "USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/test-stand-116",
    "hero": {
      "src": "img/hero.jpg",
      "alt": "A bird's-eye view of a Fastrac II engine duration test at Marshall's Test Stand 116, part of the low-cost X-34 Reusable Launch Vehicle program.",
      "credit": "NASA/MSFC (1997) &middot; Fastrac II engine duration test, Test Stand 116 &middot; <b>images.nasa.gov</b> &middot; cleared for public release"
    },
    "callouts": [
      { "xPct": 45.0, "yPct": 70.0, "label": "Fastrac II exhaust plume" },
      { "xPct": 80.0, "yPct": 68.0, "label": "Engine nozzle at ignition" },
      { "xPct": 33.0, "yPct": 23.0, "label": "Overhead monitoring camera" },
      { "xPct": 90.0, "yPct": 45.0, "label": "Test stand support gantry" }
    ],
    "thumb": "img/hero.jpg",
    "factbox": "One open steel structure plus three adjacent bays, doing the work of five separate facilities: from cheap engine prototypes to full turbopump testing.",
    "narration": {
      "durationLabel": "~52 sec · produced narration",
      "audio": "audio/narration.mp3",
      "text": "Not every test stand needs to be built for one job. Test Stand 116 is actually an open steel structure for subscale hardware, paired with three adjacent bays for large-scale work: high-pressure engines, cryogenic propellant systems, turbopumps, and turbine blades all pass through here. In the 1990s, this stand hosted duration and ignition tests of the Fastrac engine, a low-cost engine designed for the X-34 Reusable Launch Vehicle program. Engineers tested different metal alloys in the nozzle while a ring of water nozzles sprayed a continuous stream onto the stand and engine to reduce damage. The X-34 and Fastrac programs were cancelled in 2001, but the stand kept working: later supporting water flow testing for the Space Launch System."
    },
    "hook": "Not every test stand needs to be built for one job.",
    "cuePoints": { "hook": 0, "explainer": 3, "wowStat": 23, "media": 35, "why": 45 },
    "whyItMatters": "Not every propulsion question needs a purpose-built stand. Test Stand 116 proves a more flexible model works too: the same steel structure and bays have supported low-cost engine prototypes, turbopump development, and even scale-model acoustic testing for launch environments, adapting to whatever program needs it next.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 1,
    "keyfacts": [
      { "num": "4", "label": "test positions", "detail": "One open steel structure plus three large-scale bays" },
      { "num": "40K", "label": "lbf Fastrac II tests", "detail": "Duration and ignition testing for the X-34 program, 1994\u201397" },
      { "num": "2001", "label": "X-34 cancelled", "detail": "But the stand went on to support SLS water flow testing" }
    ],
    "deepDive": {
      "summary": "Go deeper: the Fastrac engine, X-34, and what came after",
      "open": true,
      "html": "The Fastrac engine was designed as a low-cost alternative propulsion system for the X-34 Reusable Launch Vehicle, an experimental program exploring cheaper access to space. Testing at Test Stand 116 let engineers evaluate different metal alloys in the engine\u2019s nozzle and determine the true capabilities of the design under repeated firings. Though the X-34 and Fastrac programs ended in 2001, the stand\u2019s flexible, multi-bay design meant it never sat idle.<br><br>What makes Test Stand 116 unusual is its range: the same open steel structure and three adjacent bays have hosted high-pressure engine development, cryogenic propellant systems, turbopump and turbine-blade testing, and, in a completely different mode, scale-model acoustic testing: firing small rocket models to measure the sound environment a full-size vehicle will generate at liftoff. In 2014, engineers ran water flow tests here for the Space Launch System\u2019s Scale Model Acoustic Test series, simulating the water deluge system that suppresses launch-pad sound loads on the real pad, using a scaled-down SLS-with-boosters model instead of the genuine multi-million-dollar hardware. The earliest of the Fastrac firings, in 1996, were actually run for a related program, the X-33 reusable launch vehicle demonstrator, a year before dedicated X-34 testing began — and not every test was a full-engine firing; some isolated just the solid-fuel torch igniter on its own, before an assembled engine ever got a shot at the stand. Five very different kinds of test facility, one steel structure, one number."
    },
    "detailImage": {
      "src": "img/detail-1.jpg",
      "alt": "A close-up view of Bantam duration testing of the 40K Fastrac II engine for the X-34 program at Marshall's Test Stand 116.",
      "credit": "NASA/MSFC (1997) &middot; Bantam duration testing of the Fastrac II engine &middot; <b>images.nasa.gov</b>"
    },
    "galleryTitle": "More from Test Stand 116",
    "gallery": [
      {
        "src": "img/gallery-1.jpg",
        "alt": "A 15K Fastrac motor ignition test at Marshall's Test Stand 116, part of the low-cost engine program for the X-34 launch vehicle, 1994.",
        "credit": "NASA/MSFC (Sept. 22, 1994) &middot; <b>images.nasa.gov</b>",
        "caption": "An early 15K Fastrac ignition test &mdash; the first sparks of a low-cost engine program that would run for years."
      },
      {
        "src": "img/gallery-2.jpg",
        "alt": "A double-exposure photograph shows a 60K Bantam Fastrac thrust chamber assembly firing in Test Stand 116 while workers monitor from the blockhouse, 1997.",
        "credit": "NASA/MSFC (Aug. 7, 1997) &middot; <b>images.nasa.gov</b>",
        "caption": "One frame, two moments: the engine firing outside while engineers watch every second from the blockhouse."
      },
      {
        "src": "img/gallery-3.jpg",
        "alt": "Test engineer Dennis Strickland conducts water flow tests at Test Stand 116 for the Space Launch System Scale Model Acoustic Test series, 2014.",
        "credit": "NASA/MSFC/Emmett Given (April 21, 2014) &middot; <b>images.nasa.gov</b>",
        "caption": "Decades after Fastrac, the same stand supports water-flow testing for the Space Launch System's acoustic model."
      },
      {
        "src": "img/gallery-4.jpg",
        "alt": "An aerial photograph of Test Stand 116 at NASA Marshall Space Flight Center, 2016.",
        "credit": "NASA/MSFC/Fred Deaton (2016) &middot; <b>images.nasa.gov</b>",
        "caption": "Test Stand 116 from above &mdash; one open steel structure and three bays, doing the work of several dedicated facilities."
      },
      {
        "src": "img/gallery-5.jpg",
        "alt": "A 40K Fastrac II duration test at Test Stand 116, testing the ignition-delay timing between TEA and liquid oxygen, June 1997.",
        "credit": "NASA/MSFC (June 9, 1997) &middot; <b>images.nasa.gov</b>",
        "caption": "A second angle on Fastrac II duration testing &mdash; timing exactly how fast the TEA/LOX ignitor lit the engine."
      },
      {
        "src": "img/gallery-6.jpg",
        "alt": "An X-34 40K Fastrac II duration test at Test Stand 116, with the engine's TEA-Gas ignition burning green at the start of the burn, June 1997.",
        "credit": "NASA/MSFC (June 9, 1997) &middot; <b>images.nasa.gov</b>",
        "caption": "The same test session, caught at ignition &mdash; the TEA-Gas starter burns green before the main flame takes over."
      },
      {
        "src": "img/gallery-7.jpg",
        "alt": "A 40K single-thrust-cell Fastrac test for the X-33 program at Test Stand 116, with a green TEA-TEB ignition flame, May 1996.",
        "credit": "NASA/MSFC (May 7, 1996) &middot; <b>images.nasa.gov</b>",
        "caption": "A year before X-34 testing began, the same stand ran single-thrust-cell Fastrac tests for the related X-33 program."
      },
      {
        "src": "img/gallery-8.jpg",
        "alt": "A solid fuel torch test on the Fastrac II engine cell at Test Stand 116, July 1997.",
        "credit": "NASA/MSFC (July 8, 1997) &middot; <b>images.nasa.gov</b>",
        "caption": "Not every test here was a full engine firing &mdash; this one checked a solid-fuel torch igniter on its own."
      },
      {
        "src": "img/gallery-9.jpg",
        "alt": "Workers at the base of a Space Launch System scale-model booster stack during water flow testing at Test Stand 116, April 2014.",
        "credit": "NASA/MSFC/Emmett Given (April 21, 2014) &middot; <b>images.nasa.gov</b>",
        "caption": "A wider view of the same 2014 water-flow session, showing the full scale-model stack from below."
      },
      {
        "src": "img/gallery-10.jpg",
        "alt": "A technician monitors water flow testing of a Space Launch System scale model at Test Stand 116, with red inspection-tape markings on the model, April 2014.",
        "credit": "NASA/MSFC/Emmett Given (April 21, 2014) &middot; <b>images.nasa.gov</b>",
        "caption": "The same 2014 test series from a wider angle, with the scale model's inspection markings visible."
      },
      {
        "src": "img/gallery-11.jpg",
        "alt": "An aerial photograph of Test Stand 116 at NASA Marshall Space Flight Center, 2016.",
        "credit": "NASA/MSFC/Fred Deaton (2016) &middot; <b>images.nasa.gov</b>",
        "caption": "A second frame from the same 2016 aerial pass, with equipment on the pad in a different position."
      },
      {
        "src": "img/gallery-12.jpg",
        "alt": "A wide aerial photograph of Test Stand 116 at NASA Marshall Space Flight Center, showing the adjacent decommissioned test-stand tower to the north, 2016.",
        "credit": "NASA/MSFC/Fred Deaton (2016) &middot; <b>images.nasa.gov</b>",
        "caption": "Pulled back further, the same 2016 flight pass shows Test Stand 116 alongside a neighboring, now-decommissioned tower."
      }
    ],
    "lookFor": "Notice the water nozzles ringing the test position: that continuous spray protected both the stand and the engine from damage during repeated firings.",
    "askYourHost": [
      "What kind of hardware is being tested in this stand today?",
      "What made this stand adaptable enough to outlive the program it was built for?",
      "How do engineers decide which of the four test positions a new job needs?"
    ],
    "quiz": {
      "question": "Quick one &mdash; why was the Fastrac engine tested here in the 1990s?",
      "options": [
        { "text": "It was a low-cost engine developed for the experimental X-34 Reusable Launch Vehicle", "correct": true },
        { "text": "It was the main engine for the Space Shuttle", "correct": false },
        { "text": "It was a backup engine for the Saturn V", "correct": false }
      ],
      "correctFeedback": "&#10003; Exactly. Fastrac was built as a cheaper alternative propulsion system for the experimental X-34 program: testing here helped determine what alloys and designs could survive repeated firings.",
      "wrongFeedback": "Not quite &mdash; Fastrac was a low-cost engine developed for the X-34 Reusable Launch Vehicle program."
    },
    "video": null,
    "cta": {
      "heading": "Need a flexible test position?",
      "body": "Test Stand 116's multi-bay design continues to support propulsion hardware testing at Marshall today, from subscale prototypes to full-scale flow testing."
    },
    "wayfindNext": { "nextStopId": "stop12", "label": "Next: Environmental Test Facility" },
    "nextStopId": "stop12"
  },
  {
    "id": "stop12",
    "qrFile": "12-environmental-test",
    "title": "V20 Lunar Surface Simulator",
    "shortTitle": "V20 Chamber",
    "location": "Building 4619 \u00b7 Environmental Test Facility",
    "locationShort": "Building 4619",
    "subtitle": "V20 Thermal Vacuum Chamber &middot; Building 4619",
    "lab": "Experimental Fluids & Environmental",
    "tourTime": "~15 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["Mission & Payload Ops", "Artemis", "Commercial Access"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 74.5, "yPct": 80.4 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view centered on the Environmental Test Facility, East Test Area, on the NASA Marshall campus.",
      "credit": "USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/environmental-test-complex",
    "hero": {
      "src": "img/hero.jpg",
      "alt": "A lunar rover from the small business Starpath sits on a concrete slab designed to mimic the rugged lunar surface, at the mouth of the V20 thermal vacuum chamber at NASA Marshall's Environmental Test Facility, 2025.",
      "credit": "NASA/MSFC (NASA/Joe Kuner, 2025) &middot; Starpath's lunar rover at the V20 Thermal Vacuum Chamber &middot; <b>images.nasa.gov</b> &middot; cleared for public release"
    },
    "callouts": [
      { "xPct": 15.0, "yPct": 90.0, "label": "Wheel built for lunar terrain" },
      { "xPct": 10.0, "yPct": 55.0, "label": "Simulated lunar regolith" },
      { "xPct": 45.0, "yPct": 55.0, "label": "Engineer inspecting rover hardware" },
      { "xPct": 65.0, "yPct": 45.0, "label": "Thermal vacuum chamber wall" }
    ],
    "thumb": "img/hero.jpg",
    "factbox": "A 20-foot thermal vacuum chamber that recreates the lunar surface environment — regolith, extreme temperatures, vacuum, and South Pole lighting — to test hardware before it ever leaves Earth.",
    "narration": {
      "durationLabel": "~48 sec",
      "audio": "audio/narration.mp3",
      "text": "Before hardware ever sets foot on the Moon, it sets foot here. V20 is a twenty-foot thermal vacuum chamber that simulates the lunar surface environment — not just vacuum and temperature, but actual regolith and the harsh lighting of the South Pole. In 2025, a small company called Starpath brought a lunar rover here, set it on a concrete slab built to mimic the Moon's rugged surface, and slid the whole platform into the chamber, where lamps switched on and off to simulate sunlight and shadow. The chamber was expanded in 2022 specifically for this kind of work: full-scale hardware testing in lunar conditions. Different eras, different missions, same job: find out what breaks here, before it breaks on the Moon."
    },
    "hook": "Before hardware ever sets foot on the Moon, it sets foot here — in V20, where lunar regolith, vacuum, and that unforgiving South Pole sun are all recreated in one chamber.",
    "cuePoints": { "hook": 0, "explainer": 15, "wowStat": 28, "media": 36, "why": 43 },
    "whyItMatters": "Lunar hardware faces a brutal combination: hard vacuum, extreme temperature swings from sunlight to shadow, abrasive dust that gets into every mechanism, and lighting so harsh it can hide the ground itself. V20 recreates all of it in one chamber — not just thermal vacuum, but actual regolith simulant and lighting that mimics the South Pole sun — so rovers, landers, and equipment can prove they'll survive the Moon before they ever leave Earth.",
    "lookFor": "Look for the regolith bed on the loading cart — that sandy, rocky surface is engineered to match lunar soil properties. Hardware doesn't just sit in vacuum here; it sits on the Moon.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 0,
    "keyfacts": [
      { "num": "18", "label": "test chambers in ETF", "detail": "Thermal vacuum, humidity, altitude, cryogenic, and corrosion environments — V20 is the largest" },
      { "num": "20×28", "label": "ft V20 chamber", "detail": "Large enough for full-scale rover and lander testing in lunar surface environment" },
      { "num": "-170 to +200", "label": "°C temperature range", "detail": "V20 recreates the thermal extremes of sunlight and shadow on the lunar surface" },
      { "num": "2022", "label": "lunar capability added", "detail": "V20 expanded to include regolith testing, lighting simulation, and dust containment" },
      { "num": "60,000", "label": "lb cart capacity", "detail": "Heavy-duty rail system slides entire test setup — rover, regolith bed, concrete slab — into chamber" }
    ],
    "deepDive": {
      "summary": "Go deeper: how V20 simulates the lunar surface",
      "open": true,
      "html": "Starpath, a small technology startup, won second place overall at NASA’s Break the Ice Lunar Challenge and brought its rover to V20 for a real test in lunar-like conditions. Engineers built a concrete slab with sandy, rocky terrain to mimic the Moon’s surface, slid it into the chamber alongside the rover on V20’s 60,000-lb capacity cart, and cycled the chamber’s lamps on and off to recreate the harsh lighting changes of the lunar South Pole environment.<br><br>V20 was expanded in 2022 specifically for this mission. Two 32-inch diffusion pumps were added to handle the gas loads from regolith operations — sintering, additive manufacturing, and dust mitigation testing. A negative-pressure dust containment tent encloses the chamber’s working area, and respirator-trained technicians handle test articles in this deliberately \"dirty\" environment. The chamber can reach vacuum levels of 5×10⁻⁷ Torr while cycling temperatures from -170°C to +200°C, with a liquid nitrogen shroud and IR lamps recreating the thermal extremes of sunlight and shadow.<br><br>The regolith simulant itself is engineered to match lunar soil properties — particle size, abrasiveness, electrostatic behavior. Hardware doesn’t just experience vacuum and temperature here; it experiences the Moon: dust infiltrating seals, thermal cycling stressing joints, and lighting conditions that can hide obstacles and slopes.<br><br><strong>Context: V20 is the largest of 18 chambers in the Environmental Test Facility (ETF).</strong> The other 17 chambers handle thermal vacuum, humidity, altitude, vacuum bakeout, and launch simulation testing. ETF as a facility provides the full range of environmental qualification testing, but V20’s lunar regolith capability makes it unique."
    },
    "detailImage": {
      "src": "img/detail-1.jpg",
      "alt": "The Apollo Telescope Mount, one of four major components of Skylab, undergoes horizontal vibration testing in a vibration test unit at Marshall Space Flight Center, 1971.",
      "credit": "NASA/MSFC (1971) &middot; Apollo Telescope Mount vibration testing &middot; <b>images.nasa.gov</b>"
    },
    "galleryTitle": "More from the Environmental Test Facility",
    "gallery": [
      {
        "src": "img/gallery-1.jpg",
        "alt": "Environmental Test Facility employees and the Starpath team push a sliding platform carrying a lunar rover and concrete slab into a thermal vacuum chamber at NASA Marshall, July 2025.",
        "credit": "NASA/MSFC/Joe Kuner (July 30, 2025) &middot; <b>images.nasa.gov</b>",
        "caption": "Rover, concrete slab, and all &mdash; the whole simulated lunar surface slides into the chamber together."
      },
      {
        "src": "img/gallery-2.jpg",
        "alt": "Members of the Starpath team discuss final preparations before a thermal vacuum chamber is closed for lunar rover testing at NASA Marshall, July 2025.",
        "credit": "NASA/MSFC/Joe Kuner (July 30, 2025) &middot; <b>images.nasa.gov</b>",
        "caption": "Last checks before the door seals &mdash; once it's closed, the rover is on its own."
      },
      {
        "src": "img/gallery-3.jpg",
        "alt": "Environmental Test Facility employees work with the Starpath team to maneuver a lunar rover onto a sliding platform, NASA Marshall, July 2025.",
        "credit": "NASA/MSFC/Joe Kuner (July 30, 2025) &middot; <b>images.nasa.gov</b>",
        "caption": "Careful hands-on positioning before the rover ever sees vacuum or temperature extremes."
      },
      {
        "src": "img/gallery-4.jpg",
        "alt": "Starpath's lunar rover sits atop a concrete slab at the open mouth of the V20 Thermal Vacuum Chamber at NASA Marshall's Environmental Test Facility, ready to be closed in for testing, July 2025.",
        "credit": "NASA/MSFC/Joe Kuner (July 30, 2025) &middot; <b>images.nasa.gov</b>",
        "caption": "The V20 chamber's open door, with the rover staged right at the threshold."
      },
      {
        "src": "img/gallery-5.jpg",
        "alt": "Starpath's lunar rover sits on a concrete slab built with sandy, rocky terrain to mimic the Moon's surface, before entering the vacuum chamber at NASA Marshall, July 2025.",
        "credit": "NASA/MSFC/Joe Kuner (July 30, 2025) &middot; <b>images.nasa.gov</b>",
        "caption": "Lamps inside the chamber cycle on and off over this slab to simulate lunar day and night."
      },
      {
        "src": "img/gallery-6.jpg",
        "alt": "Wide view of the sliding platform and rail system at the V20 Thermal Vacuum Chamber, with Starpath's rover resting on a concrete slab at the platform's end, NASA Marshall, July 2025.",
        "credit": "NASA/MSFC/Joe Kuner (July 30, 2025) &middot; <b>images.nasa.gov</b>",
        "caption": "The rover rides this whole metal platform straight into the chamber."
      },
      {
        "src": "img/gallery-7.jpg",
        "alt": "Members of the Starpath team remotely operate the lunar rover and review data ahead of its entrance to the V20 Thermal Vacuum Chamber at NASA Marshall, July 2025.",
        "credit": "NASA/MSFC/Joe Kuner (July 30, 2025) &middot; <b>images.nasa.gov</b>",
        "caption": "One last remote checkout before the rover goes in alone."
      },
      {
        "src": "img/gallery-8.jpg",
        "alt": "Starpath mechanical engineer Josh Kavilaveettil monitors a wired rover component ahead of testing at NASA Marshall's Environmental Test Facility, July 2025.",
        "credit": "NASA/MSFC/Joe Kuner (July 30, 2025) &middot; <b>images.nasa.gov</b>",
        "caption": "Instrumentation wiring gets a final check before the rover is sealed inside."
      },
      {
        "src": "img/gallery-9.jpg",
        "alt": "NASA test engineers use an overhead hoist to situate Starpath's rover over its concrete slab before removing the suspension straps, NASA Marshall's Environmental Test Facility, July 2025.",
        "credit": "NASA/MSFC/Joe Kuner (July 30, 2025) &middot; <b>images.nasa.gov</b>",
        "caption": "Lowering the rover onto its slab &mdash; the straps come off once it's settled."
      }
    ],
    "askYourHost": [
      "How do engineers decide which of the 18 ETF chambers a piece of hardware actually needs?",
      "What was it like hosting a commercial lunar rover here in 2025?",
      "Has a chamber here ever caught a flaw that would've caused a mission failure?"
    ],
    "quiz": {
      "question": "Quick one — why does ETF run 18 separate chambers instead of one general-purpose chamber?",
      "options": [
        { "text": "Different missions face different combinations of vacuum, temperature, humidity, and altitude environments", "correct": true },
        { "text": "It's cheaper to build many small chambers than one large one", "correct": false },
        { "text": "Each chamber can only be used once", "correct": false }
      ],
      "correctFeedback": "✓ Exactly. No single environment recreates every mission's challenges, so specialized chambers let engineers match testing to the specific conditions each spacecraft or lander will actually face.",
      "wrongFeedback": "Not quite &mdash; the real reason is that different missions face very different combinations of environmental extremes."
    },
    "video": null,
    "cta": {
      "heading": "Need to prove hardware survives its environment?",
      "body": "Marshall's Environmental Test Facility supports thermal vacuum, vibration, and environmental qualification testing for NASA programs, other agencies, and commercial partners."
    },
    "wayfindNext": { "nextStopId": "stop13", "label": "Next: Test Stand 115" },
    "nextStopId": "stop13"
  },
  {
    "id": "stop13",
    "qrFile": "13-test-stand-115",
    "title": "Test Stand 115: Small Enough to Be Wrong",
    "shortTitle": "Test Stand 115",
    "location": "East Test Area, MSFC",
    "locationShort": "East Test Area",
    "subtitle": "East Test Area · Test Stand 115",
    "lab": "Propulsion",
    "tourTime": "~15 min",
    "groupSize": null,
    "accessible": true,
    "chips": [
      "Adv. Space Transportation"
    ],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 71.2, "yPct": 83.4 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view centered on Test Stand 115, East Test Area, on the NASA Marshall campus.",
      "credit": "USDA/USGS &middot; National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/test-stand-115",
    "hero": {
      "src": "img/hero.jpg",
      "alt": "A subscale rocket combustion chamber test-fires at Test Stand 115 at NASA Marshall Space Flight Center, part of a joint Army-NASA evaluation of a self-cooled vortex combustion chamber.",
      "credit": "NASA/MSFC · One of over thirty tests on the Vortex Combustion Chamber Engine at Test Stand 115 (2003) · <b>images.nasa.gov</b> · cleared for public release"
    },
    "callouts": [
      { "xPct": 82.0, "yPct": 68.0, "label": "Vortex combustion chamber throat" },
      { "xPct": 80.0, "yPct": 22.0, "label": "Water deluge cooling spray" },
      { "xPct": 25.0, "yPct": 75.0, "label": "Exhaust and steam cloud" },
      { "xPct": 32.0, "yPct": 25.0, "label": "Test stand support structure" }
    ],
    "thumb": "img/hero.jpg",
    "factbox": "A small stand for small hardware — injectors, chambers, and nozzles up to a few thousand pounds of thrust — where computer models get told whether they were right.",
    "narration": {
      "durationLabel": "~50 sec · produced narration",
      "audio": "audio/narration.mp3",
      "text": "Not everything here needs to be huge. Test Stand 115 fires small-scale combustion hardware — injectors, chambers, and nozzles — to answer a very specific question: does the computer model match reality? In one campaign, NASA and the Army's Redstone Arsenal fired more than thirty tests of a self-cooled vortex combustion chamber, an unusual design that spins propellant along the chamber wall to keep it cool without extra hardware. Later, this stand test-fired a subscale injector for the J-2X engine, the upper-stage engine once planned for the Ares One rocket. Small stand, small hardware, but the data it produces gets trusted on engines a hundred times its size."
    },
    "hook": "Not everything here needs to be huge. Test Stand 115 fires small-scale combustion hardware — injectors, chambers, and nozzles — to answer a very specific question: does the computer model match reality?",
    "cuePoints": { "hook": 0, "explainer": 15, "wowStat": 29, "media": 38, "why": 45 },
    "whyItMatters": "Computer models of rocket combustion — how propellants mix, burn, and cool the chamber wall — are only trustworthy once they've been checked against real hardware. Building and firing a full-scale engine for every design idea would be slow and expensive. Test Stand 115 lets engineers fire small, cheap, representative hardware first, catching bad assumptions early and feeding real data back into the models trusted on much larger propulsion systems.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 1,
    "keyfacts": [
      {
        "num": "30+",
        "label": "vortex chamber tests",
        "detail": "A joint NASA/Army evaluation of a self-cooled combustion chamber design"
      },
      {
        "num": "40k",
        "label": "subscale J-2X injector",
        "detail": "Test-fired here for the Ares I upper-stage engine program"
      },
      {
        "num": "7,500",
        "label": "lbf capacity",
        "detail": "Small-scale injector, chamber, and nozzle testing up to this thrust level"
      },
      {
        "num": "251",
        "label": "sec. RDRE hot-fire (2023)",
        "detail": "Record-duration test of a 3D-printed Rotating Detonation Rocket Engine combustor"
      }
    ],
    "deepDive": {
      "summary": "Go deeper: a chamber that cools itself",
      "open": true,
      "html": "The vortex combustion chamber tested here relies on tangentially injected propellant along the chamber wall, using centrifugal force to keep the relatively cold liquid propellant near the surface it needs to protect. It's the kind of idea that sounds reasonable on paper and then has to prove itself in more than thirty real test firings — exactly the role a small stand like this plays across MSFC's propulsion test inventory.<br><br>Years later, the same stand took on a very different job: firing a subscale injector for the J-2X, the liquid hydrogen/liquid oxygen engine developed for the upper stage of the Ares I rocket, part of NASA's since-cancelled Constellation Program. A 40,000-pound-thrust subscale injector is a small piece of a much larger engine, but injector design — how fuel and oxidizer actually meet and mix at the top of the combustion chamber — is exactly the kind of detail that benefits from being tested small, tested often, and tested cheap before it's ever trusted on a human-rated engine.<br><br>More recently, in 2022 and 2023, this stand hosted hot-fire testing of NASA's Rotating Detonation Rocket Engine (RDRE) — a fundamentally different combustion cycle that sustains continuous detonation waves instead of steady burning, promising a lighter, simpler engine with fewer parts. A September 2023 test of a full-scale, 3D-printed RDRE combustor ran a record 251 seconds and topped 5,800 pounds of thrust. Same small stand, same role validating an unproven idea before it earns a place on real flight hardware — just decades and combustion cycles apart from the vortex chamber and J-2X work that came before it."
    },
    "detailImage": {
      "src": "img/detail-1.jpg",
      "alt": "An HD video still of a subscale J-2X injector test firing at Test Stand 115, MSFC, part of the Ares I upper-stage engine program.",
      "credit": "NASA/MSFC · Test firing of a 40k subscale J-2X injector at Test Stand 115 (2007) · <b>images.nasa.gov</b> · cleared for public release"
    },
    "galleryTitle": "More from Test Stand 115",
    "gallery": [
      {
        "src": "img/gallery-1.jpg",
        "alt": "A full-scale, 3D-printed Rotating Detonation Rocket Engine combustor hot-fires at Test Stand 115, MSFC, September 2023.",
        "credit": "NASA/MSFC (Sept. 27, 2023) &middot; <b>images.nasa.gov</b>",
        "caption": "A record 251-second hot fire of a full-scale, 3D-printed Rotating Detonation Rocket Engine combustor, topping 5,800 pounds of thrust."
      }
    ],
    "lookFor": "Notice how modest this stand looks compared to the towering structures elsewhere on the tour — the hardware it fires is small on purpose, so the data comes back fast and cheap.",
    "askYourHost": [
      "How closely do these small-scale results end up matching a full-size engine?",
      "What made the self-cooled vortex chamber design worth thirty-plus tests?",
      "Why did the J-2X program need subscale injector data before building the real thing?"
    ],
    "quiz": {
      "question": "Quick one — why fire small-scale hardware here instead of only testing full-size engines?",
      "options": [
        {
          "text": "Small hardware is easier to transport",
          "correct": false
        },
        {
          "text": "It's faster and cheaper to validate combustion models before committing to full-scale hardware",
          "correct": true
        },
        {
          "text": "Full-size engines can't be test-fired at all",
          "correct": false
        }
      ],
      "correctFeedback": "✓ Exactly. Small, representative hardware lets engineers check their models quickly and cheaply, before trusting them on engines a hundred times the size.",
      "wrongFeedback": "Not quite — the point is faster, cheaper validation of combustion models before committing to full-scale hardware."
    },
    "video": {
      "sectionTitle": "Watch: the RDRE hot fire",
      "src": "video/clip.mp4",
      "poster": "img/gallery-1.jpg",
      "title": "Rotating Detonation Rocket Engine hot-fire test at Test Stand 115",
      "credit": "NASA/MSFC (Sept. 27, 2023) &middot; 251-second hot fire of a full-scale, 3D-printed RDRE combustor &middot; <b>images.nasa.gov</b> &middot; plays locally / offline. Production clip ships with captions (508)."
    },
    "cta": {
      "heading": "Need to validate a combustion model?",
      "body": "Test Stand 115 supports small-scale injector, chamber, and nozzle testing for NASA programs, the U.S. Army, and commercial partners."
    },
    "wayfindNext": { "nextStopId": "stop14", "label": "Next: Load Test Annex" },
    "nextStopId": "stop14"
  },
  {
    "id": "stop14",
    "qrFile": "14-load-test-annex",
    "title": "Load Test Annex (LTA): Building 4619",
    "shortTitle": "Load Test Annex",
    "location": "Building 4619 · Load Test Annex",
    "locationShort": "Building 4619",
    "subtitle": "Building 4619 · Load Test Annex",
    "lab": "Structural Strength",
    "tourTime": "~15 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["Adv. Space Transportation", "SLS"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 49.5, "yPct": 48.1 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view of Building 4619 at NASA Marshall Space Flight Center.",
      "credit": "USDA/USGS · National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/shared",
    "hero": {
      "src": "img/NASA-Logo-Large.png",
      "alt": "NASA logo placeholder",
      "credit": "Placeholder · awaiting cleared imagery"
    },
    "thumb": "img/NASA-Logo-Large.png",
    "heroBg": "img/NASA-Logo-Large.png",
    "factbox": "A 155-foot-tall high bay with an adjustable crosshead that can apply 30 million pounds of vertical force to prove rocket stages and spacecraft structures will survive the stresses of launch.",
    "narration": {
      "durationLabel": "~30 sec",
      "text": "The Load Test Annex is Marshall's original large-scale structural test capability, where hardware faces the crushing compression of stacked stages, the pulling tension of thrust, and the lateral loads of wind and vibration. The high bay soars 155 feet tall with a 60-foot-wide door — large enough to roll in rocket stages and spacecraft structures. The concrete reaction floor is 11 feet thick with 2,356 anchors on an 18-inch grid, each rated for 110,000 pounds axial force. An adjustable crosshead spans the bay at heights from 40 to 115 feet, capable of applying 30 million pounds vertical force. This is where structures prove they're strong enough for space."
    },
    "hook": "When rocket stages need to prove they won't buckle under their own weight, they come here first.",
    "cuePoints": { "hook": 0, "explainer": 10, "wowStat": 18, "media": 24, "why": 28 },
    "whyItMatters": "Rocket stages stack hundreds of thousands of pounds on top of each other. Spacecraft structures must hold together while engines shake them and aerodynamic pressure tries to bend them. LTA recreates those exact forces on the ground — compression that would crush a building, tension that would tear steel, lateral loads that would topple towers. A failure here saves a mission. A crack discovered here prevents a disaster in flight.",
    "lookFor": "Look up at the adjustable crosshead — that massive steel structure spanning the bay can position itself anywhere from 40 to 115 feet high, then apply 30 million pounds of downward force without budging.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 1,
    "keyfacts": [
      { "num": "161×169×155", "label": "ft high bay", "detail": "Tall enough to test full-scale rocket stages standing upright" },
      { "num": "30M", "label": "lb vertical force", "detail": "Adjustable crosshead can apply crushing compression or pulling tension" },
      { "num": "2,356", "label": "anchors on 18-inch grid", "detail": "Universal pattern allows rapid reconfiguration — compatible with test stands 4693, 4697, and LTAE" },
      { "num": "11", "label": "feet of concrete", "detail": "Reaction floor thickness required to handle tens of millions of pounds without deflecting" },
      { "num": "40-115", "label": "ft adjustable crosshead", "detail": "Massive steel structure repositions to match any test article height" }
    ],
    "deepDive": {
      "summary": "Go deeper: how LTA tests structures to their breaking point",
      "open": false,
      "html": "Structural testing isn't about hoping hardware survives. It's about knowing exactly when and how it will fail — but only after proving it can survive far beyond the loads it will actually see in flight.<br><br>LTA uses a massive adjustable crosshead that spans the 161-foot width of the high bay. This steel structure weighs hundreds of tons and can position itself at any height from 40 to 115 feet, then lock in place to become an immovable reaction point. Hydraulic actuators attached to the crosshead can pull upward or push downward with 30 million pounds of vertical force. Side actuators apply 2.4 million pounds of lateral load, simulating wind pressure or aerodynamic forces.<br><br>Below, the test article sits bolted to Special Test Equipment (STE) fixtures anchored into the concrete reaction floor. That floor is 80 feet by 80 feet and 11 feet thick, with 2,356 anchor points on an 18-inch grid. Each anchor can handle 110,000 pounds axial force and 18,000 pounds shear. The floor itself won't deflect even a fraction of an inch under maximum load.<br><br>As hydraulic pressure builds, data systems monitor thousands of channels simultaneously — strain gauges bonded to the structure, displacement transducers measuring how far things move, load cells verifying exactly how much force is being applied. Video Image Correlation cameras capture the entire test article's surface, producing real-time color contour maps showing strain and deflection. Engineers watch for the moment when metal starts yielding, when composite starts delaminating, when welds begin to crack.<br><br>Environmental conditions can be layered on top of mechanical loads. A test article might be chilled to -423°F with liquid hydrogen flowing through it, then loaded to flight levels, simulating a cryogenic propellant tank under thrust loads. The test runs until one of three outcomes: the hardware passes at required loads (qualification), the hardware reaches its design limit load (verification), or the hardware fails (ultimate load testing). That failure is controlled, measured, and understood — exactly what engineers need to know."
    },
    "detailImage": {
      "src": "img/NASA-Logo-Large.png",
      "alt": "Placeholder image",
      "credit": "Placeholder · awaiting cleared imagery"
    },
    "askYourHost": [
      "What's the difference between LTA and LTAE — why do we need both?",
      "How does the adjustable crosshead work? How long does it take to reposition?",
      "What's the largest structure ever tested in LTA?",
      "Has a test here ever caught a flaw that would've caused a mission failure?",
      "How do you decide whether to test in LTA vs. the outdoor stands 4693/4697?"
    ],
    "quiz": {
      "question": "The Load Test Annex has an adjustable crosshead that can move between 40 and 115 feet high. Why adjustable instead of fixed?",
      "options": [
        { "text": "Different test articles need load applied at different heights", "correct": true },
        { "text": "The crosshead doubles as a crane for moving hardware", "correct": false },
        { "text": "Adjusting height prevents building foundation damage", "correct": false }
      ],
      "correctFeedback": "✓ Exactly. A rocket stage might need compression from the top, a spacecraft bus might need tension from its mounting points, a lander might need lateral loads at leg attachment height. One adjustable crosshead handles all of them without rebuilding fixtures.",
      "wrongFeedback": "Not quite. The adjustable height lets engineers apply loads at the exact location each test article needs — compression from above, tension from attachment points, lateral loads at critical joints — all with one versatile system."
    },
    "cta": {
      "heading": "Need structural load testing?",
      "body": "The Load Test Annex at Building 4619 supports structural qualification testing for NASA programs and partners."
    },
    "wayfindNext": { "nextStopId": "stop15", "label": "Next: Load Test Annex Extension" },
    "nextStopId": "stop15"
  },
  {
    "id": "stop15",
    "qrFile": "15-load-test-annex-extension",
    "title": "Load Test Annex Extension (LTAE): Building 4619",
    "shortTitle": "Load Test Annex Extension",
    "location": "Building 4619 · Load Test Annex Extension",
    "locationShort": "Building 4619",
    "subtitle": "Building 4619 · Load Test Annex Extension",
    "lab": "Structural Strength",
    "tourTime": "~15 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["Adv. Space Transportation", "SLS", "Commercial Access"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 49.5, "yPct": 48.1 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view of Building 4619 at NASA Marshall Space Flight Center.",
      "credit": "USDA/USGS · National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/shared",
    "hero": {
      "src": "img/NASA-Logo-Large.png",
      "alt": "NASA logo placeholder",
      "credit": "Placeholder · awaiting cleared imagery"
    },
    "thumb": "img/NASA-Logo-Large.png",
    "heroBg": "img/NASA-Logo-Large.png",
    "factbox": "A 203-foot high bay with powerful overhead cranes and a concrete reaction floor where structures are tested under millions of pounds of force before they ever fly.",
    "narration": {
      "durationLabel": "~30 sec",
      "text": "The Load Test Annex Extension is part of Marshall's Structural Strength Test Lab, where hardware faces compression, tension, and lateral loads measured in millions of pounds. This high bay housed the SLS core stage Engine Section structural test equipment — proving the rocket's backbone could handle the stresses of launch. The concrete reaction floor is built on a 10-foot grid with 106 anchor pads, each capable of 340,000 pounds axial force. Overhead cranes move test articles into place, then hydraulic actuators apply loads while data systems measure every strain, displacement, and deformation in real time."
    },
    "hook": "Before it holds rocket stages, it holds here — under millions of pounds of force.",
    "cuePoints": { "hook": 0, "explainer": 8, "wowStat": 18, "media": 24, "why": 28 },
    "whyItMatters": "Space hardware must survive forces that would crush ordinary structures — the compression of stacked stages, the tension of thrust, the lateral loads of wind and vibration. LTAE applies those exact forces on the ground, finding weak points before hardware ever leaves Earth. A crack discovered here saves a mission. A failure here prevents a disaster in flight.",
    "lookFor": "Look for the 10-foot grid pattern in the concrete floor — those anchor pads can each hold 340,000 pounds, and 106 of them mean this facility can handle tens of millions of pounds of combined force.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 1,
    "keyfacts": [
      { "num": "95×203×97", "label": "ft high bay", "detail": "Large enough to test full-scale rocket stages and large spacecraft structures" },
      { "num": "106", "label": "anchor pads, 340k lb each", "detail": "10-foot grid pattern on concrete reaction floor — rapid reconfiguration for different test articles" },
      { "num": "10", "label": "feet of concrete", "detail": "Reaction floor thickness required to handle millions of pounds of structural load" },
      { "num": "SLS", "label": "Engine Section heritage", "detail": "Core stage structure connecting four RS-25 engines (2 million lb thrust) tested here" },
      { "num": "17,808", "label": "data channels", "detail": "Real-time measurement of strain, deflection, temperature, pressure, load across ET30 SSTL" }
    ],
    "deepDive": {
      "summary": "Go deeper: how LTAE applies millions of pounds of force",
      "open": false,
      "html": "Structural testing is controlled violence. Engineers need to know exactly when and how hardware will fail — but only after proving it can survive far beyond the loads it will actually see in flight.<br><br>LTAE uses closed-loop hydraulic actuator systems with calibrated load cells to apply compression, tension, and lateral forces. The test article is bolted to Special Test Equipment (STE) fixtures anchored into the concrete reaction floor — 106 anchor pads on a 10-foot grid, each rated for 340,000 pounds axial force and 44,000 pounds shear. The floor itself is 70 feet by 160 feet and 10 feet thick.<br><br>Data systems measure strain, displacement, temperature, and pressure in real time — sometimes thousands of channels simultaneously. Video Image Correlation uses calibrated camera pairs to produce full field-of-view strain and deflection measurements, displayed as color contour maps during the test. Engineers watch for the moment when readings deviate from predictions, signaling the start of structural failure.<br><br>Environmental profiles can be simulated during load testing: heat, cryogenic temperatures, vacuum, humidity. A test might combine the thermal stresses of propellant at -423°F with the mechanical loads of thrust and aerodynamic pressure.<br><br>The SLS Engine Section test used this capability to verify the structure connecting the rocket's four RS-25 engines to the rest of the core stage. That's where 2 million pounds of thrust meets the vehicle — if it failed, the mission would be over before it began."
    },
    "detailImage": {
      "src": "img/NASA-Logo-Large.png",
      "alt": "Placeholder image",
      "credit": "Placeholder · awaiting cleared imagery"
    },
    "askYourHost": [
      "What's the difference between LTA and LTAE — why do we need both?",
      "How do engineers know when a structure is about to fail during a test?",
      "What's the largest or most impressive structure ever tested in LTAE?",
      "Has a test here ever caught a flaw that would've caused a mission failure?",
      "How long does a typical structural test campaign take from setup to completion?"
    ],
    "quiz": {
      "question": "Why does the LTAE reaction floor need to be 10 feet of solid concrete?",
      "options": [
        { "text": "To handle millions of pounds of force without cracking or moving", "correct": true },
        { "text": "To provide thermal insulation for cryogenic testing", "correct": false },
        { "text": "To meet building code requirements for high bay structures", "correct": false }
      ],
      "correctFeedback": "✓ Exactly. When you're applying hundreds of thousands of pounds per anchor point — and potentially tens of millions of pounds across the entire floor — you need a foundation that won't budge. That 10 feet of concrete is the immovable object against the unstoppable force.",
      "wrongFeedback": "Not quite. The real reason is structural — the floor must react millions of pounds of force without deflecting or cracking, providing a rigid foundation for precision load testing."
    },
    "cta": {
      "heading": "Need structural load testing?",
      "body": "The Load Test Annex Extension at Building 4619 supports structural qualification testing for NASA programs and partners."
    },
    "wayfindNext": { "nextStopId": "stop16", "label": "Next: Structural Dynamics Test Capability" },
    "nextStopId": "stop16"
  },
  {
    "id": "stop16",
    "qrFile": "16-vibe-table",
    "title": "Structural Dynamics Test Capability: Building 4619",
    "shortTitle": "Vibe Table",
    "location": "Building 4619 · Structural Dynamics Test Capability",
    "locationShort": "Building 4619",
    "subtitle": "Building 4619 · Vibe Table",
    "lab": "Structural Dynamics",
    "tourTime": "~20 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["Adv. Space Transportation"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 49.5, "yPct": 48.1 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view of Building 4619 at NASA Marshall Space Flight Center.",
      "credit": "USDA/USGS · National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/shared",
    "hero": {
      "src": "img/NASA-Logo-Large.png",
      "alt": "NASA logo placeholder",
      "credit": "Placeholder · awaiting cleared imagery"
    },
    "thumb": "img/NASA-Logo-Large.png",
    "heroBg": "img/NASA-Logo-Large.png",
    "factbox": "Vibration testing capability within Building 4619.",
    "narration": {
      "durationLabel": "~30 sec",
      "text": "Content coming soon for the Structural Dynamics Test Capability."
    },
    "hook": "Content coming soon.",
    "whyItMatters": "The Vibe Table provides structural dynamics and vibration testing capability for NASA programs.",
    "keyfactsTitle": "By the numbers",
    "wowStat": 0,
    "keyfacts": [
      { "num": "TBD", "label": "placeholder", "detail": "Content coming soon" }
    ],
    "deepDive": {
      "summary": "Go deeper: how it works",
      "open": false,
      "html": "Content coming soon."
    },
    "detailImage": {
      "src": "img/NASA-Logo-Large.png",
      "alt": "Placeholder image",
      "credit": "Placeholder · awaiting cleared imagery"
    },
    "askYourHost": [],
    "quiz": {
      "question": "Content coming soon",
      "options": [
        { "text": "Option A", "correct": true },
        { "text": "Option B", "correct": false }
      ],
      "correctFeedback": "Correct!",
      "wrongFeedback": "Not quite."
    },
    "cta": {
      "heading": "Need vibration testing?",
      "body": "The Structural Dynamics Test Capability at Building 4619 supports vibration qualification testing for NASA programs and partners."
    },
    "wayfindNext": { "nextStopId": "stop17", "label": "Next: Special Test Equipment" },
    "nextStopId": "stop17"
  },
  {
    "id": "stop17",
    "qrFile": "17-et50-special-test-equipment",
    "title": "Special Test Equipment & Design: Engineering the Infrastructure",
    "shortTitle": "Special Test Equipment",
    "location": "Building 4666 · ET50",
    "locationShort": "Building 4666",
    "subtitle": "Special Test Equipment & Design Branch · Building 4666",
    "lab": "Special Test Equipment",
    "tourTime": "~45 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["Engineering", "Infrastructure"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 52.0, "yPct": 50.0 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view of Building 4666 at NASA Marshall Space Flight Center.",
      "credit": "USDA/USGS · National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/special-test-equipment",
    "hero": {
      "src": "img/nasa-logo.png",
      "alt": "NASA logo placeholder",
      "credit": "Placeholder · awaiting cleared imagery"
    },
    "thumb": "img/nasa-logo.png",
    "factbox": "ET50 doesn't have tour stops of its own — they design and build the infrastructure that makes everyone else's testing possible.",
    "narration": {
      "durationLabel": "~50 sec",
      "text": "The historic F-1 stand was demolished November 30, 2012, the same day as the Ground Support Equipment Internal Design Review Dry-Run, held in the new building 4602. This was very much in the early phases of the SLS Program, and on the heels of Ares cancellation. The demo happened during the review. A large boom was heard, and the NASA GSE Design Lead acknowledged that the noise was the F-1 demo. At the time, SLS's future was far from assured, and the loss of such a historic stand alongside an uncertain future felt bittersweet. Ultimately, the demo of the F-1 stand enabled buildup of necessary test capabilities for SLS."
    },
    "hook": "The historic F-1 stand was demolished November 30, 2012, the same day as the Ground Support Equipment Internal Design Review Dry-Run.",
    "cuePoints": { "hook": 0, "explainer": 12, "wowStat": 30, "media": 38, "why": 45 },
    "whyItMatters": "ET50 is the backbone of Marshall's test capabilities. They design the custom hardware, build the test stands, and maintain the infrastructure that enables breakthrough testing across every other branch. Without ET50's ingenuity and institutional memory, Marshall's leadership in test would not exist.",
    "whyItMattersToYou": "When you see a rocket tested at Marshall, you're watching ET50's infrastructure at work. The strand jacks, mast climbers, common floor patterns, and reusable hardware are all engineered here. ET50 turns impossible test requirements into physical reality.",
    "whyItMattersToWorld": "ET50's work enables NASA's missions and commercial partners to validate hardware before it flies. Their innovations — from the 221-foot test stand at 4693 to modular shear towers that move between facilities — save time and money while ensuring mission success.",
    "keyfactsTitle": "What ET50 Does",
    "wowStat": 1,
    "keyfacts": [
      { "num": "221'", "label": "tall test stand at 4693", "detail": "Slightly taller than the historic F-1 stand, built for SLS testing" },
      { "num": "100yr", "label": "Blue Origin lease at WTA", "detail": "ET50 coordinates West Test Area activities around Blue Origin testing" },
      { "num": "4 years", "label": "to build 4693", "detail": "Bulk structure contracted through Facilities; specialty interface hardware designed by ET50" },
      { "num": "Multiple", "label": "facilities supported", "detail": "ET50 designs and maintains hardware across 4693, 4670, 4697, 4699, 4550, and more" }
    ],
    "deepDive": {
      "summary": "Go deeper: ET50's engineering philosophy",
      "open": true,
      "html": "Few things in test ever 'go away.' Hardware is re-used and updated all the time. Customers are frequently delighted to save cost and schedule by re-using hardware from previous programs.<br><br>Example: The mast climbers at 4693 were originally purchased as part of Ares Dynamic Test buildup over in 4550. The common floor anchor pattern used in LTA, at 4693, and 4697 cost slightly more for SLS project to implement upfront, but it took people advocating for the common pattern for it to be implemented. Now it's a long-term value add to NASA mission — it saves money for future projects because different hardware (shear towers, other STE) can be moved modularly across those locations.<br><br>ET50's documentation goes back to MSFC's beginning days. It is fascinating to trace different hardware across different project applications — from Apollo through Shuttle, Ares, SLS, and future missions."
    },
    "detailImage": {
      "src": "img/nasa-logo.png",
      "alt": "Placeholder image",
      "credit": "Placeholder · awaiting cleared imagery"
    },
    "lookFor": "ET50 doesn't have a single stop to visit — their work is everywhere. Look for the 'blue stuff' (specialty interface hardware) on test stands, the strand jacks at the top of 4693, and the common floor patterns that enable hardware to move between facilities.",
    "galleryTitle": "ET50's Work Across Marshall",
    "gallery": [],
    "askYourHost": [
      "How does ET50 decide whether to build new hardware or re-use existing equipment?",
      "What's the most challenging piece of test infrastructure ET50 has designed?",
      "How does ET50 balance project-specific needs with long-term NASA capability investments?",
      "What hardware from Apollo or Shuttle is still in use today?"
    ],
    "quiz": {
      "question": "Why is ET50 called 'Special' Test Equipment?",
      "options": [
        { "text": "They test classified programs", "correct": false },
        { "text": "They design custom infrastructure that enables all other test branches", "correct": true },
        { "text": "They have the largest building", "correct": false }
      ],
      "correctFeedback": "Exactly. ET50 designs and builds the custom hardware that makes testing possible across every other branch.",
      "wrongFeedback": "Not quite — ET50 is special because they engineer the infrastructure that enables all other testing at Marshall."
    },
    "cta": {
      "heading": "Need custom test infrastructure?",
      "body": "ET50 specializes in designing and building unique test hardware for complex programs. From test stands to Ground Support Equipment, they turn requirements into reality."
    },
    "wayfindNext": { "nextStopId": "stop18", "label": "Next: Marshall History Tour" },
    "nextStopId": "stop18",
    "onePagers": [
      {
        "title": "ET50 Special Test Equipment one-pager (PDF)",
        "description": "Official NASA fact sheet · cleared for public release",
        "path": "OnePagers/ET50_STE_3_1_21.pdf"
      }
    ]
  },
  {
    "id": "stop18",
    "qrFile": "18-marshall-history",
    "title": "Marshall History Tour: From Redstone to the Stars",
    "shortTitle": "Marshall History",
    "location": "Redstone Arsenal · Marshall Space Flight Center",
    "locationShort": "Redstone Arsenal",
    "subtitle": "Institutional history · ABMA to NASA",
    "lab": "Special Test Equipment",
    "tourTime": "~60 min",
    "groupSize": null,
    "accessible": true,
    "chips": ["History"],
    "available": true,
    "hazards": [],
    "campusPin": { "xPct": 45.0, "yPct": 45.0 },
    "arrivePhoto": {
      "src": "img/arrive.jpg",
      "alt": "Aerial view of Redstone Arsenal and Marshall Space Flight Center.",
      "credit": "USDA/USGS · National Agriculture Imagery Program (NAIP), public domain"
    },
    "media": "media/marshall-history",
    "hero": {
      "src": "img/nasa-logo.png",
      "alt": "NASA logo placeholder",
      "credit": "Placeholder · awaiting cleared imagery"
    },
    "thumb": "img/nasa-logo.png",
    "factbox": "From Operation Paperclip and the Army Ballistic Missile Agency to NASA's premier propulsion and test center, Marshall's story is the story of America's reach for space.",
    "narration": {
      "durationLabel": "~90 sec",
      "text": "Von Braun and his team were instrumental to Saturn V's ultimate success in reaching the moon. The ABMA team developed Redstone to 'test nosecones,' even after being explicitly told to stop development of a rocket to send a satellite into orbit. The Navy's Vanguard rocket was selected to pursue launching a satellite, but it exploded on the pad December 1957. Ultimately, Juno 1, the ABMA rocket, successfully lifted the first American satellite into orbit — Explorer 1 — in 1958. When NASA was formed in 1958, von Braun opposed transfer. He was loyal to his army colleague Medaris and feared loss of funding and support. The Army continued to cooperate with NASA. Eventually, in 1960, ABMA team became Marshall. At its peak, Marshall was HUGE — 22,000 people. Marshall's Launch Operations Center eventually became Kennedy Space Center. Stennis Space Center and Michoud Assembly Facility are part of MSFC today. Marshall was named for General George C. Marshall because of his 'image of a military man greatly dedicated to the cause of peace.'"
    },
    "hook": "Von Braun and his team were instrumental to Saturn V's ultimate success in reaching the moon.",
    "cuePoints": { "hook": 0, "explainer": 10, "wowStat": 40, "media": 60, "why": 75 },
    "whyItMatters": "Marshall's history is institutional memory made physical. The cultural emphasis on getting hands dirty, keeping in-house work, and building for the long term shaped American spaceflight. Understanding this history explains why Marshall remains NASA's engineering center.",
    "keyfactsTitle": "Marshall Through Time",
    "wowStat": 1,
    "keyfacts": [
      { "num": "1958", "label": "Explorer 1 launch", "detail": "ABMA's Juno 1 lifted America's first satellite after Vanguard failed" },
      { "num": "1960", "label": "ABMA becomes Marshall", "detail": "Army Ballistic Missile Agency transferred to NASA" },
      { "num": "22,000", "label": "people at peak", "detail": "Marshall was massive during Apollo — owned KSC and SSC" },
      { "num": "300+", "label": "aerospace companies", "detail": "Alabama (Top 3 state for aerospace) hosts companies from 30+ countries" }
    ],
    "deepDive": {
      "summary": "Go deeper: the Redstone Test Stand story",
      "open": true,
      "html": "The Redstone Test Stand is 'where it all started' — built from scraps on the cheap, it was used for many years even after investment into a 'better' stand. It's an example of Marshall's ingenuity and creativity, applied to 'do the right thing' despite obstacles.<br><br>The Jordan Cemetery is the only remnant of the families who lived on this land before it became Redstone Arsenal. Only one tombstone is inscribed: 'Beulah Love, born Apr. 17, 1880, died Jan. 3, 1925,' but there are several older graves. Folks had to move over the summer, and some could not even afford a place to move to (even with government compensation). One silver lining: when property becomes federal land, it is a requirement to document artifacts. Many artifacts have been preserved, including some from indigenous peoples. Redstone land hosted two plantations in the past as well.<br><br><a href='https://huntsvillehistorycollection.org/hhc/docs/pdf/rankin/JordanCemetery_45_1_SummaryReport.pdf' target='_blank' rel='noopener'>Jordan Cemetery Summary Report (PDF)</a><br><a href='https://huntsvillehistorycollection.org/hhc/docs/pdf/book2/People_of_Redstone_Arsenal.pdf' target='_blank' rel='noopener'>The People Who Lived on the Land that is Now Redstone Arsenal (PDF)</a>"
    },
    "detailImage": {
      "src": "img/nasa-logo.png",
      "alt": "Placeholder image",
      "credit": "Placeholder · awaiting cleared imagery"
    },
    "lookFor": "Look for the bunker near 4693 — von Braun watched tests from there. The Redstone Test Stand still stands as a monument to where American spaceflight began.",
    "galleryTitle": "Marshall's Historical Sites",
    "gallery": [],
    "askYourHost": [
      "Why did von Braun oppose transferring from Army to NASA?",
      "What happened to the families who lived on Redstone Arsenal land?",
      "How did Marshall's culture of hands-on engineering shape NASA?",
      "What's the T-Tower's connection to LBJ and live rocket testing broadcasts?"
    ],
    "quiz": {
      "question": "What was the ABMA team told NOT to do before launching Explorer 1?",
      "options": [
        { "text": "Test rocket engines", "correct": false },
        { "text": "Develop a rocket to send a satellite into orbit", "correct": true },
        { "text": "Work with NASA", "correct": false }
      ],
      "correctFeedback": "Exactly. They developed Redstone anyway, and when Vanguard failed, ABMA's Juno 1 successfully launched America's first satellite.",
      "wrongFeedback": "Not quite — the ABMA team was told to stop developing a satellite launch rocket, but they did it anyway and succeeded when the Navy's Vanguard failed."
    },
    "cta": {
      "heading": "Explore Marshall's history",
      "body": "From Operation Paperclip to SLS, Marshall's institutional memory runs deep. ET50 preserves this history through documentation that traces hardware and capabilities across decades."
    },
    "wayfindNext": { "nextStopId": null, "label": "Tour complete" },
    "nextStopId": null,
    "externalLinks": [
      {
        "title": "Test Stand 4670: Building on a Legacy (YouTube)",
        "url": "https://www.youtube.com/watch?v=rUr18OkIkYM"
      },
      {
        "title": "Propulsion and Structural Test Facility (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Propulsion_and_Structural_Test_Facility"
      },
      {
        "title": "Redstone Test Stand (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Redstone_Test_Stand"
      }
    ]
  }
];
