import { FC, useState } from "react";
import { Table, Button, Modal, Form, Input, Space } from "antd";
import { IndentifiersService } from "@/client";

const TableComponent: FC<{ data: unknown[]; run: () => void }> = ({
  data,
  run,
}) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };
  const handleValidate = async (data) => {
    IndentifiersService.verifyIdentifierIndentifiersIdentifierValueVerifyPost(
      data.identifier_value
    );
    await run();
  };

  const unbind = async (data) => {
    await IndentifiersService.unbindIdentifierIndentifiersIdentifierValueUnbindPost(
      data.identifier_value
    );
    await run();
  };
  const columns = [
    {
      title: "手机号",
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
        return "未知状态";
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

  const handleOk = () => {
    form.validateFields().then(async (values) => {
      await IndentifiersService.bindIdentifierIndentifiersPost({
        type: 0,
        identifier_value: values.phone,
      });
      // 在这里进行表单验证和提交数据的操作
      setVisible(false);
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
          创建手机号
        </Button>
      </div>

      <Table dataSource={data} columns={columns} pagination={false} />
      <Modal
        title="创建手机号"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item
            label="手机号"
            name="phone"
            required
            rules={[
              {
                pattern: /^1[3456789]\d{9}$/,
                message: "请输入正确的手机号",
              },
            ]}
          >
            <Input placeholder="绑定手机号" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TableComponent;
