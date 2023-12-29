import { FC, useState } from "react";
import { Button, Modal, Table } from "antd";
import { RequestTransaction } from "@/client";

const FundModel: FC<{ data: RequestTransaction }> = ({ data }) => {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: "交易状态",
      dataIndex: "request_status",
      key: "request_status",
      render: (status) => {
        switch (status) {
          case "confirmed":
            return "完成状态";
          case "pending":
          default:
            return "等待确认状态";
        }
      },
    },
    {
      title: "金额",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "用户id",
      dataIndex: "user",
      key: "amount",
      render: (_, record) => record.user.user_id,
    },
  ];

  return (
    <div>
      <Button onClick={handleOpenModal} type="primary">
        查看
      </Button>
      <Modal
        title="收款详情"
        visible={visible}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Table
          dataSource={data.user_receive_request}
          columns={columns}
          pagination={false}
        />
      </Modal>
    </div>
  );
};

export default FundModel;
