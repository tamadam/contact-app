export type RawContactType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    imageUrl: string | null;
    createdAt: string;
    updatedAt: string;
}

export type ContactType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}