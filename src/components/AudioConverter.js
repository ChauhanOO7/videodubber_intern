// 'use client';

// import { Select, Button, Text, Title, Flex, Box } from '@mantine/core';

// export default function AudioConverter() {

//   return (
//     <Box
//       style={(theme) => ({
//         backgroundColor: '#202020',
//         padding: '4rem',
//         color: theme.white,
//       })}
//     >
//     <Flex style={{maxWidth:'80%',marginLeft:'180px'}}>
//         <Flex direction={'column'}  style={{maxWidth:'50%'}}>
//             <Title order={2}>MP3 to WAV Converter</Title>
//             <Text>
//                 CloudConvert converts your audio files online. Amongst many others, we support MP3, M4A, WAV and WMA. You can use the options to control audio quality and file size.
//             </Text>
//         </Flex>

//         <Flex mt="lg" align="center" gap="md" style={{paddingLeft: '100px'}}>
//             <Text>Convert</Text>
//             <Select
//             data={['MP3', 'M4A', 'WAV', 'WMA']}
//             defaultValue="MP3"
//             sx={{ minWidth: 100 }}
//             />

//             <Text>to</Text>

//             <Select
//             data={['WAV', 'MP3', 'M4A', 'WMA']}
//             defaultValue="WAV"
//             sx={{ minWidth: 100 }}
//             />
//         </Flex>
//     </Flex>
//     </Box>

//   );
// }


// 'use client';

// import { useState } from 'react';
// import { Select, Button, Text, Title, Flex, Box } from '@mantine/core';

// export default function AudioConverter() {
//   const [selectedFormat, setSelectedFormat] = useState('MP3'); // Default selected format
//   const [conversionFormat, setConversionFormat] = useState('WAV'); // Default conversion format

//   // Define mapping of formats for conversion
//   const formatMapping = {
//     MP3: ['WAV', 'M4A', 'WMA'],
//     M4A: ['WAV', 'MP3', 'WMA'],
//     WAV: ['MP3', 'M4A', 'WMA'],
//     WMA: ['MP3', 'M4A', 'WAV'],
//   };

//   // Get options for the second select based on selected format
//   const conversionOptions = formatMapping[selectedFormat];

//   return (
//     <Box
//       style={(theme) => ({
//         backgroundColor: '#202020',
//         padding: '4rem',
//         color: theme.white,
//       })}
//     >
//       <Flex style={{ maxWidth: '80%', marginLeft: '180px' }}>
//         <Flex direction={'column'} style={{ maxWidth: '50%' }}>
//           <Title order={2}>Audio Converter</Title>
//           <Text>
//             CloudConvert converts your audio files online. Amongst many others, we support MP3, M4A, WAV, and WMA. You can use the options to control audio quality and file size.
//           </Text>
//         </Flex>

//         <Flex mt="lg" align="center" gap="md" style={{ paddingLeft: '100px' }}>
//           <Text>Convert</Text>
//           <Select
//             data={['MP3', 'M4A', 'WAV', 'WMA']}
//             value={selectedFormat}
//             onChange={setSelectedFormat} // Update selected format
//             sx={{ minWidth: 100 }}
//           />

//           <Text>to</Text>

//           <Select
//             data={conversionOptions}
//             value={conversionFormat}
//             onChange={setConversionFormat} // Update conversion format
//             sx={{ minWidth: 100 }}
//           />
//         </Flex>
//       </Flex>
//     </Box>
//   );
// }


// ui code:


// 'use client';

// import { useState } from 'react';
// import { Button, Text, Title, Flex, Box } from '@mantine/core';
// import ArchiveFormatSelector from './ArchiveFormatSelector'; // Adjust the import path as necessary

// export default function AudioConverter() {
//   const [isInputDialogOpen, setInputDialogOpen] = useState(false); // State for input format dialog
//   const [isOutputDialogOpen, setOutputDialogOpen] = useState(false); // State for output format dialog
//   const [selectedAudioFormat, setSelectedAudioFormat] = useState('MP3');
//   const [selectedOutputFormat, setSelectedOutputFormat] = useState('WAV');

