"use client";
import HomeHero from "../components/HomeHero";
import {
  Box,
  Text,
  Button,
  keyframes,
  Image,
  List,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import HowItWorks from "../components/HowItWorks";
import { useRouter } from "next/navigation";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import { Search } from "../components/Search";

export default function Menu() {
  const router = useRouter();
  return (
    <>
      <Hero
        headline={"Menu"}
        anchor={"menu"}
        sub={"Our kitchen closes 2.5-3 hours before close!"}
      />
      <Box
        bg="var(--chakra-colors-gray-50)"
        id="menu"
        bgImg="./bg/bg2.svg"
        bgPos="0 85%"
        bgSize="cover"
        scrollMarginTop="96px"
      >
        <Box maxW="90%" m="auto" p="3.5rem 0" minH="500px" w="100vw">
          <Box w="50%" m="auto">
            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                COFFEE
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir={["column", "row"]}
              gridGap="2rem"
              justifyContent="space-between"
            >
              <Box display="flex" flexDir="column">
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    LATTE
                  </Text>
                  <Text>$4.75(H)/$5.25(C)</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    CORTADO
                  </Text>
                  <Text>$4.25(H)/$4.75(C)</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    DRIP COFFEE
                  </Text>
                  <Text>
                    Small: $3(H)/$3.50(C)
                    <br />
                    Medium: $3.50(H)
                    <br />
                    Large: $4(H)/$4.25(C)
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    CAFE AU LAIT
                  </Text>
                  <Text>$3.25(H)</Text>
                </Box>
              </Box>
              <Box display="flex" flexDir="column">
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    CAPPUCINO
                  </Text>
                  <Text>$4.50(H)</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    MOCHA
                  </Text>
                  <Text>$5.75(H)/$6.25(C)</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    RED EYE
                  </Text>
                  <Text>$4.50(H)/$4.75(C)</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    AMERICANO
                  </Text>
                  <Text>$3.75(H)/$4.25(C)</Text>
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                SPECIALTY DRINKS
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir={["column", "row"]}
              gridGap="2rem"
              justifyContent="space-between"
            >
              <Box display="flex" flexDir="column">
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    MATCHA LATTE
                  </Text>
                  <Text>$5.25(H)/$5.75(C)</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    HOT CHOCOLATE
                  </Text>
                  <Text>
                    $4.50(H)
                    <br />
                    S'mores: $5.50
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    NUTELLA LATTE
                  </Text>
                  <Text>$5.75(H)/$6.25(C)</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    CHAI
                  </Text>
                  <Text>$5.00(H)/$5.50(C)</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    DIRTY CHAI
                  </Text>
                  <Text>$6.25(H)/$6.75(C)</Text>
                </Box>
              </Box>
              <Box display="flex" flexDir="column">
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    LAVENDAR LATTE
                  </Text>
                  <Text>$5.75(H)/$6.25(C)</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    ROSE LATTE
                  </Text>
                  <Text>$5.75(H)/$6.25(C)</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    BROWN SUGAR LATTE
                  </Text>
                  <Text>$5.75(H)/$6.25(C)</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    BUMBLEBEE LATTE
                  </Text>
                  <Text>$6.25(H)/$6.75(C)</Text>
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                BOBA
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir={["column", "row"]}
              gridGap="2rem"
              justifyContent="space-between"
            >
              <Box display="flex" flexDir="column">
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    THE OG
                  </Text>
                  <Text>
                    Medium: $4.25
                    <br />
                    Large: $5.25
                    <br />
                    Hot: $5.25
                  </Text>
                  <Text as="i">Classic milk tea</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    BROWN SUGAR BOBA
                  </Text>
                  <Text>
                    Medium: $4.75
                    <br />
                    Large: $5.75
                    <br />
                    Hot: $5.75
                  </Text>
                  <Text as="i">Caffeine free</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    TARO BOBA COCONUT BOBA
                  </Text>
                  <Text>
                    Medium: $4.25
                    <br />
                    Large: $5.25
                    <br />
                    Hot: $5.25
                  </Text>
                  <Text as="i">Caffeine free, dairy free</Text>
                </Box>
              </Box>
              <Box display="flex" flexDir="column">
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    FRUIT GREEN/BLACK TEA
                  </Text>
                  <Text>
                    Medium: $4.25
                    <br />
                    Large: $5.25
                  </Text>
                  <Text as="i">
                    Comes in a variety of flavors:
                    mango/strawberry/passionfruit/ peach/green apple/lychee/kiwi
                    Feel free to mix and match!
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    FRUIT BLACK TEA
                  </Text>
                  <Text>
                    Medium: $4.25
                    <br />
                    Large: $5.25
                  </Text>
                  <Text as="i">
                    Comes in a variety of flavors: peach/strawberry Feel free to
                    mix and match!
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    JASMINE MILK TEA WINTERMELON MILK TEA
                  </Text>
                  <Text>
                    Medium: $4.25
                    <br />
                    Large: $5.25
                    <br />
                    Hot: $5.25
                  </Text>
                  <Text as="i">Dairy free</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    BUMBLEBEE LATTE
                  </Text>
                  <Text>$6.25(H)/$6.75(C)</Text>
                </Box>
              </Box>
              <Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    TOPPINGS +$0.50
                  </Text>
                  <Text as="i">
                    Tapioca pearls, lychee jelly, mixed jelly, grass jelly, pop
                    strawberry, pop passionfruit, mango stars
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                HOT BITES
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                SANDWICHES & SALADS
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                SEASONAL MENU
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                BEER/WINE
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
