/*
  One-Pagers PDF Metadata
  List of available Test Lab capability documents
*/

const onePagers = [
  {
    id: 'et01-testlab',
    filename: 'ET01_TEST LAB_3_1_21 .pdf',
    title: 'Test Lab Overview',
    category: 'Overview',
    description: 'General Test Laboratory capabilities and services'
  },
  {
    id: 'et10-ptl',
    filename: 'ET10_PTL 3_1_21.pdf',
    title: 'Propulsion Test Lab (ET10)',
    category: 'Propulsion',
    description: 'Rocket engine and propulsion system testing'
  },
  {
    id: 'et20-arf',
    filename: 'ET20_ARF_6_14_23.pdf',
    title: 'Acoustic Research Facility (ET20)',
    category: 'Environmental',
    description: 'Acoustic and vibration testing for launch environments'
  },
  {
    id: 'et20-etf',
    filename: 'ET20_ETF_6_13_23.pdf',
    title: 'Environmental Test Facility (ET20)',
    category: 'Environmental',
    description: 'Thermal vacuum, altitude, and environmental simulation'
  },
  {
    id: 'et20-fd',
    filename: 'ET20_FD_3_1_21.pdf',
    title: 'Fluids & Dynamics Test Lab (ET20)',
    category: 'Environmental',
    description: 'Fluid systems and dynamics testing'
  },
  {
    id: 'et30-sstl',
    filename: 'ET30_SSTL _3_1_21.pdf',
    title: 'Structural Strength Test Lab (ET30)',
    category: 'Structural',
    description: 'Large-scale structural load testing'
  },
  {
    id: 'et40-sdt',
    filename: 'ET40 SDT _3_1_21.pdf',
    title: 'Structural Dynamics Test Lab (ET40)',
    category: 'Dynamics',
    description: 'Vibration and modal testing'
  },
  {
    id: 'et50-ste',
    filename: 'ET50_STE_3_1_21.pdf',
    title: 'Special Test Equipment (ET50)',
    category: 'Specialized',
    description: 'Custom test fixtures and specialized equipment'
  },
  {
    id: 'v20-onepager',
    filename: 'V-20 One Pager 100323.pdf',
    title: 'V-20 Lunar Surface Simulator',
    category: 'Environmental',
    description: 'Thermal vacuum chamber with lunar regolith capability'
  },
  {
    id: 'evl-brochure',
    filename: 'East Vibration Lab Capability Brochure.pdf',
    title: 'East Vibration Lab Capabilities',
    category: 'Dynamics',
    description: 'Comprehensive vibration testing capabilities and services'
  },
  {
    id: 'sdt-2026',
    filename: 'MSFC Structural Dynamics Testing April 2026.pdf',
    title: 'Structural Dynamics Testing 2026',
    category: 'Dynamics',
    description: 'Current structural dynamics testing capabilities'
  }
];

// Expose to global scope
if (typeof window !== 'undefined') {
  window.onePagers = onePagers;
}
