
'use client';
import { useEffect, useRef, useState } from 'react';
import { Container, Button, Group, Slider, Text } from '@mantine/core';

export default function CustomVideoPlayer() {
  const canvasRef = useRef(null);
  const videoBufferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [videoContext, setVideoContext] = useState(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours > 0 ? hours + ':' : ''}${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const video = document.createElement('video');
      video.src = url;
      video.crossOrigin = 'anonymous';
      videoBufferRef.current = video;

      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      setVideoContext(context);

      video.onloadedmetadata = () => {
        canvas.width = video.videoWidth / 2;
        canvas.height = video.videoHeight / 2;
        setDuration(video.duration); // Set video duration
        drawFrame();
      };
    }
  };

  const drawFrame = () => {
    const video = videoBufferRef.current;
    if (video && videoContext) {
      videoContext.drawImage(video, 0, 0, video.videoWidth / 2, video.videoHeight / 2);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      videoBufferRef.current.pause();
    } else {
      videoBufferRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const forward = () => {
    const video = videoBufferRef.current;
    if (video) {
      video.currentTime += 10;
      drawFrame();
    }
  };

  const backward = () => {
    const video = videoBufferRef.current;
    if (video) {
      video.currentTime -= 10;
      drawFrame();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const video = videoBufferRef.current;
      const updateFrame = () => {
        drawFrame();
        setCurrentTime(video.currentTime); // Update current playback time
        setCurrentFrame((video.currentTime / video.duration) * 100);
        if (!video.paused && !video.ended) {
          requestAnimationFrame(updateFrame);
        }
      };
      requestAnimationFrame(updateFrame);
    }
  }, [isPlaying]);

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Styled upload button */}
      <Button component="label" style={{ marginBottom: '20px', alignSelf: 'center' }}>
        Upload Video
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </Button>

      {/* Canvas for rendering video frames */}
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
      />

      {/* Controls */}
      <Group position="center" style={{ marginBottom: '20px' }}>
        <Button onClick={backward}>⏪ 10 sec</Button>
        <Button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</Button>
        <Button onClick={forward}>⏩ 10 sec</Button>
      </Group>

      {/* Progress Bar with Time Display */}
      <Group position="apart" style={{ width: '80%', marginTop: '10px'}}>
        <Text style={{marginRight:'650px'}}>{formatTime(currentTime)}</Text> {/* Current time */}
        <Text>{formatTime(duration-currentTime)}</Text> {/* Total duration */}
      </Group>
      <Slider
        value={currentFrame}
        onChange={(value) => {
          const video = videoBufferRef.current;
          if (video) {
            video.currentTime = (value / 100) * video.duration;
            drawFrame();
          }
        }}
        label={null}
        min={0}
        max={100}
        style={{ width: '80%', marginTop: '10px' }}
      />

      {/* Volume Control */}
      <Text mt="md">Volume</Text>
      <Slider
        value={volume * 100}
        onChange={(value) => {
          const video = videoBufferRef.current;
          if (video) {
            video.volume = value / 100;
            setVolume(value / 100);
          }
        }}
        label={null}
        min={0}
        max={100}
        style={{ width: '80%' }}
      />
    </Container>
  );
}

