export interface User {
  uuid: string;
  username: string;
  displayName?: string;
  avatar?: string;
}

export interface UserLogin {
  username: string;
  password: string;
}
