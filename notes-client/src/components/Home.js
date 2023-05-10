import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  ThemeIcon,
  rem,
  Header,
  Grid,
  Col,
  SimpleGrid,
  Paper,
  Anchor,
} from "@mantine/core";
import Head from "./Head";
import {
  IconBrandGithub,
  IconEdit,
  IconLockSquare,
  IconReceiptOff,
  IconRefresh,
} from "@tabler/icons-react";
import { useRef } from "react";

const features = [
  {
    icon: IconLockSquare,
    title: "End to end Encrypted",
    description:
      "All notes are encrypted on your device before they are sent to the server. Even the service provider can't access the notes because only the user holds the decryption keys.",
  },
  {
    icon: IconRefresh,
    title: "Multi-device synchronization",
    description:
      "Notes are synced in real-time across all devices that a user has the app installed on. Changes made on one device should be reflected on all others.",
  },
  {
    icon: IconEdit,
    title: "Rich-text editor",
    description:
      "Support for different fonts, headings, bullet points, checkboxes, images, tables, hyperlinks, etc.",
  },
  {
    icon: IconReceiptOff,
    title: "Free and open source",
    description:
      "This app is published under MIT license, you can use CypherPad in any project",
  },
];

const links = [
  {
    label: "Contact",
  },
  {
    label: "Privacy",
  },
  {
    label: "Blog",
  },
  {
    label: "Careers",
  },
];

const useStyles = createStyles((theme) => ({
  inner: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title1: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(50),
    lineHeight: 1.2,
    fontWeight: 700,
    marginBottom: rem(20),
    marginTop: rem(20),
    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(28),
    lineHeight: 1.2,
    fontWeight: 700,
    marginBottom: rem(20),

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: 0,
    padding: `${rem(4)} ${rem(12)}`,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    marginBottom: rem(40),
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xl,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(18),
    },
  },
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const childRef = useRef();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon size={44} gradient={{ deg: 133, from: "blue", to: "cyan" }}>
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  const items1 = links.map((link) => (
    <Anchor
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div>
      <Header height={{ base: 60, md: 60 }} p="xl" mb={120}>
        <div className={classes.inner}>
          <Group>
            <Image src="logo.svg" maw={150} />
          </Group>
          <Head ref={childRef} />
        </div>
      </Header>

      <Paper
        shadow="xs"
        p="md"
        style={{
          borderTop: "1px solid #2C2E33",
          borderBottom: "1px solid #2C2E33",
        }}
      >
        <Container>
          <h1 className={classes.title1}>
            An{" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              inherit
            >
              End-to-end encrypted
            </Text>{" "}
            notes app
          </h1>

          <Text className={classes.description} color="dimmed">
            Build fully functional accessible web applications with ease –
            Mantine includes more than 100 customizable components and hooks to
            cover you in any situation
          </Text>

          <Group className={classes.controls}>
            <Button
              size="xl"
              className={classes.control}
              gradient={{ from: "blue", to: "cyan" }}
              onClick={() => childRef.current.open()}
            >
              Get started
            </Button>

            <Button
              component="a"
              href="https://github.com/pathikpatel54/CypherPad"
              size="xl"
              variant="default"
              className={classes.control}
              leftIcon={<IconBrandGithub size={20} />}
            >
              GitHub
            </Button>
          </Group>
        </Container>
      </Paper>

      <Paper
        shadow="xs"
        p="md"
        style={{
          borderBottom: "1px solid #2C2E33",
        }}
      >
        <Container>
          <div
            className={classes.wrapper}
            style={{ marginTop: "30px", marginBottom: "30px" }}
          >
            <Grid gutter={80}>
              <Col span={12} md={5}>
                <Title className={classes.title} order={4}>
                  A state-of-the-art secure notes app, designed with user
                  privacy at its core.
                </Title>
                <Text c="dimmed">
                  Available across multiple platforms, Our Secure Notepad is
                  your go-to solution for secure, private note-taking. With a
                  user-friendly interface, dark mode for low-light conditions,
                  and quick search options, your note-taking experience will be
                  smoother than ever. Join us in redefining note-taking with a
                  secure, encrypted approach. With Your Secure Notepad, your
                  notes are private and always within reach.
                </Text>
              </Col>
              <Col span={12} md={7}>
                <SimpleGrid
                  cols={2}
                  spacing={30}
                  breakpoints={[{ maxWidth: "md", cols: 1 }]}
                >
                  {items}
                </SimpleGrid>
              </Col>
            </Grid>
          </div>
        </Container>
      </Paper>

      <div className={classes.footer}>
        <Container className={classes.inner1}>
          <Image src="logo.svg" maw={170} />
          <Group className={classes.links}>{items1}</Group>
        </Container>
      </div>
    </div>
  );
}
