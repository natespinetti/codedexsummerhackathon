import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Button,
  useToast,
  Select,
} from "@chakra-ui/react";

const events = [
  {
    date: "2024-01-10",
    title: "New Year Tournament",
    description:
      "Kick off the new year with an exciting tournament. Compete and win awesome prizes!",
  },
  {
    date: "2024-01-20",
    title: "Winter Commander Clash",
    description:
      "Gather your commander decks and join us for a winter-themed commander event.",
  },
  {
    date: "2024-01-30",
    title: "January Draft",
    description:
      "Draft the latest set with fellow players and test your skills.",
  },

  {
    date: "2024-02-05",
    title: "Valentine's Day Event",
    description:
      "Bring a friend and enjoy a special Valentine's Day-themed event.",
  },
  {
    date: "2024-02-15",
    title: "Mid-February Showdown",
    description:
      "A competitive event for all players looking to prove their skills.",
  },
  {
    date: "2024-02-25",
    title: "February Legacy League",
    description: "Join the Legacy League and compete with veteran players.",
  },

  {
    date: "2024-03-10",
    title: "Spring Fling Tournament",
    description:
      "Celebrate the arrival of spring with a fun-filled tournament.",
  },
  {
    date: "2024-03-20",
    title: "March Madness Draft",
    description:
      "Draft your favorite cards and compete in this March Madness event.",
  },
  {
    date: "2024-03-30",
    title: "Commander Night",
    description:
      "Gather your commander decks and battle it out with other players.",
  },

  {
    date: "2024-04-05",
    title: "April Fool's Event",
    description: "A lighthearted event with fun twists and turns.",
  },
  {
    date: "2024-04-15",
    title: "Spring Commander Clash",
    description: "Join us for a spring-themed commander event.",
  },
  {
    date: "2024-04-25",
    title: "April Draft",
    description: "Draft the latest set and compete for prizes.",
  },

  {
    date: "2024-05-10",
    title: "May Day Tournament",
    description: "Celebrate May Day with a competitive tournament.",
  },
  {
    date: "2024-05-20",
    title: "Mid-May Showdown",
    description: "A mid-May event for all competitive players.",
  },
  {
    date: "2024-05-30",
    title: "May Commander Clash",
    description: "Join us for a commander event this May.",
  },

  {
    date: "2024-06-10",
    title: "Summer Kickoff Tournament",
    description: "Kick off the summer with a hot tournament.",
  },
  {
    date: "2024-06-20",
    title: "June Draft",
    description: "Draft the latest set and compete in this June event.",
  },
  {
    date: "2024-06-30",
    title: "Summer Commander Clash",
    description: "Join us for a summer-themed commander event.",
  },

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
    date: "2024-07-28",
    title: "July Commander Clash",
    description:
      "Join us for a commander event this July. Show off your best decks!",
  },
  {
    date: "2024-07-29",
    title: "Mid-Summer Draft",
    description:
      "Beat the heat with a mid-summer draft event. Cool prizes await!",
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

  {
    date: "2024-08-10",
    title: "Summer's End Tournament",
    description: "As summer winds down, join us for a competitive tournament.",
  },
  {
    date: "2024-08-20",
    title: "August Draft",
    description: "Draft the latest set and compete in this August event.",
  },
  {
    date: "2024-08-30",
    title: "Commander Night",
    description:
      "Gather your commander decks and battle it out with other players.",
  },

  {
    date: "2024-09-10",
    title: "Fall Kickoff Tournament",
    description: "Kick off the fall season with an exciting tournament.",
  },
  {
    date: "2024-09-20",
    title: "September Draft",
    description: "Draft the latest set and compete for prizes.",
  },
  {
    date: "2024-09-30",
    title: "September Commander Clash",
    description: "Join us for a commander event this September.",
  },

  {
    date: "2024-10-10",
    title: "Halloween Tournament",
    description: "A spooky Halloween-themed tournament with special prizes.",
  },
  {
    date: "2024-10-20",
    title: "October Draft",
    description:
      "Draft the latest set and show off your skills in this October event.",
  },
  {
    date: "2024-10-30",
    title: "Commander Night",
    description: "Gather your commander decks for a spooky Halloween event.",
  },

  {
    date: "2024-11-10",
    title: "Thanksgiving Tournament",
    description:
      "Give thanks and compete in this Thanksgiving-themed tournament.",
  },
  {
    date: "2024-11-20",
    title: "November Draft",
    description: "Draft the latest set and compete in this November event.",
  },
  {
    date: "2024-11-30",
    title: "Commander Clash",
    description: "Join us for a commander event this November.",
  },

  {
    date: "2024-12-10",
    title: "Holiday Tournament",
    description: "Celebrate the holidays with a fun and festive tournament.",
  },
  {
    date: "2024-12-20",
    title: "December Draft",
    description: "Draft the latest set and compete in this December event.",
  },
  {
    date: "2024-12-30",
    title: "New Year's Eve Commander Clash",
    description: "Ring in the new year with a special commander event.",
  },
];

const daysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

const EventsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [month, setMonth] = useState<number>(7);
  const [year, setYear] = useState<number>(2024);

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

  const numberOfDays = daysInMonth(month, year);

  const updateMonth = (value: React.SetStateAction<number>) => {
    setMonth(value);
    setSelectedDate(null);
  };
  const updateYear = (value: React.SetStateAction<number>) => {
    setYear(value);
    setSelectedDate(null);
  };

  return (
    <VStack spacing={4} p={4}>
      <Box display="flex" flexDir="row" flexWrap="wrap" gridGap=".5rem">
        <Box display="flex" flexDir="row" gridGap="1rem" w="100%">
          <Select
            w="fit-content"
            value={month}
            bg="rgba(255,255,255,0.5)"
            onChange={(e) => updateMonth(Number(e.target.value))}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {new Date(0, i).toLocaleString("default", { month: "long" })}
              </option>
            ))}
          </Select>
          <Select
            w="fit-content"
            value={year}
            bg="rgba(255,255,255,0.5)"
            onChange={(e) => updateYear(Number(e.target.value))}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <option key={i} value={2024 + i}>
                {2024 + i}
              </option>
            ))}
          </Select>
        </Box>
        {Array.from({ length: numberOfDays }, (_, day) => {
          const date = `${year}-${String(month).padStart(2, "0")}-${String(
            day + 1
          ).padStart(2, "0")}`;
          const hasEvent = events.find((e) => e.date === date);
          const isSelected = selectedDate === date;
          return (
            <Button
              key={day}
              onClick={() => handleDateClick(date)}
              w="50px"
              bg={isSelected ? "#94B973" : hasEvent ? "#94B973" : "#F6E8EA"}
              _hover={{
                bg: isSelected ? "#B6CFA0" : hasEvent ? "#ACC892" : "#F6E8EA",
              }}
              border={isSelected ? "#ED64A6 solid 2px" : "0"}
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
