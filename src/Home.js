import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Card, CardBody, CardFooter, CardHeader, SimpleGrid, Heading, Button, Flex, Box, Text, HStack, Divider, Avatar } from "@chakra-ui/react"
import img1 from './image/pexels-chloe-1043474-man1.jpg'
import img2 from './image/man7.jpg'
import img3 from "./image/man3.jpg"
import img4 from "./image/png-clipart-woman-wearing-multicolored-headdress-and-top-model-fashion-african-american-jourdan-dunn-model-celebrities-hair-accessory-thumbnail.png"

const Home = () => {
  const blogs = 
     [
          {
              id:1,
              title:"Fix the number",
              description: "There is an issue with the navbar on the homepage. It is not displaying correctly on mobile devices.",
              author: "Nnamdi",
              img: img2
  
  },
  {
      id:2,
      title:"Add links to the footer",
      description: "The footer is currently empty. We need to add some links to import pages on the site.",
      author: "Indexman",
      img: img3
  },
  
  {
      id:3,
      title:"Update the contact form",
      description: "The contact form is not working properly. We need to fix the form validation and make sure the form submissions are being sent to the correct email address. ",
      author: "Galaxy",
      img: img4
  },
  {
      d:4,
      title:"Improve the site's performance",
      description: "The site is currently running slow. We need to optimie images and minify CSS and JavaScript to improve the site's loading speed.",
      author: "Kuti Ransom",
      img: img1
  }
  ]
  
  

    return (

      <SimpleGrid spacing='10px'  minChildWidth='300px'>
        {blogs.map((blog)=>(
           <Card borderTop='8px' borderColor='purple.400'>
            <CardHeader key={blog.id}>
              <Flex justify='space-between'>
                <Box>
                  <Heading as='h3' size='md'>{blog.title}</Heading>
                  <Text>By: {blog.author}</Text>
                </Box>
                  <Avatar src={blog.img}/>
              </Flex>
            </CardHeader>
            <CardBody>{blog.description}</CardBody>

            <Divider color='gray.400'/>
            <CardFooter>
            <HStack>
              <Button variant='ghost' rightIcon={<ViewIcon/>}>Watch</Button>
              <Button variant='ghost' leftIcon={<EditIcon/>}>Comment</Button>
            </HStack>
            </CardFooter>
           </Card>
           
        )) }
        
        
      </SimpleGrid>
       
        
      );
}
 
export default Home;