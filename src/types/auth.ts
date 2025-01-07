export interface User {
  id: number;
  role: string;
  phoneNumber: string;
  fullName: string;
  codAddress: string;
  registrationDate: string;
}

export interface AccessToken {
  token: string;
  expiredAt: string;
}

export interface AuthResponse {
  user: User;
  accessToken: AccessToken;
}
