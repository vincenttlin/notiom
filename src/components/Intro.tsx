/* eslint-disable react/no-unescaped-entities */
import { Flex, Text } from "@chakra-ui/react";

const styles = {
  container: {
    backgroundColor: "#F5F5F5",
  },
  title: {
    marginTop: "10vh",
    marginLeft: "65vh",
    marginBottom: "1vh",
    marginRight: "20vh",
    color: "#545454",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "60px",
    lineWeight: "78px",
  },
  subtitle: {
    marginTop: "3vh",
    marginLeft: "40vh",
    marginRight: "20vh",
    marginBottom: "5vh",
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
      <Flex direction="column">
        <Text style={styles.title}> Create. Explore. </Text>
        <Text style={styles.subtitle}>
          The document editing software you've been waiting for
        </Text>
      </Flex>
    </Flex>
  );
}

export default Intro;
