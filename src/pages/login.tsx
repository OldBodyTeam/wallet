import { useState } from "react";
import LoginForm from "@/components/login-form";
import SignForm from "@/components/sign-form";
import { Button, Divider } from "antd";
import { useRequest } from "ahooks";
import { UsersService } from "@/client";
export type BestUser = {
  receive: string | null;
  send: string | null;
};

const Login = () => {
  const [item, setItem] = useState(0);
  const { data, runAsync } = useRequest(
    UsersService.readBestUsersUsersBestUsersGet,
    { manual: true }
  );
  const searchBestUser = async() =>{
    runAsync()
    console.log(data.received)
  }
  return (
    <div>
      <div className="h-0 float-left">
      <Divider />
        <Button type="primary" htmlType="submit" className="login-form-button left-5" onClick={searchBestUser}>
          查询最佳用户
        </Button>
        <Divider />
        <div className="flex text-sm space-x-4">
        <div>最佳收款用户ID：<text className="text-blue-500">{data?data.received.user_id: null}</text></div>
        <div>收款数：<text className="text-blue-500">{data?data.received.total_amount_received:null}</text></div>
        </div>
        <Divider />
        <div className="flex text-sm space-x-4 left-5">
        <div>最佳汇款用户ID：<text className="text-blue-500">{data?data.sent.user_id:null}</text></div>
        <div>汇款数：<text className="text-blue-500">{data?data.sent.total_amount_sent:null}</text></div>
        </div>
        <Divider />
      </div>
    <div className="flex justify-center items-center w-full h-screen">
      {item === 0 ? (
        <LoginForm changeItemState={() => setItem(1)}></LoginForm>
      ) : (
        <SignForm changeItemState={() => setItem(0)}></SignForm>
      )}
    </div>
    </div>
  );
};

export { Login };
