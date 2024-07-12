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
import ThreeDModel from "../components/ThreeDModel";

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
            <Box>
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
                <Box display="flex" flexDir="column" w="-webkit-fill-available">
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
                <Box display="flex" flexDir="column" w="-webkit-fill-available">
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
            </Box>
            <Box>
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
                <Box display="flex" flexDir="column" w="-webkit-fill-available">
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
                <Box display="flex" flexDir="column" w="-webkit-fill-available">
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
            </Box>
            <Box>
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
                <Box display="flex" flexDir="column" w="-webkit-fill-available">
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
                  </Box>{" "}
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
                      mango/strawberry/passionfruit/ peach/green
                      apple/lychee/kiwi Feel free to mix and match!
                    </Text>
                  </Box>
                </Box>
                <Box display="flex" flexDir="column" w="-webkit-fill-available">
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
                      Comes in a variety of flavors: peach/strawberry Feel free
                      to mix and match!
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
              </Box>
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
              flexDir={["column", "row"]}
              gridGap="2rem"
              justifyContent="space-between"
            >
              <Box display="flex" flexDir="column" w="-webkit-fill-available">
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    CHICKEN POPPERS
                  </Text>
                  <Text>$6.00</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    MOZZ STICKS
                  </Text>
                  <Text>$7.00</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    PIGS IN A BLANKET
                  </Text>
                  <Text>$7.00</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    TATER TOTS
                  </Text>
                  <Text>$5.00</Text>
                </Box>
              </Box>
              <Box display="flex" flexDir="column" w="-webkit-fill-available">
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    CHICKEN TENDERS
                  </Text>
                  <Text>$8.00</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    ONION RINGS
                  </Text>
                  <Text>$5.00</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    FRIES
                  </Text>
                  <Text>$5.00</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    SWEET POTATO FRIES
                  </Text>
                  <Text>$6.00</Text>
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
                SANDWICHES & SALADS
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir={["column", "row"]}
              gridGap="2rem"
              justifyContent="space-between"
            >
              <Box display="flex" flexDir="column" w="-webkit-fill-available">
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    BEYOND BUSSIN SANDWICH
                  </Text>
                  <Text>$15.00</Text>
                  <Text as="i">
                    SHEEEESH Our new VEGAN sandwich highlighting the beyond
                    burger and our house-made vegan chipotle aioli alongside
                    lettuce, onion and avocado. ​Comes with a side of our house
                    made chipotle aioli and chips
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    SPICY CHICKEN SANDWICH
                  </Text>
                  <Text>$13.00</Text>
                  <Text as="i">
                    Spicy mayo, grilled chicken, crispy bacon and avocado on
                    Italian herb focaccia Comes with chips
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    ITALIAN PANINI
                  </Text>
                  <Text>$11.00</Text>
                  <Text as="i">
                    Prosciutto, pesto, and mozzarella in between herb focaccia
                    and pressed til golden brown and crispy (pesto contains pine
                    nuts)​ Comes with chips ​
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    TUNA MELT
                  </Text>
                  <Text>$11.00</Text>
                  <Text as="i">
                    House-made tuna salad with American cheese on Italian herb
                    focaccia pressed to perfection (can be spicy on request)
                    Comes with chips
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    ZESTO CHICKEN SANDWICH
                  </Text>
                  <Text>$13.00</Text>
                  <Text as="i">
                    Basil pesto, grilled chicken, fresh mozzarella and lemon
                    zest on Italian herb focaccia (pesto contains pine nuts)
                    Comes with chips
                  </Text>
                </Box>
              </Box>
              <Box display="flex" flexDir="column" w="-webkit-fill-available">
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    TURKEY CLUB
                  </Text>
                  <Text>$11.00</Text>
                  <Text as="i">
                    Roast turkey, lettuce, tomato, crispy bacon and American
                    cheese on sourdough Comes with chips
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    GRILLED CHEESE
                  </Text>
                  <Text>$6.50</Text>
                  <Text as="i">Comes with chips</Text>
                  <Text>+bacon/tomato/turkey: $1.50</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    MIXED GREEN SALAD
                  </Text>
                  <Text>$6.50</Text>
                  <Text as="i">w/tomato, vegan</Text>
                  <Text>+smoked salmon: $5.00</Text>
                  <Text>+boiled egg: $1.00</Text>
                  <Text>+avocado: $1.50</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    COBB SALAD
                  </Text>
                  <Text>$10.00</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    PIZZA PANINI
                  </Text>
                  <Text>$11.00</Text>
                  <Text as="i">
                    Pepperoni, fresh mozzarella, marinara and olive oil on
                    Italian herb focaccia and pressed to perfection! Comes with
                    chips
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    SMOKED SALMON TARTINE
                  </Text>
                  <Text>$11.00</Text>
                  <Text as="i">
                    Lemon zest infused cream cheese on toasted heritage wheat.
                    Piled high with smoked salmon and topped with pickled red
                    onion Comes with a side salad
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    AVOCADO TOAST
                  </Text>
                  <Text>$10.00</Text>
                  <Text as="i">
                    Avocado mashed with salt, pepper, lemon juice and olive oil
                    on toasted heritage wheat Comes with a side salad
                  </Text>
                  <Text>+egg: $1</Text>
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
                SEASONAL MENU
              </Text>
            </Box>

            <Box
              display="flex"
              flexDir={["column", "row"]}
              gridGap="2rem"
              justifyContent="space-between"
            >
              <Box display="flex" flexDir="column" w="-webkit-fill-available">
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    Pina Colada
                  </Text>
                  <Text>$4.75 (M) 5.75 (L)</Text>
                  <Text as="i">Our coconut boba with pineapple flavor!</Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    MATCHA LEMONADE
                  </Text>
                  <Text>$5.00 (M) 6.00 (L)</Text>
                  <Text as="i">
                    Our freshly squeezed lemonade with a balance of an earthy
                    shot of matcha
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    YUZU-ADE
                  </Text>
                  <Text>Large: $5.25</Text>
                  <Text as="i">
                    Popular in South Korea, Yuzu-Ade is a carbonated drink with
                    yuzu marmalade. Yuzu is a citrus with a tart and fragrant
                    flavor of orange and grapefruit.
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    FRESHLY SQUEEZED LEMONADE
                  </Text>
                  <Text>Medium: $4.00 Large: $5.00</Text>
                  <Text as="i">
                    Real lemons with our signature recipe = amazing lemonade
                  </Text>
                </Box>
              </Box>
              <Box display="flex" flexDir="column" w="-webkit-fill-available">
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    MATCHA LAVENDER OAT
                  </Text>
                  <Text>$6.50</Text>
                  <Text as="i">
                    Lavender infused into our oatmilk steamed over a matcha
                    shot.
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    Berry Lavendar Lemonade
                  </Text>
                  <Text>Medium: $5.25 Large: $6.25</Text>
                  <Text as="i">
                    Made with real bourbon and definitely the drink we're most
                    excited for this fall.
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    Citrus Boba (Grapefruit or Orange)
                  </Text>
                  <Text>Large: $6.00</Text>
                  <Text as="i">
                    Made with real fruit juice and fruit slices!
                  </Text>
                </Box>
                <Box mb="1rem">
                  <Text fontWeight="700" fontFamily="heading">
                    ROTATING BEER/WINE PROGRAM
                  </Text>
                  <Text as="i">
                    Check out our beer and wine at the front of our store! We're
                    constantly rotating out product from local breweries!
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
                BEER/WINE
              </Text>
            </Box>

            <Box
              display="flex"
              flexDir={["column", "row"]}
              gridGap="2rem"
              justifyContent="space-between"
            >
              <Box display="flex" flexDir="column" w="-webkit-fill-available">
                <Box mb="1rem">
                  <Text>Babe Rose</Text>
                </Box>
                <Box mb="1rem">
                  <Text>Archer Roose White/Red</Text>
                </Box>
                <Box mb="1rem">
                  <Text>Kona Lager</Text>
                </Box>
                <Box mb="1rem">
                  <Text>Blue Point</Text>
                </Box>
                <Box mb="1rem">
                  <Text>Juneshine</Text>
                </Box>
                <Box mb="1rem">
                  <Text>Lunar Hard Seltzers</Text>
                </Box>
              </Box>
              <Box display="flex" flexDir="column" w="-webkit-fill-available">
                <Box mb="1rem">
                  <Text>Allagash White</Text>
                </Box>
                <Box mb="1rem">
                  <Text>Doc Cider</Text>
                </Box>
                <Box mb="1rem">
                  <Text>Stella Artois</Text>
                </Box>
                <Box mb="1rem">
                  <Text>Shocktop</Text>
                </Box>
                <Box mb="1rem">
                  <Text>Finback</Text>
                </Box>
                <Box mb="1rem">
                  <Text>Three's Brewery</Text>
                </Box>
              </Box>
            </Box>
            <Box mt="2rem" mb="1rem">
              <Text>
                Rotating menu of beers from local breweries! (tall silver cans
                on our counter)
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
