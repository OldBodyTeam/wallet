import { Table, Form, Input, DatePicker, Button } from "antd";
import { StatementsService } from "@/client";
import { useRequest, useMount } from "ahooks";
import dayjs from 'dayjs'
const { RangePicker } = DatePicker;
export type IRecordSearch = {
  ssn?: string | null;
  identifierValue?: string | null;
  startTime?: string | null;
  endTime?: string | null;
};
const RecordSearch = () => {
  const { run, data, loading } = useRequest(
    (params?: IRecordSearch) =>
      StatementsService.getStatementsWithFilterStatementsFilterGet(
        params?.ssn,
        params?.identifierValue,
        params?.startTime,
        params?.endTime
      ),
    {
      manual: true,
    }
  );
  useMount(() => {
    run();
  });
  const onFinish = (values) => {
    // TODO: Call backend API with the form values and update the dataSource state
    console.log(values);
    run({
      ...values,
      startTime: values?.dateRange?.[0]?.unix(),
      endTime: values?.dateRange?.[1]?.unix(),
    });
  };

  const columns = [
    {
      title: "交易额",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "完成时间",
      dataIndex: "completed_time",
      key: "completed_time",
      render: date => dayjs(date).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: "备注信息",
      dataIndex: "memo",
      key: "memo",
      render: (_, record) => record.send ? record.send.memo : record.request.memo
    },
    {
      title: "用户姓名",
      dataIndex: "name",
      key: "name",
      render: (_, record) => record?.to_user?.name ?? record?.from_user?.name ?? '--'
    },
    {
      title: "用户SSN",
      dataIndex: "ssn",
      key: "ssn",
      render: (_, record) => record?.to_user?.ssn ?? record?.from_user?.ssn ?? '--'
    },
    // {
    //   title: "用户标识",
    //   dataIndex: "identifier",
    //   key: "identifier",
    //   render: (_, record) => record.send ? record.send.identifier.identifier_value : record.request.identifier.identifier_value
    // },
  ];

  return (
    <div>
      <Form onFinish={onFinish} layout="inline">
        <Form.Item name="identifierValue" label="用户标识">
          <Input />
        </Form.Item>
        <Form.Item name="ssn" label="SSN">
          <Input />
        </Form.Item>
        <Form.Item name="dateRange" label="交易时间">
          <RangePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
      <div className="mt-6">
        <div className="text-black text-base font-medium mb-2">支出明细</div>
        <Table
          dataSource={data?.expense ?? []}
          columns={columns}
          loading={loading}
          pagination={null}
        />
      </div>
      <div className="mt-6">
        <div className="text-black text-base font-medium mb-2">收入明细</div>
        <Table
          dataSource={data?.income ?? []}
          columns={columns}
          loading={loading}
          pagination={null}
        />
      </div>
    </div>
  );
};

export default RecordSearch;


