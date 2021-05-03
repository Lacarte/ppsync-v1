export class User {
  constructor(
    // sub = name
    private sub: string,
    private card: number,
    private token: string,
    private role: string,
    private permissions: string[],
    private lastLogin: string
  ) {}

  get Sub() {
    return this.sub;
  }

  get Card() {
    return this.card;
  }

  get Token() {
    return this.token;
  }

  get Role() {
    return this.role;
  }

  get Permissions() {
    return this.permissions;
  }

  get LastLogin() {
    return this.lastLogin;
  }
}
