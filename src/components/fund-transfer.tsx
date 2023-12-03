import {
  ProForm,
  ProFormMoney,
  ProFormRadio,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import { Button, message } from "antd";
import { useState } from "react";
import { SendTransactionsService } from "@/client";
const options = [
  { value: 1, label: "电子邮件" },
  { value: 0, label: "电话号码" },
];
const FundTransfer = () => {
  const [identiifer, setIdentifier] = useState(options[0].label);
  const [form] = ProForm.useForm();
  const onSubmit = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();
    console.log(values);
    await SendTransactionsService.createSendTransactionSendPost({
      ...values,
      receiver_identifier: {
        type: values.identiifer,
        identifier_value: values.name
      },
    });
    message.success("提交成功");
  };
  return (
    <ProForm
      form={form}
      submitter={{
        render: (props, dom) => {
          return (
            <div className="flex gap-4">
              <Button type="primary" onClick={onSubmit}>
                确认转账
              </Button>
              {dom[0]}
            </div>
          );
        },
      }}
    >
      <ProFormRadio.Group
        style={{
          margin: 16,
        }}
        label="用户标识"
        radioType="button"
        name="identiifer"
        fieldProps={{
          value: options.find((v) => v.label === identiifer).value,
          onChange: (e) =>
            setIdentifier(
              options.find((v) => v.value === e.target.value).label
            ),
        }}
        options={options}
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
      <ProFormTextArea width="md" name="memo" label="转账备注" />
    </ProForm>
  );
};

export default FundTransfer;
