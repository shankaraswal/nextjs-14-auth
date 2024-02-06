import { authConfigProviders } from "./api/auth/[...nextauth]/authConfigProviders";
import { getServerSession } from "next-auth";
import SignInPage from "./signin/page";

export default async function Landing() {
  const sessionss = await getServerSession(authConfigProviders);
  console.log("======================");
  console.log("asdfasdfas", sessionss);

  return (
    <div className="w-full flex flex-col items-center justify-center py-2">
      {/* <SignInPage /> */}
    </div>
  );
}
