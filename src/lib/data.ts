export interface NavLinks {
  id: string;
  link: string;
  path: string;
}

export const navLinks: NavLinks[] = [
  {
    id: "01",
    link: "/",
    path: "Home",
  },
  {
    id: "02",
    link: "/",
    path: "why us",
  },
  {
    id: "03",
    link: "/about",
    path: "about",
  },
  {
    id: "04",
    link: "/Products",
    path: "products",
  },
  {
    id: "05",
    link: "/Blog",
    path: "Blog",
  },
  {
    id: "06",
    link: "/contact",
    path: "Contacts",
  },
];

// data/products.ts
export interface CropsProduct {
  id: number;
  imageSrc: string;
  category: string;
  title: string;
  price: number;
}

const cropsList: CropsProduct[] = [
  {
    id: 1,
    imageSrc: require('../../public/maize.jpg'),
    category: "CATEGORY",
    title: "The Catalyzer",
    price: 16.0,
  },
  {
    id: 2,
    imageSrc: require('../../public/maize.jpg'),
    category: "CATEGORY",
    title: "Shooting Stars",
    price: 21.15,
  },
  {
    id: 3,
    imageSrc: require('../../public/maize.jpg'),
    category: "CATEGORY",
    title: "Neptune",
    price: 12.0,
  },
];

export default cropsList;
