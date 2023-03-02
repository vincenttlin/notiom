import { Flex, Text } from "@chakra-ui/react";

const styles = {
  container: {
    backgroundColor: "#F5F5F5",
  },
  title: {
    position: "absolute",
    width: "460px",
    height: "78px",
    left: "526px",
    top: "176px",
    color: "#545454",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "60px",
    lineWeight: "78px",
  },
  subtitle: {
    position: "absolute",
    width: "1039px",
    height: "52px",
    left: "290px",
    top: "297px",

    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "40px",
    lineHeight: "52px",
    color: "#545454",
  },
} as const;

function Intro() {
  return (
    <Flex backgroundColor="#F5F5F5" height="400px">
      <Flex>
        <Text style={styles.title}> Create. Explore. </Text>
        <Text style={styles.subtitle}>
          The document editing software you've been waiting for
        </Text>
      </Flex>
    </Flex>
  );
}

export default Intro;
