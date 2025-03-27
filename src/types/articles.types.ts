export interface IArticle {
  id: string;
  title: string;
  description: string;
  catecogria: string;
  date: string;
  time: string;
  photo: string;
  likes: number;
  content: {
    title: string;
    text: string;
  }[];
}
