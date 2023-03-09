import {
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";

import DocText from "./DocText";

function Documents() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const list: React.ReactElement[] = [];
  const [docs, setDocs] = useState(list);
  const [text, setText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);
  function increase() {
    setDocs(docs.concat(<DocText text={text} />));
    setText("");
  }
  return (
    <Grid
      templateColumns="repeat(6, 2fr)"
      gap={8}
      color="black"
      paddingLeft="5%"
      paddingRight="5%"
      position="absolute"
      width="1512px"
      height="459px"
      left="0px"
      top="523px"
      background="#FFFFFF"
    >
      <GridItem>
        <Image src="/blue.svg" alt="noimage" onClick={onOpen} />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>New Document</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {" "}
              <Input
                value={text}
                onChange={handleChange}
                placeholder="Enter Text"
              />{" "}
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  increase();
                  onClose();
                }}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </GridItem>
      {docs.map((doc, index) => (
        <GridItem key={index} width="100%">
          {doc}
        </GridItem>
      ))}
    </Grid>
  );
}
export default Documents;
