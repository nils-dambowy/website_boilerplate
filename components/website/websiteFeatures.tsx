import {
  Center,
  Text,
  Badge,
  Card,
  Group,
  SimpleGrid,
  Container,
  Divider,
  useMantineTheme
} from "@mantine/core";

import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";


import classes from "./HeaderMegaMenu.module.css"

const mockdata = [
  {
    title: "Extreme performance",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
    icon: IconGauge
  },
  {
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: IconUser
  },
  {
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: IconCookie
  }
];

export function Features() {

  const theme = useMantineTheme();

  const features = mockdata.map((item) => (
    <Card shadow="md" radius="md" p="xl">
      <item.icon size={50} stroke={2} color={theme.colors.blue[6]} />
      <Divider color={theme.colors.blue[6]} size="md" className={classes.CardDivider} />
      <Text size="lg">
        {item.title}
      </Text>
      <Text size="sm">
        {item.description}
      </Text>
    </Card>
  ))

  return (
    <Container>
      <Center>
        <Group>
          <Badge variant="gradient">
            Wow, what a nice badge!
          </Badge>
        </Group>
      </Center>

      <SimpleGrid
        cols={3}
        mt={50}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
