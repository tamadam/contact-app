const deleteContactProfileImage = async (profileImageUrl: string) => {
    try {
        const response = await fetch("/api/s3-delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl: profileImageUrl }),
        });

        const result = await response.json();

        if (response.ok) {
        console.log("Image deleted successfully:", result);
        } else {
        console.error("Image deletion failed:", result);
        }
    } catch (error) {
        console.error("Error deleting image:", error);
    }
}

export default deleteContactProfileImage;