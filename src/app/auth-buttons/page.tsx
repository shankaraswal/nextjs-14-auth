"use client";

import { signIn } from "next-auth/react";

export default function AuthButtonsPage() {
  const handleGoogleSignIn = () => signIn("google");
  const handleGithubSignIn = () => signIn("github");
  const handleCredentialsSignIn = () => signIn();

  return (
    <div className="max-w-md mx-auto p-6">
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
      >
        <span className="ml-4">Continue with Google</span>
      </button>
      <button
        onClick={handleGithubSignIn}
        className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
      >
        <span className="ml-4">Continue with Github</span>
      </button>
      <button
        onClick={handleCredentialsSignIn}
        className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
      >
        <span className="ml-4">Continue with Email</span>
      </button>
    </div>
  );
}
