# TODO: Add a New Stop Wizard

## Feature Request
Create a wizard interface for Test Lab staff to add new tour stops through the web app interface.

## Requirements
- Form-based wizard for entering stop data
- Fields should match the stops.js data structure:
  - Basic info (title, location, lab, tour time)
  - Media (hero image, gallery images)
  - Content (narration, deep dive, key facts)
  - Map coordinates (campus pin)
  - Status/availability flags
- Validation for required fields
- Preview functionality before saving
- Export generated JSON to add to stops.js

## Notes
- May require backend/authentication for security
- Consider integration with GitHub for direct commits or PR creation
- Could leverage existing modal patterns from Build-a-Tour

## Priority
Future enhancement - not current sprint work
