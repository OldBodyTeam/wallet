import { FC, useState } from "react";
import { Table, Button, Modal, Form, Input, Space } from "antd";
import { IndentifiersService } from "@/client";

const TableComponent: FC<{ data: unknown[]; run: () => void }> = ({
  data,
  run,
}) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const handleValidate = async (data) => {
    IndentifiersService.verifyIdentifierIndentifiersIdentifierValueVerifyPost(
      data.identifier_value
    );
    await run();
    console.log('validate')
  };
  const unbind = async (data) => {
    await IndentifiersService.unbindIdentifierIndentifiersIdentifierValueUnbindPost(
      data.identifier_value
    );
    await run();
  };
  const columns = [
    {
      title: "邮箱",
      dataIndex: "identifier_value",
      key: "identifier_value",
    },
    {
      title: "状态",
      dataIndex: "verification_status",
      key: "verification_status",
      render: (text: string) => {
        if (text === "pending") {
          return "未验证";
        }
        if (text === "verified") {
          return "已验证";
        }
        return "未验证";
      },
    },

    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            onClick={() => handleValidate(record)}
            disabled={record.verification_status === "verified"}
          >
            验证
          </Button>
          <Button type="primary" onClick={() => unbind(record)}>
            解除绑定
          </Button>
        </Space>
      ),
    },
  ];

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(async (values) => {
      setVisible(false);
      await IndentifiersService.bindIdentifierIndentifiersPost({
        type: 1,
        identifier_value: values.email,
      });
      await run();
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="flex justify-end items-center">
        <Button type="primary" onClick={showModal}>
          创建邮箱
        </Button>
      </div>

      <Table dataSource={data} columns={columns} pagination={false} />
      <Modal
        title="创建邮箱"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item
            label="邮箱"
            name="email"
            required
            rules={[
              {
                type: "email",
                message: "请输入有效的邮箱地址",
              },
            ]}
          >
            <Input placeholder="创建邮箱" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TableComponent;
