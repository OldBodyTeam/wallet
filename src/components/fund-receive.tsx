import {
  ProForm,
  ProFormInstance,
  ProFormList,
  ProFormMoney,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import { Button, message } from "antd";
import { useRef, useState } from "react";
import { RequestTransactionsService } from "@/client";
import dayjs from "dayjs";
const FundReceive = () => {
  const formRef = useRef<ProFormInstance>();
  const onSubmit = async () => {
    const data = formRef.current?.getFieldsValue();
    console.log(data);
    RequestTransactionsService.createRequestTransactionRequestPost({
      memo: data.note,
      deadline: dayjs().unix().toString(),
      receiver: data.users.map(v => {
        return {
          amount: Number(v.amount),
          user_id: Number(v.user_id)
        }
      })
    });
    message.success("提交成功");
  };
  const handleConfig = async () => {
    const data = formRef.current?.getFieldsValue();
    console.log(data);
    const totalAmount = data.totalAmount;
    const users = data.users?.map((v) => {
      return {
        ...v,
        amount: Number(totalAmount) / (data.users?.length ?? 1),
      };
    });
    formRef.current.setFieldsValue({ users });
  };
  return (
    <ProForm
      formRef={formRef}
      submitter={{
        render: (props, dom) => {
          console.log(props, dom);
          return (
            <div className="flex gap-4">
              <Button type="primary" onClick={onSubmit}>
                提交申请
              </Button>
              <Button onClick={handleConfig}>平均分配</Button>
              {dom[0]}
            </div>
          );
        },
      }}
    >
      <ProFormMoney
        label="分摊总金额"
        name="totalAmount"
        width="md"
        min={0}
        trigger="onBlur"
        placeholder="请输入您申请的总金额"
      />
      <ProFormTextArea width="md" name="note" label="申请备注" />
      <ProForm.Group>
        <ProFormList name="users" label="分摊用户" required>
          {() => {
            return (
              <div className="flex gap-2">
                <ProFormText
                  width="md"
                  name="user_id"
                  placeholder={"请输入用户ID"}
                  label="用户ID"
                />
                <ProFormText
                  width="md"
                  name="amount"
                  placeholder={"请输入分摊金额"}
                  label="分摊金额"
                />
              </div>
            );
          }}
        </ProFormList>
      </ProForm.Group>
    </ProForm>
  );
};

export default FundReceive;
