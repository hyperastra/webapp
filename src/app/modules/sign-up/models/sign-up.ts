export interface SignUpPayloadDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  token: string;
}
