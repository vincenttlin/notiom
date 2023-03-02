import { Grid, GridItem, Image } from "@chakra-ui/react";

function Documents() {
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
        <Image src="/blue.svg" alt="noimage" />
    </GridItem>
    <GridItem>
    <Image src="/grey_rectangle.svg" alt="noimage" />
    </GridItem>
    <GridItem>
    <Image src="/grey_rectangle.svg" alt="noimage" />
    </GridItem>
    <GridItem>
    <Image src="/grey_rectangle.svg" alt="noimage" />
    </GridItem>
    <GridItem>
    <Image src="/grey_rectangle.svg" alt="noimage" />
    </GridItem>
    <GridItem>
    <Image src="/grey_rectangle.svg" alt="noimage" />
    </GridItem>
    <GridItem>
    <Image src="/grey_rectangle.svg" alt="noimage" />
    </GridItem>
    <GridItem>
    <Image src="/grey_rectangle.svg" alt="noimage" />
    </GridItem>
    <GridItem>
    <Image src="/grey_rectangle.svg" alt="noimage" />
    </GridItem>
    <GridItem>
    <Image src="/grey_rectangle.svg" alt="noimage" />
    </GridItem>
    <GridItem>
    <Image src="/grey_rectangle.svg" alt="noimage" />
    </GridItem>
    <GridItem>
    <Image src="/grey_rectangle.svg" alt="noimage" />
    </GridItem>
    </Grid>
  );
}

export default Documents;
