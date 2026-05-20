export interface SourcingCategory {
  id: string;
  name: string;
  description: string;
  category: 'electronics' | 'mechanical' | 'food' | 'digital';
  image: string;
  tags?: string[];
  // Extended fields for Food Sourcing
  subcategory?: string;
  origin?: string;
  deliveryUnit?: string;
  packaging?: string;
  isOrganic?: boolean;
  isGlutenFree?: boolean;
  type?: 'conventional' | 'organic' | 'gluten-free';
}

export const SOURCING_EXAMPLES: SourcingCategory[] = [
  // Electronics
  {
    id: 'e1',
    name: 'Industrial Microcontrollers',
    description: 'High-performance ARM based controllers for industrial automation and robotics.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    tags: ['Industrial', 'ARM']
  },
  {
    id: 'e2',
    name: 'Precision Sensor Arrays',
    description: 'Ultra-sensitive light and motion detection for precision manufacturing lines.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800',
    tags: ['Sensors', 'Precision']
  },
  {
    id: 'e3',
    name: 'Modular Power Systems',
    description: 'High-efficiency power supply units with surge protection for critical infrastructure.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800',
    tags: ['Power', 'Modular']
  },
  {
    id: 'e4',
    name: 'Semiconductor Wafers',
    description: 'High-purity silicon wafers for advanced chip manufacturing.',
    category: 'electronics',
    image: 'images/semiconductor.png',
    tags: ['Semiconductor', 'Silicon']
  },
  {
    id: 'e5',
    name: 'FPGA Development Boards',
    description: 'Advanced field-programmable gate arrays for high-speed digital signal processing.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    tags: ['FPGA', 'Digital']
  },
  {
    id: 'e6',
    name: 'High-Frequency RF Modules',
    description: 'Precision radio frequency components for wireless communication systems.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=800',
    tags: ['RF', 'Wireless']
  },
  {
    id: 'e7',
    name: 'Industrial PLC Units',
    description: 'Programmable Logic Controllers for robust industrial automation and control.',
    category: 'electronics',
    image: 'images/unit.png',
    tags: ['PLC', 'Automation']
  },
  {
    id: 'e8',
    name: 'Custom PCB Assemblies',
    description: 'Turnkey printed circuit board assembly services for complex electronic designs.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800',
    tags: ['PCB', 'Custom']
  },
  {
    id: 'e9',
    name: 'UAV Drone Flight Controllers',
    description: 'F7 and H7 dual-IMU autopilot boards running ArduPilot / PX4, with redundant barometers, CAN-FD bus, 8× UART, and black-box data-logging for fixed-wing, multirotor, and VTOL platforms.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=800',
    tags: ['Drone', 'Autopilot']
  },
  {
    id: 'e10',
    name: 'Brushless ESC Units',
    description: 'High-voltage 60A–120A BLHeli32 and AM32 electronic speed controllers with active freewheeling, DShot 1200, telemetry output, and conformal-coated PCBs for harsh outdoor UAV operations.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800',
    tags: ['ESC', 'UAV Power']
  },
  {
    id: 'e11',
    name: 'Thermal Imaging Camera Modules',
    description: 'Uncooled VOx microbolometer cores at 320×256 and 640×512 resolution, NETD <50 mK, LVDS / USB3 output — suited for border surveillance, search-and-rescue, and industrial thermography payloads.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800',
    tags: ['Thermal', 'Defence']
  },
  {
    id: 'e12',
    name: 'Gimbal Stabilisation Systems',
    description: '3-axis brushless gimbal systems with 0.01° encoder resolution, vibration isolation damper mounts, and CAN / PWM input for full Sony, GoPro, and custom payload integration on enterprise UAVs.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1598196767498-1b7e0e44e2d7?auto=format&fit=crop&q=80&w=800',
    tags: ['Gimbal', 'Stabilisation']
  },
  {
    id: 'e13',
    name: 'RTK GNSS Positioning Modules',
    description: 'Multi-band L1/L2/L5 RTK receivers achieving ±1 cm horizontal accuracy, supporting GPS, GLONASS, Galileo, and BeiDou simultaneously for precision agriculture, mapping, and defence-grade navigation.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?auto=format&fit=crop&q=80&w=800',
    tags: ['RTK', 'GNSS']
  },
  {
    id: 'e14',
    name: 'AI Edge Vision Processors',
    description: 'NVIDIA Jetson Orin NX and Hailo-8L AI accelerator modules delivering up to 40 TOPS on-board inference for real-time object detection, target tracking, and autonomous navigation pipelines.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800',
    tags: ['AI', 'Edge Compute']
  },
  {
    id: 'e15',
    name: 'FPV & HD Video Transmission',
    description: 'Digital HD FPV systems with 1080p / 60 fps low-latency (<28 ms) transmission up to 12 km, 8-channel diversity, AES-128 encrypted video links, and OFDM frequency-hopping anti-jamming.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1625014618427-fbc980b974f5?auto=format&fit=crop&q=80&w=800',
    tags: ['FPV', 'Video Link']
  },
  // Mechanical
  {
    id: 'm1',
    name: 'Servo Motor Components',
    description: 'High-torque AC/DC servo motors with encoder feedback and IP65 protection, sourced for precision motion control across CNC, robotics, and industrial automation lines.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800',
    tags: ['Servo', 'Motion Control']
  },
  {
    id: 'm2',
    name: 'Precision CNC Parts',
    description: 'Custom-machined aluminum, stainless-steel, and hardened-tool-steel components held to ±0.005 mm tolerances, with full dimensional inspection reports and surface finish certificates.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800',
    tags: ['CNC', 'Precision']
  },
  {
    id: 'm3',
    name: 'Mechanical Couplings',
    description: 'Rigid, flexible, and jaw-type shaft couplings in stainless steel and polyurethane for direct-drive and vibration-dampened power transmission up to 5,000 Nm.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    tags: ['Couplings', 'Drive']
  },
  {
    id: 'm4',
    name: 'Industrial Housings',
    description: 'Cast-iron and die-cast aluminum bearing housings, pillow blocks, and flange units engineered to EN ISO 9001 standards for heavy-duty rotating shaft applications.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=800',
    tags: ['Housings', 'Industrial']
  },
  {
    id: 'm5',
    name: 'Automation Brackets',
    description: 'Laser-cut and press-brake-formed steel and aluminum mounting brackets for robot end-effectors, linear guides, and automation frame assemblies with zinc-plated finish.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800',
    tags: ['Automation', 'Brackets']
  },
  {
    id: 'm6',
    name: 'Robotic Assembly Parts',
    description: 'Structural wrist plates, forearm links, and joint actuator mounts for 6-axis collaborative and industrial robots, manufactured in 7075-T6 aluminium with anodized coating.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    tags: ['Robotics', 'Assembly']
  },
  {
    id: 'm7',
    name: 'Sensor Components',
    description: 'Industrial-grade proximity, pressure, temperature, and flow sensors with M12 connectors, IO-Link compatibility, and IP67-rated stainless-steel housings for harsh environments.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    tags: ['Sensors', 'IO-Link']
  },
  {
    id: 'm8',
    name: 'Titanium Machined Parts',
    description: 'Grade-5 (Ti-6Al-4V) and Grade-2 commercially pure titanium components machined to aerospace and medical tolerances with MTR certificates and passivation finish.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&q=80&w=800',
    tags: ['Titanium', 'Aerospace']
  },
  {
    id: 'm9',
    name: 'Precision Ball Screws',
    description: 'Ground-class C3 and C5 ball screws with rolled or ground leads in 5–25 mm pitch, featuring preloaded double-nut assemblies for zero-backlash CNC and semiconductor stage positioning.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&q=80&w=800',
    tags: ['Ball Screws', 'Linear Motion']
  },
  {
    id: 'm10',
    name: 'Industrial Linear Rails',
    description: 'HG and EG series profiled rail systems with carriages rated to 70 kN dynamic load, available in stainless-steel and hard-chrome finishes for cleanroom and washdown environments.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?auto=format&fit=crop&q=80&w=800',
    tags: ['Linear Rails', 'Guides']
  },
  {
    id: 'm11',
    name: 'Hydraulic Cylinders',
    description: 'Tie-rod and welded mill-type hydraulic cylinders up to 350 bar operating pressure, with chrome-plated bores, Hallite seals, and custom stroke lengths for press, clamp, and push applications.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    tags: ['Hydraulic', 'Actuation']
  },
  {
    id: 'm12',
    name: 'Planetary Gearboxes',
    description: 'Inline and right-angle planetary gearboxes in 3–512:1 ratio range, hardened-steel planet gears, torsional backlash <3 arcmin, for servo, stepper, and direct-drive torque multiplication.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&q=80&w=800',
    tags: ['Gearboxes', 'Planetary']
  },
  {
    id: 'm13',
    name: 'Steel Structural Castings',
    description: 'Sand-cast and investment-cast carbon-steel and ductile-iron structural parts from 0.5 kg to 500 kg, heat-treated to DIN EN 10293, with 3D-scan inspection and radiographic testing.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    tags: ['Castings', 'Structural']
  },
  // Food - Conventional
  {
    id: 'f-c1',
    name: 'Conventional Coriander Seeds Split',
    description: 'High-quality split coriander seeds for industrial food processing.',
    category: 'food',
    subcategory: 'Seeds',
    origin: 'Bulgaria',
    deliveryUnit: '24 000 KG',
    packaging: '25/50 KG PP BAGS OR BIG BAGS',
    type: 'conventional',
    isOrganic: false,
    image: '/images/coriander_seeds_split.png',
    tags: ['Seeds', 'Conventional']
  },
  {
    id: 'f-c2',
    name: 'Conventional Coriander Seeds',
    description: 'Whole coriander seeds sourced from approved Bulgarian suppliers.',
    category: 'food',
    subcategory: 'Seeds',
    origin: 'Bulgaria',
    deliveryUnit: '24 000 KG',
    packaging: '25/50 KG PP BAGS OR BIG BAGS',
    type: 'conventional',
    isOrganic: false,
    image: '/images/coriander_seeds.jpg',
    tags: ['Seeds', 'Conventional']
  },
  {
    id: 'f-c3',
    name: 'Conventional Green Lentils',
    description: 'Premium green lentils suitable for bulk supply and distribution.',
    category: 'food',
    subcategory: 'Pulses',
    origin: 'Canada',
    deliveryUnit: '24 000 KG',
    packaging: '1000 KG BIG BAGS',
    type: 'conventional',
    isOrganic: false,
    image: '/images/green_lentils.jpg',
    tags: ['Pulses', 'Conventional']
  },
  {
    id: 'f-c4',
    name: 'Conventional Yellow Split Peas',
    description: 'High-purity yellow split peas from selected Czech farms.',
    category: 'food',
    subcategory: 'Pulses',
    origin: 'Czech',
    deliveryUnit: '24 000 KG',
    packaging: '25 KG PP BAGS',
    type: 'conventional',
    isOrganic: false,
    image: '/images/yellow_split_peas.jpg',
    tags: ['Pulses', 'Conventional']
  },
  {
    id: 'f-c5',
    name: 'Conventional Pumpkin GWS A',
    description: 'Grade A pumpkin seeds (Grown Without Shell) from Poland.',
    category: 'food',
    subcategory: 'Seeds',
    origin: 'Poland',
    deliveryUnit: '24 000 KG',
    packaging: '1000 KG BIG BAGS',
    type: 'conventional',
    isOrganic: false,
    image: '/images/pumpkin_gws.jpg',
    tags: ['Seeds', 'Conventional']
  },
  {
    id: 'f-c6',
    name: 'Conventional Flaxseed Brown Non EU',
    description: 'High-quality brown flaxseed sourced from Kazakhstan, suitable for bulk industrial use.',
    category: 'food',
    subcategory: 'Seeds',
    origin: 'Kazakhstan',
    deliveryUnit: '24 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'conventional',
    isOrganic: false,
    isGlutenFree: true,
    image: '/images/flaxseed_brown.jpg',
    tags: ['Seeds', 'Gluten-Free']
  },
  {
    id: 'f-c7',
    name: 'Conventional Flaxseed Golden',
    description: 'Premium golden flaxseed from Ukraine, rich in omega-3 and fiber.',
    category: 'food',
    subcategory: 'Seeds',
    origin: 'Ukraine',
    deliveryUnit: '24 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'conventional',
    isOrganic: false,
    isGlutenFree: true,
    image: '/images/flaxseed_golden.jpg',
    tags: ['Seeds', 'Gluten-Free']
  },
  {
    id: 'f-c8',
    name: 'Conventional Millet Hulled',
    description: 'Cleaned and hulled millet from Poland, processed to European standards.',
    category: 'food',
    subcategory: 'Pseudocereals',
    origin: 'Poland',
    deliveryUnit: '24 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'conventional',
    isOrganic: false,
    isGlutenFree: true,
    image: '/images/millet_hulled.jpg',
    tags: ['Pseudocereals', 'Gluten-Free']
  },
  {
    id: 'f-c9',
    name: 'Extruded Chickpea Flour',
    description: 'Highly digestible extruded chickpea flour from Italy, ideal for functional foods.',
    category: 'food',
    subcategory: 'Flours',
    origin: 'Italy',
    deliveryUnit: '96 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'conventional',
    isOrganic: true,
    isGlutenFree: true,
    image: 'images/pease.jpg',
    tags: ['Flours', 'Organic']
  },
  {
    id: 'f-c10',
    name: 'Extruded Faba Bean Flour',
    description: 'Premium faba bean flour with enhanced nutritional profile through extrusion.',
    category: 'food',
    subcategory: 'Flours',
    origin: 'Italy',
    deliveryUnit: '96 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'conventional',
    isOrganic: true,
    isGlutenFree: true,
    image: 'images/beanflour.jpg',
    tags: ['Flours', 'Organic']
  },
  {
    id: 'f-c11',
    name: 'Extruded Yellow Pea Flour',
    description: 'Functional yellow pea flour from Italy, perfect for gluten-free applications.',
    category: 'food',
    subcategory: 'Flours',
    origin: 'Italy',
    deliveryUnit: '24 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'conventional',
    isOrganic: true,
    isGlutenFree: true,
    image: 'images/yellowpeaflor.jpg',
    tags: ['Flours', 'Organic']
  },
  {
    id: 'f-c12',
    name: 'Extruded Yellow Lentil Flour',
    description: 'High-quality yellow lentil flour processed in Italy for maximum purity.',
    category: 'food',
    subcategory: 'Flours',
    origin: 'Italy',
    deliveryUnit: '96 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'conventional',
    isOrganic: false,
    isGlutenFree: true,
    image: 'images/Yellowlentilflor.jpg',
    tags: ['Flours', 'Gluten-Free']
  },
  {
    id: 'f-c13',
    name: 'Quinoa Seeds White',
    description: 'Premium white quinoa seeds from India, a complete protein source.',
    category: 'food',
    subcategory: 'Pseudocereals',
    origin: 'India',
    deliveryUnit: '24 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'conventional',
    isOrganic: false,
    isGlutenFree: true,
    image: 'images/QuinoaWhite.jpg',
    tags: ['Pseudocereals', 'Seeds']
  },
  {
    id: 'f-c14',
    name: 'Conventional Buckwheat Hulled Broken',
    description: 'Broken hulled buckwheat from Poland, ideal for industrial processing.',
    category: 'food',
    subcategory: 'Pseudocereals',
    origin: 'Poland',
    deliveryUnit: '24 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'conventional',
    isOrganic: false,
    isGlutenFree: true,
    image: 'images/BuckwheaHulled.jpg',
    tags: ['Pseudocereals', 'Gluten-Free']
  },
  {
    id: 'f-c15',
    name: 'Conventional Chia Seeds',
    description: 'High-purity chia seeds from Paraguay, rich in Omega-3.',
    category: 'food',
    subcategory: 'Pseudocereals',
    origin: 'Paraguay',
    deliveryUnit: '24 000 KG',
    packaging: '25 KG BAG',
    type: 'conventional',
    isOrganic: false,
    isGlutenFree: true,
    image: 'images/cheaseeds.jpg',
    tags: ['Pseudocereals', 'Seeds']
  },
  {
    id: 'f-c16',
    name: 'Conventional Yellow Peas Whole',
    description: 'Whole yellow peas from Poland, carefully selected for quality.',
    category: 'food',
    subcategory: 'Pulses',
    origin: 'Poland',
    deliveryUnit: '24 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'conventional',
    isOrganic: false,
    isGlutenFree: true,
    image: 'images/yellowpeaflor.jpg',
    tags: ['Pulses', 'Conventional']
  },
  {
    id: 'f-c17',
    name: 'Conventional Chickpeas Whole 6/7 mm',
    description: 'Small-sized whole chickpeas from Bulgaria, ideal for canning and snacks.',
    category: 'food',
    subcategory: 'Pulses',
    origin: 'Bulgaria',
    deliveryUnit: '48 000 KG',
    packaging: '1000 KG BIG BAGS',
    type: 'conventional',
    isOrganic: false,
    isGlutenFree: true,
    image: 'images/67img.jpg',
    tags: ['Pulses', 'Gluten-Free']
  },
  {
    id: 'f-c18',
    name: 'Conventional Chickpeas Whole 8 mm',
    description: 'Large-sized whole chickpeas from Bulgaria, premium quality for culinary use.',
    category: 'food',
    subcategory: 'Pulses',
    origin: 'Bulgaria',
    deliveryUnit: '24 000 KG',
    packaging: '1000 KG BIG BAGS',
    type: 'conventional',
    isOrganic: false,
    isGlutenFree: true,
    image: 'images/67img.jpg',
    tags: ['Pulses', 'Gluten-Free']
  },
  {
    id: 'f-c19',
    name: 'Conventional Blue Poppy Seeds',
    description: 'Premium blue poppy seeds from Czech Republic, high purity and oil content.',
    category: 'food',
    subcategory: 'Seeds',
    origin: 'Czech Republic',
    deliveryUnit: '24 000 KG',
    packaging: '25 KG BAGS',
    type: 'conventional',
    isOrganic: false,
    isGlutenFree: true,
    image: 'images/bluepoppyseed.jpg',
    tags: ['Seeds', 'Gluten-Free']
  },
  {
    id: 'f-c20',
    name: 'Conventional Sunflower Kernels, Bakery Grade',
    description: 'Bakery grade sunflower kernels from Moldavia, perfect for bread and snacks.',
    category: 'food',
    subcategory: 'Seeds',
    origin: 'Moldavia',
    deliveryUnit: '48 000 KG',
    packaging: '25 KG BAG',
    type: 'conventional',
    isOrganic: false,
    isGlutenFree: true,
    image: 'images/sunflower.jpg',
    tags: ['Seeds', 'Conventional']
  },
  // Food - Organic
  {
    id: 'f-o1',
    name: 'Organic Green Lentils',
    description: 'Certified organic green lentils from sustainable sources.',
    category: 'food',
    subcategory: 'Pulses',
    origin: 'Turkey',
    deliveryUnit: '20 000 KG',
    packaging: '25 KG PAPER BAGS',
    type: 'organic',
    isOrganic: true,
    image: 'images/organicgreenletten.jpg',
    tags: ['Organic', 'Pulses']
  },
  {
    id: 'f-o2',
    name: 'Organic Buckwheat Hulled',
    description: 'Premium organic hulled buckwheat for health-conscious markets.',
    category: 'food',
    subcategory: 'Pseudocereals',
    origin: 'Poland',
    deliveryUnit: '22 000 KG',
    packaging: '25 KG PAPER BAGS',
    type: 'organic',
    isOrganic: true,
    image: 'images/Buckwheat-Hulled.jpg',
    tags: ['Organic', 'Pseudocereals']
  },
  {
    id: 'f-o3',
    name: 'Organic Chia Seeds',
    description: 'High-quality organic chia seeds, rich in omega-3.',
    category: 'food',
    subcategory: 'Seeds',
    origin: 'Paraguay',
    deliveryUnit: '18 000 KG',
    packaging: '25 KG BAGS',
    type: 'organic',
    isOrganic: true,
    image: 'images/cheaseeds.jpg',
    tags: ['Organic', 'Seeds']
  },
  {
    id: 'f-o4',
    name: 'Organic Buckwheat Flour',
    description: 'Certified organic buckwheat flour, processed in gluten-free facilities.',
    category: 'food',
    subcategory: 'Flours',
    origin: 'Poland',
    deliveryUnit: '12 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'organic',
    isOrganic: true,
    isGlutenFree: true,
    image: 'images/organicBuckwheatflor.jpg'
  },
  {
    id: 'f-o7',
    name: 'Organic Millet Hulled',
    description: 'Certified organic hulled millet from Poland, processed for maximum quality.',
    category: 'food',
    subcategory: 'Pseudocereals',
    origin: 'Poland',
    deliveryUnit: '24 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'organic',
    isOrganic: true,
    isGlutenFree: true,
    image: 'images/organic.jpg',
    tags: ['Organic', 'Pseudocereals']
  },
  {
    id: 'f-o8',
    name: 'Organic Flaxseed Golden',
    description: 'Premium organic golden flaxseed from Kazakhstan, high oil content.',
    category: 'food',
    subcategory: 'Seeds',
    origin: 'Kazakhstan',
    deliveryUnit: '48 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'organic',
    isOrganic: true,
    isGlutenFree: true,
    image: 'images/Golden-Flaxseed.jpg',
    tags: ['Organic', 'Seeds']
  },
  {
    id: 'f-o9',
    name: 'Organic Flaxseed Brown EU Origin',
    description: 'Certified organic brown flaxseed from Czech Republic, premium quality.',
    category: 'food',
    subcategory: 'Seeds',
    origin: 'Czech Republic',
    deliveryUnit: '24 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'organic',
    isOrganic: true,
    isGlutenFree: true,
    image: 'images/Brown-Flaxseed.jpg',
    tags: ['Organic', 'Seeds']
  },
  {
    id: 'f-o10',
    name: 'Organic Flaxseed Brown Non EU',
    description: 'High-quality organic brown flaxseed from Kazakhstan, bulk supply.',
    category: 'food',
    subcategory: 'Seeds',
    origin: 'Kazakhstan',
    deliveryUnit: '48 000 KG',
    packaging: '1000 KG BIG BAG',
    type: 'organic',
    isOrganic: true,
    isGlutenFree: true,
    image: 'images/Brown-Flaxseed.jpg',
    tags: ['Organic', 'Seeds']
  },
  {
    id: 'f-o11',
    name: 'Organic Sunflower Kernels, Bakery Grade',
    description: 'Bakery grade organic sunflower kernels from Bulgaria, high purity.',
    category: 'food',
    subcategory: 'Seeds',
    origin: 'Bulgaria',
    deliveryUnit: '24 000 KG',
    packaging: '25 KG BAG',
    type: 'organic',
    isOrganic: true,
    isGlutenFree: true,
    image: 'images/sunflower.jpg',
    tags: ['Organic', 'Seeds']
  },
  // Food - Gluten-Free
  {
    id: 'f-g1',
    name: 'Gluten-Free Buckwheat Flour',
    description: 'Finely ground buckwheat flour produced in dedicated gluten-free facilities.',
    category: 'food',
    subcategory: 'Flour',
    origin: 'Poland',
    deliveryUnit: '15 000 KG',
    packaging: '20 KG PAPER BAGS',
    type: 'gluten-free',
    isOrganic: false,
    isGlutenFree: true,
    image: 'images/111.jpg',
    tags: ['Gluten-Free', 'Flour']
  },
  {
    id: 'f-g2',
    name: 'Gluten-Free Millet Hulled',
    description: 'Cleaned and hulled millet, processed to ensure zero gluten contamination.',
    category: 'food',
    subcategory: 'Pseudocereals',
    origin: 'Ukraine',
    deliveryUnit: '22 000 KG',
    packaging: '25 KG PP BAGS',
    type: 'gluten-free',
    isOrganic: false,
    isGlutenFree: true,
    image: 'images/222.jpg',
    tags: ['Gluten-Free', 'Pseudocereals']
  },
  {
    id: 'f-g3',
    name: 'Gluten-Free Chickpeas Flour',
    description: 'Versatile chickpea flour from dedicated gluten-free production lines.',
    category: 'food',
    subcategory: 'Flour',
    origin: 'Turkey',
    deliveryUnit: '20 000 KG',
    packaging: '25 KG PAPER BAGS',
    type: 'gluten-free',
    isOrganic: false,
    isGlutenFree: true,
    image: 'images/333.jpg',
    tags: ['Gluten-Free', 'Flour']
  },
  // Digital Marketing
  {
    id: 'd1',
    name: 'Custom Web Development',
    description: 'High-performance React and Next.js applications tailored to your business needs.',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    tags: ['Web', 'React']
  },
  {
    id: 'd2',
    name: 'Social Media Strategy',
    description: 'Comprehensive social media management and growth strategies for global brands.',
    category: 'digital',
    image: 'images/socialmedia.png',
    tags: ['Social', 'Growth']
  },
  {
    id: 'd3',
    name: 'SEO & Content Marketing',
    description: 'Data-driven SEO optimization and high-quality content creation to drive organic traffic.',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    tags: ['SEO', 'Content']
  },
  {
    id: 'd4',
    name: 'UI/UX Design Systems',
    description: 'Modern, accessible, and scalable design systems for digital products.',
    category: 'digital',
    image: 'images/uiux.jpg',
    tags: ['Design', 'UI/UX']
  }
];


