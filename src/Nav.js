import { Flex, Heading, Text, Button, Spacer, HStack, useToast, Avatar } from "@chakra-ui/react";
import img1 from './image/pexels-chloe-1043474-man1.jpg'
const Navbar = () => {
   
  const cherry = useToast();
  const showCherry = () => {
    cherry({
      title: 'Logged out',
      description: "You're successfully logged out",
      duration: 3000,
      isClosable: true,
      status: 'success',
      position: 'top-right'
    })
  }


    return (  
       <Flex as ='nav' p='10px' alignItems='center' mb='40px'>
          <Heading as='h1'>IndexFashion</Heading>
          <Spacer />

        <HStack spacing='10px'>
          <Avatar src={img1}/>
          <Text>indexman@gmail.com</Text>
          <Button colorScheme="purple" onClick={showCherry}>Logout</Button>
        </HStack>
          
       </Flex>
    );
}
 
export default Navbar;