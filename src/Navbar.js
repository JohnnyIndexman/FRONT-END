import { CalendarIcon, EditIcon, AtSignIcon, AttachmentIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";

const Navbard = () => {
    return ( 
        <List color='white' fontSize='20px' spacing={4}>
            <ListItem>
                <a href='/'>
                  <ListIcon as={CalendarIcon} color='black'/>  
                  Dashboard
                </a>
            </ListItem>
            <ListItem>
                <a href='/Create'>
                  <ListIcon as={EditIcon} color='black'/>
                  New Task
                </a>
            </ListItem>
            <ListItem>
                <a href='/Profile'>
                  <ListIcon as={AtSignIcon} color='black'/>
                  Profile
                </a>
            </ListItem>
            <ListItem>
                <a href='/Projects'>
                  <ListIcon as={AttachmentIcon} color='black'/>
                  Projects
                </a>
            </ListItem>
        </List>
     );
}
 
export default Navbard;