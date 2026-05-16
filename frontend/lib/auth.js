// import { betterAuth } from "better-auth";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import { MongoClient } from "mongodb";

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db();

// export const auth = betterAuth({
//   database: mongodbAdapter(db),
//   trustedOrigins: ["http://localhost:3000"],
//   secret: process.env.BETTER_AUTH_SECRET,
//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     },
//   },
//   emailAndPassword: {
//     enabled: true,
//   },
//   pages: {
//     signIn: "/login",
//     signUp: "/register",
//     error: "/login",
//   },
// });

export const auth = null;