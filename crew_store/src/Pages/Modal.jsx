import { useDisclosure } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalFooter,Text} from "@chakra-ui/react"
function Modals() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
      <div style={{margin:"auto", width:"20%", marginBottom:"20px"}}>
        <Button w={80} textAlign="center" onClick={onOpen}>Place order</Button>
        </div> 
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader>Successfully your order</ModalHeader>
            <Text textAlign='center'>Your order is successful completed, you can continue shopping... </Text>
            <ModalFooter>
              <Link to={"/"}><Button colorScheme='blue' mr={3} onClick={onClose}>
                Go to Home
              </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Modals