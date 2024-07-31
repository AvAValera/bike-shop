import { useState } from "react";
import LoginEmailForm from "./LoginEmailForm";
import LoginPhone from "./LoginPhone";

export default function LoginEmail() {
  const [loginMode, setLoginMode] = useState<"email" | "phone">("email");
  
  const activeClass = "relative text-purple@ after:content-[''] after:block after:w-full  after:border-b-[3px] after:border-purple@ after:absolute after:-bottom-[18px]";
  return (
    <div>
      <div className="pt-[30px] mx-5 min-[530px]:mx-[50px] pb-[18px] border-b border-gray-100@ flex justify-around gap-[5px] ">
        <button onClick={() => setLoginMode("email")} className={`text-lg ${loginMode === "email" && activeClass}`}>
          Email
        </button>
        <button onClick={() => setLoginMode("phone")} className={`text-lg ${loginMode === "phone" && activeClass}`}>Phone</button>
      </div>
      <form
        className="py-[30px] px-5 min-[530px]:px-[50px] flex flex-col gap-5 items-center"
        action="#"
      >
        {loginMode === "email" ? <LoginEmailForm />: <LoginPhone />}
        <button className="w-full bg-purple@ text-white text-center text-lg font-medium rounded-md py-[14px] hover:bg-second-purple@">
          Enter
        </button>
      </form>
    </div>
  );
}
