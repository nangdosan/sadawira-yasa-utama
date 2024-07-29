"use client";

import Navbar from "@/components/Navbar";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        username: e.target.username.value,
        password: e.target.password.value,
        redirectOnError: "/login",
        redirect: false,
        callbackUrl: "/dashboard",
      });

      if (!res.error) {
        router.push("/dashboard");
      } else {
        console.log(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <title>Login</title>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <div className="w-3/4 md:w-1/4 bg-white flex flex-col items-center py-14 rounded-lg shadow-xl">
          <h1 className="text-2xl font-semibold mb-7">LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-gray-800 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className=" py-1 text-sm text-gray-700 px-3 rounded ring-1 focus:outline-none focus:ring-2 ring-vintage-dark "
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 mb-1 mt-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className=" py-1 text-sm text-gray-700 px-3 rounded ring-1 focus:outline-none focus:ring-2 ring-vintage-dark "
              />
            </div>
            <button
              type="submit"
              className="mt-10 bg-vintage-dark text-white px-3 py-1 rounded w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
