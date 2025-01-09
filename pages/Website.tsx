import { Container, Space } from "@mantine/core";
import { HeaderMenu } from "../components/website/websiteMenu";
import { HeroText } from "../components/website/websiteHeroText";
import { Features } from "../components/website/websiteFeatures";

export default function Website() {
  return (
    <Container py="md">
      <HeaderMenu />
      <HeroText />
      <Space h={100} />
      <Features />
    </Container>
  );
}
