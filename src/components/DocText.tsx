import {
  Image,
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

interface DocTextProps {
  text: string;
}

function DocText(props: DocTextProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const words = props.text.split(" ");
  const firstFiveWords = words.slice(0, 5).join(" ");

  return (
    <Box position="relative" onClick={onOpen}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Document</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.text}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Image src="/grey_rectangle.svg" alt="alt text" />
      <Box
        position="absolute"
        top="50%"
        left="40%"
        transform="translate(-50%, -50%)"
      >
        <Text fontSize="20px" lineHeight="32px">
          {firstFiveWords}
        </Text>
      </Box>
    </Box>
  );
}
export default DocText;
