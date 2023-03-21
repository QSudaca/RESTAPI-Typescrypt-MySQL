export interface Post {
  id?: { type: number; required: true };
  name: { type: string; required: true; min: 5 };
  description: { type: string; required: true };
  author: { type: string; required: true };
  created_at: Date;
}
