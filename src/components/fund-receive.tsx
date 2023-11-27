import {
  ProForm,
  ProFormInstance,
  ProFormList,
  ProFormMoney,
  ProFormRadio,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import { Button } from "antd";
import { useRef, useState } from "react";

const FundReceive = () => {
  const [identiifer, setIdentifier] = useState("电子邮件");
  const formRef = useRef<ProFormInstance>();
  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      formRef={formRef}
      params={{ id: "100" }}
      autoFocusFirstInput
      submitter={{
        render: (props, dom) => {
          console.log(props, dom);
          return (
            <div className="flex gap-4">
              <Button type="primary">提交申请</Button>
              <Button>平均分配</Button>
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
        fieldProps={{
          value: identiifer,
          onChange: (e) => setIdentifier(e.target.value),
        }}
        options={["电子邮件", "电话号码"]}
      />
      <ProFormMoney
        label="分摊总金额"
        name="totalamount"
        width="md"
        min={0}
        trigger="onBlur"
        placeholder="请输入您申请的总金额"
        rules={[{ required: true, message: "这是必填项" }]}
      />
      <ProFormTextArea width="md" name="note" label="申请备注" />
      <ProForm.Group>
        <ProFormList name="emails" label="分摊用户" required>
          {() => {
            return (
              <div className="flex gap-2">
                <ProFormText
                  width="md"
                  name="user"
                  placeholder={"请输入" + identiifer}
                  label={identiifer}
                />
                <ProFormText
                  width="md"
                  name="money"
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
