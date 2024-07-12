import Image from "next/image";
import HomeHero from "./components/HomeHero";
import {
  Box,
  Text,
  Button,
  keyframes,
  ListItem,
  List,
  UnorderedList,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Box bg="var(--chakra-colors-gray-50)">
        <Box maxW="90%" m="auto" p="2.5rem 0">
          <Text
            as="h2"
            fontSize="2rem"
            fontFamily="heading"
            fontWeight={700}
            textAlign="center"
            mb="1rem"
          >
            How it works
          </Text>
          <UnorderedList spacing={2} fontSize="1rem">
            <ListItem>
              Pay $10 per person for 3 hours during the week ($12 on weekends
              and holidays)
            </ListItem>
            <ListItem>Enjoy over 500+ board games</ListItem>
            <ListItem>
              Indulge in bubble tea, coffee, beer, sandwiches, or salads while
              you play.
            </ListItem>
          </UnorderedList>
          <Text>
            Want to secure a table? Make a reservation for $15 per person for 3
            hours.
          </Text>
        </Box>
      </Box>
    </>
  );
}
