import { FC, useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Space } from "antd";
import { AccountsService } from "@/client";
import { useRequest } from "ahooks";
const FundComponent = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const handleValidate = async (data) => {
    IndentifiersService.verifyIdentifierIndentifiersIdentifierValueVerifyPost(
      data.identifier_value
    );
  };
  const { data, loading, runAsync } = useRequest(
    AccountsService.readAccountsAccountsGet,
    { manual: true }
  );
  const unbind = async (data) => {
    await AccountsService.unbindAccountAccountsAccountIdUnbindPost(
      data.account_id
    );
    await runAsync();
  };
  const bind = async (data) => {

  }
  const columns = [
    {
      title: "账户",
      dataIndex: "account_number",
      key: "account_number",
    },
    {
        title: "账户ID",
        dataIndex: "account_id",
        key: "account_id",
      },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => unbind(record)}>
            解除绑定
          </Button>
          <Button type="primary" onClick={() => bind(record)} disabled={record.account_id === record.user_link_account}>
            绑定主账户
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    runAsync();
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(async (values) => {
      setVisible(false);
      await AccountsService.bindAccountAccountsPost({
        bank_id: values.id,
        account_number: values.email,
        is_joint_account: true,
      });
      await runAsync();
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="flex justify-end items-center">
        <Button type="primary" onClick={showModal}>
          添加银行账户
        </Button>
      </div>

      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        loading={loading}
      />
      <Modal
        title="添加银行账户"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item label="银行账户" name="email" required>
            <Input placeholder="添加银行账户" />
          </Form.Item>
          <Form.Item label="银行id" name="id" required>
            <Input placeholder="添加银行id" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default FundComponent;
