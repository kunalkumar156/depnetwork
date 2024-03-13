import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Button,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import SliderNav from "./SliderNav";
import { useState } from "react";
import Image from "next/image";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bg={"#af8060"}>
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Flex as="nav" className="items-center justify-between flex-wrap py-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold no-underline">
            <Image
              src="/logo.svg"
              width={174}
              height={38}
              alt="Picture of the author"
            />
          </Link>

          {/* Links */}
          <Flex className="flex-grow justify-center items-center">
            <Link
              href="#footer"
              className="text-white hover:text-yellow-400 hover:underline font-semibold mx-4"
            >
              About
            </Link>
            <Link className="text-white hover:text-yellow-400 hover:underline font-semibold mx-4">
              Product
            </Link>
            <Link
              href="#footer"
              className="text-white hover:text-yellow-400 hover:underline font-semibold mx-4"
            >
              Contact
            </Link>
          </Flex>

          {/* Button */}
          <Button className="" colorScheme="black">
            Launch App
          </Button>

          {/* Menu Icon */}
          <Box className="block md:hidden">
            <IconButton
              icon={
                <FiMenu
                  className="text-white"
                  style={{ fontSize: "25px", background: "transparent" }}
                />
              }
              aria-label="Menu"
              variant="ghost"
              rounded={"full"}
              onClick={onToggle}
            />
          </Box>
        </Flex>

        {/* Slider Nav Component */}
        <SliderNav />
      </Container>
    </Box>
  );
}

export default NavBar;
