import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Button,
  useToast,
} from "@chakra-ui/react";

const events = [
  {
    date: "2023-07-01",
    title: "Event 1",
    description: "Description of Event 1",
  },
  {
    date: "2023-07-05",
    title: "Event 2",
    description: "Description of Event 2",
  },
  {
    date: "2023-07-10",
    title: "Event 3",
    description: "Description of Event 3",
  },
  {
    date: "2023-07-15",
    title: "Event 4",
    description: "Description of Event 4",
  },
  {
    date: "2023-07-20",
    title: "Event 5",
    description: "Description of Event 5",
  },
];

const EventsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const toast = useToast();

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    // toast({
    //   title: `Selected date: ${date}`,
    //   status: "info",
    //   duration: 2000,
    //   isClosable: true,
    // });
  };

  const renderEvents = (date: string | null) => {
    const filteredEvents = date
      ? events.filter((event) => event.date === date)
      : events;

    return filteredEvents.length ? (
      filteredEvents.map((event, index) => (
        <Box key={index} borderWidth="1px" borderRadius="lg" p="4" mb="4">
          <Text fontSize="lg" fontWeight="bold">
            {event.title}
          </Text>
          <Text>{event.description}</Text>
        </Box>
      ))
    ) : (
      <Text>No events found for the selected date.</Text>
    );
  };

  return (
    <VStack spacing={4} p={4}>
      <Box display="flex" flexDir="row" flexWrap="wrap" gridGap=".5rem">
        {[...Array(31).keys()].map((day) => {
          const date = `2023-07-${String(day + 1).padStart(2, "0")}`;
          return (
            <Button key={day} onClick={() => handleDateClick(date)} w="50px">
              {day + 1}
            </Button>
          );
        })}
      </Box>
      <Box w="100%">
        <Text fontSize="xl" fontWeight="bold" mb="4">
          {selectedDate ? `Events on ${selectedDate}` : "All Events"}
        </Text>
        {renderEvents(selectedDate)}
      </Box>
    </VStack>
  );
};

export default EventsCalendar;
