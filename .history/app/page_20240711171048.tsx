"use client";
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
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const onArrowClick = (event: {
    preventDefault: () => void;
    currentTarget: { getAttribute: (arg0: string) => any };
  }) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HomeHero onArrowClick={onArrowClick} />
      <HowItWorks />
    </>
  );
}
