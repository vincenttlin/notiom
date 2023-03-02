import { Flex, Image, Text } from "@chakra-ui/react";

const styles = {
  title: {
    position: "absolute",
    marginLeft: "100px",
    marginTop: "10px",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    color: "#545454",
  },
} as const;

function NavBar() {
  return (
    <Flex
      backgroundColor="#F5F5F5"
      justifyContent="space-between"
      alignContent="center"
      padding=".7%"
    >
      <Flex>
        <Image
          src="/N.svg"
          alt="noimage"
          alignContent="center"
          marginLeft="20px"
          marginTop="10px"
        />
        <Text style={styles.title}>Notiom</Text>
      </Flex>
      <Flex padding="10px">
        <Image src="/blue_create.svg" alt="noimage" />
      </Flex>
    </Flex>
  );
}

export default NavBar;
