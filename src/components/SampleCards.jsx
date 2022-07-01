import { Box, Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import React from 'react';
import ukrania from '../img/ukrania.jpg'
import guille from '../img/guille.jpg'
import larm from '../img/larm.jpg'
import annie from '../img/annie.jpg'
import aj from '../img/aj.jpg'
import spratt from '../img/spratt.jpg'

function SampleCards() {
  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
<div>
  <Box  mx="auto"  sx={{
            display: 'grid',
            gridTemplate: '1fr / 1fr 1fr',
            gridAutoRows: '1fr',
            gap: '20px',
            margin: '20px',
            maxWidth: 600,

          }}>
<Card shadow="sm" p="lg">
      <Card.Section component="b" href="https://mantine.dev" target="_blank">
        <Image
          src={annie}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button  variant="outline" color="dark" radius="xl" size="xs"  fullWidth style={{ marginTop: 14 }}>
        Donate
      </Button>
    </Card>



    <Card shadow="sm" p="lg">
      <Card.Section component="a" href="https://mantine.dev" target="_blank">
        <Image
          src={ukrania}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button  variant="outline" color="dark" radius="xl" size="xs"  fullWidth style={{ marginTop: 14 }}>
        Donate
      </Button>
    </Card>


    <Card shadow="sm" p="lg">
      <Card.Section component="a" href="https://mantine.dev" target="_blank">
        <Image
          src={guille}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button  variant="outline" color="dark" radius="xl" size="xs"  fullWidth style={{ marginTop: 14 }}>
        Donate
      </Button>
    </Card>


    <Card shadow="sm" p="lg">
      <Card.Section component="a" href="https://mantine.dev" target="_blank">
        <Image
          src={larm}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button  variant="outline" color="dark" radius="xl" size="xs"  fullWidth style={{ marginTop: 14 }}>
        Donate
      </Button>
    </Card>


    <Card shadow="sm" p="lg">
      <Card.Section component="a" href="https://mantine.dev" target="_blank">
        <Image
          src={aj}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>EXTINCTION MEANS FOREVER</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
      We are a wildlife conservation initiative on the front-lines 
      of the fight to save some of the world's most endangered wildlife by providing training, advisement of anti-poaching units.
      </Text>

      <Button  variant="outline" color="dark" radius="xl" size="xs"  fullWidth style={{ marginTop: 14 }}>
        Donate
      </Button>
    </Card>



    <Card shadow="sm" p="lg">
      <Card.Section component="a" href="https://mantine.dev" target="_blank">
        <Image
          src={spratt}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button  variant="outline" color="dark" radius="xl" size="xs"  fullWidth style={{ marginTop: 14 }}>
        Donate
      </Button>
    </Card>


    </Box>

</div>

    




  );
}


export default SampleCards