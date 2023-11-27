import MonthCard from "@/components/month-card";

const MonthlyHistory = () => {
  const months = [1, 2];
  return (
    <div className="grid gap-y-4">
      {months.map((_) => {
        return <MonthCard></MonthCard>;
      })}
    </div>
  );
};
export default MonthlyHistory;
