import { GridItem, Image, Text, Flex } from "@chakra-ui/react";

function DocText(props: string) {
  return (
    <Flex>
      <Image src="/grey_rectangle.svg" alt="noimage" />
      <Text > {props.text} </Text>
    </Flex>
  );
}
export default DocText;
