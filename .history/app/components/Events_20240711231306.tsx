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
    date: "2024-07-01",
    title: "FNM Draft Night",
    description:
      "Join us for Friday Night Magic with a special draft event. Bring your best drafting skills and compete for exclusive prizes.",
  },
  {
    date: "2024-07-05",
    title: "Commander Showdown",
    description:
      "A casual Commander event where players can showcase their unique decks and strategies. Special prizes for creative deck-building.",
  },
  {
    date: "2024-07-10",
    title: "Standard Tournament",
    description:
      "Compete in our Standard Tournament and prove your skills. Top finishers will earn booster packs and other rewards.",
  },
  {
    date: "2024-07-15",
    title: "Modern Masters",
    description:
      "Test your Modern format decks against some of the best players in the area. Prizes include playmats and booster boxes.",
  },
  {
    date: "2024-07-20",
    title: "Pioneer Clash",
    description:
      "Dive into the Pioneer format with this exciting event. Great for players looking to explore new strategies and decks.",
  },
  {
    date: "2024-07-25",
    title: "Legacy League",
    description:
      "A Legacy format event that brings together veteran players and their powerful, classic decks. Exclusive rewards for top contenders.",
  },
  {
    date: "2024-07-30",
    title: "Pre-Release Party",
    description:
      "Get a sneak peek at the new Magic set with our Pre-Release Party. Build decks with the latest cards and enjoy a fun, competitive environment.",
  },
  {
    date: "2024-07-31",
    title: "Sealed Deck Showdown",
    description:
      "A sealed deck event where players receive booster packs to build their decks on the spot. Test your deck-building and gameplay skills.",
  },
];

const EventsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateClick = (date: string) => {
    if (date == selectedDate) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
    }
  };

  const renderEvents = (date: string | null) => {
    const filteredEvents = date
      ? events.filter((event) => event.date === date)
      : events;

    return filteredEvents.length ? (
      filteredEvents.map((event, index) => (
        <Box
          key={index}
          borderWidth="1px"
          borderRadius="lg"
          p="4"
          mb="4"
          bg="rgba(255,255,255,0.2)"
        >
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
          const date = `2024-07-${String(day + 1).padStart(2, "0")}`;
          const hasEvent = events.find((e) => e.date === date);
          const isSelected = selectedDate === date;
          return (
            <Button
              key={day}
              onClick={() => handleDateClick(date)}
              w="50px"
              bg={isSelected ? "#8CB46A" : hasEvent ? "#94B973" : "#F6E8EA"}
              _hover={{ bg: isSelected ? "#A1C185" : "pink.500" }}
              pos="relative"
              cursor={
                events.find((e) => e.date == date) ? "pointer" : "not-allowed"
              }
              _after={{
                content: '""',
                background: events.find((e) => e.date == date)
                  ? "transparent"
                  : "#5B0B32",
                width: "2px",
                transform: "rotate(45deg)",
                position: "absolute",
                height: "100%",
              }}
            >
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
