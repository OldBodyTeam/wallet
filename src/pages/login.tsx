import { useState } from "react";
import LoginForm from "@/components/login-form";
import SignForm from "@/components/sign-form";

const Login = () => {
  const [item, setItem] = useState(0);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      {item === 0 ? (
        <LoginForm changeItemState={() => setItem(1)}></LoginForm>
      ) : (
        <SignForm changeItemState={() => setItem(0)}></SignForm>
      )}
    </div>
  );
};

export { Login };
