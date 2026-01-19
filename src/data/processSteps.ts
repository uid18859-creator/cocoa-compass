export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  whatHappens: string;
  safetyRisks: string[];
  hygieneMeasures: string[];
  duration: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "farming",
    title: "Cocoa Farming",
    description: "Cocoa trees are cultivated in tropical regions within 20° of the equator.",
    whatHappens: "Theobroma cacao trees are grown in shaded conditions. Trees take 3-5 years to produce pods. Each tree yields 20-30 pods annually, with each pod containing 20-50 beans.",
    safetyRisks: [
      "Pesticide contamination from agricultural chemicals",
      "Soil contamination with heavy metals (cadmium, lead)",
      "Pest infestations affecting crop quality",
      "Climate stress affecting plant health"
    ],
    hygieneMeasures: [
      "Integrated pest management (IPM) practices",
      "Regular soil testing for contaminants",
      "Proper spacing to prevent disease spread",
      "Clean tools and equipment",
      "Training for farmers on safe practices"
    ],
    duration: "3-5 years to first harvest",
    icon: "Leaf"
  },
  {
    id: "harvesting",
    title: "Harvesting",
    description: "Ripe cocoa pods are carefully cut from trees by hand.",
    whatHappens: "Workers use machetes or special knives to cut pods from tree trunks and branches. Pods change color when ripe (yellow, orange, or red depending on variety). Harvesting occurs twice yearly.",
    safetyRisks: [
      "Physical injuries from cutting tools",
      "Damage to tree affecting future yields",
      "Harvesting unripe or overripe pods",
      "Introduction of pathogens through wounds"
    ],
    hygieneMeasures: [
      "Training on proper cutting techniques",
      "Sanitized cutting tools",
      "Protective equipment for workers",
      "Immediate pod opening to prevent mold",
      "Sorting to remove damaged pods"
    ],
    duration: "Seasonal (2 harvests per year)",
    icon: "Scissors"
  },
  {
    id: "fermentation",
    title: "Fermentation",
    description: "Beans are fermented for 5-7 days to develop flavor precursors.",
    whatHappens: "Fresh beans with pulp are placed in boxes or heaps, covered with banana leaves. Microorganisms break down pulp sugars, generating heat (45-50°C). Complex chemical reactions develop chocolate flavor precursors.",
    safetyRisks: [
      "Uncontrolled microbial growth",
      "Mold development (ochratoxin A)",
      "Improper temperature control",
      "Contamination from environment",
      "Over or under-fermentation"
    ],
    hygieneMeasures: [
      "Clean fermentation boxes",
      "Regular turning (every 48 hours)",
      "Temperature monitoring",
      "Protection from rain and pests",
      "Proper drainage systems",
      "Quality testing after fermentation"
    ],
    duration: "5-7 days",
    icon: "Timer"
  },
  {
    id: "drying",
    title: "Drying",
    description: "Fermented beans are dried to reduce moisture content to 6-7%.",
    whatHappens: "Beans are spread on raised platforms or concrete floors under sun, or mechanically dried. Moisture reduces from 60% to 6-7%. This halts fermentation and prepares beans for storage and shipping.",
    safetyRisks: [
      "Mold growth if drying is too slow",
      "Aflatoxin contamination",
      "Environmental contamination (dust, debris)",
      "Re-absorption of moisture",
      "Over-drying causing brittle beans"
    ],
    hygieneMeasures: [
      "Raised drying beds to prevent ground contact",
      "Regular turning for even drying",
      "Protection from rain and dew",
      "Clean drying surfaces",
      "Moisture content testing",
      "Removal of flat, broken, or moldy beans"
    ],
    duration: "5-14 days",
    icon: "Sun"
  },
  {
    id: "roasting",
    title: "Roasting",
    description: "Dried beans are roasted to develop chocolate flavor.",
    whatHappens: "Beans are heated to 120-150°C. Maillard reactions create hundreds of flavor compounds. Shells loosen from nibs. Microbial load is significantly reduced. Moisture further decreases.",
    safetyRisks: [
      "Acrylamide formation at high temperatures",
      "Uneven roasting creating inconsistent quality",
      "Fire hazards",
      "Loss of beneficial compounds from over-roasting"
    ],
    hygieneMeasures: [
      "Calibrated roasting equipment",
      "Temperature and time controls",
      "Batch sampling and testing",
      "Clean roasting drums",
      "Proper ventilation systems",
      "Quality control checks"
    ],
    duration: "20-40 minutes",
    icon: "Flame"
  },
  {
    id: "grinding",
    title: "Grinding (Winnowing & Milling)",
    description: "Roasted beans are cracked, shells removed, and nibs ground to cocoa liquor.",
    whatHappens: "Shells are separated from nibs through winnowing. Nibs are ground in mills, generating heat that melts cocoa butter. Result is cocoa liquor (also called cocoa mass) - a thick, smooth paste.",
    safetyRisks: [
      "Metal contamination from equipment",
      "Cross-contamination with allergens",
      "Overheating affecting quality",
      "Shell fragments in product"
    ],
    hygieneMeasures: [
      "Metal detectors in production line",
      "Regular equipment maintenance",
      "Allergen control protocols",
      "Particle size monitoring",
      "Clean-in-place (CIP) systems",
      "HACCP critical control points"
    ],
    duration: "Several hours",
    icon: "Cog"
  },
  {
    id: "conching",
    title: "Conching",
    description: "Cocoa liquor is refined through continuous mixing and aeration.",
    whatHappens: "Chocolate is continuously mixed, heated, and aerated for 12-72 hours. Volatile acids evaporate, reducing bitterness. Texture becomes smooth. Flavor develops and mellows.",
    safetyRisks: [
      "Contamination during long processing",
      "Inconsistent temperature control",
      "Equipment malfunction",
      "Moisture ingress"
    ],
    hygieneMeasures: [
      "Enclosed conching systems",
      "Temperature monitoring",
      "Regular sampling and testing",
      "Sanitation between batches",
      "Humidity control in facility",
      "Documentation of process parameters"
    ],
    duration: "12-72 hours",
    icon: "RefreshCw"
  },
  {
    id: "tempering",
    title: "Tempering",
    description: "Chocolate is heated and cooled precisely to form stable crystals.",
    whatHappens: "Chocolate is heated to 50°C, cooled to 27°C, then reheated to 31-32°C. This creates stable Form V cocoa butter crystals. Properly tempered chocolate has shine, snap, and smooth texture.",
    safetyRisks: [
      "Improper crystal formation causing bloom",
      "Temperature fluctuations",
      "Contamination during handling"
    ],
    hygieneMeasures: [
      "Precise temperature control systems",
      "Trained tempering technicians",
      "Regular equipment calibration",
      "Clean tempering tables/machines",
      "Quality testing for proper temper"
    ],
    duration: "30-60 minutes",
    icon: "Thermometer"
  },
  {
    id: "moulding",
    title: "Moulding",
    description: "Tempered chocolate is poured into moulds and cooled.",
    whatHappens: "Liquid chocolate is deposited into moulds, vibrated to remove air bubbles, and cooled in tunnels at 10-12°C. Chocolate contracts and releases from moulds. Bars are inspected and sorted.",
    safetyRisks: [
      "Air bubble defects",
      "Mould contamination",
      "Physical hazards (mould fragments)",
      "Improper cooling causing bloom"
    ],
    hygieneMeasures: [
      "Sanitized moulds",
      "Controlled cooling environment",
      "Visual and metal detection inspection",
      "Rejection of defective products",
      "First-in-first-out (FIFO) protocols"
    ],
    duration: "15-30 minutes",
    icon: "Square"
  },
  {
    id: "packaging",
    title: "Packaging",
    description: "Finished chocolate is wrapped and packaged for distribution.",
    whatHappens: "Bars are wrapped in foil (moisture barrier), then paper or cardboard. Labels include nutritional info, allergens, batch codes, and best-before dates. Products are boxed for shipping.",
    safetyRisks: [
      "Packaging material contamination",
      "Label errors (allergen omission)",
      "Inadequate sealing",
      "Foreign object inclusion"
    ],
    hygieneMeasures: [
      "Food-grade packaging materials",
      "Quality control checks on labels",
      "Metal detection before packaging",
      "Lot coding for traceability",
      "Seal integrity testing",
      "Clean, pest-free packaging area"
    ],
    duration: "Automated process",
    icon: "Package"
  },
  {
    id: "transportation",
    title: "Transportation & Storage",
    description: "Packaged chocolate is stored and shipped under controlled conditions.",
    whatHappens: "Chocolate is stored at 15-18°C with <55% humidity. Shipped in temperature-controlled containers. Cold chain maintained throughout distribution to prevent bloom and melting.",
    safetyRisks: [
      "Temperature excursions causing bloom",
      "Humidity damage",
      "Physical damage during transit",
      "Cross-contamination in storage",
      "Pest infestation"
    ],
    hygieneMeasures: [
      "Temperature-controlled vehicles",
      "Data loggers for monitoring",
      "Clean storage facilities",
      "Pest control programs",
      "FIFO inventory management",
      "Regular inspection protocols"
    ],
    duration: "Varies by destination",
    icon: "Truck"
  }
];
