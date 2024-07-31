import { Input } from "@chakra-ui/react";
import LoginPhone from "./LoginPhone";

export default function RegisterForm() {
  return (
    <form
      className="py-[30px] px-5 min-[530px]:px-[50px] flex flex-col gap-5 items-center"
      action="#"
    >
      <Input
        type="email"
        size="lg"
        placeholder={"Email"}
        focusBorderColor="#6B59CC"
        rounded={"6px"}
        borderColor={"#DEDEE2"}
        required
      />
      <LoginPhone />
      <Input
        type="password"
        size="lg"
        placeholder={"Password"}
        focusBorderColor="#6B59CC"
        rounded={"6px"}
        borderColor={"#DEDEE2"}
        required
      />

      <button className="w-full bg-purple@ text-white text-center text-lg font-medium rounded-md py-[14px] hover:bg-second-purple@">
        Register
      </button>
    </form>
  );
}
