import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        // Authentication logic
        if (
          username === process.env.NEXT_AUTH_USERNAME &&
          password === process.env.NEXT_AUTH_PASSWORD
        ) {
          return {
            id: "1",
            username: "admin",
            email: "superadmin@gmail.com",
          };
        } else {
          // Optionally throw an error with a message
          throw new Error("Invalid username or password");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }) {
      // Add user info to token
      if (account?.provider === "credentials" && user) {
        token.username = user.username;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Initialize session user object if not already present
      if (!session.user) {
        session.user = {};
      }
      // Add token info to session user
      session.user.username = token.username;
      session.user.email = token.email;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
