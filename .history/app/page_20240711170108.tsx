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
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HowItWorks />
    </>
  );
}
