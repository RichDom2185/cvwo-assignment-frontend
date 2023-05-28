export type UserData = {
  id: string;
  name: string;
  email: string;
};

export type UserApiData = {
  user: {
    id: string;
    email: string;
    name: string;
    // password_digest: string;
    // created_at: string;
    // updated_at: string;
  };
  token: string;
};
