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
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onArrowClick = () => {
    router.push({ pathname: "#how-it-works" });
  };
  return (
    <>
      <HomeHero onArrowClick={onArrowClick} />
      <HowItWorks />
    </>
  );
}
