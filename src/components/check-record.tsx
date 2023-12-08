import { useEffect } from "react";
import { useRequest } from "ahooks";
import { RequestTransactionsService } from "@/client";
import { Button, Table } from "antd";
import FundModel from "./fund-model";
import dayjs from "dayjs";

const columns = [
  {
    title: "交易ID",
    dataIndex: "request_id",
    ellipsis: true,
  },
  {
    title: "截止时间",
    key: "deadline",
    dataIndex: "deadline",
    render: (deadline) => dayjs(deadline).format("YYYY-MM-DD HH:mm:ss"),
  },
  {
    title: "备注",
    dataIndex: "memo",
    ellipsis: true,
  },
  {
    title: "操作",
    valueType: "option",
    key: "option",
    render: (_, record) => <FundModel data={record} />,
  },
];

const CheckRecord = () => {
  const { data, runAsync } = useRequest(
    RequestTransactionsService.getRequestTransactionsRequestGet,
    { manual: true }
  );

  const { data: userReceiveData, runAsync: getUserReceive } = useRequest(
    RequestTransactionsService.getUserReceiveRequestsRequestReceiveGet,
    { manual: true }
  );
  useEffect(() => {
    runAsync();
    getUserReceive();
  }, [getUserReceive, runAsync]);
  const handleAgree = async (params) => {
    await RequestTransactionsService.confirmUserReceiveRequestRequestRequestTransactionIdConfirmPost(
      params.request_id
    );
    await getUserReceive();
  };
  const columnsReceive = [
    {
      title: "交易ID",
      dataIndex: "request_id",
      ellipsis: true,
    },
    {
      title: "完成时间",
      key: "completed_time",
      dataIndex: "completed_time",
      render: (deadline) =>
        deadline ? dayjs(deadline).format("YYYY-MM-DD HH:mm:ss") : "--",
    },
    {
      title: "请求状态",
      dataIndex: "request_status",
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
      ellipsis: true,
    },
    {
      title: "操作",
      valueType: "option",
      key: "option",
      render: (_, record) => {
        return (
          <Button
            onClick={() => handleAgree(record)}
            type="primary"
            disabled={record.request_status === "confirmed"}
          >
            同意
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <div className="mb-4">
        <div className="text-base mb-2 font-medium">发送的收款请求</div>
        <Table
          columns={columns}
          dataSource={data ?? []}
          rowKey="request_id"
          // headerTitle=""
        />
      </div>
      <div>
        <div className="text-base mb-2 font-medium">来自他人的收款请求</div>
        <Table
          columns={columnsReceive}
          dataSource={userReceiveData ?? []}
          rowKey="request_id"
        />
      </div>
    </>
  );
};

export default CheckRecord;
