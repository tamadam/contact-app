export type RawContactType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
}

export type ContactType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
}