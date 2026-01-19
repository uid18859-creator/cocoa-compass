export interface CaseStudy {
  id: string;
  title: string;
  type: "contamination" | "recall" | "success";
  year: string;
  location: string;
  summary: string;
  details: string[];
  lessons: string[];
  outcome: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cadbury-salmonella-2006",
    title: "Cadbury Salmonella Outbreak (2006)",
    type: "contamination",
    year: "2006",
    location: "United Kingdom",
    summary: "A salmonella contamination incident led to one of the largest chocolate recalls in UK history, affecting multiple Cadbury products.",
    details: [
      "Salmonella montevideo bacteria was detected in chocolate products from the Marlbrook factory",
      "The contamination was traced to a leaking pipe that allowed dirty water to contaminate chocolate crumb",
      "Over 1 million chocolate bars were recalled from stores",
      "At least 42 people became ill, mostly children",
      "Cadbury initially raised its internal contamination tolerance level, delaying the recall"
    ],
    lessons: [
      "Zero tolerance policies for pathogen contamination are essential",
      "Infrastructure maintenance must be prioritized in food facilities",
      "Delayed responses to contamination can significantly increase public health impact",
      "Transparent communication with regulators and public is crucial",
      "Regular third-party audits can identify issues before they become outbreaks"
    ],
    outcome: "Cadbury was fined £1 million for food safety violations. The company implemented comprehensive food safety improvements and increased testing protocols."
  },
  {
    id: "mars-plastic-recall-2016",
    title: "Mars Global Plastic Contamination Recall (2016)",
    type: "recall",
    year: "2016",
    location: "55 Countries",
    summary: "Mars voluntarily recalled chocolate bars across 55 countries after a customer found a piece of red plastic in a Snickers bar.",
    details: [
      "A customer in Germany found a piece of plastic in a Snickers bar and reported it",
      "Investigation traced the plastic to a protective cover at the Netherlands factory",
      "Mars recalled products including Snickers, Mars, Milky Way, and Celebrations",
      "The recall affected millions of products across Europe, Asia, and other regions",
      "This was one of the largest voluntary recalls in confectionery history"
    ],
    lessons: [
      "Robust traceability systems enable effective recall management",
      "Voluntary recalls, while costly, protect brand reputation and consumer safety",
      "Metal and X-ray detection may not catch all foreign objects",
      "Visual inspection and customer feedback are valuable safety nets",
      "Global supply chains require consistent safety standards across all facilities"
    ],
    outcome: "Mars strengthened detection systems and implemented additional visual inspection protocols. The proactive recall was praised by food safety experts."
  },
  {
    id: "tony-chocolonely-success",
    title: "Tony's Chocolonely: Slave-Free Chocolate Success",
    type: "success",
    year: "2005-Present",
    location: "Netherlands/Global",
    summary: "A Dutch journalist's investigation into cocoa industry slavery led to creating a successful ethical chocolate company.",
    details: [
      "Journalist Teun van de Keuken investigated child labor in West African cocoa farms",
      "He turned himself in as a 'chocolate criminal' to raise awareness",
      "Founded Tony's Chocolonely in 2005 with a mission to make 100% slave-free chocolate",
      "The company traces its entire supply chain and pays farmers above Fairtrade prices",
      "Now the leading chocolate brand in the Netherlands with global expansion"
    ],
    lessons: [
      "Transparency and traceability can be a competitive advantage",
      "Consumers increasingly value ethical sourcing",
      "Direct farmer relationships improve both quality and ethics",
      "B-Corp certification validates ethical claims",
      "Activism and business can work together effectively"
    ],
    outcome: "Tony's Chocolonely became a B-Corp certified company with over €100 million in annual revenue, proving that ethical chocolate can be commercially successful."
  }
];
