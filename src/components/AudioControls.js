// import { Flex, Select, TextInput,Text } from '@mantine/core';
// import { AddressBookIcon } from '../icons/AddressBookIcon';

// export default function AudioControls() {
//   return (
//     <>
//       <Flex direction="row" gap="xl" mb="md">
//             <label style={{ marginRight:'10px' }}>Audio Codec</label>
//             <Flex direction={'column'}>
//                 <Select
//                     placeholder="Select codec"
//                     defaultValue="pcm_s16le"
//                     data={['pcm_s16le', 'copy','pcm_s24le','pcm_s32le']}
//                     style={{ flex: 1,width:'322px' }}
//                 />
//                 <Text style={{color:'#a5a5a5',fontSize:'0.8em',width:'300px'}}>Codec to encode the audio. Use "copy" to copy the stream without re-encoding.</Text>
//             </Flex>
//             <label style={{ marginRight:'10px' }}>Audio Bitrate</label>
//             <Flex direction={'column'}>
//                 <TextInput placeholder="128" style={{ flex: 1, width:'322px' }} />
//                 <Text style={{color:'#a5a5a5',fontSize:'0.8em',width:'300px',marginBottom:'20px'}}>Audio Bitrate</Text>
//             </Flex>
//       </Flex>

//       <Flex direction="row" gap="xl" mb="md">
//       <label style={{ marginRight:'38px' }}>Channels</label>
//       <Flex direction={'column'}>
//             <Select
//             placeholder="no change"
//             data={['no change', 'mono', 'stereo']}
//             style={{ flex: 1 }}
//             />
//             <Text style={{color:'#a5a5a5',fontSize:'0.8em',width:'300px',marginBottom:'20px'}}>Convert the audio to mono/stereo.</Text>
//       </Flex>
//         <label style={{ marginRight:'50px',marginLeft:'20px'}}>Volume</label>
//         <Flex direction={'column'}>
//             <Select
//             placeholder="no change"
//             data={['no change', 'increase', 'decrease']}
//             style={{ flex: 1 }}
//             />
//             <Text style={{color:'#a5a5a5',fontSize:'0.8em',width:'300px',marginBottom:'20px'}}>Make audio louder or quiter</Text>
//         </Flex>
//       </Flex>

//       <Flex direction="row" gap="xl" mb="md">
//       <label style={{ marginRight:'10px' }}>Sample Rate</label>
//       <Flex direction={'column'}>
//         <Select
//             placeholder="no change"
//             data={['no change', '44100 Hz', '48000 Hz']}
//             style={{ flex: 1 }}
//             />
//             <Text style={{color:'#a5a5a5',fontSize:'0.8em',width:'300px',marginBottom:'20px'}}>
//                 Set the audio sampling frequency, for example 48000 Hz or 44100 Hz.
//             </Text>
//       </Flex>
//       </Flex>

//       <Flex direction="row" gap="xl" mb="md">
//       <AddressBookIcon />
//       <Text style={{fontWeight:'bold',color:'#5a5a5a'}}>Trim</Text>
      
//       </Flex>

//       <Flex direction="row" gap="xl" mb="md">
//         <label style={{ marginRight:'30px' }}>Trim Start</label>
//         <Flex direction={'column'}>
//             <TextInput placeholder="HH:MM:SS" style={{ flex: 1 }} />
//             <Text style={{color:'#a5a5a5',fontSize:'0.8em',width:'300px',marginBottom:'20px'}}>Trim start timestamp (HH:MM:SS)</Text>
//         </Flex>
//         <label style={{ marginRight:'50px',marginLeft:'20px'}}>Trim End</label>
//         <Flex direction={'column'}>
//             <TextInput placeholder="HH:MM:SS" style={{ flex: 1 }} />
//             <Text style={{color:'#a5a5a5',fontSize:'0.8em',width:'300px',marginBottom:'20px'}}>Trim end timestamp (HH:MM:SS)</Text>
//         </Flex>
//       </Flex>
//     </>
//   );
// }
// above ui


'use client';
import { Flex, Select, TextInput, Text, Button, Group, Slider, Notification } from '@mantine/core';
import { AddressBookIcon } from '../icons/AddressBookIcon';
import { useState } from 'react';

