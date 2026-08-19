#!/usr/bin/env python3
import re

# Read the file
with open('data/stops.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace em-dashes with appropriate punctuation
replacements = [
    # Titles - use colon for subtitle clarification
    (r'Lab — "', 'Lab: "'),
    (r'Stands — ', 'Stands: '),
    (r'Testing — ', 'Testing: '),

    # After lowercase before lowercase: usually explanatory, use period or colon
    (r'floor — the', 'floor. The'),
    (r'world — lets', 'world. It lets'),
    (r'pilot — what', 'pilot. What'),
    (r'rocks — so', 'rocks, so'),
    (r'margin — so', 'margin, so'),
    (r'ground — on', 'ground. On'),
    (r'ground —', 'ground.'),

    # Feedback and descriptions
    (r'low, casting ([^—]+) — so', r'low, casting \1. So'),
    (r'not quite — ', 'not quite. '),
    (r'locally — ', 'locally. '),

    # Lists and continuations
    (r'launch — and then', 'launch, and then'),
    (r'spacecraft — to', 'spacecraft, to'),
]

for old, new in replacements:
    content = re.sub(old, new, content)

# Write back
with open('data/stops.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed em-dashes in stops.js")
