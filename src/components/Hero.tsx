import cx from "clsx"
import { Title, Text, Container, Button, Overlay } from "@mantine/core"
import classes from "./HeroImageBackground.module.css"

export function Hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.9} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>Custom Woodworking Solutions</Title>

        <Container size={640}>
          <Text fw={500} size="lg" className={classes.description}>
            Combining precision, durability, and high quality, our woodworking
            services are designed to meet the unique demands of institutional,
            commercial, and residential environments, providing exceptional
            results in every project.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            variant="white"
            size="lg"
            radius={0}
          >
            What we do
          </Button>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
            radius={0}
          >
            Contact us
          </Button>
        </div>
      </div>
    </div>
  )
}
