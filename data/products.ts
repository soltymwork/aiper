export type Product = {
  id: string;
  name: string;
  tag: string;
  tone: "cyan" | "violet" | "blue" | "orange";
  price: string;
  oldPrice?: string;
  type: string;
  description: string;
  specs: {
    battery: string;
    pool: string;
    filter: string;
  };
};

export const products: Product[] = [
  {
    id: "scuba-s1-pro",
    name: "Aiper Scuba S1 Pro",
    tag: "Bestseller",
    tone: "cyan",
    price: "699 €",
    oldPrice: "799 €",
    type: "Dno · steny · vodná línia",
    description: "Najvyváženejší model pre rodinné bazény s prémiovým čistením.",
    specs: { battery: "150 min", pool: "150 m²", filter: "180 μm" }
  },
  {
    id: "scuba-x1",
    name: "Aiper Scuba X1",
    tag: "Novinka",
    tone: "violet",
    price: "899 €",
    type: "Dno · steny · vodná línia",
    description: "Pokročilý model pre náročnejšie bazény a plynulé čistenie.",
    specs: { battery: "160 min", pool: "200 m²", filter: "180 μm" }
  },
  {
    id: "scuba-x1-pro-max",
    name: "Aiper Scuba X1 Pro Max",
    tag: "Pre veľké bazény",
    tone: "blue",
    price: "1 299 €",
    type: "Kompletné čistenie",
    description: "Maximálny výkon, dlhá výdrž a prémiové čistenie veľkých bazénov.",
    specs: { battery: "240 min", pool: "300 m²", filter: "180 μm" }
  },
  {
    id: "scuba-n1-ultra",
    name: "Aiper Scuba N1 Ultra",
    tag: "Najlepší pomer",
    tone: "orange",
    price: "499 €",
    type: "Dno · steny",
    description: "Výkonné riešenie za rozumnú cenu pre menšie a stredné bazény.",
    specs: { battery: "120 min", pool: "120 m²", filter: "180 μm" }
  }
];

export const poolTypes = [
  ["Malé bazény", "do 80 m²", "Scuba SE / N1 Ultra"],
  ["Stredné bazény", "80 – 150 m²", "Scuba S1 Pro"],
  ["Veľké bazény", "150 – 300 m²", "Scuba X1 Pro Max"],
  ["Steny a vodná línia", "kompletné čistenie", "Scuba X1"],
  ["Prémiové riešenie", "bez kompromisov", "X1 Pro Max"]
] as const;
