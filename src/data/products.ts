export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: string;
  availableSizes: string[];
  image: string;
  category: string;
  available: boolean;
  healthBenefits?: string[];
  growingMethods?: string;
};

export const products: Product[] = [
  {
    id: "mangoes-alphonso",
    name: "Premium Alphonso Mangoes",
    shortDescription: "Sun-ripened, hand-picked seasonal Alphonso mangoes.",
    description: "Our Alphonso mangoes are carefully cultivated using natural methods. Harvested at the perfect time to ensure optimal sweetness and flavor.",
    price: "₹1,200",
    availableSizes: ["1 Dozen", "2 Dozen"],
    image: "/images/mangoes.jpg",
    category: "Fruits",
    available: true,
    healthBenefits: [
      "Rich in Vitamin A and Vitamin C",
      "Contains powerful antioxidants like mangiferin",
      "Supports heart health and digestion"
    ],
    growingMethods: "Hand-pollinated and grown in nutrient-rich laterite soil with minimal organic intervention to preserve its natural sweetness."
  },
  {
    id: "mangoes-mallika",
    name: "Mallika Mangoes",
    shortDescription: "Exceptionally sweet, fiberless Mallika mangoes.",
    description: "A premium cross between Neelum and Dasheri, our Mallika mangoes offer a honey-like sweetness and completely fiberless flesh. Perfect for desserts and eating fresh.",
    price: "₹950",
    availableSizes: ["1 Dozen", "2 Dozen"],
    image: "/images/mallika_mango.jpg",
    category: "Fruits",
    available: true,
    healthBenefits: [
      "High in dietary fiber and essential vitamins",
      "Excellent for skin health and immunity",
      "Provides sustained natural energy"
    ],
    growingMethods: "Grown using sustainable farming practices, these mangoes are left to mature naturally on the tree before being carefully hand-harvested."
  },
  {
    id: "mangoes-himayath",
    name: "Himayath (Imam Pasand) Mangoes",
    shortDescription: "The 'King of Mangoes' in South India, large and incredibly sweet.",
    description: "Known for its exceptionally large size and distinct sweet-tangy flavor, the Imam Pasand is a rare delicacy. Its thin skin hides a rich, buttery, fiberless interior.",
    price: "₹1,500",
    availableSizes: ["1 Dozen"],
    image: "/images/himayath_mango.jpg",
    category: "Fruits",
    available: true,
    healthBenefits: [
      "Loaded with Vitamin C and folate",
      "Supports healthy digestion",
      "Rich in beta-carotene for eye health"
    ],
    growingMethods: "Nurtured on our oldest estate trees, requiring precise pruning and watering schedules to achieve their massive size and perfect flavor profile."
  },
  {
    id: "mosambi",
    name: "Fresh Mosambi (Sweet Lime)",
    shortDescription: "Juicy, farm-fresh sweet limes perfect for juicing.",
    description: "Grown with care in nutrient-rich soil, our Mosambi is packed with vitamin C and offers a perfectly balanced sweet and tangy flavor profile.",
    price: "₹150",
    availableSizes: ["1 kg", "3 kg"],
    image: "/images/mosambi2.jpg",
    category: "Fruits",
    available: true,
    healthBenefits: [
      "Excellent source of Vitamin C",
      "Helps prevent dehydration and heat stroke",
      "Boosts immunity and aids digestion"
    ],
    growingMethods: "Cultivated using drip irrigation techniques and natural compost, ensuring high juice content and natural sweetness."
  },
  {
    id: "pepper",
    name: "Black Pepper",
    shortDescription: "Aromatic, bold-flavor whole black peppercorns.",
    description: "Sourced from our oldest vines, these premium black peppercorns are sun-dried to preserve their pungent, earthy flavor. A staple for any kitchen.",
    price: "₹850",
    availableSizes: ["250g", "500g"],
    image: "/images/pepper.jpg",
    category: "Spices",
    available: true,
    healthBenefits: [
      "High in antioxidants and piperine",
      "Possesses anti-inflammatory properties",
      "Improves brain function and blood sugar control"
    ],
    growingMethods: "Grown on traditional support trees under natural forest canopy, hand-harvested when fully mature, and strictly sun-dried."
  },
  {
    id: "moringa",
    name: "Moringa Powder",
    shortDescription: "Nutrient-dense, vibrant green moringa powder.",
    description: "Made from carefully shade-dried moringa leaves grown on our estate. A powerful superfood packed with vitamins, minerals, and antioxidants.",
    price: "₹450",
    availableSizes: ["100g", "250g"],
    image: "/images/moringa.jpg",
    category: "Superfoods",
    available: true,
    healthBenefits: [
      "Packed with vitamins A, C, and E",
      "Reduces inflammation and lowers blood sugar",
      "Protects and nourishes skin and hair"
    ],
    growingMethods: "Leaves are hand-harvested from mature trees, meticulously washed, and shade-dried to retain maximum nutritional value and vibrant color."
  },
];
