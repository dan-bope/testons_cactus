type Role = Array<{name: string}>;

export class User {
  id!: number;
  username!: string;
  password!: string;
  roles!: Role;
}
