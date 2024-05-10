import CustomNavbar from "@/components/navbar/page";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="flex justify-center ">
        <div className="border border-black m-7 w-72 p-4 ">
          <Input type="email" label="Email" /> <br />
          <Input type="password" label="Password" /> <br />
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Login
          </Button><br/>
          Don't have an account, <Link href="/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