//   const handleAudioFormatClick = (event) => {
//     event.stopPropagation(); // Prevent the default dropdown from showing
//     setInputDialogOpen(true); // Open the custom input format dialog
//   };

//   const handleOutputFormatClick = (event) => {
//     event.stopPropagation(); // Prevent the default dropdown from showing
//     setOutputDialogOpen(true); // Open the custom output format dialog
//   };

//   return (
//     <Box
//       style={(theme) => ({
//         backgroundColor: '#202020',
//         padding: '4rem',
//         color: theme.white,
//         position: 'relative', // Set relative positioning for the parent container
//       })}
//     >
//       <Flex style={{ maxWidth: '80%', marginLeft: '180px' }}>
//         <Flex direction={'column'} style={{ maxWidth: '50%' }}>
//           <Title order={2}>MP3 to WAV Converter</Title>
//           <Text>
//             CloudConvert converts your audio files online. Amongst many others, we support MP3, M4A, WAV, and WMA. You can use the options to control audio quality and file size.
//           </Text>
//         </Flex>

//         <Flex mt="lg" align="center" gap="md" style={{ paddingLeft: '100px' }}>
//           <Text>Convert</Text>
          
//           {/* Input Format Button */}
//           <Button
//             onClick={handleAudioFormatClick}
//             sx={{ minWidth: 100 }}
//             variant="outline" // Optional styling
//           >
//             {selectedAudioFormat} {/* Display selected audio format */}
//           </Button>

//           <Text>to</Text>

//           {/* Output Format Button */}
//           <Button
//             onClick={handleOutputFormatClick}
//             sx={{ minWidth: 100 }}
//             variant="outline" // Optional styling
//           >
//             {selectedOutputFormat} {/* Display selected output format */}
//           </Button>
//         </Flex>
//       </Flex>

//       {/* Archive Format Selector Dialog for Input Format */}
//       {isInputDialogOpen && (
//         <div style={{
//           position: 'absolute', // Make dialog absolute
//           top: '180px', // Position it directly below the input button
//           left: '750px', // Align with the input button
//           zIndex: 1000, // Ensure it's above other elements
//           width: '350px', // Set a constant width for the dialog
//         }}>
//           <ArchiveFormatSelector
//             selectedFormat={selectedAudioFormat} // Pass selected format
//             onSelect={(format) => {
//               setSelectedAudioFormat(format); // Update the selected format
//               setInputDialogOpen(false); // Close the dialog
//             }}
//             onClose={() => setInputDialogOpen(false)} // Close handler
//           />
//         </div>
//       )}

//       {/* Archive Format Selector Dialog for Output Format */}
//       {isOutputDialogOpen && (
//         <div style={{
//           position: 'absolute', // Make dialog absolute
//           top: '180px', // Position it directly below the output button
//           left: '750px', // Align with the output button
//           zIndex: 1000, // Ensure it's above other elements
//           width: '350px', // Set a constant width for the dialog
//         }}>
//           <ArchiveFormatSelector
//             selectedFormat={selectedOutputFormat} // Pass selected format
//             onSelect={(format) => {
//               setSelectedOutputFormat(format); // Update the selected format
//               setOutputDialogOpen(false); // Close the dialog
//             }}
//             onClose={() => setOutputDialogOpen(false)} // Close handler
//           />
//         </div>
//       )}
//     </Box>
//   );
// }



'use client';

import { useState } from 'react';
import { Button, Text, Title, Flex, Box } from '@mantine/core';
import Link from 'next/link'; // Import Link from Next.js
import { useRouter } from 'next/navigation';
import ArchiveFormatSelector from './ArchiveFormatSelector'; // Adjust the import path as necessary

