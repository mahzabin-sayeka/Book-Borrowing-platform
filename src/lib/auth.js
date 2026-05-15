// import { betterAuth } from "better-auth";
// import { prismaAdapter } from "better-auth/adapters/prisma";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export const auth = betterAuth({
//     database: prismaAdapter(prisma, {
//         provider: "mongodb",
//     }),
//     emailAndPassword: {
//         enabled: true,
//     },
// });

import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "mongodb",
    }),
    emailAndPassword: {
        enabled: true,
    },
    
    baseURL: process.env.BETTER_AUTH_URL, 
    trustedOrigins: [
        "https://book-borrowing-platform-five.vercel.app"
    ],
    advanced: {
        trustProxy: true
    }
});