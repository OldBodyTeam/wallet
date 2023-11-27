import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import a from "@/assets/wallet.png";
import { DefaultService, OpenAPI } from "@/client";
interface loginProps {
  changeItemState: () => void;
}

const LoginForm: React.FC<loginProps> = (props) => {
  const { changeItemState } = props;
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const data = await DefaultService.loginTokenPost({username: values.username, password: values.password})
    console.log(data)
    window.localStorage.setItem("token", data.user_id + "");
    OpenAPI.HEADERS = async () => {
      const token = window.localStorage.getItem('token')
      return {
        'Authorization': `Bearer ${token}`
      }
    }
    // navigate('/home')
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Form
        name="login"
        className="w-[250px]"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item>
          <div className="flex gap-2 text-blue-600 font-bold text-xl justify-center items-center">
            <Avatar size={40} src={a} /> Wallet 网银平台
          </div>
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="手机号"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入您的密码！" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item className="w-full flex justify-center">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>{" "}
          或者 <a onClick={changeItemState}>现在注册!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
