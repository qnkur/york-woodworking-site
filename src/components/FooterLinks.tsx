import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  ThemeIcon,
} from "@mantine/core"
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react"
import classes from "./FooterLinks.module.css"

export function FooterLinks() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Group gap={10}>
            <ThemeIcon size="md" color="gray" radius={0}></ThemeIcon>
            <Text size="xl">York Woodworking Ltd.</Text>
          </Group>
          <Text mt="sm" size="xs" c="dimmed" className={classes.description}>
            11 Paisley Lane, Unit 4.
          </Text>
          <Text size="xs" c="dimmed" className={classes.description}>
            Uxbridge, ON L9P 0G5.
          </Text>
          <Text size="xs" c="dimmed" className={classes.description}>
            P: 905-850-7222
          </Text>
          <Text size="xs" c="dimmed" className={classes.description}>
            hello@yorkwoodworking.ca
          </Text>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 York Woodworking Ltd. All rights reserved.
        </Text>
      </Container>
    </footer>
  )
}
