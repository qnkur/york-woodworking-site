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
      px="xl"
      py="lg"
      style={{
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.15)",
        position: "sticky",
        top: 0,
        zIndex: 999, // Adjust the z-index as needed to ensure it overlays correctly
        backdropFilter: "blur(10px)",
        //background opacity
        backgroundColor: "rgba(255, 255, 255, 0.9)",
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
