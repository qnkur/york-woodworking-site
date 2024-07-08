import {
  Text,
  Title,
  TextInput,
  Button,
  Image,
  Card,
  List,
  ListItem,
  rem,
} from "@mantine/core"
import classes from "./BigServiceCard.module.css"
import { IconRulerMeasure } from "@tabler/icons-react"

export function BigServiceCard() {
  return (
    <Card shadow="md" radius="md" className={classes.card} padding="xl" mt="lg">
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <IconRulerMeasure
            style={{ width: rem(40), height: rem(40) }}
            stroke={1.5}
          />
          <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
            Tailored millwork for every space:
          </Text>
          <List mt="sm" c="dimmed">
            <ListItem>Cabinetry, shelving, and storage solutions</ListItem>
            <ListItem>Kitchens, kitchenettes, and break rooms</ListItem>
            <ListItem>Reception desks, countertops, and waiting areas</ListItem>
            <ListItem>
              Outdoor furniture and equipment, picnic tables, benches
            </ListItem>
            <ListItem>Wall paneling, window sills, dividers</ListItem>
            <ListItem>Fixed and mobile cubbies</ListItem>
            <ListItem>
              Library shelving, mobile displays, seating booths
            </ListItem>
          </List>
          <div className={classes.controls}>
            <Button className={classes.control}>Contact us</Button>
          </div>
        </div>
        <Image
          visibleFrom="md"
          className={classes.image}
          src={
            "https://plus.unsplash.com/premium_photo-1682597001007-917653ad933b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          h={400}
          w={400}
          alt={"placeholder image"}
        />
      </div>
    </Card>
  )
}
