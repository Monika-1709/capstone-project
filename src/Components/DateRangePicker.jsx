import React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

function DateRange({ range, setRange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <DemoItem component="DateRangePicker">
          <DateRangePicker
            value={range}
            onChange={(newRange) => setRange(newRange)}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default DateRange;
