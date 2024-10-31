// 'use client';

// import { useState } from 'react';
// import { Popover, ScrollArea, Button, Group, Text, Box, Divider, Flex, TextInput } from '@mantine/core';
// import { IconSearch } from '@tabler/icons-react';

// const archiveCategories = [
//   'Archive', 'Audio', 'Cad', 'Document', 'Ebook', 'Font', 'Image', 'Other', 
//   'Presentation', 'Spreadsheet', 'Vector', 'Video'
// ];

// const archiveFormats = [
//   '7Z', 'ACE', 'ALZ', 'ARC', 'ARJ', 'BZ', 'BZZ', 'CAB', 'CPIO', 'DEB', 'DMG', 'GZ',
//   'IMG', 'ISO', 'JAR', 'LHA', 'LZ', 'LZMA', 'LZO', 'RAR', 'RPM'
// ];

// export default function ArchiveFormatSelector() {
//   const [opened, setOpened] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filter formats based on search term
//   const filteredFormats = archiveFormats.filter((format) =>
//     format.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Popover
//       opened={opened}
//       onClose={() => setOpened(false)}
//       position="bottom"
//       width={350}
//       trapFocus
//       target={
//         <Button variant="default" onClick={() => setOpened(true)}>
//           Select Format
//         </Button>
//       }
//       styles={{
//         popover: { backgroundColor: '#202020', padding: '1rem', color: 'white' },
//       }}
//     >
//       {/* Search Bar */}
//       <TextInput
//         placeholder="Search Format"
//         icon={<IconSearch size={14} />}
//         value={searchTerm}
//         onChange={(event) => setSearchTerm(event.currentTarget.value)}
//         mb="md"
//         styles={{
//           input: { backgroundColor: '#333', color: 'white', borderColor: '#444' },
//           icon: { color: 'white' }
//         }}
//         // style={{width:'100%'}}
//       />

//       <Flex align="flex-start" gap="md">
//         {/* Category List */}
//         <ScrollArea style={{ height: 250, width: 100 }}>
//           <Box>
//             {archiveCategories.map((category, index) => (
//               <Text key={index} style={{ margin: '8px 0', cursor: 'pointer' }}>
//                 {category}
//               </Text>
//             ))}
//           </Box>
//         </ScrollArea>

//         <Divider orientation="vertical" />

//         {/* Format Grid */}
//         <ScrollArea style={{ height: 250, width: 180 }}>
//           <Flex wrap="wrap" gap="sm">
//             {filteredFormats.length > 0 ? (
//               filteredFormats.map((format, index) => (
//                 <Button
//                   key={index}
//                   variant="outline"
//                   color="gray"
//                   style={{ width: 50, height: 40 }}
//                   onClick={() => setOpened(false)} // Close on selection
//                 >
//                   {format}
//                 </Button>
//               ))
//             ) : (
//               <Text>No results found</Text>
//             )}
//           </Flex>
//         </ScrollArea>
//       </Flex>
//     </Popover>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import { Popover, ScrollArea, Button, Text, Box, Divider, Flex, TextInput } from '@mantine/core';
// import { IconSearch } from '@tabler/icons-react';

// const archiveCategories = [
//   { name: 'Audio', formats: ['mp3', 'aac', 'wav', 'wma', 'ogg', 'flac', 'aiff', 'm4a', 'ac3', 'dts', 'pcm', 'mp2', 'tta', 'w64'] },
//   { name: 'Image', formats: ['jpg', 'jpeg', 'png', 'bmp', 'tiff', 'tif', 'gif', 'webp', 'ppm', 'pgm', 'pbm', 'tga', 'pcx', 'xpm', 'exr', 'ico', 'sgi', 'xbm'] },
//   { name: 'Video', formats: ['mp4', 'avi', 'mov', 'mkv', 'flv'] }
// ];

// export default function Popupc() {
//   const [opened, setOpened] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('Audio'); // Set default to 'Audio'

//   // Filter formats based on selected category and search term
//   const filteredFormats = selectedCategory
//     ? archiveCategories.find(category => category.name === selectedCategory).formats.filter(format =>
//         format.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : [];

//   return (
//     <Popover
//       opened={opened}
//       onClose={() => setOpened(false)}
//       position="bottom"
//       trapFocus
//       target={
//         <Button variant="default" onClick={() => setOpened(true)}>
//           Select Format
//         </Button>
//       }
//       style={{ width: '20%' }}
//       styles={{
//         popover: { backgroundColor: '#202020', color: 'white' },
//       }}
//     >
//       {/* Search Bar */}
//       <TextInput
//         placeholder="Search Format"
//         icon={<IconSearch size={14} />}
//         value={searchTerm}
//         onChange={(event) => setSearchTerm(event.currentTarget.value)}
//         mb="sm"
//         styles={{
//           input: { backgroundColor: '#1e1e1e', color: 'white', borderColor: '#444' },
//           icon: { color: 'white' }
//         }}
//         style={{ width: '100%' }}  // Ensure search bar takes full width of the popover
//       />

