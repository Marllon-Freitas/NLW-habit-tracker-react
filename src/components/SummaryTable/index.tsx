import React from "react";
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
  SummaryTableHabitEmpty
} from "./styled";

function SummaryTable() {
  return (
    <SummaryTableContainer>
      <SummaryTableWeeksDay>
        {weekDays.map((day, index) => (
          <span key={`${day}-${index}`}>{day}</span>
        ))}
      </SummaryTableWeeksDay>
      <SummaryTableHabitsContainer>
        {summaryDates.map((date, index) => (
          <HabitDay
            amount={5}
            completed={Math.floor(Math.random() * 5)}
          key={`${date}-${index}`} />
        ))}

        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => (
          <SummaryTableHabitEmpty key={`empty-${index}`} />
        ))}
      </SummaryTableHabitsContainer>
    </SummaryTableContainer>
  );
}

export default SummaryTable;
