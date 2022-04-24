import React from 'react'
import {
    VStack,

    Flex,
    Heading,

    Spacer,
    Text,
    useColorMode,
    HStack,
    Icon, createIcon,
    Center,
    Stack,
    Button,
    Box,
    Container,
    FormControl,
    FormLabel,
    Input,
    Divider,
    WrapItem,
    Avatar,
    Wrap,
    Square
} from "@chakra-ui/react";


import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaAddressBook, FaAmazon, FaCoins, FaAppStoreIos, FaGooglePlay, FaAlipay, FaAppStore, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { BellIcon, CalendarIcon, InfoIcon, CheckCircleIcon, StarIcon, TimeIcon, WarningIcon, WarningTwoIcon, ViewIcon } from '@chakra-ui/icons'
import { useMediaQuery } from '@chakra-ui/media-query';
import { DiCodeignitor, DiAndroid, DiWebplatform, DiBootstrap, DiWordpress, DiDreamweaver, DiReact } from 'react-icons/di';
const Website1 = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    const CircleIcon = (props) => (

        <Icon viewBox='0 0 200 200' {...props}>
            <path
                fill='currentColor'
                d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
            />
        </Icon>
    )
    return (
        <>
            <VStack p={5}>

                <Flex w="100%" flexWrap="Wrap">
                    <Heading fontStyle={"italic"} color="#e53071" fontSize="5xl">Adverting</Heading>
                    <Spacer> </Spacer>
                    <Text ml="8" mt="6" fontWeight={"extrabold"}>Home</Text>
                    <Text ml="8" mt="6" fontWeight={"extrabold"}>About</Text>
                    <Text ml="8" mt="6" fontWeight={"extrabold"}>Contact</Text>
                    <Text ml="8" mt="6" fontWeight={"extrabold"}>Login</Text>
                    <IconButton ml="8" mt="3" icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>

                </Flex>
            </VStack>
            <VStack bg="grey.300"  >
                <Flex w="100%" bg="#ff91a4" >
                    <BellIcon /><CalendarIcon />
                    <Spacer></Spacer>

                    <HStack>
                        {/* The default icon size is 1em (16px) */}
                        <CircleIcon />


                        {/* Use the `boxSize` prop to change the icon size */}
                        <CircleIcon boxSize={6} />

                        {/* Use the `color` prop to change the icon color */}
                        <CircleIcon boxSize={8} color='red.500' />
                    </HStack>
                </Flex>
            </VStack>

            {/* section */}
            <Container maxW='2xl' centerContent icon={isDark ? <FaSun /> : <FaMoon />}>
                <Box padding='4' color='black' maxW='md'>
                    <Stack as={Flex}>
                        <VStack pt="77px">

                            <Heading color={isDark ? "#a06d83" : "gray.600"} mt="19" fontSize="28" fontWeight={"bolder"}>WE ARE CERTIFIZED TEACHER</Heading>

                        </VStack>
                        <VStack>
                            <Heading color={isDark ? "#a06d83" : "gray.600"} fontSize="29" mt="6"> OPTIMIZE IT PERFORMANCE</Heading>
                        </VStack>
                        <VStack>
                            <Heading mt="6" color={isDark ? "#a06d83" : "gray.600"} fontSize="29">&CAREER GROWTH</Heading>
                        </VStack>
                        <VStack><Text mt="6" color={isDark ? "#a06d83" : "gray.600"} textAlign="center"> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</Text></VStack>
                        <VStack>  </VStack>
                        <HStack pl="62">
                            <Button leftIcon={<InfoIcon />} colorScheme='pink' variant='solid'>

                                Settings
                            </Button>
                            <Button rightIcon={<CheckCircleIcon />} colorScheme='blue' variant='outline'>
                                Call us
                            </Button>


                        </HStack>
                    </Stack>
                </Box>
            </Container>

            {/* 3 part */}


            <Flex pt="17px" justifyContent={"center"} flexWrap="Wrap" direction={isNotSmallerScreen ? "row" : "column"} mt={8} alignSelf={{ base: "center", md: "flex-start", lg: "flex-start" }}>
                {/* //1 */}
                <Flex justifyContent={"center"} rounded="600px" direction="column" mt="4" bg="#ff6a80" h="30vh" w="30vh" justify="flex-end">
                    <Icon rounded="xl" direction="column" p="4" as={DiReact} w="24" h="24" />

                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">ReactJS</Text>
                </Flex>
                {/* //2 */}
                <Flex pt="17px" justifyContent={"center"} rounded="600px" direction="column" mt="4" bg="#ff9dab" ml={isNotSmallerScreen ? 4 : 0} h="30vh" w="30vh" justify="flex-end">
                    <Icon rounded="xl" direction="column" p="4" as={DiWebplatform} w="24" h="24" color="black" />

                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">Web Developer</Text>
                </Flex>

                {/* //3 */}
                <Flex justifyContent={"center"} rounded="600px" direction="column" mt="4" bg="
#ffc4cd" ml={isNotSmallerScreen ? 4 : 0} h="30vh" w="30vh" justify="flex-end">
                    <Flex rounded="xl" direction="column" p="4" as={DiBootstrap} w="24" h="24" color="black" />

                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">Bootstrap</Text>
                </Flex>

                <Flex justifyContent={"center"} rounded="600px" direction="column" mt="4" bg="#ffe9ec" ml={isNotSmallerScreen ? 4 : 0} h="30vh" w="30vh" justify="flex-end">
                    <Flex rounded="xl" direction="column" p="4" as={DiWordpress} w="24" h="24" color="black" />

                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">WordPress </Text>
                </Flex>

            </Flex>
            {/* 4 part */}
            <Flex justifyContent={"center"} w="full" mt="3%" mb="3%">
                <Stack>
                    <Heading textAlign="center" color={isDark ? "#ff6a80" : "gray.600"}>Our Top Courses</Heading>
                    <Text textAlign="center" pb="12" color={isDark ? "#a06d83" : "gray.600"}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</Text>
                </Stack>
            </Flex>
            {/* 5th part */}
            <Flex justifyContent={"center"} bg="pink" pb="12" pt="12">
                <Stack>
                    <VStack><HStack><Heading color={isDark ? "black" : "gray.600"}>SUSCRIBE TO OUR NEWSLETTER</Heading><FormControl isRequired>

                        <Input id='first-name' color="black" placeholder='First name' variant="flushed" borderColor={isDark ? "black" : "black.400"} />
                        <Input id='e-name' color="black" placeholder='Email' variant="flushed" borderColor={isDark ? "black" : "balck.400"} />
                    </FormControl>
                    </HStack>



                    </VStack>


                </Stack>

            </Flex>
            <Heading mt="3%" pt="12" textAlign={"center"} color={isDark ? "#ff6a80" : "gray.600"}>STUDENTS REVIEW</Heading>
            <Text textAlign={"center"} color={isDark ? "#a06d83" : "gray.600"}>Lorem Ipsum is simply dummy text of  standard dummy text ever since the 1500s, unknown printer took<Divider /> a galley of type and scrambled it to make a type specimen book. It has survived not only five </Text>
            {/* 6 th part */}
            <Flex mt="6%" justifyContent={"center"} pb="22" direction={isNotSmallerScreen ? "row" : "column"} flexWrap={"Wrap"}>
                {/* //1 */}
                <Flex marginRight={"6%"} justifyContent={"center"} paddingLeft="9px" direction="column" mt="4" bg="#ff9dab" h="30vh" w="30vh" justify="flex-start">
                    <Icon color={isDark ? "black" : "gray.600"} direction="column" as={StarIcon} p="4" w="24" h="24" />

                    <Text p="4" fontSize="xl" fontWeight="semibold" color={isDark ? "black" : "gray.600"}>Lorem Ipsum is simply dummy text of the printing andn printer took a galley of type</Text>
                    <WrapItem>
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    </WrapItem>
                </Flex>
                {/* //2 */}
                <Flex marginRight={"6%"} justifyContent={"center"} direction="column" mt="4" bg="#ffb6c1" ml={isNotSmallerScreen ? 4 : 0} h="30vh" w="30vh" justify="center" >
                    <Icon color={isDark ? "black" : "gray.600"} direction="column" as={TimeIcon} p="4" w="24" h="24" />

                    <Text color={isDark ? "black" : "gray.500"} p="4" fontSize="xl" fontWeight="semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.e</Text>
                    <WrapItem>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    </WrapItem>
                </Flex>

                {/* //3 */}
                <Flex justifyContent={"center"} direction="column" mt="4" bg="#ffe9ec" ml={isNotSmallerScreen ? 4 : 0} h="30vh" w="30vh" justify="flex-end">

                    <Icon color={isDark ? "black" : "gray.600"} direction="column" as={InfoIcon} p="4" w="24" h="24" />

                    <Text color={isDark ? "black" : "gray.500"} p="4" fontSize="xl" fontWeight="semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.e</Text>
                    <WrapItem>
                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                    </WrapItem>

                </Flex>



            </Flex>


            <Box w="full" bg="pink" pt="12" pb="12" mt="3%" >
                <Container as={Flex} flexWrap="Wrap" w="full" maxW={"container.xl"}>
                    <HStack spacing='2px' >

                        <Box as={Flex} justifyContent="center" ><Icon color="black" as={FaGithub} w={9} h={8} /><Text color={isDark ? "black" : "gray.600"} >GitHub is where over 73 million developers shape the future of </Text></Box>
                        <Box as={Flex} justifyContent="center" ><Icon color="black" as={FaAmazon} w={9} h={8} /><Text color={isDark ? "black" : "gray.600"}>Use LinkedIn Jobs to boost your chances of getting hired through </Text></Box>
                        <Box as={Flex} justifyContent="center" ><Icon color="black" as={FaAppStore} w={9} h={8} /><Text color={isDark ? "black" : "gray.600"}>Amazon.com, Inc. is an American multinational technology company</Text></Box>
                    </HStack>

                </Container>
            </Box>

            {/* //footer */}

            <Flex mt="3%" bg="#ff91a4" color='white' flexWrap={"wrap"} justifyContent={"space-around"} w="full" direction={isNotSmallerScreen ? "row" : "column"} >
                <Box size='200px'>
                    <Heading color={isDark ? "#a06d83" : "gray.600"} fontSize={"5xl"}>OUR ACADEMY</Heading>
                    <Divider />
                    <Text color={isDark ? "black" : "gray.600"}>Reference site about Lorem Ipsum, giving information on its origins, as </Text>
                    <Text color={isDark ? "black" : "gray.600"}>Reference site about Lorem Ipsum, giving information on its origins, as </Text>
                    <Text color={isDark ? "black" : "gray.600"} >Reference site  </Text>
                    <Heading color="#e53071" fontStyle={"oblique"} fontSize="4xl">Adverting</Heading>
                </Box>

                <Box size='150px'>
                    <Heading color={isDark ? "#a06d83" : "gray.600"}>Explore Link</Heading>

                    <Text color={isDark ? "black" : "gray.600"}><ul>
                        <li>Our Vision</li>
                        <li>Services</li>
                        <li>Forum</li>
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>Cookies</li>
                        <li>Home</li>
                        <li>Contact</li>
                    </ul></Text>
                </Box>
                <Box size='150px'>
                    <Heading color={isDark ? "#a06d83" : "gray.600"}>About</Heading>
                    <Text color={isDark ? "black" : "gray.600"}><ul>
                        <li>< InfoIcon />Our Vision</li>
                        <li><WarningIcon />Services</li>
                        <li><WarningTwoIcon />Forum</li>
                        <li><TimeIcon />Help Center</li>
                        <li><ViewIcon />Privacy Policy</li>
                    </ul>
                    </Text>
                </Box>
                <Box size='150px'>
                    <Heading color={isDark ? "#a06d83" : "gray.600"}>Contact Us</Heading>
                    <HStack>
                        <Icon color="black" w={8} h={8} as={FaLinkedin} />

                        {/* Use the `boxSize` prop to change the icon size */}
                        <Icon color="black" as={FaFacebook} w={8} h={8} />

                        {/* Use the `color` prop to change the icon color */}
                        <Icon color="black" as={FaAmazon} w={8} h={8} />
                        <Icon color="black" as={FaInstagram} w={8} h={8} />
                        <Icon color="black" as={FaWhatsapp} w={8} h={8} />
                    </HStack>
                </Box>


            </Flex>
        </>
    )
}

export default Website1