//       <Flex align="flex-start">
//         {/* Category List */}
//         <ScrollArea style={{ height: 300, width: 100, backgroundColor: '#1e1e1e', color: 'white', paddingLeft: '15px', borderRadius: '5px',paddingRight:'10px' }}>
//           <Box>
//             {archiveCategories.map((category, index) => (
//               <Text
//                 key={index}
//                 style={{ 
//                   margin: '8px 0', 
//                   cursor: 'pointer', 
//                   backgroundColor: selectedCategory === category.name ? '#303030' : 'transparent', // Highlight selected category
//                   padding: '5px', 
//                   borderRadius: '3px' 
//                 }}
//                 onClick={() => {
//                   setSelectedCategory(category.name); // Set selected category
//                   setSearchTerm(''); // Clear search term when changing category
//                 }}
//               >
//                 {category.name}
//               </Text>
//             ))}
//           </Box>
//         </ScrollArea>

//         <Divider orientation="vertical" />

//         {/* Format Grid */}
//         <ScrollArea style={{ height: 300, width: '100%', backgroundColor: '#1e1e1e', color: 'white', paddingLeft: '20px', paddingTop: '10px', paddingBottom: '5px',paddingRight:'3px'}}>
//           <Flex wrap="wrap" gap="sm">
//             {filteredFormats.length > 0 ? (
//               filteredFormats.map((format, index) => (
//                 <Button
//                   key={index}
//                   variant="outline"
//                   color="gray"
//                   style={{ width: 70, height: 40, backgroundColor: '#303030', color: 'white' }}
//                   onClick={() => setOpened(false)} // Close on selection
//                 >
//                   {format}
//                 </Button>
//               ))
//             ) : (
//               <Text>No results found</Text>
//             )}
//           </Flex>
//         </ScrollArea>
//       </Flex>
//     </Popover>
//   );
// }


'use client';

import { useState } from 'react';
import { Popover, ScrollArea, Button, Text, Box, Divider, Flex, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const archiveCategories = [
  { name: 'Audio', formats: ['MP3', 'AAC', 'WAV', 'WMA', 'OGG', 'FLAC', 'AIFF', 'M4A', 'AC3', 'DTS', 'PCM', 'MP2', 'TTA', 'W64'] },
  { name: 'Image', formats: ['JPG', 'JPEG', 'PNG', 'BMP', 'TIFF', 'TIF', 'GIF', 'WEBP', 'PPM', 'PGM', 'PBM', 'TGA', 'PCX', 'XPM', 'EXR', 'ICO', 'SGI', 'XBM'] },
  { name: 'Video', formats: ['MP4', 'AVI', 'MOV', 'MKV', 'FLV'] }
];


export default function ArchiveFormatSelector({ selectedFormat, onSelect, onClose }) {
  const [opened, setOpened] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Audio'); // Set default to 'Audio'

  // Filter formats based on selected category and search term
  const filteredFormats = selectedCategory
    ? archiveCategories.find(category => category.name === selectedCategory).formats.filter(format =>
        format.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleFormatClick = (format) => {
    onSelect(format); // Pass selected format to parent
    setOpened(false);  // Close the popover
    onClose();         // Also trigger parent's close handler
  };

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
      trapFocus
      target={
        <Button variant="default" onClick={() => setOpened(!opened)}>
          {selectedFormat || 'Select Format'}
        </Button>
      }
      style={{ width: '20%' }}
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
          input: { backgroundColor: '#1e1e1e', color: 'white', borderColor: '#444' },
          icon: { color: 'white' }
        }}
        style={{ width: '100%' }}  // Ensure search bar takes full width of the popover
      />

      <Flex align="flex-start">
        {/* Category List */}
        <ScrollArea style={{ height: 300, width: 100, backgroundColor: '#1e1e1e', color: 'white', paddingLeft: '15px', borderRadius: '5px', paddingRight: '10px' }}>
          <Box>
            {archiveCategories.map((category, index) => (
              <Text
                key={index}
                style={{
                  margin: '8px 0',
                  cursor: 'pointer',
                  backgroundColor: selectedCategory === category.name ? '#303030' : 'transparent', // Highlight selected category
                  padding: '5px',
                  borderRadius: '3px'
                }}
                onClick={() => {
                  setSelectedCategory(category.name); // Set selected category
                  setSearchTerm(''); // Clear search term when changing category
                }}
              >
                {category.name}
              </Text>
            ))}
          </Box>
        </ScrollArea>

        <Divider orientation="vertical" />

        {/* Format Grid */}
        <ScrollArea style={{ height: 300, width: '100%', backgroundColor: '#1e1e1e', color: 'white', paddingLeft: '20px', paddingTop: '10px', paddingBottom: '5px', paddingRight: '3px' }}>
          <Flex wrap="wrap" gap="sm">
            {filteredFormats.length > 0 ? (
              filteredFormats.map((format, index) => (
                <Button
                  key={index}
                  variant="outline"
                  color="gray"
                  style={{ width: 70, height: 40, backgroundColor: '#303030', color: 'white' }}
                  onClick={() => handleFormatClick(format)} // Pass the clicked format
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

