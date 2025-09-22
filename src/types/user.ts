enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export type User = {
    id: string;
    role: Role;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}