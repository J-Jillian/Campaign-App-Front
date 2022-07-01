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
        <Text weight={500} uppercase >The African Women’s Development Fund</Text>
        <Badge color="pink" variant="light">
          Funds for ONG
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
      The African Women’s Development Fund (AWDF) is a Pan-African grant making organisation that supports the realisation and fulfillment of African women’s rights through 
      funding of autonomous women’s organisations on the continent.
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
        <Text weight={500}>Medical aid for Ukraines</Text>
        <Badge color="pink" variant="light">
          Funds for Medical aid
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
      Send medications, medical equipment and essential products to our warehouse, and we will quickly deliver your packages to the Armed Forces of Ukraine, Ministry of Health and Ministry 
      of Reintegration for further distribution to those in need.

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
        <Text weight={500}>Protect the oceans</Text>
        <Badge color="pink" variant="light">
          Funds for Environment
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
With your help we can stop plastic pollution at the source and protect marine life and habitats for generations to come. This Plastic Free July, join Oceana in our mission to protect the world’s oceans.    


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
         
        />
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>Every child should have good food</Text>
        <Badge color="pink" variant="light">
          Funds for ONG
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
      Children going hungry isn’t new. But many of the reasons are: pandemics, rising prices and disasters caused by climate change.
      Our hunger relief  and nutrition programmes help millions every year.
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
        <Text weight={500}>Extinction means forever</Text>
        <Badge color="pink" variant="light">
          Funds for: Animal
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
        <Text weight={500}>Every child has the right to learn</Text>
        <Badge color="pink" variant="light">
          Funds for education
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
      Education boosts economic growth and reduces poverty and inequality. It increases individuals’ ability to lead a healthy life, participate in society and restore peace and stability.
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