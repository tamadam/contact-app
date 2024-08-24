import { NextRequest, NextResponse } from "next/server";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    region: process.env.AWS_S3_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_S3_SECRET_KEY!,
    }
});

export async function POST(request: NextRequest) {
    try {
        const { imageUrl } = await request.json();

        if (!imageUrl) {
            return NextResponse.json("Image URL is required", { status: 400 });
        }

        const key = new URL(imageUrl).pathname.substring(1);

        const params = {
            Bucket: process.env.AWS_S3_BUCKET_NAME!,
            Key: key,
        };

        const command = new DeleteObjectCommand(params);
        await s3Client.send(command);

        return NextResponse.json({ success: true, message: "Image deleted successfully" });
    } catch (error) {
        console.error("S3_DELETE_POST: ", error);
        return NextResponse.json("Internal server error", { status: 500 });
    }
}