import {assets} from '../assets/assets'
export const categories = [
  {
    name: "All",
    // hindi: "सभी",
    slug: "all",
  },
  {
    name: "Plumbing",
    // hindi: "प्लंबिंग",
    slug: "plumbing",
  },
  {
    name: "Paints",
    // hindi: "पेंट्स",
    slug: "paints",
  },
  {
    name: "Electrical",
    // hindi: "इलेक्ट्रिकल",
    slug: "electrical",
  },
  {
    name: "Sanitary",
    // hindi: "सैनिटरी",
    slug: "sanitary",
  },
  {
    name: "Hardware",
    // hindi: "हार्डवेयर",
    slug: "hardware",
  },
  {
    name: "Home Appliances",
    // hindi: "हार्डवेयर",
    slug: "appliances",
  },
];

export const categoryBrands = {
  plumbing: [
    "Astral",
    "Kankai",
    "Finolex",
    "Ashirvad",
    "Jindal",
  ],

  paints: [
    "Asian Paints",
    "Berger",
    "Nerolac",
    "JSW Paints",
    "Birla White",
  ],

  electrical: [
    "Havells",
    "Polycab",
    "Anchor",
    "Legrand",
    "Wipro",
  ],

  sanitary: [
    "Hindware",
    "Cera",
    "Parryware",
    "Jaquar",
    "Essco",
  ],

  hardware: [
    "Godrej",
    "Ozone",
    "Fevicol",
    "Dr. Fixit",
    "Taparia",
    "Stanley",
  ],
  appliances:[
    "Bajaj",
    "Usha",
  ]
};

