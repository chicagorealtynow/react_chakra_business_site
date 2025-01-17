import React from 'react';
    import { Box, Text, Flex, Link, IconButton } from '@chakra-ui/react';
    import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

    const Footer = () => {
      return (
        <Box bg="#333333" color="white" p={8}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
          >
            <Box mb={{ base: 4, md: 0 }}>
              <Text fontWeight="bold" mb={2}>
                Contact Us
              </Text>
              <Text>Phone: (123) 456-7890</Text>
              <Text>Email: info@yourcompany.com</Text>
              <Text>Address: 123 Main St, Anytown, USA</Text>
            </Box>
            <Box mb={{ base: 4, md: 0 }}>
              <Text fontWeight="bold" mb={2}>
                Service Areas
              </Text>
              <Text>Anytown, USA</Text>
            </Box>
            <Box mb={{ base: 4, md: 0 }}>
              <Text fontWeight="bold" mb={2}>
                Quick Links
              </Text>
              <Link href="/" display="block" mb={1}>
                Home
              </Link>
              <Link href="/services" display="block" mb={1}>
                Services
              </Link>
              <Link href="/contact" display="block">
                Contact
              </Link>
            </Box>
            <Box>
              <Text fontWeight="bold" mb={2}>
                Follow Us
              </Text>
              <Flex>
                <IconButton
                  as="a"
                  href="https://www.facebook.com"
                  icon={<FaFacebook />}
                  aria-label="Facebook"
                  variant="ghost"
                  color="white"
                  mr={2}
                />
                <IconButton
                  as="a"
                  href="https://www.twitter.com"
                  icon={<FaTwitter />}
                  aria-label="Twitter"
                  variant="ghost"
                  color="white"
                  mr={2}
                />
                <IconButton
                  as="a"
                  href="https://www.instagram.com"
                  icon={<FaInstagram />}
                  aria-label="Instagram"
                  variant="ghost"
                  color="white"
                />
              </Flex>
            </Box>
          </Flex>
          <Text mt={4} textAlign="center">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Text>
        </Box>
      );
    };

    export default Footer;
