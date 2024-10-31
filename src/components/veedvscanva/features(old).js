import { Flex, Box, Text } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

const features = [
  { name: 'Grammar and Style Checks', productA: true, productB: false },
  { name: 'SEO Optimization', productA: true, productB: false },
  { name: 'Plagiarism Check', productA: true, productB: false },
  { name: 'Collaboration Features', productA: true, productB: false },
  { name: 'Content Personalization', productA: true, productB: false },
  { name: 'Multilingual Support', productA: true, productB: true },
  { name: 'API Access', productA: true, productB: false },
  { name: 'Text Editing and Formatting', productA: true, productB: true },
  { name: 'Compliance and Security Measures', productA: true, productB: false },
];

const heading = {
    heading1:'Writing Features',
    heading2:'Writing Features'
}
export default function FeatureComparison() {
  return (
    <Flex justify='space-evenly' style={{ padding: '20px' }}>
      {/* Left Side - Product A Features */}
      <Box style={{ maxWidth: '45%' }}>
        <Text size="lg" weight={700} align="center" style={{ marginBottom: '10px' }}>
          Writing Features
        </Text>
        {features.map((feature, index) => (
          <Flex key={index} align="center" style={{ marginBottom: '5px' }}>
            {feature.productA ? (
              <IconCheck size={20} color="green" />
            ) : (
              <IconX size={20} color="red" />
            )}
            <Text size="sm" style={{ marginLeft: '10px' }}>
              {feature.name}
            </Text>
          </Flex>
        ))}
      </Box>

      {/* Right Side - Product B Features */}
      <Box style={{ maxWidth: '45%' }}>
        <Text size="lg" weight={700} align="center" style={{ marginBottom: '10px' }}>
          Writing Features
        </Text>
        {features.map((feature, index) => (
          <Flex key={index} align="center" style={{ marginBottom: '5px' }}>
            {feature.productB ? (
              <IconCheck size={20} color="green" />
            ) : (
              <IconX size={20} color="red" />
            )}
            <Text size="sm" style={{ marginLeft: '10px' }}>
              {feature.name}
            </Text>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