export default function AudioConverter() {
  const [isInputDialogOpen, setInputDialogOpen] = useState(false); // State for input format dialog
  const [isOutputDialogOpen, setOutputDialogOpen] = useState(false); // State for output format dialog
  const [selectedAudioFormat, setSelectedAudioFormat] = useState('MP3');
  const [selectedOutputFormat, setSelectedOutputFormat] = useState('WAV');

  // Toggle input format dialog
  const handleAudioFormatClick = (event) => {
    event.stopPropagation(); // Prevent the default dropdown from showing
    setInputDialogOpen((prevState) => !prevState); // Toggle input dialog
    setOutputDialogOpen(false); // Ensure the output dialog is closed
  };

  // Toggle output format dialog
  const handleOutputFormatClick = (event) => {
    event.stopPropagation(); // Prevent the default dropdown from showing
    setOutputDialogOpen((prevState) => !prevState); // Toggle output dialog
    setInputDialogOpen(false); // Ensure the input dialog is closed
  };

  const router =useRouter();
  const handleNavigate = () => {
    const audioFormat = selectedAudioFormat.toLowerCase();
    const outputFormat = selectedOutputFormat.toLowerCase();
    
    // Construct the URL with query parameters
    const url = `/${audioFormat}-${outputFormat}`;
    // Use router.push with the constructed URL
    router.push(url);
  };


  return (
    <Box
      style={(theme) => ({
        backgroundColor: '#202020',
        padding: '4rem',
        color: theme.white,
        position: 'relative', // Set relative positioning for the parent container
      })}
    >
      <Flex style={{ maxWidth: '80%', marginLeft: '180px' }}>
        <Flex direction={'column'} style={{ maxWidth: '50%' }}>
          <Title order={2}>MP3 to WAV Converter</Title>
          <Text>
            CloudConvert converts your audio files online. Amongst many others, we support MP3, M4A, WAV, and WMA. You can use the options to control audio quality and file size.
          </Text>
        </Flex>

        <Flex mt="lg" align="center" gap="md" style={{ paddingLeft: '100px' }}>
          <Text>Convert</Text>
          
          {/* Input Format Button */}
          <Button
            onClick={handleAudioFormatClick}
            sx={{ minWidth: 100 }}
            variant="outline" // Optional styling
          >
            {selectedAudioFormat} {/* Display selected audio format */}
          </Button>

          <Text>to</Text>

          {/* Output Format Button */}
          <Button
            onClick={handleOutputFormatClick}
            sx={{ minWidth: 100 }}
            variant="outline" // Optional styling
          >
            {selectedOutputFormat} {/* Display selected output format */}
          </Button>

          {/* Link to navigate to the selected formats */}
          <Button onClick={handleNavigate} sx={{ marginLeft: '10px' }} variant="filled">Go</Button>
        </Flex>
      </Flex>

      {/* Archive Format Selector Dialog for Input Format */}
      {isInputDialogOpen && (
        <div style={{
          position: 'absolute', // Make dialog absolute
          top: '180px', // Position it directly below the input button
          left: '750px', // Align with the input button
          zIndex: 1000, // Ensure it's above other elements
          width: '350px', // Set a constant width for the dialog
        }}>
          <ArchiveFormatSelector
            selectedFormat={selectedAudioFormat} // Pass selected format
            onSelect={(format) => {
              setSelectedAudioFormat(format); // Update the selected format
              setInputDialogOpen(false); // Close the dialog
            }}
            onClose={() => setInputDialogOpen(false)} // Close handler
          />
        </div>
      )}

      {/* Archive Format Selector Dialog for Output Format */}
      {isOutputDialogOpen && (
        <div style={{
          position: 'absolute', // Make dialog absolute
          top: '180px', // Position it directly below the output button
          left: '750px', // Align with the output button
          zIndex: 1000, // Ensure it's above other elements
          width: '350px', // Set a constant width for the dialog
        }}>
          <ArchiveFormatSelector
            selectedFormat={selectedOutputFormat} // Pass selected format
            onSelect={(format) => {
              setSelectedOutputFormat(format); // Update the selected format
              setOutputDialogOpen(false); // Close the dialog
            }}
            onClose={() => setOutputDialogOpen(false)} // Close handler
          />
        </div>
      )}
    </Box>
  );
}


