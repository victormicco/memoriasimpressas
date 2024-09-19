export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Caneca Branca",
    description: "Caneca branca com estampa",
    image: "/caneca-branca.jpg",
    price: "39,90",
  },
  {
    id: 2,
    name: "Caneca Corporativa",
    description: "Caneca com estampa da corporativa",
    image: "/caneca-corporativa.jpg",
    price: "39,90",
  },
  {
    id: 3,
    name: "Caneca Comum",
    description: "Caneca com estampa comum",
    image: "/caneca-comum.jpg",
    price: "39,90",
  },
  {
    id: 4,
    name: "Caneca Amigas",
    description: "325 ml",
    image: "/caneca-amigas.png",
    price: "39,90",
  },
  {
    id: 5,
    name: "Dona Onça",
    description: "Metalizada",
    image: "/dona-onca.png",
    price: "55,00",
  },
  {
    id: 6,
    name: "Coleção Natal",
    description: "325 ml",
    image: "/colecao-natal.png",
    price: "39,90",
  },
  {
    id: 7,
    name: "Caneca Metal",
    description: "325 ml",
    image: "/caneca-metal.png",
    price: "59,90",
  },
  {
    id: 8,
    name: "Xícara com pires",
    description: "150 ml",
    image: "/xicara-com-pires.png",
    price: "54,90",
  },
  {
    id: 9,
    name: "Xícara torre",
    description: "200 ml",
    image: "/xicara-torre.png",
    price: "35,90",
  },
];
