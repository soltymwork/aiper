export type Product = {
  id: string;
  name: string;
  tag: string;
  tone: "cyan" | "violet" | "blue" | "orange";
  price: string;
  oldPrice?: string;
  type: string;
  description: string;
  image: string;
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
    image: "/images/products/scuba-s1-pro.png",
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
    image: "/images/products/scuba-x1.png",
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
    image: "/images/products/scuba-x1-pro-max.png",
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
    image: "/images/products/scuba-n1-ultra.png",
    specs: { battery: "120 min", pool: "120 m²", filter: "180 μm" }
  }
];

export type PoolType = {
  title: string;
  size: string;
  model: string;
  image: string;
};

export const poolTypes: PoolType[] = [
  { title: "Malé bazény", size: "do 80 m²", model: "Scuba SE / N1 Ultra", image: "/images/pools/small.jpg" },
  { title: "Stredné bazény", size: "80 – 150 m²", model: "Scuba S1 Pro", image: "/images/pools/medium.jpg" },
  { title: "Veľké bazény", size: "150 – 300 m²", model: "Scuba X1 Pro Max", image: "/images/pools/large.jpg" },
  { title: "Bazény so stenami", size: "a vodnou líniou", model: "Scuba X1", image: "/images/pools/walls.jpg" },
  { title: "Prémiové riešenie", size: "bez kompromisov", model: "X1 Pro Max", image: "/images/pools/premium.jpg" }
];
