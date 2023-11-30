import React, { useState } from 'react';
import { Box, Flex, Link, Spacer, Text} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        padding={4}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Text fontSize="xl" fontWeight="bold">
          <Link as={RouterLink} to="/" color="teal.500">
            NetMarket
          </Link>
        </Text>
        <Spacer />
        <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
          {isOpen ? <CloseIcon boxSize={6} /> : <HamburgerIcon boxSize={6} />}
        </Box>
        <Flex
          as="nav"
          align="center"
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        >
          <NavLink to="/category">Category</NavLink>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/addProduct">Add product</NavLink>
          <NavLink to="/addUser">Sign in</NavLink>
          <NavLink to="/logIn">Log in</NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    as={RouterLink}
    to={to}
    p={2}
    mx={2}
    rounded="md"
    _hover={{
      textDecoration: 'none',
      bg: 'teal.500',
      color: 'white',
    }}
  >
    {children}
  </Link>
);

export default NavMenu;
