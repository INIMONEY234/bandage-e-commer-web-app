export interface Product {
  id: number;
  title: string;
  department: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
}

export interface Post {
  id: number;
  tag: string;
  title: string;
  description: string;
  date: string;
  commentsCount: number;
  image: string;
}