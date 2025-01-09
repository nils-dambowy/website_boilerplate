import {
  Center,
  Text,
  Button,
  Title,
  Container
} from "@mantine/core";

import classes from "./HeaderMegaMenu.module.css"

export function HeroText() {

  return (
    <Center>
      <div className={classes.HeroDiv}>
        <Title className={classes.title}>HeroText title!</Title>
        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            This is a very interesting description for a very interesting website.
            There is some content on this website, which may or may not be any good!
            Only one way to find out!
          </Text>
        </Container>

        <div className={classes.HeroButtonDiv}>
          <Button
            size="lg"
            variant="default"
            color="gray"
            className={classes.HeroButtons}
          >
            More Information
          </Button>

          <Button
            size="lg"
            className={classes.HeroButtons}
          >
            Less Information
          </Button>
        </div>
      </div>
    </Center>
  );
}
