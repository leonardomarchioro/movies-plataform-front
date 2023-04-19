export type UserSignIn = {
    email: string;
    password: string;
}

export type UserRegister = {
    name: string;
    email: string;
    password: string;
}

export type UserProfile = {
    id?: number;
    name?: string;
    email?: string;
}