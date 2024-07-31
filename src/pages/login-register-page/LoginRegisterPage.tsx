import { useState } from "react";
import PageLayout from "../../layout/page-layout/PageLayout";
import LoginEmail from "./LoginEmail";
import RegisterForm from "./RegisterForm";

export default function LoginRegisterPage() {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  return (
    <PageLayout>
      <div className="flex justify-center mt-10 mb-[50px]">
        <div className="w-full mx-[15px] bg-white@ rounded-xl flex-col items-center max-w-[500px] shadow-[0_4px_20px_0px_rgba(0,0,0,0.07)]">
          <h2 className="text-black@ text-2xl font-medium text-center py-5 border-b border-gray-100@">
            {isLoginForm ? "Sign in": "Register"}
          </h2>
          {isLoginForm? <LoginEmail />: <RegisterForm />}
          <div className=" border-t border-gray-200@ py-5">
            <span className="w-full inline-block text-center">
              {isLoginForm
                ? "don't have an account?"
                : "do you have an account?"}{" "}
              <button onClick={() => setIsLoginForm(!isLoginForm)} className="text-purple@ hover:font-medium">
                {isLoginForm ?  "register": "sign in"}
              </button>
            </span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
