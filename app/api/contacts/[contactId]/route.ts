
import { contactFormSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { contactId: string } }
) {
    try {
        const contactId = parseInt(params.contactId, 10);
        if (isNaN(contactId)) {
          throw new Error('Invalid contactId: must be a number');
        }

        // find contact
        const contact = await prisma.contact.findUnique({
            where: {
                id: contactId,
            },
        });

        return NextResponse.json(contact, { status: 200 });
    } catch (error) {
        console.log("CONTACT_GET: ", error);
        return NextResponse.json("Internal server error", { status: 500 });
    }
}

export async function PATCH(
    request: NextRequest,
    { params } : { params: { contactId: string } }
) {
    try {
        // validate request
        const body = await request.json();
        const validation = contactFormSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(validation.error.format(), { status: 400 })
        }

        const contactId = parseInt(params.contactId, 10);
        if (isNaN(contactId)) {
          throw new Error('Invalid contactId: must be a number');
        }


        // find contact
        const contact = await prisma.contact.findUnique({
            where: {
                id: contactId,
            },
        });

        if (!contact) {
            return NextResponse.json("Contact does not exist", { status: 404 });
        }

        // update contact
        const updatedContact = await prisma.contact.update({
            where: {
                id: contact.id,
            },
            data: {
                name: body.name,
                phone: body.phone,
                email: body.email,
                imageUrl: body.imageUrl,
            },
        });

        return NextResponse.json(updatedContact, { status: 200 });
    } catch (error) {
        console.log("CONTACT_PATCH: ", error);
        return NextResponse.json("Internal server error", { status: 500 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { contactId: string }}
) {
    try {
        const contactId = parseInt(params.contactId, 10);
        if (isNaN(contactId)) {
          throw new Error('Invalid contactId: must be a number');
        }

        // find contact
        const contact = await prisma.contact.findUnique({
            where: {
                id: contactId,
            },
        });

        if (!contact) {
            return NextResponse.json("Contact does not exist", { status: 404 });
        }

        // delete contact
        await prisma.contact.delete({
            where: {
                id: contact.id,
            },
        });

        return NextResponse.json({}, { status: 200 });
    } catch (error) {
        console.log("CONTACT_DELETE: ", error);
        return NextResponse.json("Internal server error", { status: 500 });
    }
}
