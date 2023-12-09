import { ActionType, ProColumns, ProTable } from "@ant-design/pro-components";
import { useRef } from "react";

const RecordSearch = () => {
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
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<GithubIssueItem>[] = [
    {
      dataIndex: "index",
      valueType: "indexBorder",
      width: 48,
    },
    {
      title: "目标用户",
      dataIndex: "user",
      copyable: true,
      ellipsis: true,
    },
    {
      disable: true,
      title: "交易类型",
      dataIndex: "type",
      filters: true,
      onFilter: true,
      ellipsis: true,
      valueType: "select",
      valueEnum: {
        all: { text: "全部" },
        open: {
          text: "转入",
          status: "Receive",
        },
        closed: {
          text: "转出",
          status: "Transfer",
        },
      },
    },
    {
      title: "交易时间",
      key: "time",
      dataIndex: "created_at",
      valueType: "date",
      sorter: true,
    },
    {
      title: "总金额",
      dataIndex: "money",
      copyable: true,
      ellipsis: true,
    },
    {
      title: "操作",
      valueType: "option",
      key: "option",
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          删除
        </a>,
        <a
          href={record.url}
          target="_blank"
          rel="noopener noreferrer"
          key="view"
        >
          查看
        </a>,
        <a
          href={record.url}
          target="_blank"
          rel="noopener noreferrer"
          key="view"
        >
          取消汇款
        </a>,
      ],
    },
  ];
  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      //   request={async (params, sort, filter) => {
      //     console.log(sort, filter);
      //     await waitTime(2000);
      //     return request<{
      //       data: GithubIssueItem[];
      //     }>('https://proapi.azurewebsites.net/github/issues', {
      //       params,
      //     });
      //   }}
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
      headerTitle="交易记录"
    />
  );
};

export default RecordSearch;
