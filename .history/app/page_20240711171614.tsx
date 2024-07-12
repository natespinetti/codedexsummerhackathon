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
  return (
    <>
      <HomeHero />
      <HowItWorks />
    </>
  );
}
