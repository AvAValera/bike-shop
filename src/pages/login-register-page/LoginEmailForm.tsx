import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function LoginEmailForm() {
  return (
    <>
      <Input
        type="email"
        size="lg"
        placeholder={"Email"}
        focusBorderColor="#6B59CC"
        rounded={"6px"}
        borderColor={"#DEDEE2"}
        required
      />
      <Input
        type="password"
        size="lg"
        placeholder={"Password"}
        focusBorderColor="#6B59CC"
        rounded={"6px"}
        borderColor={"#DEDEE2"}
        required
      />
      <div className="flex items-center w-full gap-[10px]">
        <input
          type="checkbox"
          id="remember-me-check"
          className="w-5 h-5 select-none rounded text-purple@ focus:ring-purple@ border-[1px] border-gray-200@"
        />
        <label
          htmlFor="remember-me-check"
          className="cursor-pointer select-none"
        >
          Remember me
        </label>
        <Link
          className="ml-auto text-base text-purple@ hover:font-medium"
          to={"#"}
        >
          forgot password
        </Link>
      </div>
    </>
  );
}
