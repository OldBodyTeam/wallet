import { Avatar, Button, Form, Input, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import a from "@/assets/wallet.png";

interface registerProps {
  changeItemState: () => void;
}

const SignForm: React.FC<registerProps> = (props) => {
  const { changeItemState } = props;
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values: number) => {
    console.log("Received values of form: ", values);
  };
  const handleRegister = () => {
    navigate("/home");
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        className="w-[300px]"
        scrollToFirstError
      >
        <Form.Item>
          <div className="flex gap-2 text-blue-600 font-bold text-xl justify-center items-center">
            <Avatar size={40} src={a} /> Wallet 网银平台
          </div>
        </Form.Item>
        <Form.Item name="name" label="姓名">
          <Input />
        </Form.Item>
        <Form.Item
          name="ssn"
          label="SSN"
          rules={[{ required: true, message: "请输入正确的SSN！" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="phone"
          label="电话号码"
          rules={[{ required: true, message: "请输入您的电话号码！" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            {
              type: "email",
              message: "该输入不是合法邮箱!",
            },
            {
              required: true,
              message: "请输入您的邮箱!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item className="w-full flex justify-center">
          <Button type="primary" htmlType="submit" onClick={handleRegister}>
            注册
          </Button>{" "}
          或者 <a onClick={() => changeItemState()}>现在登录!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignForm;
