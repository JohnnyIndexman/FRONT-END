import Home from "./Home";
import * as React from 'react'
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react'
import Navbar from "./Nav";
import Navbard from './Navbar'


    
function App() {
  return (
    <ChakraProvider>
      <Grid templateColumns='repeat(6, 1fr)' bg='gray.50'>
        <GridItem
        as='aside'
        colSpan={{base:6, lg:2, xl:1}}
        bg='purple.400'
        minHeight='100%'
        p={{base: '20px', lg: '30px'}}
        >
          <Navbard />
        </GridItem>
        <GridItem
        as='main'
        colSpan={{base:6, lg:4, xl:5}}
        p='40px'
        >
          <Navbar />
          <Home />
        </GridItem>
      </Grid>
    </ChakraProvider>
    
      
  );
}

export default App;
