// import { Button, Select, Group, ActionIcon, Text, Paper,Flex } from '@mantine/core';
// import { IconDownload, IconX, IconRepeat, IconSettings } from '@tabler/icons-react';
// import { IconFilePlus} from '@tabler/icons-react';
// import { Dropdown } from '@/icons/Dropdown';
// import { IconReload } from '@tabler/icons-react';

// export default function ConverterComponent() {
//   return (
//     <div style={{ maxWidth: '100%', margin: '20px auto' }}>
//       {/* First file block */}
//       <Paper withBorder shadow="sm" p="xs" radius="md" mb="md">
//         <Group position="apart">
//           <Text truncate="end" style={{width:'35%'}}>Uploaded file</Text>
//           <ActionIcon color="gray" style={{marginLeft:'40px'}}>
//               <IconRepeat size={16} />
//           </ActionIcon>
//           <Group>
//             <Text>Convert to JPG</Text>
//             <Text fw={600} style={{color:'#40c057',marginLeft:'80px'}}>FINISHED</Text>
//             <Button size="xs" color="green" leftSection={<IconDownload/>} rightSection={<Dropdown/>} style={{width:'180px',height:'40px',fontSize:'1em',marginLeft:'40px'}}>
//               Download
//             </Button>
//             <ActionIcon color="red">
//               <IconX size={16} />
//             </ActionIcon>
//           </Group>
//         </Group>
//       </Paper>

//       {/* Second file block */}
//       <Paper withBorder shadow="sm" p="xs" radius="md" mb="md">
//         <Group position="apart">
//           <Text truncate="end" style={{width:'34.9%'}}>Uploaded file</Text>
//           <ActionIcon color="gray" style={{marginLeft:'40px'}}>
//               <IconRepeat size={16} />
//           </ActionIcon>
//           <Text>Convert to</Text>
//           <Group>
//             <Select
//               size="xs"
//               defaultValue="JPG"
//               data={['JPG', 'PNG', 'PDF']}
//               style={{ width: 80 }}
//             />
//             <ActionIcon color="gray">
//               <IconSettings size={16} />
//             </ActionIcon>
//             <ActionIcon color="red" style={{marginLeft:'293px'}}>
//               <IconX size={16} />
//             </ActionIcon>
//           </Group>
//         </Group>
//       </Paper>

//       {/* Bottom convert button */}
//       <Flex justify={'space-between'}>
//         <Button variant="filled" color="#303030" leftSection={<IconFilePlus/>} rightSection={<Dropdown/>} style={{width:'200px',height:'40px',marginTop:'10px'}}>
//           Add more Files
//         </Button>
//         <Button variant="filled" color="red" leftSection={<IconReload/>} style={{width:'150px',height:'60px',fontSize:'1.2em'}}>
//           Convert
//         </Button>
//       </Flex>
//     </div>
//   );
// }

//above code contain only ui

// main code:

"use client";

import { useState, useEffect } from 'react';
import { Button, Select, Group, ActionIcon, Text, Paper, Flex,Box } from '@mantine/core';
import { IconDownload, IconX, IconRepeat, IconSettings, IconFilePlus, IconReload } from '@tabler/icons-react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';
import {Dropdown} from '../icons/Dropdown';
import AudioControls from './AudioControls';

