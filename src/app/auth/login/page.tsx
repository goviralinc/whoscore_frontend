"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  return (
    <div className="px-5 py-7 relative flex items-center justify-center h-svh text-sm">
      <div>
        <h1 className="text-primary text-3xl font-bold mb-10">Sign In</h1>

        <form>
          <div className="flex-1">
            <div className="mb-4">
              <label htmlFor="username">
                Username
                <input
                  type="text"
                  id="username"
                  className="w-full rounded-[20px] bg-inherit border border-[#535353] py-3 px-4"
                />
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="password">
                Password
                <input
                  type="text"
                  id="password"
                  className="w-full rounded-[20px] bg-inherit border border-[#535353] py-3 px-4"
                />
              </label>
            </div>
          </div>

          <div className="mb-4">
            <p>
              Don't have an account?
              <Link
                href="/auth/register"
                className="font-semibold text-primary ml-1"
              >
                register here
              </Link>
            </p>
          </div>

          <Link
            href="/"
            className="rounded-[20px] block text-center w-full py-3 border border-primary mt-10"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
