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
};

export const products: Product[] = [
  {
    id: "mangoes",
    name: "Premium Alphonso Mangoes",
    shortDescription: "Sun-ripened, hand-picked seasonal Alphonso mangoes.",
    description: "Our Alphonso mangoes are carefully cultivated using natural methods. Harvested at the perfect time to ensure optimal sweetness and flavor.",
    price: "₹1,200",
    availableSizes: ["1 Dozen", "2 Dozen"],
    image: "/images/mangoes.jpg",
    category: "Fruits",
    available: true,
  },
  {
    id: "mosambi",
    name: "Fresh Mosambi (Sweet Lime)",
    shortDescription: "Juicy, farm-fresh sweet limes perfect for juicing.",
    description: "Grown with care in nutrient-rich soil, our Mosambi is packed with vitamin C and offers a perfectly balanced sweet and tangy flavor profile.",
    price: "₹150",
    availableSizes: ["1 kg", "3 kg"],
    image: "/images/mosambi.jpg",
    category: "Fruits",
    available: true,
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
  },
  {
    id: "sandalwood",
    name: "Indian Sandalwood Heartwood",
    shortDescription: "Authentic, fragrant sandalwood sourced directly from our estate.",
    description: "Our premium sandalwood is ethically grown and processed. Known for its rich, calming aroma, perfect for spiritual, cosmetic, or therapeutic use.",
    price: "Enquire for Price",
    availableSizes: ["Custom"],
    image: "/images/sandalwood.jpg",
    category: "Wood",
    available: true,
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
  },
];
