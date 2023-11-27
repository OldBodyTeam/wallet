import { ProCard } from "@ant-design/pro-components";
import { List } from "antd";
import RcResizeObserver from "rc-resize-observer";
import { useState } from "react";

interface DataType {
  id: string;
  user: string;
  time: string;
  money: number;
  action: string;
}

const MonthCard = () => {
  const [responsive, setResponsive] = useState(false);
  const [data, setData] = useState<DataType[]>([
    {
      id: "1",
      user: "user1",
      time: "2019年6月",
      money: 123,
      action: "transfer",
    },
    {
      id: "1",
      user: "user1",
      time: "2019年6月",
      money: 123,
      action: "transfer",
    },
    {
      id: "1",
      user: "user1",
      time: "2019年6月",
      money: 123,
      action: "transfer",
    },
    {
      id: "1",
      user: "user1",
      time: "2019年6月",
      money: 123,
      action: "transfer",
    },
    {
      id: "1",
      user: "user1",
      time: "2019年6月",
      money: 123,
      action: "transfer",
    },
    {
      id: "1",
      user: "user1",
      time: "2019年6月",
      money: 123,
      action: "transfer",
    },
    {
      id: "1",
      user: "user1",
      time: "2019年6月",
      money: 123,
      action: "transfer",
    },
  ]);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard
        title="交易月结单"
        extra="2019年9月28日"
        bordered
        headerBordered
        split={responsive ? "horizontal" : "vertical"}
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split={responsive ? "horizontal" : "vertical"}>
              <ProCard title="本月累计交易数">234</ProCard>
              <ProCard title="本月交易总金额">123</ProCard>
              <ProCard title="转入总金额">12/56</ProCard>
              <ProCard title="转出总金额">134 个</ProCard>
              <ProCard title="账户余额">123</ProCard>
            </ProCard>
          </ProCard>
          <ProCard title="交易详情">
            <div
              id="scrollableDiv"
              style={{
                height: 400,
                overflow: "auto",
                padding: "0 16px",
                border: "1px solid rgba(140, 140, 140, 0.35)",
              }}
            >
              <List
                dataSource={data}
                renderItem={(item) => (
                  <List.Item key={item.id}>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.user}</a>}
                      description={item.time}
                    />
                    <div>
                      {item.action === "transfer" ? "-" : "+"}
                      {item.money}
                    </div>
                  </List.Item>
                )}
              />
            </div>
          </ProCard>
        </ProCard>
      </ProCard>
    </RcResizeObserver>
  );
};

export default MonthCard;
