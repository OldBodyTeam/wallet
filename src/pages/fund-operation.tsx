import CheckRecord from "@/components/check-record";
import FundReceive from "@/components/fund-receive";
import FundTransfer from "@/components/fund-transfer";
import { CheckCard } from "@ant-design/pro-components";
import { useState } from "react";

const FundOperation = () => {
  const [selection, setSelection] = useState("A");
  return (
    <div className="min-h-full flex-col">
      <CheckCard.Group
        onChange={(value) => {
          setSelection(String(value));
        }}
        defaultValue="A"
      >
        <CheckCard title="向他人转账" description="向他人转账" value="A" />
        <CheckCard title="申请分摊账单" description="申请分摊账单" value="B" />
        <CheckCard title="查看分摊申请" description="查看分摊申请" value="C" />
      </CheckCard.Group>
      <div style={{ display: selection === "A" ? "block" : "none" }}>
        <FundTransfer />
      </div>
      <div style={{ display: selection === "B" ? "block" : "none" }}>
        <FundReceive />
      </div>
      {selection === "C"?<CheckRecord />:null}
      {/* <div style={{ display: selection === "C" ? "block" : "none" }}>
        <CheckRecord />
      </div> */}
    </div>
  );
};

export default FundOperation;
