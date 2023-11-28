import {
  ProForm,
  ProFormGroup,
  ProFormInstance,
  ProFormList,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import { useEffect, useRef } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { UsersService, IndentifiersService } from "@/client";

const UserSetting = () => {
  const formRef = useRef<ProFormInstance>();
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };
  useEffect(() => {
    const init = async () => {
      const userInfo = await UsersService.readUsersMeUsersGet();
      const indentifiersInfo =
        await IndentifiersService.getIdentifiersIndentifiersGet();
      console.log(userInfo, indentifiersInfo);
      formRef.current?.setFieldsValue({
        id: userInfo.user_id,
        name: userInfo.name,
        ssn: userInfo.ssn,
        phone: indentifiersInfo[0].identifier_value,
        email: indentifiersInfo[1].identifier_value,
      });
    };
    init();
  });
  const handleSubmit = () => {
    console.log("handleSubmit");
  };
  const emailRef = useRef<any>();
  const handleVerify = (index) => {
    const row = emailRef.current?.get(index.key as number);
    IndentifiersService.verifyIdentifierIndentifiersIdentifierValueVerifyPost(row.email)
  }
  return (
    <div className="min-h-full grid gap-4">
      <div>
        <Button type="primary" onClick={handleLogout}>
          退出登录
        </Button>
      </div>
      <ProForm
        formRef={formRef}
        formKey="base-form-use-demo"
        autoFocusFirstInput
        onFinish={handleSubmit}
      >
        <ProForm.Group>
          <ProFormText width="md" name="id" label="用户ID" readonly />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="name"
            label="姓名"
            placeholder="请输入您的真实姓名"
            rules={[{ required: true, message: "这是必填项" }]}
          />
          <ProFormText
            width="md"
            name="ssn"
            label="SSN号"
            placeholder="请输入您的SSN号"
            tooltip="社会保障号"
            rules={[{ required: true, message: "这是必填项" }]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="phone"
            disabled
            label="注册手机号"
            initialValue="12345678"
          />
          <ProFormText
            width="md"
            name="email"
            disabled
            label="注册邮箱"
            initialValue="xx@qq.com"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormList name="emails" label="全部邮箱" actionRef={emailRef}>
            {(f) => {
              return (
                <div className="flex gap-2">
                  <ProFormText
                    width="md"
                    name="email"
                    placeholder="请输入您的邮箱"
                  />
                  <Button type="primary" onClick={() => handleVerify(f)}>验证</Button>
                </div>
              );
            }}
          </ProFormList>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            dependencies={["banks"]}
            width="md"
            name="unusedMode"
            label="主要资金来源"
            rules={[{ required: true, message: "这是必填项" }]}
            request={async ({ banks }) => {
              return banks.map((v) => {
                return { label: v.bank, value: v.bank };
              });
            }}
          />
          <ProFormList name="banks" label="全部银行账户">
            <ProFormGroup key="group">
              <ProFormText
                width="md"
                name="bank"
                placeholder="请输入您的银行卡号"
              />
              <Button type="primary">验证</Button>
            </ProFormGroup>
          </ProFormList>
        </ProForm.Group>
      </ProForm>
    </div>
  );
};

export default UserSetting;
