'use client';

import { useState } from 'react';
import { Popover, ScrollArea, Button, Group, Text, Box, Divider, Flex, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const archiveCategories = [
  'Audio','Image', 'Video'
];

const archiveFormats = [
  '7Z', 'ACE', 'ALZ', 'ARC', 'ARJ', 'BZ', 'BZZ', 'CAB', 'CPIO', 'DEB', 'DMG', 'GZ',
  'IMG', 'ISO', 'JAR', 'LHA', 'LZ', 'LZMA', 'LZO', 'RAR', 'RPM'
];

export default function Popupc() {
  const [opened, setOpened] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter formats based on search term
  const filteredFormats = archiveFormats.filter((format) =>
    format.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
      trapFocus
      target={
        <Button variant="default" onClick={() => setOpened(true)}>
          Select Format
        </Button>
      }
      style={{width:'20%'}}
      styles={{
        popover: { backgroundColor: '#202020', color: 'white' },
      }}
    >
      {/* Search Bar */}
      <TextInput
        placeholder="Search Format"
        icon={<IconSearch size={14} />}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.currentTarget.value)}
        mb="sm"
        styles={{
          input: { backgroundColor: '#1e1e1e', color: 'white', borderColor: '#444'},
          icon: { color: 'white' }
        }}
        style={{ width: '40%' }}  // Ensure search bar takes full width of the popover
      />

      <Flex align="flex-start">
        {/* Category List */}
        <ScrollArea style={{ height: 300, width: 100,backgroundColor:'#1e1e1e',color:'white',paddingLeft:'15px',borderRadius:'5px'}}>
          <Box>
            {archiveCategories.map((category, index) => (
              <Text key={index} style={{ margin: '8px 0', cursor: 'pointer' }}>
                {category}
              </Text>
            ))}
          </Box>
        </ScrollArea>

        <Divider orientation="vertical" />

        {/* Format Grid */}
        <ScrollArea style={{ height: 300, width: '30%',backgroundColor:'#1e1e1e',color:'white',paddingLeft:'30px',paddingTop:'10px',paddingBottom:'5px'}}>
          <Flex wrap="wrap" gap="sm">
            {filteredFormats.length > 0 ? (
              filteredFormats.map((format, index) => (
                <Button
                  key={index}
                  variant="outline"
                  color="gray"
                  style={{ width: 70, height: 40,backgroundColor:'#303030',color:'white'}}
                  onClick={() => setOpened(false)} // Close on selection
                >
                  {format}
                </Button>
              ))
            ) : (
              <Text>No results found</Text>
            )}
          </Flex>
        </ScrollArea>
      </Flex>
    </Popover>
  );
}