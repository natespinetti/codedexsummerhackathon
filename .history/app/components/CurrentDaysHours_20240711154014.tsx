import React from "react";
import { Box, Text } from "@chakra-ui/react";

const openingHours: { [key: number]: string } = {
  0: "10am-11pm", //Sunday
  1: "11am-11pm", // Monday
  2: "11am-11pm", // Tuesday
  3: "11am-11pm", // Wednesday
  4: "11am-11pm", // Thursday
  5: "11am-midnight", // Friday
  6: "10am-midnight", // Saturday
};

const CurrentDayHours = () => {
  const currentDay = new Date().getDay();
  const hours = openingHours[currentDay];

  return (
    <Box textAlign="center" fontSize="16px">
      <Text fontWeight="bold">
        Today's Hours:{" "}
        <Text color="#95b878" as="span">
          {hours}
        </Text>
      </Text>
    </Box>
  );
};

export default CurrentDayHours;
