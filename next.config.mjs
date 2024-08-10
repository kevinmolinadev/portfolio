/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [{
            hostname: "avatars.githubusercontent.com"
        }]
    }
};

export default nextConfig;
