import {
  Box,
  Group,
  SegmentedControl,
  SimpleGrid,
  Text,
  ThemeIcon,
} from "@mantine/core"

export default function Header() {
  return (
    <Box
      bg={"gray.0"}
      px="xl"
      py="lg"
      style={{
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.15)",
      }}
    >
      <SimpleGrid
        cols={{
          md: 2,
          lg: 3,
        }}
      >
        <Group gap={10}>
          <ThemeIcon size="md" color="gray" radius={0}></ThemeIcon>
          <Text size="xl">York Woodworking Ltd.</Text>
        </Group>
        <SegmentedControl
          data={[
            { value: "home", label: "Home" },
            { value: "services", label: "Services" },
            { value: "our-work", label: "Our work" },
            { value: "contact-us", label: "Contact us" },
          ]}
          styles={{
            root: { borderRadius: 0, backgroundColor: "transparent" },
            label: { borderRadius: 0 },
            indicator: { borderRadius: 0 },
          }}
        />
      </SimpleGrid>
    </Box>
  )
}
