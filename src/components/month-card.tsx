import { ProCard } from "@ant-design/pro-components";
import { List, DatePicker } from "antd";
import RcResizeObserver from "rc-resize-observer";
import { useEffect, useState } from "react";
import { useRequest } from "ahooks";
import { StatementsService } from "@/client";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const MonthCard = () => {
  const [responsive, setResponsive] = useState(false);
  const [month, setMonth] = useState();
  const { run, data } = useRequest(
    StatementsService.getIncomeStatementsGroupByMonthStatementsGroupGet
  );

  const handleDatePicker = (data) => {
    const info = data.format("YYYY-M").split("-");
    console.log(info);
    setMonth(data);
    run(Number(info[0]), Number(info[1]));
  };

  useEffect(() => {
    run();
  }, [run]);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <div className="flex items-center justify-between">
        <div className="text-base font-semibold">历史月结账单</div>
        <DatePicker
          picker="month"
          placeholder="请选择查询月份"
          style={{ width: "300px" }}
          value={month}
          onChange={handleDatePicker}
        />
      </div>
      {data?.length === 0 ? <div className="w-full h-[480px] flex items-center justify-center">
        暂无数据
      </div> : null}
      {(data ?? []).map((item) => {
        return (
          <ProCard
            title={`${item.title}交易月结单`}
            key={item.title}
            // extra={
            //   <DatePicker
            //     picker="month"
            //     placeholder="请选择查询月份"
            //     style={{ width: "300px" }}
            //     value={month}
            //     onChange={handleDatePicker}
            //   />
            // }
            bordered
            headerBordered
            split={responsive ? "horizontal" : "vertical"}
          >
            <ProCard split="horizontal">
              <ProCard split="horizontal">
                <ProCard split={responsive ? "horizontal" : "vertical"}>
                  <ProCard title="本月累计交易数">{item.txCount}</ProCard>
                  <ProCard title="本月交易总金额">{item.txAmount}</ProCard>
                  <ProCard title="转入总金额">{item.txInAmount}</ProCard>
                  <ProCard title="转出总金额">{item.txOutAmount}</ProCard>
                </ProCard>
              </ProCard>
              <ProCard title="支出交易详情">
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
                    dataSource={item?.expense ?? []}
                    renderItem={(item) => (
                      <List.Item key={item.amount}>
                        <List.Item.Meta
                          title="交易类型"
                          description={item.send ? "给他人转账" : "他人收账"}
                        />
                        <List.Item.Meta
                          title="交易金额"
                          description={item.amount}
                        />
                        <List.Item.Meta
                          title="交易完成时间"
                          description={dayjs(item.completed_time).format(
                            "YYYY-MM-DD"
                          )}
                        />
                        <List.Item.Meta
                          title="交易状态"
                          description={"已完成"}
                        />
                        <List.Item.Meta
                          title="交易备注"
                          description={
                            item?.send?.memo ?? item?.request?.memo ?? "--"
                          }
                        />
                        <List.Item.Meta
                          title="收款人姓名"
                          description={item?.to_user?.name}
                        />
                      </List.Item>
                    )}
                  />
                </div>
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
                    dataSource={item?.income ?? []}
                    renderItem={(item) => (
                      <List.Item key={item.amount}>
                        <List.Item.Meta
                          title="交易类型"
                          description={item.send ? "转账收款" : "收账收款"}
                        />
                        <List.Item.Meta
                          title="交易金额"
                          description={item.amount}
                        />
                        <List.Item.Meta
                          title="交易完成时间"
                          description={dayjs(item.completed_time).format(
                            "YYYY-MM-DD"
                          )}
                        />
                        <List.Item.Meta
                          title="交易状态"
                          description={"已完成"}
                        />
                        <List.Item.Meta
                          title="交易备注"
                          description={
                            item?.send?.memo ?? item?.request?.memo ?? "--"
                          }
                        />
                        <List.Item.Meta
                          title="交易人姓名"
                          description={item?.from_user?.name}
                        />
                      </List.Item>
                    )}
                  />
                </div>
              </ProCard>
            </ProCard>
          </ProCard>
        );
      })}
    </RcResizeObserver>
  );
};

export default MonthCard;
