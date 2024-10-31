'use client';
// import { useEffect, useRef, useState } from 'react';
// import { Button, Flex, Slider, Select } from '@mantine/core';

// export default function AudioVisualizer({ file, visualizationType, intensity }) {
//   const waveformRef = useRef(null);
//   const wavesurferRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [playbackSpeed, setPlaybackSpeed] = useState(1);

//   useEffect(() => {
//     if (typeof window !== 'undefined' && file) {
//       const WaveSurfer = require('wavesurfer.js');
      
//       // Destroy existing instance
//       if (wavesurferRef.current) {
//         wavesurferRef.current.destroy();
//       }

//       // Create new WaveSurfer instance
//       wavesurferRef.current = WaveSurfer.create({
//         container: waveformRef.current,
//         waveColor: '#A8DBA8',
//         progressColor: '#3B8686',
//         barWidth: visualizationType === 'bars' ? 3 : 0,
//         barGap: visualizationType === 'bars' ? 2 : 0,
//         height: intensity,
//       });

//       // Load the audio file
//       const audioURL = URL.createObjectURL(file);
//       wavesurferRef.current.load(audioURL);

//       return () => {
//         if (wavesurferRef.current) {
//           try {
//             wavesurferRef.current.destroy();
//           } catch (error) {
//             console.error('Error destroying WaveSurfer instance:', error);
//           }
//         }
//       };
//     }
//   }, [file, visualizationType, intensity]);

//   const handlePlayPause = () => {
//     if (wavesurferRef.current.isPlaying()) {
//       wavesurferRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       wavesurferRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   const handleStop = () => {
//     if (wavesurferRef.current) {
//       wavesurferRef.current.stop();
//       setIsPlaying(false);
//     }
//   };

//   const handleSpeedChange = (value) => {
//     setPlaybackSpeed(value);
//     if (wavesurferRef.current) {
//       wavesurferRef.current.setPlaybackRate(value);
//     }
//   };

//   const handleDownload = () => {
//     const audioURL = URL.createObjectURL(file);
//     const link = document.createElement('a');
//     link.href = audioURL;
//     link.download = 'processed-audio.wav';
//     link.click();
//   };

//   return (
//     <div>
//       <div ref={waveformRef} style={{ width: '100%', height: '300px' }} />

//       {/* Playback Controls */}
//       <Flex justify="center" mt="md">
//         <Button onClick={handlePlayPause} mr="sm">
//           {isPlaying ? 'Pause' : 'Play'}
//         </Button>
//         <Button onClick={handleStop} color="red" mr="sm">
//           Stop
//         </Button>
//         <Button onClick={handleDownload} color="green">
//           Download
//         </Button>
//       </Flex>

//       {/* Playback Speed Control */}
//       <Flex justify="center" mt="md">
//         <Slider
//           label="Playback Speed"
//           min={0.5}
//           max={2}
//           step={0.1}
//           value={playbackSpeed}
//           onChange={handleSpeedChange}
//           marks={[
//             { value: 0.5, label: '0.5x' },
//             { value: 1, label: '1x' },
//             { value: 1.5, label: '1.5x' },
//             { value: 2, label: '2x' },
//           ]}
//         />
//       </Flex>
//     </div>
//   );
// }
// //main code below:
// import { useEffect, useRef, useState } from 'react';
// import { Button, Flex, Slider } from '@mantine/core';
// import { FFmpeg } from '@ffmpeg/ffmpeg';
// import { fetchFile } from '@ffmpeg/util';
// import WaveSurfer from 'wavesurfer.js';

// export default function AudioVisualizer({ file, visualizationType, intensity }) {
//   const waveformRef = useRef(null);
//   const wavesurferRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [playbackSpeed, setPlaybackSpeed] = useState(1);
//   const [ffmpeg, setFfmpeg] = useState(null);

//   useEffect(() => {
//     const initializeFFmpeg = async () => {
//       const ffmpegInstance = new FFmpeg({ log: true });
//       await ffmpegInstance.load();
//       setFfmpeg(ffmpegInstance);
//     };

//     initializeFFmpeg();
//   }, []);

//   useEffect(() => {
//     if (typeof window !== 'undefined' && file) {
//     //   const WaveSurfer = require('wavesurfer.js');

//       // Destroy existing instance
//       if (wavesurferRef.current) {
//         wavesurferRef.current.destroy();
//       }

