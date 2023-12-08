import { ProCard } from "@ant-design/pro-components";
import { List } from "antd";
import RcResizeObserver from "rc-resize-observer";
import { useEffect, useState } from "react";
import {useRequest} from 'ahooks'
import { StatementsService } from "@/client";


const MonthCard = () => {
  const [responsive, setResponsive] = useState(false);
  const {data, runAsync} = useRequest(StatementsService.getStatementsStatementsGet)

  useEffect(() => {
    runAsync()
  }, [runAsync])

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
          <ProCard title="收入交易详情">
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
                dataSource={data.expense}
                renderItem={(item) => (
                  <List.Item key={item.amount}>
                    <List.Item.Meta
                      title="交易金额"
                      description={item.amount}
                    />
                    
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
