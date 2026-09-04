import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export default function Provider(props){
    return(
        <ChakraProvider value={defaultSystem}>
            {props.children}
        </ChakraProvider>
    )
}