import {
  ProForm,
  ProFormMoney,
  ProFormRadio,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import { Button, message } from "antd";
import { useState } from "react";

const FundTransfer = () => {
  const [identiifer, setIdentifier] = useState("电子邮件");
  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };
  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success("提交成功");
      }}
      params={{}}
      submitter={{
        render: (props, dom) => {
          console.log(props, dom);
          // dom[1]["props"]["children"]=
          return (
            <div className="flex gap-4">
              <Button type="primary">确认转账</Button>
              {dom[0]}
            </div>
          );
        },
      }}
      // request={async () => {
      //   await waitTime(100);
      //   return {
      //     name: "",
      //     useMode: "chapter",
      //   };
      // }}
    >
      <ProFormRadio.Group
        style={{
          margin: 16,
        }}
        label="用户标识"
        radioType="button"
        fieldProps={{
          value: identiifer,
          onChange: (e) => setIdentifier(e.target.value),
        }}
        options={["电子邮件", "电话号码"]}
      />
      <ProFormText
        width="md"
        name="name"
        label="目标用户"
        tooltip="输入请与用户标识对应"
        placeholder={"请输入" + identiifer}
        required
      />
      <ProFormMoney
        label="转账金额"
        name="amount"
        width="md"
        min={0}
        trigger="onBlur"
        required
      />
      <ProFormTextArea width="md" name="note" label="转账备注" />
    </ProForm>
  );
};

export default FundTransfer;
