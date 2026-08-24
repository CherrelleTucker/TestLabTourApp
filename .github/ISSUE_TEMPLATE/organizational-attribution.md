---
name: Organizational Attribution Audit
about: Correct facility ownership attribution across tour content
title: 'AUDIT: Correct Organizational Attribution for All Tour Stops'
labels: content, accuracy, documentation
assignees: ''
---

## Issue Summary

Tour content incorrectly attributes facilities to "Test Lab" when they are owned by other organizations. The tour includes cross-cutting facilities beyond Test Lab ownership.

## Critical Correction Needed

**Example:** Flat Floor (stop1) is an **ES (Engineering Services)** asset, NOT Test Lab (ET40).

## Scope

Audit ALL tour stops to correctly identify:
1. **Organization** (ES, ET, other?)
2. **Branch** (ET10, ET20, ET30, ET40, ET50, or non-ET?)
3. **Ownership vs. Operation** (who owns vs. who operates?)

## Affected Files

- [ ] `data/stops.js` - Review "lab" field for all stops
- [ ] All narration/content - Remove incorrect "Test Lab" attribution
- [ ] One-pagers referenced - Verify organizational credits
- [ ] `content-review/*.md` - Correct review document headers

## Tour Stops Requiring Audit

| Stop | Facility | Current Attribution | Needs Verification |
|------|----------|---------------------|-------------------|
| stop1 | Flat Floor | ~~ET40 Test Lab~~ | ES / ET40 |
| stop2 | Structural Test Stands | ET30 | ✓ Verify |
| stop3 | Thermal Vacuum | ET20 | ✓ Verify |
| stop4 | F-1 Stand | ET10 | ✓ Verify |
| stop5 | NBS [demolished] | ET20 | ✓ Verify |
| stop6 | Dynamic Stand [demolished] | ET40 | ✓ Verify |
| stop7 | T-Tower [demolished] | ET10 | ✓ Verify |
| stop8 | Solid Propulsion | ET10 | ✓ Verify |
| stop9 | Test Stand 4670 | ET10 | ✓ Verify |
| stop10 | Redstone | ET10 | ✓ Verify |
| stop11 | Test Stand 116 | ET10 | ✓ Verify |
| stop12 | Environmental Test | ET20 | ✓ Verify |
| stop13 | Test Stand 115 | ET10 | ✓ Verify |
| stop14-16 | Building 4619 STA | ET30/ET40 | ✓ Verify |
| stop17 | ET50 | ET50 | ✓ Verify |

## Action Items

1. [ ] Obtain official organizational ownership list from Test Lab leadership
2. [ ] Update `data/stops.js` "lab" field to reflect correct organization
3. [ ] Review all narration for incorrect "Test Lab partners with..." language
4. [ ] Correct content-review documents with proper org headers
5. [ ] Add clarifying note in tour intro about cross-cutting facilities
6. [ ] Update CTA (Call-to-Action) sections to route to correct org

## Why This Matters

- **Proper credit** to facility-owning organizations
- **Correct contact routing** for partnership inquiries
- **Accurate representation** of Marshall's cross-organizational collaboration
- **Tour credibility** - visitors notice incorrect attributions

## Related Context

From user feedback:
> "This is NOT an ET asset. It is an ES asset. Stop attributing it to Test Lab. The app will include stops other than Test Lab-owned, because we are a cross cutting organization."

## Resolution Criteria

- [ ] All tour stops have verified organizational ownership
- [ ] No facility incorrectly attributed to "Test Lab" when owned by another org
- [ ] Tour intro explains cross-cutting nature of facilities
- [ ] Content review documents route to correct branch chiefs
- [ ] CTAs direct inquiries to facility-owning organizations

---

**Priority:** High  
**Effort:** Medium (requires SME verification across all facilities)  
**Impact:** Accuracy, Organizational Credit, User Trust
