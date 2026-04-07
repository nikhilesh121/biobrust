import { productImages } from './config'

export interface ProductSpec {
  label: string;
  val: string;
}

export interface Product {
  id: string;
  name: string;
  tag: string;
  series: string;
  usecase: string;
  usecaseColor: string;
  usecaseBg: string;
  usecaseBorder: string;
  desc: string;
  specs: ProductSpec[];
  color: string;
  cardBg: string;
  image: string;
  badge: string;
  badgeColor: string;
}

export const products: Product[] = [
  {
    id: 'original',
    name: 'Original',
    tag: 'Energy · Flagship',
    series: 'Flagship Formula',
    usecase: 'Hardcore Focus',
    usecaseColor: '#92c640',
    usecaseBg: 'rgba(146,198,64,0.1)',
    usecaseBorder: 'rgba(146,198,64,0.2)',
    desc: 'The OG BIOBRUST formula. Engineered for raw, unfiltered performance energy. When you need to push harder, go further, and outlast the competition — this is your weapon of choice. Formulated with precision-dosed caffeine, B-vitamins, and bio-active compounds for sustained, crash-free energy.',
    specs: [
      { label: 'Volume', val: '250 ML' },
      { label: 'Caffeine', val: '75 MG' },
      { label: 'Flavour', val: 'Original' },
      { label: 'Category', val: 'Performance' },
      { label: 'Single Can MRP', val: '₹ As per MRP on Pack' },
    ],
    color: '#92c640',
    cardBg: 'linear-gradient(135deg,#0a1a0a,#1a3010)',
    image: productImages.original,
    badge: 'Hardcore Focus',
    badgeColor: '#92c640',
  },
  {
    id: 'classic',
    name: 'Classic',
    tag: 'Energy · Signature',
    series: 'Signature Series',
    usecase: 'All-Day Power',
    usecaseColor: '#92c640',
    usecaseBg: 'rgba(146,198,64,0.1)',
    usecaseBorder: 'rgba(146,198,64,0.2)',
    desc: 'The iconic BIOBRUST experience. Balanced, powerful, and timeless. For the warrior who demands consistent performance from morning to midnight. Clean, smooth energy with the classic BIOBRUST profile that started it all.',
    specs: [
      { label: 'Volume', val: '250 ML' },
      { label: 'Caffeine', val: '75 MG' },
      { label: 'Flavour', val: 'Classic' },
      { label: 'Category', val: 'All-Day' },
      { label: 'Single Can MRP', val: '₹ As per MRP on Pack' },
    ],
    color: '#92c640',
    cardBg: 'linear-gradient(135deg,#0d1a0d,#1a2e1a)',
    image: productImages.classic,
    badge: 'All-Day Power',
    badgeColor: '#92c640',
  },
  {
    id: 'citrus',
    name: 'Citrus Drink',
    tag: 'Energy · Citrus',
    series: 'Citrus Blast',
    usecase: 'Day Rush',
    usecaseColor: '#ff9500',
    usecaseBg: 'rgba(255,150,0,0.15)',
    usecaseBorder: 'rgba(255,150,0,0.3)',
    desc: 'Explosive citrus burst for daytime dominators. Refreshing, vibrant energy formulated with natural citrus extracts and vitamin C to power through your brightest moments with clean, sustained fuel.',
    specs: [
      { label: 'Volume', val: '250 ML' },
      { label: 'Caffeine', val: '75 MG' },
      { label: 'Flavour', val: 'Citrus' },
      { label: 'Best For', val: 'Daytime' },
      { label: 'Single Can MRP', val: '₹ As per MRP on Pack' },
    ],
    color: '#ff9500',
    cardBg: 'linear-gradient(135deg,#cc6600,#ff9500)',
    image: productImages.citrus,
    badge: 'Day Rush',
    badgeColor: '#ff9500',
  },
  {
    id: 'cranberry',
    name: 'Cranberry',
    tag: 'Energy · Fresh Series',
    series: 'Fresh Edition',
    usecase: 'Fresh Energy',
    usecaseColor: '#e8006a',
    usecaseBg: 'rgba(208,0,74,0.15)',
    usecaseBorder: 'rgba(208,0,74,0.3)',
    desc: 'Bold cranberry energy engineered for those who demand more. Packed with vibrant cranberry punch and precision-dosed caffeine — perfect for gaming sessions, late-night grinds, and high-energy moments.',
    specs: [
      { label: 'Volume', val: '250 ML' },
      { label: 'Caffeine', val: '75 MG' },
      { label: 'Flavour', val: 'Cranberry' },
      { label: 'Best For', val: 'Anytime' },
      { label: 'Single Can MRP', val: '₹ As per MRP on Pack' },
    ],
    color: '#e8006a',
    cardBg: 'linear-gradient(135deg,#900030,#d0004a)',
    image: productImages.cranberry,
    badge: 'Fresh Energy',
    badgeColor: '#e8006a',
  },
  {
    id: 'ginger',
    name: 'Ginger Ale',
    tag: 'Energy · Fresh Series',
    series: 'Fresh Edition',
    usecase: 'Fresh Boost',
    usecaseColor: '#4caf50',
    usecaseBg: 'rgba(76,175,80,0.15)',
    usecaseBorder: 'rgba(76,175,80,0.3)',
    desc: 'The bold bite of ginger meets refreshing lime in this one-of-a-kind formula. Natural ginger extracts provide a warming energy kick with a crisp finish — perfect for those who want something different.',
    specs: [
      { label: 'Volume', val: '250 ML' },
      { label: 'Flavour', val: 'Ginger Ale' },
      { label: 'Best For', val: 'Anytime' },
      { label: 'Single Can MRP', val: '₹ As per MRP on Pack' },
    ],
    color: '#4caf50',
    cardBg: 'linear-gradient(135deg,#1a5a20,#2e8a30)',
    image: productImages.ginger,
    badge: 'Fresh Boost',
    badgeColor: '#4caf50',
  },
  {
    id: 'tonic',
    name: 'Tonic Water',
    tag: 'Energy · Classic Series',
    series: 'Classic Edition',
    usecase: 'Light Energy',
    usecaseColor: '#f9a825',
    usecaseBg: 'rgba(249,168,37,0.15)',
    usecaseBorder: 'rgba(249,168,37,0.3)',
    desc: 'Crisp, clean, and perfectly balanced. BIOBRUST Tonic Water delivers a refreshing taste with a sophisticated quinine-kissed profile. For the refined warrior who appreciates subtlety.',
    specs: [
      { label: 'Volume', val: '250 ML' },
      { label: 'Flavour', val: 'Tonic' },
      { label: 'Best For', val: 'Anytime' },
      { label: 'Single Can MRP', val: '₹ As per MRP on Pack' },
    ],
    color: '#f9a825',
    cardBg: 'linear-gradient(135deg,#c07800,#f9c825)',
    image: productImages.tonic,
    badge: 'Light Energy',
    badgeColor: '#f9a825',
  },
  {
    id: 'zero',
    name: 'Zero Sugar',
    tag: 'Energy · Zero Series',
    series: 'Zero Edition',
    usecase: 'Zero Sugar',
    usecaseColor: '#b0bec5',
    usecaseBg: 'rgba(176,190,197,0.15)',
    usecaseBorder: 'rgba(176,190,197,0.3)',
    desc: 'All the performance, none of the sugar. BIOBRUST Zero Sugar is engineered for the health-conscious warrior who refuses to compromise on taste or energy. Zero sugar, full power — no excuses.',
    specs: [
      { label: 'Volume', val: '250 ML' },
      { label: 'Caffeine', val: '75 MG' },
      { label: 'Sugar', val: '0G' },
      { label: 'Category', val: 'Zero Sugar' },
      { label: 'Single Can MRP', val: '₹ As per MRP on Pack' },
    ],
    color: '#b0bec5',
    cardBg: 'linear-gradient(135deg,#263238,#455a64)',
    image: productImages.zeroSugar,
    badge: 'Zero Sugar',
    badgeColor: '#b0bec5',
  },
  {
    id: 'virjit',
    name: 'Virgin Mojito',
    tag: 'Energy · Mojito Series',
    series: 'Mojito Edition',
    usecase: 'Party Mode',
    usecaseColor: '#00c9a7',
    usecaseBg: 'rgba(0,201,167,0.15)',
    usecaseBorder: 'rgba(0,201,167,0.3)',
    desc: 'The ultimate party fuel. BIOBRUST Virgin Mojito blends a zesty lime-mint mojito burst with precision-dosed energy — engineered for those who dominate every social scene and never slow down.',
    specs: [
      { label: 'Volume', val: '250 ML' },
      { label: 'Caffeine', val: '75 MG' },
      { label: 'Flavour', val: 'Virgin Mojito' },
      { label: 'Best For', val: 'Party' },
      { label: 'Single Can MRP', val: '₹ As per MRP on Pack' },
    ],
    color: '#00c9a7',
    cardBg: 'linear-gradient(135deg,#004d3a,#00a085)',
    image: productImages.virjit,
    badge: 'Party Mode',
    badgeColor: '#00c9a7',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
