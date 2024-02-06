import {
  CredentialsSignInButton,
  GithubSignInButton,
  GoogleSignInButton,
} from "../auth-buttons/page";

export default function SignInPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-2">
      <div className="flex flex-col items-center mt-10 p-10 shadow-xl shadow-orange-800 ">
        <h1 className="mt-10 mb-4 text-teal-800  text-4xl font-semibold">
          Sign In
        </h1>
        <GoogleSignInButton />
        <GithubSignInButton />
        <span className="text-2xl font-semibold text-teal-700 text-center mt-8">
          Or
        </span>
        <CredentialsSignInButton />
      </div>
    </div>
  );
}