//       // Create new WaveSurfer instance
//       if(visualizationType === 'bars'){
//         wavesurferRef.current = WaveSurfer.create({
//             container: waveformRef.current,
//             waveColor: '#A8DBA8',
//             progressColor: '#3B8686',
//             barWidth: 3,
//             barGap: 2,
//             height: intensity,
//         });
//       }else{
//         wavesurferRef.current = WaveSurfer.create({
//             container: waveformRef.current,
//             waveColor: '#A8DB',
//             progressColor: '#3B8686',
//             barWidth: 0,
//             barGap: 0,
//             height: intensity,
//         });
//       }


//       // Load the audio file
//       const audioURL = URL.createObjectURL(file);
//       wavesurferRef.current.load(audioURL);

//       return () => {
//         if (wavesurferRef.current) {
//           try {
//             wavesurferRef.current.destroy();
//           } catch (error) {
//             console.error('Error destroying WaveSurfer instance:', error);
//           }
//         }
//       };
//     }
//   }, [file, visualizationType, intensity]);

//   const handlePlayPause = () => {
//     if (wavesurferRef.current.isPlaying()) {
//       wavesurferRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       wavesurferRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   const handleStop = () => {
//     if (wavesurferRef.current) {
//       wavesurferRef.current.stop();
//       setIsPlaying(false);
//     }
//   };

//   const handleSpeedChange = (value) => {
//     setPlaybackSpeed(value);
//     if (wavesurferRef.current) {
//       wavesurferRef.current.setPlaybackRate(value);
//     }
//   };

//   const handleDownload = async () => {
//     if (!ffmpeg) return; // Ensure FFmpeg is loaded

//     try{
//         console.log(file.name);
//         // Load the original audio file into FFmpeg
//         await ffmpeg.writeFile(file.name, await fetchFile(file));
//         console.log("2");
//         // Apply audio processing (e.g., changing volume based on playback speed)
//         await ffmpeg.exec('-i', file.name, '-filter:a', `volume=${playbackSpeed}`, 'output.wav');
//             console.log("3");
//         // Fetch the processed audio
//         const processedAudio = await ffmpeg.readFile('output.wav');
//             console.log("4");
//         // Create a blob URL for the processed audio
//         const audioURL = URL.createObjectURL(new Blob([processedAudio.buffer], { type: 'audio/wav' }));
//             console.log("5");
//         // Download the processed audio
//         const link = document.createElement('a');
//         link.href = audioURL;
//         link.download = 'visualized-audio.wav';
//         link.click();
//         console.log("6");
//     }
//     catch(error){
//         console.error("Error : ",error);
//     }
//   };

//   return (
//     <div>
//       <div ref={waveformRef} style={{ width: '100%', height: '300px' }} />

//       {/* Playback Controls */}
//       <Flex justify="center" mt="md">
//         <Button onClick={handlePlayPause} mr="sm">
//           {isPlaying ? 'Pause' : 'Play'}
//         </Button>
//         <Button onClick={handleStop} color="red" mr="sm">
//           Stop
//         </Button>
//         {/* <Button onClick={handleDownload} color="green">
//           Download
//         </Button> */}
//       </Flex>

//       {/* Playback Speed Control */}
//       <Flex justify="center" mt="md">
//         <Slider
//           label="Playback Speed"
//           min={0.5}
//           max={2}
//           step={0.1}
//           value={playbackSpeed}
//           onChange={handleSpeedChange}
//           marks={[
//             { value: 0.5, label: '0.5x' },
//             { value: 1, label: '1x' },
//             { value: 1.5, label: '1.5x' },
//             { value: 2, label: '2x' },
//           ]}
//         />
//       </Flex>
//     </div>
//   );
// }

//main code without wavesurfer

import { useEffect, useRef, useState } from 'react';
import { Button, Flex, Slider } from '@mantine/core';

