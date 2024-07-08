import { Image, Card, Text, Group, Button, rem, Box } from "@mantine/core"
import { Carousel } from "@mantine/carousel"
import { IconStar } from "@tabler/icons-react"
import classes from "./CarouselCard.module.css"

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
]

export function CarouselCard(props: { title: string; description: string }) {
  const { title, description } = props
  const slides = images.map((image) => (
    <Image key={image} src={image} mah={220} />
  ))
  return (
    <Card radius={0} withBorder padding="xl">
      <Box mx={-32} mt={-32}>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Box>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg">
          {title}
        </Text>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>
    </Card>
  )
}
