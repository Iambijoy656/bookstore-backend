export type IAuthor = {
  id: number;
  name: string;
  bio: string;
  birthdate: string;

};

export type IBook = {
  title: string;
  description: string;
  published_date: string;
  author_id: number;
}