import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['पुराण संग्रह', 'आरतियाँ', 'व्रत - त्योहार','तीर्थ स्थल'];

const NavLink = ({ to, children }) => (
  <RouterLink
    to={to}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    {children}
  </RouterLink>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'#F6F4EB'} px={4} position={"sticky"} top={"0"} zIndex={"1000"} w={"100%"} borderBottom={"1px solid gray"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontWeight={'bold'} fontSize={"20px"}>धार्मिकोलॉजी</Box>
            <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <NavLink to="/">पुराण संग्रह</NavLink>
            <NavLink to="/आरतियाँ">आरतियाँ</NavLink>
            <NavLink to="/व्रत-त्योहार">व्रत - त्योहार</NavLink>
            <NavLink to="/tirth">तीर्थ स्थल</NavLink>
          </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Image
                  w={"50px"}
                  borderRadius={"50%"}
                  src={
                    'logo.jpg'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Login</MenuItem>
                <MenuItem>Signup</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink to="/">पुराण संग्रह</NavLink>
              <NavLink to="/आरतियाँ">आरतियाँ</NavLink>
              <NavLink to="/व्रत-त्योहार">व्रत - त्योहार</NavLink>
              <NavLink to="/tirth">तीर्थ स्थल</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}