export default function ConverterComponent() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [conversionFinished, setConversionFinished] = useState(false);
  const [audioFormat, setAudioFormat] = useState('mp3');
  const [imageFormat, setImageFormat] = useState('png');
  const [subtitleFormat, setsubtitleFormat] = useState('vtt');
  const [convertedFiles, setConvertedFiles] = useState([]);
  const [converting, setConverting] = useState(false);
  const [ffmpeg, setFfmpeg] = useState(null);
  const [options,setOptions] = useState(false);
  const [optionsdata,setoptionsdata]=useState({
    'codec':'',
    'bitrate':'',
    'channels':'',
    'volume':'',
    'sampleRate':'',
    'trimStart':'',
    'trimEnd':''
  });

  useEffect(() => {
    const initializeFFmpeg = async () => {
      const ffmpegInstance = new FFmpeg({ log: true});
      await ffmpegInstance.load();
      setFfmpeg(ffmpegInstance);
    };

    initializeFFmpeg();
  }, []);

  // Supported formats
  const supportedAudioFormats = [
    'mp3', 'aac', 'wav', 'wma', 'ogg',
    'flac', 'aiff', 'm4a', 'ac3',
    'dts', 'pcm', 'mp2', 'tta', 'w64'
  ];
  const supportedImageFormats = ['jpg', 'jpeg','png','bmp','tiff', 'tif','gif','webp','ppm','pgm','pbm','tga','pcx','xpm',       
    'exr',        
    'ico',       
    'sgi',
    'xbm'  
  ];
  const supportedSubtitleFormats = ['srt', 'vtt'];
  const supportedVideoFormats = ['mp4', 'avi', 'mov', 'mkv', 'flv'];

  const getFileNameWithoutExtension = (fileName) => {
    const lastDotIndex = fileName.lastIndexOf('.');
    return lastDotIndex === -1 ? fileName : fileName.substring(0, lastDotIndex);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles([...uploadedFiles, { file, audioFormat, imageFormat }]);
      setConversionFinished(false);
      setConvertedFiles([]);
    }
  };

// const handleConvert = async () => {
//   if (!ffmpeg) return;
//   setConverting(true);

//   for (let uploadedFile of uploadedFiles) {
//     const { file } = uploadedFile;
//     const fileNameWithoutExtension = getFileNameWithoutExtension(file.name);
//     const inputFile = file.name;
//     let outputFile;
//     let outputFormat;

//     try {
//       // Check if the file is audio and set output format accordingly
//       if (supportedAudioFormats.some(ext => file.name.endsWith(ext))) {
//         outputFile = `${fileNameWithoutExtension}.${audioFormat}`;
//         outputFormat = audioFormat;
//         await ffmpeg.writeFile(inputFile, await fetchFile(file));
//         await ffmpeg.exec(['-i', inputFile, outputFile]);

//       } else if (supportedImageFormats.some(ext => file.name.endsWith(ext))) {
//         // Check if the file is an image and set the appropriate output format
//         outputFile = `${fileNameWithoutExtension}.${imageFormat}`;
//         outputFormat = imageFormat;
//         await ffmpeg.writeFile(inputFile, await fetchFile(file));
//         await ffmpeg.exec(['-i', inputFile, outputFile]);

//       } else if (supportedVideoFormats.some(ext => file.name.endsWith(ext))) {
//         // For video files, extract audio
//         outputFile = `${fileNameWithoutExtension}.${audioFormat}`;
//         outputFormat = audioFormat;
//         await ffmpeg.writeFile(inputFile, await fetchFile(file));
//         await ffmpeg.exec(['-i', inputFile, '-q:a', '0', '-map', 'a', outputFile]);

//       } else if (supportedSubtitleFormats.some(ext => file.name.endsWith(ext))) {
//         // For subtitle files, convert between formats
//         outputFile = `${fileNameWithoutExtension}.${subtitleFormat}`; // Example conversion to VTT
//         outputFormat = subtitleFormat;
//         await ffmpeg.writeFile(inputFile, await fetchFile(file));
//         await ffmpeg.exec(['-i', inputFile, outputFile]);

//       } else {
//         console.error('Unsupported file type: ', file.name);
//         continue; // Skip unsupported files
//       }

//       console.log(`Converted: ${outputFile}`);
//       const data = await ffmpeg.readFile(outputFile);
//       const convertedBlob = new Blob([data.buffer], {
//         type: outputFormat === 'png' ? 'image/png' : `audio/${outputFormat}` || `text/vtt`,
//       });
//       const convertedUrl = URL.createObjectURL(convertedBlob);

//       setConvertedFiles((prevFiles) => [
//         ...prevFiles,
//         { name: outputFile, url: convertedUrl, format: outputFormat },
//       ]);
//     } catch (error) {
//       console.error('Conversion error:', error);
//     }
//   }

//   setConversionFinished(true);
//   setConverting(false);
// };

