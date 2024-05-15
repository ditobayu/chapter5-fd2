interface Person {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export { Person, Book, Product };
