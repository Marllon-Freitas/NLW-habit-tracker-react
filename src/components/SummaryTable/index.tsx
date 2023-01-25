import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { api } from "../../lib/axios";
import { generateDaysFromYearBeginning } from "../../utils/generate-dates-from-year-beginning";
import HabitDay from "../HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDaysFromYearBeginning();

const MINIMUM_SUMMARY_DAYS = 18 * 7;
const amountOfDaysToFill = MINIMUM_SUMMARY_DAYS - summaryDates.length;

import {
  SummaryTableContainer,
  SummaryTableWeeksDay,
  SummaryTableHabitsContainer,
  SummaryTableHabitEmpty,
} from "./styled";

type Summary = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>;

function SummaryTable() {
  const [summary, setSummary] = useState<Summary>([]);

  useEffect(() => {
    api.get("/summary").then((response) => setSummary(response.data));
  }, []);

  return (
    <SummaryTableContainer>
      <SummaryTableWeeksDay>
        {weekDays.map((day, index) => (
          <span key={`${day}-${index}`}>{day}</span>
        ))}
      </SummaryTableWeeksDay>
      <SummaryTableHabitsContainer>
        {summary.length > 0 &&
          summaryDates.map((date, index) => {
            const dayInSummary = summary.find((day) => {
              return dayjs(date).isSame(day.date, "day");
            });
            return (
              <HabitDay
                date={date}
                defaultCompleted={dayInSummary?.completed}
                amount={dayInSummary?.amount}
                key={`${date}-${index}`}
              />
            );
          })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => (
            <SummaryTableHabitEmpty key={`empty-${index}`} />
          ))}
      </SummaryTableHabitsContainer>
    </SummaryTableContainer>
  );
}

export default SummaryTable;
