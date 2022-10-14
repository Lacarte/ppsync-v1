export interface AppUserAuth {
  jwt: string;
  user: User;
}
export interface User {
  id: number;
  username: string;
  email?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: Role;
  created_at?: string;
  updated_at?: string;
  firstName?: null;
  lastName?: null;
  logs?: null[] | null;
}
export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
}
