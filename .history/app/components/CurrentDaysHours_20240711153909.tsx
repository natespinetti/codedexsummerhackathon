import React from "react";
import { Box, Text } from "@chakra-ui/react";

const openingHours: { [key: number]: string } = {
  0: "Sunday: 10am-11pm",
  1: "Monday: 11am-11pm",
  2: "Tuesday: 11am-11pm",
  3: "Wednesday: 11am-11pm",
  4: "Thursday: 11am-11pm",
  5: "Friday: 11am-midnight",
  6: "Saturday: 10am-midnight",
};

const CurrentDayHours = () => {
  const currentDay = new Date().getDay();
  const hours = openingHours[currentDay];

  return (
    <Box textAlign="center" fontSize="16px">
      <Text fontWeight="bold">
        Today's Opening Hours:{" "}
        <Text color="#95b878" as="span">
          {hours}
        </Text>
      </Text>
    </Box>
  );
};

export default CurrentDayHours;
