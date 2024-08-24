import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand} from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { s3Client } from "../s3Client";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
		const file = formData.get("file");

		if (!file || !(file instanceof File)) {
			return NextResponse.json( "File is required", { status: 400 } );
		} 

        const ext = file?.name.split(".").at(-1);
        const uid = uuidv4().replace(/-/g, "");
        const fileName = `${uid}${ext ? "." + ext : ""}`;
		
		const arrayBuffer = await file.arrayBuffer();
        const fileBuffer = Buffer.from(arrayBuffer);

		const contentType = file.type;
        await uploadFileToS3(fileBuffer, fileName, contentType);

		const imageUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${fileName}`;

		return NextResponse.json({ success: true, imageUrl});
    } catch (error) {
        console.log("S3_UPLOAD_POST: ", error);
        return NextResponse.json("Internal server error", { status: 500 });
    }
}

async function uploadFileToS3(file: Buffer, fileName: string, contentType: string) {
	const fileBuffer = file;

	const params = {
		Bucket: process.env.AWS_S3_BUCKET_NAME,
		Key: `${fileName}`,
		Body: fileBuffer,
		ContentType: contentType
	}

	const command = new PutObjectCommand(params);
	await s3Client.send(command);
	return fileName;
}
