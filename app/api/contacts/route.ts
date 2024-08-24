
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/app/validationSchemas";

export async function POST(request: NextRequest) {
    try {
        // validate request
        const body = await request.json();
        const validation = contactFormSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(validation.error.format(), { status: 400 });
        }

        // create new contact
        const newContact = await prisma.contact.create({
            data: {
                name: body.name,
                phone: body.phone,
                email: body.email,
                imageUrl: body.imageUrl,
            },
        });

        return NextResponse.json(newContact, { status: 201 });
    } catch (error) {
        console.log("CONTACTS_POST: ", error);
        return NextResponse.json("Internal server error", { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        const contacts = await prisma.contact.findMany({
            orderBy: {
                createdAt: "desc"
            },
        });
    
        return NextResponse.json(contacts, { status: 200 });
    } catch (error) {
        console.log("CONTACTS_GET: ", error);
        return NextResponse.json("Internal server error", { status: 500 });
    }
}