// correct one above without advanced options 

const handleConvert = async () => {
  if (!ffmpeg) return;
  setConverting(true);

  for (let uploadedFile of uploadedFiles) {
    const { file } = uploadedFile;
    const fileNameWithoutExtension = getFileNameWithoutExtension(file.name);
    const inputFile = file.name;
    let outputFile;
    let outputFormat;
    const { bitrate, channels, codec, sampleRate, trimStart, trimEnd, volume } = optionsdata;

    try {
      await ffmpeg.writeFile(inputFile, await fetchFile(file));
      let command = ['-i', inputFile];
      // Handle audio conversion with advanced options
      if (supportedAudioFormats.some(ext => file.name.endsWith(ext)) || supportedVideoFormats.some(ext => file.name.endsWith(ext))) {
        outputFile = `${fileNameWithoutExtension}.${audioFormat}`;
        outputFormat = audioFormat;

        // Add trim options if they exist
        if (trimStart && trimEnd) {
          command.push('-ss', trimStart, '-to', trimEnd);
        } else if (trimStart) {
          command.push('-ss', trimStart);
        }

        // Adjust volume if specified
        if (volume && volume !== 'no change') {
          command.push('-filter:a', `volume=${volume/100}`);
        }
        
        // // Apply advanced audio settings like codec, bitrate, and channels
        if (codec) {
          if(supportedVideoFormats.some(ext => file.name.endsWith(ext)))    command.push('-c:v', codec);
          else command.push('-c:a', codec);
        }
        if (bitrate) {
          command.push('-b:a', `${bitrate}k`);
        }
        if (channels && channels !== 'no change') {//correct
          command.push('-ac', channels === 'mono' ? '1' : '2');
        }
        if (sampleRate && sampleRate !== 'no change') {//correct
          command.push('-ar', sampleRate);
        }

        // Add output file to the command
        command.push(outputFile);
        console.log('Command Array:', command);
        // Execute FFmpeg command
        await ffmpeg.exec(command);

      } else if (supportedImageFormats.some(ext => file.name.endsWith(ext))) {
        // Image conversion logic
        outputFile = `${fileNameWithoutExtension}.${imageFormat}`;
        outputFormat = imageFormat;
        command.push(outputFile);
        await ffmpeg.exec(command);

      } else if (supportedSubtitleFormats.some(ext => file.name.endsWith(ext))) {
        // Subtitle conversion logic
        outputFile = `${fileNameWithoutExtension}.${subtitleFormat}`;
        outputFormat = subtitleFormat;
        command.push(outputFile);
        await ffmpeg.exec(command);

      } else {
        console.error('Unsupported file type: ', file.name);
        continue; // Skip unsupported files
      }
      // Create Blob and URL for the converted file
      const data = await ffmpeg.readFile(outputFile);
      const convertedBlob = new Blob([data.buffer], {
        type: outputFormat === 'png' ? 'image/png' : `audio/${outputFormat}` || `text/vtt`,
      });
      const convertedUrl = URL.createObjectURL(convertedBlob);

      setConvertedFiles((prevFiles) => [
        ...prevFiles,
        { name: outputFile, url: convertedUrl, format: outputFormat },
      ]);
    } catch (error) {
      console.error('Conversion error:', error);
    }
  }

  setConversionFinished(true);
  setConverting(false);
  setoptionsdata({
    'codec':'',
    'bitrate':'',
    'channels':'',
    'volume':'',
    'sampleRate':'',
    'trimStart':'',
    'trimEnd':''
  });
};

  const handleRemoveUploadedFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, fileIndex) => fileIndex !== index));
  };

  const handleRemoveConvertedFile = (index) => {
    setConvertedFiles(convertedFiles.filter((_, fileIndex) => fileIndex !== index));
  };

  function showadvancedoptions(){

    if(options)   setOptions(false);
    else  setOptions(true);
  }

  function handleoptionsdata(data){
    setoptionsdata(data);
    setOptions(false);
  }

  return (
    <div style={{ maxWidth: '100%', margin: '20px auto'}}>
      {/* Display each uploaded file */}
      {uploadedFiles.map((uploadedFile, index) => (
        <Paper withBorder shadow="sm" p="xs" radius="md" mb="md" key={index}>
          <Group position="apart">
            <Text truncate="end" style={{ width: '30%' }}>
              {uploadedFile.file.name}
            </Text>
            <ActionIcon color="gray" style={{ marginLeft: '80px' }}>
              <IconRepeat size={16} />
            </ActionIcon>
            <Text>Convert to</Text>
            <Group>
              {supportedAudioFormats.some(ext => uploadedFile.file.name.endsWith(ext)) || supportedVideoFormats.some(ext => uploadedFile.file.name.endsWith(ext)) ? (
                <Select
                  size="xs"
                  data={supportedAudioFormats}
                  value={audioFormat}
                  onChange={setAudioFormat}
                  style={{ width: 80 }}
                />
              ) : supportedSubtitleFormats.some(ext => uploadedFile.file.name.endsWith(ext)) ? (
                <Select
                  size="xs"
                  data={supportedSubtitleFormats}
                  value={subtitleFormat}
                  onChange={setsubtitleFormat}
                  style={{ width: 80 }}
                />
              ): (
                <Select
                  size="xs"
                  data={supportedImageFormats}
                  value={imageFormat}
                  onChange={setImageFormat}
                  style={{ width: 80 }}
                />
              )
              }
              <ActionIcon color="gray" onClick={showadvancedoptions}>
                <IconSettings size={16} />
              </ActionIcon>
              <ActionIcon
                color="red"
                style={{ marginLeft: '298px' }}
                onClick={() => handleRemoveUploadedFile(index)}
              >
                <IconX size={16} />
              </ActionIcon>
            </Group>
          </Group>
        </Paper>
      ))}

      {options ? (
          <AudioControls datapass={handleoptionsdata}/>
      ):""}

      {/* Conversion finished UI */}
      {conversionFinished && convertedFiles.map((file, index) => (
        <Paper withBorder shadow="sm" p="xs" radius="md" mb="md" key={index}>
          <Group position="apart">
            <Text truncate="end" style={{ width: '30%' }}>
              {file.name}
            </Text>
            <ActionIcon color="gray" style={{ marginLeft: '80px' }}>
              <IconRepeat size={16} />
            </ActionIcon>
            <Group style={{ flexGrow: 1 }}>
              <Flex justify="space-between" align="center" style={{ width: '100%' }}>
                <Text style={{ width: '120px', whiteSpace: 'nowrap' }}>
                  Convert to {file.format.toUpperCase()}
                </Text>
                <Text fw={600} style={{ color: '#40c057' }}>
                  FINISHED
                </Text>
                <Button
                  size="xs"
                  color="green"
                  leftSection={<IconDownload />}
                  rightSection={<Dropdown />}
                  style={{ width: '180px', height: '40px', fontSize: '1em', marginLeft: '40px' }}
                  onClick={() => {
                    const a = document.createElement('a');
                    a.href = file.url;
                    a.download = file.name;
                    a.click();
                  }}
                >
                  Download
                </Button>
                <ActionIcon color="red" onClick={() => handleRemoveConvertedFile(index)}>
                  <IconX size={16} />
                </ActionIcon>
              </Flex>
            </Group>
          </Group>
        </Paper>
      ))}

      {/* Buttons for file upload and conversion */}
      <Flex justify="space-between">
        <Button
          variant="filled"
          color="#303030"
          leftSection={<IconFilePlus />}
          rightSection={<Dropdown />}
          style={{ width: '200px', height: '40px', marginTop: '10px' }}
          onClick={() => document.getElementById('file-input').click()}
        >
          Add more Files
        </Button>
        <input
          id="file-input"
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        <Button
          variant="filled"
          color="red"
          leftSection={<IconReload />}
          style={{ width: '150px', height: '60px', fontSize: '1.2em' }}
          onClick={handleConvert}
          disabled={converting || !ffmpeg}
        >
          {converting ? 'Converting...' : 'Convert'}
        </Button>
      </Flex>
    </div>
  );
}