export const BLOG_POSTS = [
  {
    id: 'b1',
    title: 'The Future of CNC Machining in Global Manufacturing',
    excerpt: 'Discover how automation, precision engineering, and advanced CNC technologies are transforming global manufacturing and supply chains.',
    date: 'March 24, 2026',
    image: 'https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&q=80&w=800',
    content: `Precision engineering has always been at the heart of Finnish industrial manufacturing, but 2026 marks a turning point. Driven by advances in AI-assisted automation, CNC machining is faster, more precise, and more cost-effective than ever before.\n\nNew 5-axis machines equipped with predictive maintenance sensors are now capable of reducing downtime by over 40%, ensuring that part production remains on schedule without compromising tight tolerances. At EuroCore, our Finnish procurement hubs are constantly vetting the latest facilities to source parts that meet rigorous aerospace and medical standards.`
  },
  {
    id: 'b2',
    title: 'Sustainable Food Sourcing: From Farm to Global Markets',
    excerpt: 'Learn how sustainable sourcing practices ensure quality, safety, and environmental responsibility in global food supply chains.',
    date: 'April 02, 2026',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    content: `The demand for organic, sustainably sourced food has never been higher. Consumers want to know where their food comes from, and they demand a supply chain that respects the environment. In the heart of Lapland, traditional foraging and ethical farming are setting global standards.\n\nFrom hand-picked wild cloudberries to sustainably caught Atlantic salmon, the preservation of biodiversity is vital. We work directly with certified farmers across the Nordics, running rigorous quality checks to deliver provisions that not only taste extraordinary but also support environmental harmony.`
  },
  {
    id: 'b3',
    title: 'Navigating the Global Semiconductor Supply Chain in 2026',
    excerpt: 'A complete guide to sourcing high-tech components and overcoming challenges in the evolving semiconductor industry.',
    date: 'April 05, 2026',
    image: 'images/blog_semiconductors.png',
    content: `The global semiconductor shortage taught the industry a severe lesson in supply chain resilience. Today, Europe has bolstered its domestic production capabilities, driven by initiatives to create self-sustaining silicon hubs across the continent.\n\nProcurement managers must now understand the shifting dynamics of regional silicon foundries versus traditional overseas options. Through strategic alliances with emerging European chipmakers, we offer robust continuity solutions for companies relying on microcontrollers, sensor arrays, and automotive-grade chips.`
  },
  {
    id: 'b4',
    title: 'Why SEO Strategy is Essential for B2B Business Growth',
    excerpt: 'Understand how SEO, analytics, and digital strategies help businesses attract clients, generate leads, and scale globally.',
    date: 'April 06, 2026',
    image: 'images/blog_seo_b2b.png',
    content: `Historically, B2B industrial companies relied exclusively on trade shows, cold calls, and legacy networks. However, modern procurement teams start their sourcing journey online. If your manufacturing firm cannot be easily found via search engines, you are invisible to a significant share of the market.\n\nData-driven SEO involves technical website optimization, authoritative industrial content, and targeted backlink strategies. We help legacy B2B manufacturers transition their lead generation pipelines into the 21st century by securing top rankings for high-intent queries like "precision CNC machining Europe" or "bulk hydraulic actuators."`
  },
  {
    id: 'b5',
    title: 'Innovations in Industrial Automation & Hydraulic Systems',
    excerpt: 'Explore the latest advancements in industrial machinery, automation, and hydraulic actuator technologies.',
    date: 'April 07, 2026',
    image: 'images/blog_hydraulics.png',
    content: `Industrial movement relies heavily on the power and precision of hydraulic systems. In harsh environments like mining operations or offshore rigs, actuators must withstand immense pressure while providing delicate control. Recently, electro-hydraulic actuators (EHAs) have emerged as the gold standard.\n\nEHAs eliminate the need for centralized hydraulic systems, replacing extensive piping with self-contained, powerful compact units. This hybrid approach significantly reduces maintenance costs and potential fluid leakages. Our networks are actively supplying these next-gen actuators to leading manufacturing plants across Europe.`
  },
  {
    id: 'b6',
    title: 'The Rise of Organic Products in Global Markets',
    excerpt: 'Discover growing demand for organic and sustainable products and how businesses can leverage global sourcing opportunities.',
    date: 'April 07, 2026',
    image: 'images/blog_nordic_food.png',
    content: `Around the world, culinary professionals and health-conscious consumers are seeking out Nordic ingredients. Characterized by short, intense growing seasons under the midnight sun, items like wild berries, cold-pressed seed oils, and rye possess elevated nutritional profiles and concentrated flavors.\n\nThis shift in consumer behavior represents a massive opportunity for importers. We streamline the logistics of transporting artisanal goods from remote Scandinavian producers to high-end retailers globally, maintaining strict temperature controls to ensure absolute freshness upon delivery.`
  }
];
