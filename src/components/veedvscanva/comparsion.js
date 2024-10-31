import { Card, Image, Text, Group, ActionIcon, Anchor, Title, Divider, Flex } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

export default function ComparisonPage({message}) {
  return (
    <div style={{ padding: '20px' }}>
      <Title order={2} align="center" style={{ marginBottom: '20px' }}>
        {message.title1.toUpperCase()} vs. {message.title2.toUpperCase()}
      </Title>

      <Divider style={{ marginBottom: '20px' }} />

      <Flex justify="center" align="center" gap="xl">
        {/* Add Product Card */}
        {/* <Card withBorder style={{ textAlign: 'center', padding: '20px', width: '150px' }}>
          <Anchor href="#" style={{ color: '#4a90e2', fontWeight: 'bold', fontSize: '16px' }}>
            + Add Product
          </Anchor>
        </Card> */}

        {/* Canva Card */}
        <Card withBorder style={{ width: '350px', textAlign: 'center' }}>
          <Group position="center" spacing="xs" direction="column">
            <Image
              src='/canva-seeklogo.png'
              alt="Canva"
              width={100}
              height={100}
              fit="contain"
            />
            <Text weight={700} size="lg">{message.title1.toUpperCase()}</Text>
            <Text color="dimmed" size="sm">1574 Reviews and Ratings</Text>
          </Group>
        </Card>

        {/* VEED.IO Card */}
        <Card withBorder style={{ width: '350px'}}>
          <Flex justify="space-between" align="center">
            <Group position="center" direction="column" style={{ flex: 1 }}>
              <Image
                src='https://cdn.brandfetch.io/idZH2qyymR/w/400/h/400/theme/dark/icon.jpeg?k=bfHSJFAPEG'
                alt="VEED.IO"
                width={100}
                height={100}
                fit="contain"
              />
              <Text weight={700} size="lg">{message.title2.toUpperCase()}</Text>
              <Text color="dimmed" size="sm">11 Reviews and Ratings</Text>
            </Group>
            {/* <ActionIcon variant="transparent" size="lg">
              <IconX size={18} />
            </ActionIcon> */}
          </Flex>
        </Card>
      </Flex>
    </div>
  );
}
