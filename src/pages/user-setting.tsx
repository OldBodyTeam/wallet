import {
  ProForm,
  ProFormInstance,
  ProFormList,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import { useRef } from "react";
import { Button } from "antd";

const UserSetting = () => {
  const formRef = useRef<ProFormInstance>();
  return (
    <div className="min-h-full grid gap-4">
      <div>
        <Button type="primary">退出登录</Button>
      </div>
      <ProForm<{
        name: string;
        company?: string;
        useMode?: string;
      }>
        formRef={formRef}
        params={{ id: "100" }}
        formKey="base-form-use-demo"
        // request={async () => {
        //   await waitTime(1500);
        //   return {
        //     name: "蚂蚁设计有限公司",
        //     useMode: "chapter",
        //   };
        // }}
        autoFocusFirstInput
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
            name="number"
            disabled
            label="注册手机号"
            initialValue="12345678"
          />
          <ProFormText
            width="md"
            name="number"
            disabled
            label="注册邮箱"
            initialValue="xx@qq.com"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormList name="emails" label="全部邮箱">
            {() => {
              return (
                <div className="flex gap-2">
                  <ProFormText
                    width="md"
                    name="email"
                    placeholder="请输入您的邮箱"
                  />
                  <Button type="primary">验证</Button>
                </div>
              );
            }}
          </ProFormList>
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect.SearchSelect
            width="md"
            options={[
              {
                value: "time",
                label: "1111",
                type: "time",
              },
            ]}
            name="unusedMode"
            label="主要资金来源"
            rules={[{ required: true, message: "这是必填项" }]}
          />
          <ProFormList name="banks" label="全部银行账户">
            {() => {
              return (
                <div className="flex gap-2">
                  <ProFormText
                    width="md"
                    name="bank"
                    placeholder="请输入您的银行卡号"
                  />
                  <Button type="primary">验证</Button>
                </div>
              );
            }}
          </ProFormList>
        </ProForm.Group>
      </ProForm>
    </div>
  );
};

export default UserSetting;