export const products = [
  // --------------------
  // PLUMBING
  // --------------------
   {
    id: 1,
    name: "CPVC Pipe",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg1,
    url: "/products/plumbing/jindal-cpvc-pipe",
    price: "₹850",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "High-quality Jindal CPVC pipe suitable for hot and cold water plumbing applications.",
  },

  {
    id: 2,
    name: "CPVC Elbow 90°",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg2,
    url: "/products/plumbing/jindal-cpvc-elbow-90",
    price: "₹45",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal CPVC 90° elbow designed for changing the direction of water flow in plumbing systems.",
  },

  {
    id: 3,
    name: "CPVC Elbow 45°",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg3,
    url: "/products/plumbing/jindal-cpvc-elbow-45",
    price: "₹40",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal CPVC 45° elbow provides a smooth change in direction for hot and cold water pipelines.",
  },

  {
    id: 4,
    name: "CPVC Equal Tee",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg4,
    url: "/products/plumbing/jindal-cpvc-equal-tee",
    price: "₹55",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal CPVC equal tee used for creating a branch connection of the same pipe size.",
  },

  {
    id: 5,
    name: "CPVC Reducer Tee",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg5,
    url: "/products/plumbing/jindal-cpvc-reducer-tee",
    price: "₹65",
    sizes: ['3/4" x 1/2"', '1" x 1/2"', '1" x 3/4"', '1 1/4" x 1"'],
    description:
      "Jindal CPVC reducer tee designed to connect pipes of different sizes in plumbing systems.",
  },

  {
    id: 6,
    name: "CPVC Coupler",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg6,
    url: "/products/plumbing/jindal-cpvc-coupler",
    price: "₹35",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal CPVC coupler used to join two CPVC pipes securely in water supply installations.",
  },

  {
    id: 7,
    name: "CPVC Union",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg7,
    url: "/products/plumbing/jindal-cpvc-union",
    price: "₹90",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal CPVC union provides a convenient detachable connection for plumbing maintenance and installation.",
  },

  {
    id: 8,
    name: "CPVC Cross Tee",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg8,
    url: "/products/plumbing/jindal-cpvc-cross-tee",
    price: "₹75",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal CPVC cross tee used to create multiple branch connections in plumbing pipelines.",
  },

  {
    id: 9,
    name: "uPVC Plumbing Pipe",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg9,
    url: "/products/plumbing/jindal/upvc-plumbing-pipe",
    price: "₹650",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal uPVC plumbing pipe designed for reliable water supply and plumbing applications.",
  },

  {
    id: 10,
    name: "uPVC Elbow",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg10,
    url: "/products/plumbing/jindal/upvc-elbow",
    price: "₹30",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal uPVC elbow used for changing the direction of water flow in plumbing pipelines.",
  },

  {
    id: 11,
    name: "uPVC Tee",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg11,
    url: "/products/plumbing/jindal-upvc-tee",
    price: "₹35",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal uPVC tee fitting used to create branch connections in plumbing systems.",
  },

  {
    id: 12,
    name: "uPVC Coupler",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg12,
    url: "/products/plumbing/jindal-upvc-coupler",
    price: "₹25",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal uPVC coupler used to connect two uPVC pipes securely and efficiently.",
  },

  {
    id: 13,
    name: "uPVC Union",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg13,
    url: "/products/plumbing/jindal-upvc-union",
    price: "₹70",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal uPVC union provides a detachable pipe connection for easy installation and maintenance.",
  },

  {
    id: 14,
    name: "uPVC Reducer",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg14,
    url: "/products/plumbing/jindal-upvc-reducer",
    price: "₹30",
    sizes: ['3/4" x 1/2"', '1" x 1/2"', '1" x 3/4"', '1 1/4" x 1"'],
    description:
      "Jindal uPVC reducer used to connect pipes with different diameters in plumbing systems.",
  },

  {
    id: 15,
    name: "uPVC End Cap",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg15,
    url: "/products/plumbing/jindal-upvc-end-cap",
    price: "₹20",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal uPVC end cap used to close and seal the end of a plumbing pipe.",
  },

  {
    id: 16,
    name: "uPVC Male Adapter",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg16,
    url: "/products/plumbing/jindal-upvc-male-adapter",
    price: "₹35",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal uPVC male adapter used to connect uPVC pipes with threaded plumbing components.",
  },

  {
    id: 17,
    name: "uPVC Female Adapter",
    category: "plumbing",
    brand: "Jindal",
    image: assets.cpvcimg17,
    url: "/products/plumbing/jindal-upvc-female-adapter",
    price: "₹40",
    sizes: ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"'],
    description:
      "Jindal uPVC female adapter designed for connecting uPVC pipes with threaded plumbing fittings.",
  },

  // --------------------
  // PAINTS
  // --------------------

  {
    id: 18,
    name: "Beauty Gold",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint1,
    url: "/products/paints/beauty-gold",
    price: "₹950",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Nerolac Beauty Gold is an interior wall paint designed to provide a smooth and beautiful finish.",
  },
  {
    id: 19,
    name: "Beauty Gold Washable",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint2,
    url: "/products/paints/beauty-gold-washable",
    price: "₹1,050",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Washable interior paint designed for easy maintenance and a clean, attractive wall finish.",
  },
  {
    id: 20,
    name: "Beauty Gold Washable Plus",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint3,
    url: "/products/paints/beauty-gold-washable-plus",
    price: "₹1,150",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Premium washable wall paint offering a smooth finish and easy-to-clean surface.",
  },
  {
    id: 21,
    name: "Beauty Gold Washable NXT",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint4,
    url: "/products/paints/beauty-gold-washable-nxt",
    price: "₹1,250",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Advanced washable interior paint designed for attractive and durable wall finishes.",
  },
  {
    id: 22,
    name: "Beauty Little Master Sheen",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint5,
    url: "/products/paints/beauty-little-master-sheen",
    price: "₹1,100",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Interior wall paint with a smooth sheen finish for a refined appearance.",
  },
  {
    id: 23,
    name: "Impressions 24 Carat",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint6,
    url: "/products/paints/impressions-24-carat",
    price: "₹1,650",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Premium interior paint designed for an elegant finish and enhanced wall appearance.",
  },
  {
    id: 24,
    name: "Impressions Eco Clean",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint7,
    url: "/products/paints/impressions-eco-clean",
    price: "₹1,550",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Interior wall paint designed for a clean, smooth and attractive finish.",
  },
  {
    id: 25,
    name: "Impressions Kashmir",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint8,
    url: "/products/paints/impressions-kashmir",
    price: "₹1,600",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Premium decorative interior paint offering a smooth and elegant wall finish.",
  },
  {
    id: 26,
    name: "Impressions Ultra HD",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint9,
    url: "/products/paints/impressions-ultra-hd",
    price: "₹1,750",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Premium interior wall paint designed for a rich and refined finish.",
  },
  {
    id: 27,
    name: "Excel Total",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint10,
    url: "/products/paints/excel-total",
    price: "₹1,350",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Exterior paint designed to provide a durable finish for residential and commercial walls.",
  },
  {
    id: 28,
    name: "Excel Mica Marble / Mica Marble Stretch Sheen",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint11,
    url: "/products/paints/excel-mica-marble",
    price: "₹1,450",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Decorative exterior paint designed to provide an attractive and durable wall finish.",
  },
  {
    id: 29,
    name: "Excel Anti Peel",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint12,
    url: "/products/paints/excel-anti-peel",
    price: "₹1,400",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Exterior wall coating designed to help maintain a durable and attractive surface.",
  },
  {
    id: 30,
    name: "Excel Top Guard",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint13,
    url: "/products/paints/excel-top-guard",
    price: "₹1,500",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Exterior paint solution designed for long-lasting wall protection and finish.",
  },
  {
    id: 31,
    name: "Premium Primer White",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint14,
    url: "/products/paints/premium-primer-white",
    price: "₹750",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "White primer designed to prepare wall surfaces before applying the final paint coat.",
  },
  {
    id: 32,
    name: "Zinc Yellow Primer",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint15,
    url: "/products/paints/zinc-yellow-primer",
    price: "₹850",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Primer coating designed for suitable metal surface preparation and protection.",
  },

  {
    id: 33,
    name: "Universal PU Primer Grey",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint16,
    url: "/products/paints/zinc-yellow-primer",
    price: "₹850",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Primer coating designed for suitable metal surface preparation and protection.",
  },
  {
    id: 34,
    name: "Cement Primer (Solvent Based)",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint17,
    url: "/products/paints/zinc-yellow-primer",
    price: "₹850",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Primer coating designed for suitable metal surface preparation and protection.",
  },
  {
    id: 35,
    name: "Water Thinnable Cement Primer",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint18,
    url: "/products/paints/zinc-yellow-primer",
    price: "₹850",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Primer coating designed for suitable metal surface preparation and protection.",
  },
  {
    id: 36,
    name: "Exterior Primer",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint19,
    url: "/products/paints/zinc-yellow-primer",
    price: "₹850",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Primer coating designed for suitable metal surface preparation and protection.",
  },
  {
    id: 37,
    name: "Wood Primer Pink",
    category: "paints",
    brand: "Nerolac",
    image: assets.nerolacPaint20,
    url: "/products/paints/zinc-yellow-primer",
    price: "₹850",
    sizes: ["1L", "4L", "10L", "20L"],
    description:
      "Primer coating designed for suitable metal surface preparation and protection.",
  },
  // {
  //   id: 24,
  //   name: "Wood Primer Golden Brown",
  //   category: "paints",
  //   brand: "Nerolac",
  //   image: assets.nerolacPaint15,
  //   url: "/products/paints/zinc-yellow-primer",
  //   price: "₹850",
  //   sizes: ["1L", "4L", "10L", "20L"],
  //   description:
  //     "Primer coating designed for suitable metal surface preparation and protection.",
  // },

  // --------------------
  // ELECTRICAL
  // --------------------

{
  id: 38,
  name: "Wires & Cables",
  category: "electrical",
  brand: "Polycab",
  image: assets.electrical1,
  url: "/products/electrical/wires-cables",
  price: "₹1,850",
  sizes: ["1.0 sq mm", "1.5 sq mm", "2.5 sq mm", "4 sq mm", "6 sq mm"],
  description:
    "High-quality electrical wires and cables suitable for residential and commercial electrical installations.",
},

{
  id: 39,
  name: "Switches & Sockets",
  category: "electrical",
  brand: "Anchor",
   image: assets.electrical2,
  url: "/products/electrical/switches-sockets",
  price: "₹150",
  sizes: ["6A", "10A", "16A", "20A"],
  description:
    "Reliable switches and sockets designed for safe, convenient, and durable residential and commercial electrical installations.",
},

{
  id: 40,
  name: "LED Bulbs & LED Lights",
  category: "electrical",
  brand: "Havells",
   image: assets.electrical3,
  url: "/products/electrical/led-bulbs-lights",
  price: "₹120",
  sizes: ["5W", "7W", "9W", "12W", "15W", "20W"],
  description:
    "Energy-efficient LED bulbs and lights designed to provide bright and reliable illumination for homes and commercial spaces.",
},

{
  id: 41,
  name: "Ceiling Fans & Exhaust Fans",
  category: "electrical",
  brand: "Havells",
   image: assets.electrical4,
  url: "/products/electrical/fans",
  price: "₹1,850",
  sizes: ["900 mm", "1200 mm", "1400 mm"],
  description:
    "Efficient ceiling and exhaust fans designed for comfortable airflow and reliable everyday performance.",
},

{
  id: 42,
  name: "Modular Switches",
  category: "electrical",
  brand: "Havells",
   image: assets.electrical5,
  url: "/products/electrical/modular-switches",
  price: "₹180",
  sizes: ["6A", "10A", "16A", "20A"],
  description:
    "Modern modular switches designed for reliable operation and convenient electrical installations.",
},

{
  id: 43,
  name: "MCB, RCCB & Protection Devices",
  category: "electrical",
  brand: "Legrand",
   image: assets.electrical6,
  url: "/products/electrical/mcb-rccb",
  price: "₹350",
  sizes: ["6A", "10A", "16A", "20A", "32A", "40A", "63A"],
  description:
    "Electrical protection devices designed to help protect circuits and appliances from overload and electrical faults.",
},

{
  id: 44,
  name: "Distribution Boards",
  category: "electrical",
  brand: "Legrand",
   image: assets.electrical7,
  url: "/products/electrical/distribution-boards",
  price: "₹850",
  sizes: ["4 Way", "6 Way", "8 Way", "12 Way", "16 Way"],
  description:
    "Durable distribution boards designed for safe and organized electrical circuit distribution.",
},

{
  id: 45,
  name: "Cable Ties & Lugs",
  category: "electrical",
  brand: "Polycab",
   image: assets.electrical8,
  url: "/products/electrical/cable-ties-lugs",
  price: "₹100",
  sizes: ["2.5 sq mm", "4 sq mm", "6 sq mm", "10 sq mm", "16 sq mm"],
  description:
    "Electrical cable ties and lugs suitable for secure cable management and reliable electrical connections.",
},


  // --------------------
  // SANITARY
  // --------------------
  {
    id: 46,
    name: "Wash Basin",
    category: "sanitary",
    brand: "Hindware",
    image: assets.sanitary1,
    url: "/products/sanitary/wash-basin",
    price: "₹2,850",
    sizes: ["450 mm", "500 mm", "550 mm", "600 mm"],
    description:
      "Stylish wash basin designed for modern bathroom spaces with a practical and elegant finish.",
  },
  {
    id: 47,
    name: "Western Toilet",
    category: "sanitary",
    brand: "Cera",
    image: assets.sanitary2,
    url: "/products/sanitary/western-toilet",
    price: "₹6,500",
    sizes: ["Standard", "Compact", "Large"],
    description:
      "Modern western toilet designed for comfortable and hygienic bathroom use.",
  },
  {
    id: 48,
    name: "Bathroom Faucet",
    category: "sanitary",
    brand: "Jaquar",
    image: assets.sanitary4,
    url: "/products/sanitary/bathroom-faucet",
    price: "₹2,450",
    sizes: ["Standard", "Long Body", "Tall Body"],
    description:
      "Modern bathroom faucet designed to provide reliable water flow and an elegant appearance.",
  },
  {
    id: 49,
    name: "Kitchen Sinks",
    category: "sanitary",
    brand: "Jaquar",
    image: assets.sanitary4,
    url: "/products/sanitary/bathroom-faucet",
    price: "₹2,450",
    sizes: ["Standard", "Long Body", "Tall Body"],
    description:
      "Modern bathroom faucet designed to provide reliable water flow and an elegant appearance.",
  },

  // --------------------
  // HARDWARE
  // --------------------
  {
    id: 50,
    name: "Door Lock",
    category: "hardware",
    brand: "Godrej",
    image: assets.hardware1,
    url: "/products/hardware/door-lock",
    price: "₹1,250",
    sizes: ["60 mm", "70 mm", "80 mm"],
    description:
      "Durable door lock designed for residential and commercial door security requirements.",
  },
  {
    id: 51,
    name: "Door Fittings",
    category: "hardware",
    brand: "Ozone",
    image: assets.hardware2,
    url: "/products/hardware/door-fittings",
    price: "₹950",
    sizes: ["Standard", "Small", "Large"],
    description:
      "Quality door fittings designed for smooth operation and a modern door appearance.",
  },
  {
    id: 52,
    name: "Hand Tools",
    category: "hardware",
    brand: "Taparia",
    image: assets.hardware3,
    url: "/products/hardware/hand-tools-taparia",
    price: "₹750",
    sizes: ["Small", "Medium", "Large"],
    description:
      "Reliable hand tools suitable for household, maintenance and general workshop applications.",
  },
  {
    id: 53,
    name: "Screws & Fasteners",
    category: "hardware",
    brand: "Stanley",
    image: assets.hardware4,
    url: "/products/hardware/hand-tools-stanley",
    price: "₹950",
    sizes: ["Small", "Medium", "Large"],
    description:
      "Professional-quality hand tools suitable for maintenance, repair and workshop applications.",
  },

  {
  id: 54,
  name: "Mixer Grinder",
  category: "appliances",
  brand: "Bajaj",
  image: assets.applianance1,
  url: "/products/home-appliances/mixer-grinder-crompton",
  price: "₹3,499",
  sizes: ["500W", "750W", "1000W"],
  description:
    "Powerful and durable mixer grinder suitable for everyday kitchen grinding and mixing applications.",
},

{
  id: 55,
  name: "Electric Kettle",
  category: "appliances",
  brand: "Bajaj",
  image: assets.applianance2,
  url: "/products/home-appliances/electric-kettle-bajaj",
  price: "₹1,299",
  sizes: ["1 L", "1.5 L", "2 L"],
  description:
    "Convenient electric kettle designed for quick and easy heating of water at home and in the office.",
},

{
  id: 56,
  name: "Ceiling Fan",
  category: "appliances",
  brand: "Usha",
  image: assets.applianance3,
  url: "/products/home-appliances/ceiling-fan-usha",
  price: "₹2,199",
  sizes: ["1200 mm", "1400 mm", "1500 mm"],
  description:
    "Energy-efficient ceiling fan designed to provide powerful airflow and comfortable cooling.",
},

{
  id: 57,
  name: "Room Heater",
  category: "appliances",
  brand: "Usha",
  image: assets.applianance4,
  url: "/products/home-appliances/room-heater-orient",
  price: "₹2,499",
  sizes: ["1000W", "1500W", "2000W"],
  description:
    "Compact room heater suitable for comfortable and efficient heating during cold weather.",
},

{
  id: 58,
  name: "Table Fan",
  category: "appliances",
  brand: "Usha",
  image: assets.applianance5,
  url: "/products/home-appliances/table-fan-crompton",
  price: "₹1,799",
  sizes: ["200 mm", "300 mm", "400 mm"],
  description:
    "Compact and efficient table fan providing powerful airflow for home, office and everyday use.",
},
];