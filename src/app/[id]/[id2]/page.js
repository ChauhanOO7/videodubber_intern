// 'use client';
// import { useState } from 'react';
// import { Container, FileInput, Select, Slider, Card, Button, Flex, Grid, Title } from '@mantine/core';
// import AudioVisualizer from '../../../components/audiovisual/AudioVisualizer'; // Create a visualizer component
// import { IconDownload } from '@tabler/icons-react';

// export default function AudioPage() {
//   const [audioFile, setAudioFile] = useState(null);
//   const [visualizationType, setVisualizationType] = useState('bars');
//   const [intensity, setIntensity] = useState(50);

//   return (
//     <Container>
//       <Title align="center" mt="md">Music Visualizer</Title>

//       {/* Audio Upload */}
//       <Card withBorder shadow="sm" p="md" mt="lg">
//         <FileInput
//           label="Upload Audio File"
//           placeholder="Choose an audio file"
//           accept="audio/*"
//           value={audioFile}
//           onChange={setAudioFile}
//         />
//       </Card>

//       {/* Visualization Options */}
//       <Card withBorder shadow="sm" p="md" mt="lg">
//         <Grid>
//           <Grid.Col span={6}>
//             <Select
//               label="Visualization Type"
//               placeholder="Choose visualization"
//               data={[
//                 { value: 'bars', label: 'Bars' },
//                 { value: 'wave', label: 'Wave' },
//                 { value: 'circle', label: 'Circle' },
//               ]}
//               value={visualizationType}
//               onChange={setVisualizationType}
//             />
//           </Grid.Col>
//           <Grid.Col span={6}>
//             <Slider
//               label="Intensity"
//               min={10}
//               max={100}
//               value={intensity}
//               onChange={setIntensity}
//             />
//           </Grid.Col>
//         </Grid>
//       </Card>

//       {/* Audio Visualizer */}
//       <Card withBorder shadow="sm" p="md" mt="lg">
//         {audioFile ? (
//           <AudioVisualizer
//             file={audioFile}
//             visualizationType={visualizationType}
//             intensity={intensity}
//           />
//         ) : (
//           <Title align="center" mt="md">Upload an audio file to see the visualizer</Title>
//         )}
//       </Card>

//       {/* Preview and Download */}
//       {audioFile && (
//         <Flex justify="space-between" align="center" mt="lg">
//           <Button variant="light" size="md" onClick={() => {/* Preview Logic */}}>
//             Preview Audio
//           </Button>
//           <Button leftIcon={<IconDownload size={16} />} variant="outline" size="md" onClick={() => {/* Download Logic */}}>
//             Download
//           </Button>
//         </Flex>
//       )}
//     </Container>
//   );
// }


'use client';


// import { useState } from 'react';
// import { Container, FileInput, Select, Slider, Card, Grid, Title } from '@mantine/core';
// import AudioVisualizer from '../../../components/audiovisual/AudioVisualizer';

// export default function AudioPage() {
//   const [audioFile, setAudioFile] = useState(null);
//   const [visualizationType, setVisualizationType] = useState('bars');
//   const [intensity, setIntensity] = useState(50);

//   // Handles audio upload
//   const handleAudioUpload = (file) => {
//     setAudioFile(file);
//   };

//   return (
//     <Container>
//       <Title align="center" mt="md">Music Visualizer</Title>

//       {/* Audio Upload */}
//       <Card withBorder shadow="sm" p="md" mt="lg">
//         <FileInput
//           label="Upload Audio File"
//           placeholder="Choose an audio file"
//           accept="audio/*"
//           value={audioFile}
//           onChange={handleAudioUpload}
//         />
//       </Card>

//       {/* Visualization Options */}
//       <Card withBorder shadow="sm" p="md" mt="lg">
//         <Grid>
//           <Grid.Col span={6}>
//             <Select
//               label="Visualization Type"
//               placeholder="Choose visualization"
//               data={[
//                 { value: 'bars', label: 'Bars' },
//                 { value: 'wave', label: 'Wave' },
//                 { value: 'circle', label: 'Circle' },
//               ]}
//               value={visualizationType}
//               onChange={setVisualizationType}
//             />
//           </Grid.Col>
//           <Grid.Col span={6}>
//             <Slider
//               label="Intensity"
//               min={10}
//               max={100}
//               value={intensity}
//               onChange={setIntensity}
//             />
//           </Grid.Col>
//         </Grid>
//       </Card>

//       {/* Audio Visualizer */}
//       <Card withBorder shadow="sm" p="md" mt="lg">
//         {audioFile ? (
//           <AudioVisualizer
//             file={audioFile}
//             visualizationType={visualizationType}
//             intensity={intensity}
//           />
//         ) : (
//           <Title align="center" mt="md">Upload an audio file to see the visualizer</Title>
//         )}
//       </Card>
//     </Container>
//   );
// }

import { useState } from 'react';
import { Container, FileInput, Select, Slider, Card, Grid, Title } from '@mantine/core';
import AudioVisualizer from '../../../components/audiovisual/AudioVisualizer';

export default function AudioPage() {
  const [audioFile, setAudioFile] = useState(null);
  const [visualizationType, setVisualizationType] = useState('bars');
  const [intensity, setIntensity] = useState(50);

  // Handles audio upload
  const handleAudioUpload = (file) => {
    setAudioFile(file);
  };

  return (
    <Container>
      <Title align="center" mt="md">Music Visualizer</Title>

      {/* Audio Upload */}
      <Card withBorder shadow="sm" p="md" mt="lg">
        <FileInput
          label="Upload Audio File"
          placeholder="Choose an audio file"
          accept="audio/*"
          value={audioFile}
          onChange={handleAudioUpload}
        />
      </Card>

      {/* Visualization Options */}
      <Card withBorder shadow="sm" p="md" mt="lg">
        <Grid>
          <Grid.Col span={6}>
            <Select
              label="Visualization Type"
              placeholder="Choose visualization"
              data={[
                { value: 'bars', label: 'Bars' },
                { value: 'wave', label: 'Wave' },
                { value: 'circle', label: 'Circle' },
                { value: 'spiral', label: 'Spiral' }, // New option
                { value: 'dot', label: 'Dot' },       // New option
                { value: 'spectrum', label: 'Spectrum' }
              ]}
              value={visualizationType}
              onChange={setVisualizationType}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Slider
              label="Intensity"
              min={10}
              max={200}
              value={intensity}
              onChange={setIntensity}
            />
          </Grid.Col>
        </Grid>
      </Card>

      {/* Audio Visualizer */}
      <Card withBorder shadow="sm" p="md" mt="lg">
        {audioFile ? (
          <AudioVisualizer
            file={audioFile}
            visualizationType={visualizationType}
            intensity={intensity}
          />
        ) : (
          <Title align="center" mt="md">Upload an audio file to see the visualizer</Title>
        )}
      </Card>
    </Container>
  );
}
