import SignInPage from "./signin/page";

export default async function Landing() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-2">
      <SignInPage />
    </div>
  );
}
