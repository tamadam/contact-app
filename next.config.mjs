/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "contact-app-web-storage.s3.eu-north-1.amazonaws.com",
                pathname: "**"
            }
        ]
    }
};

export default nextConfig;
