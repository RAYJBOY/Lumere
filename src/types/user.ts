enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export const User = {
  id: "string",
  email: "string",
  password: "string",
  role: Role,
  createdAt: "Date",
  updatedAt: "Date",
};
