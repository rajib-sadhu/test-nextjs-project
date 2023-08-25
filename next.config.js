/** @type {import('next').NextConfig} */
const nextConfig = {

    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"]
    },

    images: {
        domains: ['occ-0-3933-116.1.nflxso.net', 'climate.onep.go.th', 'i.gifer.com']
    },
    reactStrictMode: true,
    serverRuntimeConfig: {
        connectionString: "mongodb://localhost/next-js-registration-login-example",
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'http://localhost:3000/api' // production api
    }
}

module.exports = nextConfig