export default function AudioVisualizer({ file, visualizationType, intensity }) {
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [audioElement, setAudioElement] = useState(null);

  useEffect(() => {
    if (!file) return;

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    audioContextRef.current = audioContext;

    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    analyserRef.current = analyser;

    const audio = new Audio(URL.createObjectURL(file));
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    setAudioElement(audio);

    return () => {
      audioContext.close();
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [file]);

  useEffect(() => {
    if (!audioElement) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const analyser = analyserRef.current;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      switch (visualizationType) {
        case 'bars':
          drawBarsVisualization(ctx, dataArray);
          break;
        case 'wave':
          drawWavesVisualization(ctx, dataArray);
          break;
        case 'spiral':
          drawSpiralVisualization(ctx, dataArray);
          break;
        case 'circle':
          drawCircleVisualization(ctx,dataArray);
          break;
        case 'dot':
          drawDotVisualization(ctx,dataArray);
          break;
        case 'spectrum':
          drawSpectrumVisualization(ctx,dataArray);
          break;
        default:
          drawBarsVisualization(ctx, dataArray);
      }

      animationIdRef.current = requestAnimationFrame(draw);
    };

    draw();
  }, [audioElement, visualizationType, intensity]);

  const drawDotVisualization = (ctx, dataArray) => {
    ctx.fillStyle = '#FF6347';
    const barWidth = (canvasRef.current.width / dataArray.length) * 2.5 * intensity/100;
    let barHeight;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
      barHeight = (dataArray[i] / 2) * intensity/100;
      ctx.beginPath();
      ctx.arc(x, canvasRef.current.height - barHeight, barWidth / 2, 0, 2 * Math.PI);
      ctx.fill();
      x += barWidth + 1;
    }
  };

  const drawSpectrumVisualization = (ctx, dataArray) => {
    ctx.fillStyle = '#00FF00';
    const barWidth = (canvasRef.current.width / dataArray.length) * 1.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
      barHeight = dataArray[i]*intensity/100;
      ctx.fillRect(x, canvasRef.current.height - barHeight, barWidth, barHeight);
      x += barWidth + 1;
    }
  };

  const drawCircleVisualization = (ctx, dataArray) => {
    const radius = (Math.min(canvasRef.current.width, canvasRef.current.height) / 4) * (intensity/100);
    const centerX = canvasRef.current.width / 2;
    const centerY = canvasRef.current.height / 2;
    const angleStep = (Math.PI * 2) / dataArray.length;

    ctx.strokeStyle = '#00CED1';
    ctx.lineWidth = 2 * intensity/100;

    for (let i = 0; i < dataArray.length; i++) {
      const angle = i * angleStep;
      const barHeight = (dataArray[i] / 2) * intensity/100;
      const x = centerX + Math.cos(angle) * (radius + barHeight);
      const y = centerY + Math.sin(angle) * (radius + barHeight);

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const drawBarsVisualization = (ctx, dataArray) => {
    const barWidth = (canvasRef.current.width / dataArray.length) * 2;
    let barHeight;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
      barHeight = (dataArray[i] / 2)*intensity/100;
      ctx.fillStyle = `rgb(${barHeight + 100}, 50, 150)`;
      ctx.fillRect(x, canvasRef.current.height - barHeight, barWidth, barHeight);
      x += barWidth + 1;
    }
  };

  const drawWavesVisualization = (ctx, dataArray) => {
    ctx.lineWidth = 2*intensity/100;
    ctx.strokeStyle = '#00FF00';

    ctx.beginPath();
    const sliceWidth = (canvasRef.current.width / dataArray.length);
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
      const y = (dataArray[i] / 255.0) * canvasRef.current.height;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      x += sliceWidth;
    }
    ctx.lineTo(canvasRef.current.width, canvasRef.current.height / 2);
    ctx.stroke();
  };

  const drawSpiralVisualization = (ctx, dataArray) => {
    const centerX = canvasRef.current.width / 2;
    const centerY = canvasRef.current.height / 2;
    const maxRadius = Math.min(centerX, centerY) * (intensity/100);
    const angleStep = (Math.PI * 2) / dataArray.length;

    ctx.strokeStyle = '#FF6347';
    ctx.lineWidth = 2 * intensity/100;

    ctx.beginPath();
    for (let i = 0; i < dataArray.length; i++) {
      const angle = i * angleStep;
      const radius = (dataArray[i] / 255.0) * maxRadius;

      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
      audioElement.playbackRate = playbackSpeed;
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0; // Reset audio to the beginning
      setIsPlaying(false);
      cancelAnimationFrame(animationIdRef.current); // Stop the animation
    }
  };

  const handleSpeedChange = (value) => {
    setPlaybackSpeed(value);
    if (audioElement) {
      audioElement.playbackRate = value;
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} width={800} height={400} style={{paddingLeft:'40px' }} />

      {/* Playback Controls */}
      <Flex justify="center" mt="md">
        <Button onClick={handlePlayPause} mr="sm">
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Button onClick={handleStop} color="red" mr="sm">
          Stop
        </Button>
      </Flex>

      {/* Playback Speed Control */}
      <Flex justify="center" mt="md">
        <Slider
          label="Playback Speed"
          min={0.5}
          max={2}
          step={0.1}
          value={playbackSpeed}
          onChange={handleSpeedChange}
          marks={[
            { value: 0.5, label: '0.5x' },
            { value: 1, label: '1x' },
            { value: 1.5, label: '1.5x' },
            { value: 2, label: '2x' },
          ]}
        />
      </Flex>
    </div>
  );
}




