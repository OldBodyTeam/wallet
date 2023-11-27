import { ActionType, ProColumns, ProTable } from "@ant-design/pro-components";
import { Space, Tag } from "antd";
import { useRef } from "react";
type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: "index",
    valueType: "indexBorder",
    width: 48,
  },
  {
    title: "交易ID",
    dataIndex: "title",
    copyable: true,
    ellipsis: true,
    tip: "包含出账和入账",
  },
  {
    disable: true,
    title: "类型",
    dataIndex: "type",
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: "select",
    valueEnum: {
      all: { text: "全部" },
      open: {
        text: "接收申请",
        status: "Transfer",
      },
      closed: {
        text: "发送申请",
        status: "Receive",
      },
    },
  },
  {
    disable: true,
    title: "标签",
    dataIndex: "labels",
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: "select",
    valueEnum: {
      all: { text: "全部" },
      agree: {
        text: "待同意",
        status: "agree",
      },
      receive: {
        text: "待接收",
        status: "receive",
      },
      register: {
        text: "待注册",
        status: "register",
      },
      finished: {
        text: "已完成",
        status: "finished",
      },
    },
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: "申请时间",
    key: "time",
    dataIndex: "created_at",
    valueType: "date",
    sorter: true,
  },
  {
    title: "操作",
    valueType: "option",
    key: "option",
    render: () => [
      <a
        onClick={() => {
          console.log("同意分摊");
        }}
      >
        同意分摊
      </a>,
      <div>
        <a
          onClick={() => {
            console.log("同意分摊");
          }}
        >
          查看
        </a>
        {/* <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}
      </div>,
    ],
  },
];
const CheckRecord = () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      // request={async (params, sort, filter) => {
      //   console.log(sort, filter);
      //   await waitTime(2000);
      //   return request<{
      //     data: GithubIssueItem[];
      //   }>("https://proapi.azurewebsites.net/github/issues", {
      //     params,
      //   });
      // }}
      editable={{
        type: "multiple",
      }}
      columnsState={{
        persistenceKey: "pro-table-singe-demos",
        persistenceType: "localStorage",
        onChange(value) {
          console.log("value: ", value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: "auto",
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === "get") {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="分摊申请表"
    />
  );
};

export default CheckRecord;