export default function AudioControls({ datapass }) {
  const [codec, setCodec] = useState('pcm_s16le');
  const [bitrate, setBitrate] = useState('');
  const [channels, setChannels] = useState('no change');
  const [volume, setVolume] = useState(100); // Set default volume to 100
  const [sampleRate, setSampleRate] = useState('no change');
  const [trimStart, setTrimStart] = useState('');
  const [trimEnd, setTrimEnd] = useState('');
  const [error, setError] = useState('');

  const resetOptions = () => {
    setCodec('pcm_s16le');
    setBitrate('');
    setChannels('no change');
    setVolume(100);
    setSampleRate('no change');
    setTrimStart('');
    setTrimEnd('');
    setError('');
  };

  const validateTimeFormat = (time) => {
    const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/; // Regex for HH:MM:SS format
    return regex.test(time);
  };

  const applySettings = () => {
    if ((trimStart && !validateTimeFormat(trimStart)) || (trimEnd && !validateTimeFormat(trimEnd))) {
      setError('Invalid time format. Please use HH:MM:SS.');
      return;
    }

    console.log('Applying settings:', { codec, bitrate, channels, volume, sampleRate, trimStart, trimEnd });

    const datashare = {
      codec,
      bitrate,
      channels,
      volume,
      sampleRate,
      trimStart,
      trimEnd,
    };

    datapass(datashare);
    setError(''); // Clear the error state if settings are applied successfully
  };

  return (
    <>
      <Flex direction="row" gap="xl" mb="md">
        <label style={{ marginRight: '10px' }}>Audio Codec</label>
        <Flex direction={'column'}>
          <Select
            placeholder="Select codec"
            value={codec}
            onChange={setCodec}
            data={['pcm_s16le', 'copy', 'pcm_s24le', 'pcm_s32le']}
            style={{ flex: 1, width: '322px' }}
          />
          <Text style={{ color: '#a5a5a5', fontSize: '0.8em', width: '300px' }}>
            Codec to encode the audio. Use "copy" to copy the stream without re-encoding.
          </Text>
        </Flex>

        <label style={{ marginRight: '10px' }}>Audio Bitrate</label>
        <Flex direction={'column'}>
          <TextInput
            placeholder="128"
            value={bitrate}
            onChange={(e) => setBitrate(e.currentTarget.value)}
            style={{ flex: 1, width: '322px' }}
          />
          <Text style={{ color: '#a5a5a5', fontSize: '0.8em', width: '300px', marginBottom: '20px' }}>
            Audio Bitrate
          </Text>
        </Flex>
      </Flex>

      <Flex direction="row" gap="xl" mb="md">
        <label style={{ marginRight: '38px' }}>Channels</label>
        <Flex direction={'column'}>
          <Select
            placeholder="no change"
            value={channels}
            onChange={setChannels}
            data={['no change', 'mono', 'stereo']}
            style={{ flex: 1 }}
          />
          <Text style={{ color: '#a5a5a5', fontSize: '0.8em', width: '300px', marginBottom: '20px' }}>
            Convert the audio to mono/stereo.
          </Text>
        </Flex>

        <label style={{ marginRight: '50px', marginLeft: '20px' }}>Volume</label>
        <Flex direction={'column'}>
          <Slider
            value={volume}
            onChange={setVolume}
            min={0}
            max={200}
            marks={[{ value: 0, label: '0%' }, { value: 100, label: '100%' }, { value: 200, label: '200%' }]}
            style={{ flex: 1, width: '322px' }}
          />
          <Text style={{ color: '#a5a5a5', fontSize: '0.8em', width: '300px', marginBottom: '20px' }}>
            Adjust the volume (0% to 200%).
          </Text>
        </Flex>
      </Flex>

      <Flex direction="row" gap="xl" mb="md">
        <label style={{ marginRight: '10px' }}>Sample Rate</label>
        <Flex direction={'column'}>
          <Select
            placeholder="no change"
            value={sampleRate}
            onChange={setSampleRate}
            data={['no change', '44100 Hz', '48000 Hz']}
            style={{ flex: 1 }}
          />
          <Text style={{ color: '#a5a5a5', fontSize: '0.8em', width: '300px', marginBottom: '20px' }}>
            Set the audio sampling frequency, for example 48000 Hz or 44100 Hz.
          </Text>
        </Flex>
      </Flex>

      <Flex direction="row" gap="xl" mb="md">
        <AddressBookIcon />
        <Text style={{ fontWeight: 'bold', color: '#5a5a5a' }}>Trim</Text>
      </Flex>

      <Flex direction="row" gap="xl" mb="md">
        <label style={{ marginRight: '30px' }}>Trim Start</label>
        <Flex direction={'column'}>
          <TextInput
            placeholder="HH:MM:SS"
            value={trimStart}
            onChange={(e) => setTrimStart(e.currentTarget.value)}
            style={{ flex: 1 }}
            error={trimStart && !validateTimeFormat(trimStart) ? 'Invalid format' : null}
          />
          <Text style={{ color: '#a5a5a5', fontSize: '0.8em', width: '300px', marginBottom: '20px' }}>
            Trim start timestamp (HH:MM:SS)
          </Text>
        </Flex>

        <label style={{ marginRight: '50px', marginLeft: '20px' }}>Trim End</label>
        <Flex direction={'column'}>
          <TextInput
            placeholder="HH:MM:SS"
            value={trimEnd}
            onChange={(e) => setTrimEnd(e.currentTarget.value)}
            style={{ flex: 1 }}
            error={trimEnd && !validateTimeFormat(trimEnd) ? 'Invalid format' : null}
          />
          <Text style={{ color: '#a5a5a5', fontSize: '0.8em', width: '300px', marginBottom: '20px' }}>
            Trim end timestamp (HH:MM:SS)
          </Text>
        </Flex>
      </Flex>

      {error && (
        <Notification color="red" onClose={() => setError('')}>
          {error}
        </Notification>
      )}

      <Flex justify={'space-between'}>
        <Button variant="default" onClick={resetOptions}>
          Reset all options
        </Button>
        <Button color="blue" onClick={applySettings}>
          Apply Settings
        </Button>
      </Flex>
    </>
  );
}


