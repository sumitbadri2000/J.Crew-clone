import { useDisclosure } from "@chakra-ui/react"
import {Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalFooter,Text} from "@chakra-ui/react"
function Modals() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Place order</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Completed</ModalHeader>
            <ModalCloseButton />
            <Text>Your order successful complete , you can enjoy </Text>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Modals