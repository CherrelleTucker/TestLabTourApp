/*
  Tour PDF Generator
  Creates styled PDF itinerary with NASA branding
*/

function generateTourPDF(tour, tourIndex = null, stopTimes = null) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // NASA brand colors (converted from oklch to RGB approximations)
  const NASA_BLUE = [11, 61, 145];
  const NASA_RED = [252, 61, 33];
  const INK = [25, 35, 50];
  const INK_SOFT = [100, 110, 125];

  let yPos = 20;
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);

  // Helper: Check if we need a new page
  function checkPageBreak(neededSpace = 20) {
    if (yPos + neededSpace > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  }

  // Header with NASA branding
  doc.setFillColor(...NASA_BLUE);
  doc.rect(0, 0, pageWidth, 35, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('MSFC Test Lab Tour', margin, 15);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Marshall Space Flight Center · Huntsville, AL', margin, 25);

  // Red accent line
  doc.setDrawColor(...NASA_RED);
  doc.setLineWidth(3);
  doc.line(margin, 32, pageWidth - margin, 32);

  yPos = 45;

  // Tour metadata
  const { totalMinutes, breakdown } = calculateTourTime(tour);
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const timeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins} min`;

  doc.setTextColor(...INK);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  const titleText = tourIndex !== null ? `Tour Option ${tourIndex + 1}` : 'Custom Tour Itinerary';
  doc.text(titleText, margin, yPos);
  yPos += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...INK_SOFT);
  doc.text(`${tour.length} stops · ${timeStr} total · Generated ${new Date().toLocaleDateString()}`, margin, yPos);
  yPos += 12;

  // Time breakdown box
  const stopTime = breakdown.reduce((sum, b) => sum + b.stopTime, 0);
  const travelTime = breakdown.reduce((sum, b) => sum + b.travelTime, 0);

  doc.setFillColor(240, 245, 250);
  doc.setDrawColor(...NASA_BLUE);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, yPos, contentWidth, 18, 2, 2, 'FD');

  doc.setFontSize(9);
  doc.setTextColor(...INK);
  doc.setFont('helvetica', 'bold');
  doc.text('TIME BREAKDOWN', margin + 5, yPos + 7);
  doc.setFont('helvetica', 'normal');
  doc.text(`Tour stops: ${stopTime} min  |  Travel: ${travelTime} min  |  Total: ${timeStr}`, margin + 5, yPos + 13);

  yPos += 25;

  // Tour stops
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...NASA_BLUE);
  doc.text('TOUR ITINERARY', margin, yPos);
  yPos += 8;

  // Draw each stop
  tour.forEach((stop, index) => {
    const travel = breakdown[index];
    const stopHeight = stopTimes ? 38 : 32; // More space if showing times

    checkPageBreak(stopHeight);

    // Stop number circle
    doc.setFillColor(...NASA_RED);
    doc.circle(margin + 5, yPos + 3, 4, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text((index + 1).toString(), margin + 5, yPos + 4.5, { align: 'center' });

    // Stop title
    doc.setTextColor(...INK);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    const titleLines = doc.splitTextToSize(stop.shortTitle || stop.title, contentWidth - 25);
    doc.text(titleLines, margin + 12, yPos + 4);

    // Location
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...INK_SOFT);
    doc.text(stop.locationShort || stop.location, margin + 12, yPos + 10);

    let lineOffset = 16;

    // Clock times (if provided)
    if (stopTimes && stopTimes[index]) {
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(255, 152, 0); // Amber
      doc.text(`${stopTimes[index].start} – ${stopTimes[index].end}`, margin + 12, yPos + lineOffset);
      lineOffset += 6;
    }

    // Duration
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...NASA_BLUE);
    doc.text(`Duration: ${stop.tourTime || '~15 min'}`, margin + 12, yPos + lineOffset);
    lineOffset += 6;

    // Travel to next
    if (travel.travelTime > 0) {
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...INK_SOFT);
      doc.text(`→ ${travel.travelTime} min ${travel.mode} to next stop`, margin + 12, yPos + lineOffset);
    }

    // Divider line
    if (index < tour.length - 1) {
      doc.setDrawColor(220, 225, 230);
      doc.setLineWidth(0.3);
      doc.line(margin + 12, yPos + (stopHeight - 4), pageWidth - margin, yPos + (stopHeight - 4));
    }

    yPos += stopHeight;
  });

  // Tour Instructions Section (new page)
  doc.addPage();
  yPos = margin;

  // Section header
  doc.setFillColor(...NASA_BLUE);
  doc.rect(0, yPos, pageWidth, 12, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('TOUR INSTRUCTIONS', margin, yPos + 8);
  yPos += 18;

  doc.setTextColor(...INK);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Test Lab Coordinator: Cherrelle Tucker | Cell: 256.706.7180', margin, yPos);
  yPos += 10;

  // ARRIVAL
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...NASA_RED);
  doc.text('ARRIVAL', margin, yPos);
  yPos += 6;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...INK);
  const arrivalText = [
    '• Arrive at the time scheduled and park in the visitor lots indicated below',
    '• Call your Tour Guide when you arrive',
    '• If the Tour Guide doesn\'t see anyone at the doors, they will attempt to contact the tour POC'
  ];
  arrivalText.forEach(line => {
    doc.text(line, margin, yPos);
    yPos += 5;
  });
  yPos += 3;

  // PARKING
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...NASA_RED);
  doc.text('PARKING', margin, yPos);
  yPos += 6;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...INK);

  doc.setFont('helvetica', 'bold');
  doc.text('Building 4619:', margin, yPos);
  yPos += 5;
  doc.setFont('helvetica', 'normal');
  doc.text('  • Rideout Rd/West parking lot - Tours starting with Experimental Fluids and Environmental Test', margin, yPos);
  yPos += 5;
  doc.text('  • Beacon St/North Parking Lot - Tours starting with Structural Strength or Structural Dynamics Test', margin, yPos);
  yPos += 7;

  doc.setFont('helvetica', 'bold');
  doc.text('Building 4666:', margin, yPos);
  yPos += 5;
  doc.setFont('helvetica', 'normal');
  doc.text('  • Dodd Rd/North parking lot', margin, yPos);
  yPos += 5;
  doc.text('  • Back of building parking lot, if North lot is full', margin, yPos);
  yPos += 5;
  doc.text('  • DO NOT enter and attempt to park in the lot off Saturn Rd. This belongs to Blue Origin.', margin, yPos);
  yPos += 7;

  doc.setFont('helvetica', 'bold');
  doc.text('East or West Test Areas:', margin, yPos);
  yPos += 5;
  doc.setFont('helvetica', 'normal');
  doc.text('  • Saturn Rd lot, near East Test area entrance', margin, yPos);
  yPos += 5;
  doc.text('  • NOTE: Only your Tour Guide can badge through the East or West Test area gates', margin, yPos);
  yPos += 7;

  checkPageBreak(40);

  // ATTENDANCE
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...NASA_RED);
  doc.text('ATTENDANCE', margin, yPos);
  yPos += 6;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...INK);
  const attendanceText = [
    '• Visitors should not expect to leave their vehicle in the lot and ride along with the guide unless',
    '  otherwise instructed or arranged',
    '• If you are riding with your Tour Guide, please expect to STOP at the East or West Test Area gate',
    '  to be "badged through" by your Tour Guide',
    '• Be prepared for loud noises, unconditioned areas, and uneven, rocky, or muddy terrain'
  ];
  attendanceText.forEach(line => {
    doc.text(line, margin, yPos);
    yPos += 5;
  });
  yPos += 3;

  // APPAREL/PPE
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...NASA_RED);
  doc.text('APPAREL / PPE', margin, yPos);
  yPos += 6;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...INK);
  const apparelText = [
    '• Closed-toe shoes and long pants are REQUIRED',
    '• East and West test area tours are primarily outdoors - sunblock, sunglasses, hats recommended'
  ];
  apparelText.forEach(line => {
    doc.text(line, margin, yPos);
    yPos += 5;
  });
  yPos += 3;

  // PHOTOGRAPHY
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...NASA_RED);
  doc.text('PHOTOGRAPHY', margin, yPos);
  yPos += 6;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...INK);
  const photoText = [
    '• Do NOT photograph any Blue Origin assets in any area',
    '• Do NOT photograph any FBI or ARMY RANGE if you are on top of 4693',
    '• Ask your Tour Guide before taking photos',
    '• Do NOT post photos on social media without permission'
  ];
  photoText.forEach(line => {
    doc.text(line, margin, yPos);
    yPos += 5;
  });

  // Important notice box
  yPos += 5;
  checkPageBreak(20);
  doc.setFillColor(255, 245, 230);
  doc.setDrawColor(...NASA_RED);
  doc.setLineWidth(1);
  doc.roundedRect(margin, yPos, contentWidth, 14, 2, 2, 'FD');
  doc.setFontSize(8);
  doc.setTextColor(...INK);
  doc.setFont('helvetica', 'bold');
  doc.text('IMPORTANT: Print this guide before arrival. Cell and Wi-Fi service is not guaranteed during your visit.', margin + 5, yPos + 6);
  doc.setFont('helvetica', 'normal');
  doc.text('It is strongly recommended to have printed copies of your itinerary and contact information.', margin + 5, yPos + 11);

  // Page numbers
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(...INK_SOFT);
    doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
  }

  // Generate filename
  const date = new Date().toISOString().split('T')[0];
  const filename = tourIndex !== null
    ? `msfc-tour-option-${tourIndex + 1}-${date}.pdf`
    : `msfc-custom-tour-${date}.pdf`;

  // Download
  doc.save(filename);
}
