export type Project = {
  slug: string;
  title: string;
  category: string;
  year?: string;
  stack: string[];
  summary: string;
  context: string;
  problem: string;
  solution: string;
  features: string[];
  decisions?: string[];
  image: string;
  repository?: string;
  demo?: string;
};
