'use client';
import { Grid, Flex, Text, Card, ThemeIcon } from '@mantine/core';
import { IconMusic } from '@tabler/icons-react';
import { IconFolder } from '@tabler/icons-react';

const FeaturesSection = () => {
  return (
    <Grid gutter="lg">
      {/* Top Row */}
      <Grid.Col span={6}>
        <Card shadow="sm" padding="lg">
          <Flex align="center">
            <IconMusic size={30}/>
            <Text ml="sm" style={{fontWeight:'bolder',fontSize:'1.2em'}}>MP3</Text>
            <Text mt="xs" component='a' href="https://google.com" style={{marginLeft:'250px',marginBottom:'10px',color:'#b53836'}}>
                MP3 Converter
            </Text>
          </Flex>
          <Text mt="md">
            MP3 is an audio format that can compress and encode an audio file. It uses the lossy compression algorithm to contain audio data. The lossy compression helps to reduce the data significantly without losing audio quality. MP3s are created using different bit rates maintaining the original quality.
          </Text>
        </Card>
      </Grid.Col>

      <Grid.Col span={6}>
        <Card shadow="sm" padding="lg">
          <Flex align="center">
          <IconMusic size={30}/>
            <Text ml="sm" style={{fontWeight:'bolder',fontSize:'1.2em'}}>WAV</Text>
            <Text mt="xs" component='a' href="https://google.com" style={{marginLeft:'250px',marginBottom:'10px',color:'#b53836'}}>
                WAV Converter
            </Text>
          </Flex>
          <Text mt="md">
          WAV is an audio file that is associated with Microsoft Windows. It is the default audio format for Windows. But it supports almost all the Operating Systems. WAV files are comparatively larger than MP3 files. It is mostly used to create music files in audio cd. It can save music files at different bit rates.
          </Text>
        </Card>
      </Grid.Col>

      {/* Bottom Row */}
      <Grid.Col span={6}>
        <Card shadow="sm" padding="lg">
          <Flex direction={'column'}>
            <Flex direction={'row'}>
                <IconFolder size={20} style={{marginTop:'5px'}}/>
                <Text ml="sm" style={{fontWeight:'bolder',fontSize:'1.2em'}}>+200 Formats Supported</Text>
            </Flex>
            <Text mt="md">
                CloudConvert is your universal app for file conversions. We support nearly all audio, video, document, ebook, archive, image, spreadsheet, and presentation formats. Plus, you can use our online tool without downloading any software.
                </Text>
          </Flex>
        </Card>
      </Grid.Col>

      <Grid.Col span={6}>
        <Card shadow="sm" padding="lg">
          <Flex direction={'column'}>
            <Flex direction={'row'}>
                <ThemeIcon size="xl" radius="md" variant="light">
                <Text size="xl" style={{marginBottom:'10px'}}>🔒</Text> {/* Using emoji as a placeholder */}
                </ThemeIcon>
                <Text style={{fontWeight:'bolder',fontSize:'1.2em',marginTop:'3px'}}>Data Security</Text>
            </Flex>
            <Text mt="md">
                CloudConvert is ISO 27001 certified and has been trusted by our users and customers since its founding in 2012. No one except you will ever have access to your files. We earn money by selling access to our API, not by selling your data. Read more about that in our Security Overview.
            </Text>
          </Flex>

        </Card>
      </Grid.Col>

      <Grid.Col span={6}>
        <Card shadow="sm" padding="lg">
          <Flex direction={'column'}>
            <Flex>
                <ThemeIcon size="xl" radius="md" variant="light">
                <Text size="xl" style={{marginBottom:'10px'}}>🔧</Text> {/* Using emoji as a placeholder */}
                </ThemeIcon>
                <Text style={{fontWeight:'bolder',fontSize:'1.2em',marginTop:'3px'}}>High-Quality Conversions</Text> 
            </Flex>
            <Text mt="md">
                Besides using open source software under the hood, we’ve partnered with various software vendors to provide the best possible results. Most conversion types can be adjusted to your needs such as setting the quality and many other options.
            </Text>  
          </Flex>
        </Card>
      </Grid.Col>

      <Grid.Col span={6}>
        <Card shadow="sm" padding="lg">
          <Flex direction={'column'}>
            <Flex>
                <ThemeIcon size="xl" radius="md" variant="light">
                <Text size="xl" style={{marginBottom:'10px'}}>🔌</Text> {/* Using emoji as a placeholder */}
                </ThemeIcon>
                <Text style={{fontWeight:'bolder',fontSize:'1.2em',marginTop:'3px'}}>Powerful API</Text>
            </Flex>
            <Text mt="md">
                Our API allows custom integrations with your app. You pay only for what you actually use, and there are huge discounts for high-volume customers. We provide a lot of handy features such as full Amazon S3 integration. Check out the CloudConvert API.
            </Text>
          </Flex>
        </Card>
      </Grid.Col>
    </Grid>
  );
};

export default FeaturesSection;

// import { SimpleGrid, Flex, Text, Card, ThemeIcon } from '@mantine/core';
// import { IconMusic } from '@tabler/icons-react';
// import { IconFolder } from '@tabler/icons-react';

// const FeaturesSection = () => {
//   return (
//     <SimpleGrid cols={2} spacing="lg">
//       {/* Top Row */}
//       <Card shadow="sm" padding="lg">
//         <Flex align="center">
//           <IconMusic size={30}/>
//           <Text ml="sm" style={{fontWeight:'bolder',fontSize:'1.2em'}}>MP3</Text>
//           <Text mt="xs" component='a' href="https://google.com" style={{marginLeft:'250px',marginBottom:'10px',color:'#b53836'}}>
//               MP3 Converter
//           </Text>
//         </Flex>
//         <Text mt="md">
//           MP3 is an audio format that can compress and encode an audio file. It uses the lossy compression algorithm to contain audio data. The lossy compression helps to reduce the data significantly without losing audio quality. MP3s are created using different bit rates maintaining the original quality.
//         </Text>
//       </Card>

//       <Card shadow="sm" padding="lg">
//         <Flex align="center">
//           <IconMusic size={30}/>
//           <Text ml="sm" style={{fontWeight:'bolder',fontSize:'1.2em'}}>WAV</Text>
//           <Text mt="xs" component='a' href="https://google.com" style={{marginLeft:'250px',marginBottom:'10px',color:'#b53836'}}>
//               WAV Converter
//           </Text>
//         </Flex>
//         <Text mt="md">
//           WAV is an audio file that is associated with Microsoft Windows. It is the default audio format for Windows. But it supports almost all the Operating Systems. WAV files are comparatively larger than MP3 files. It is mostly used to create music files in audio cd. It can save music files at different bit rates.
//         </Text>
//       </Card>

//       {/* Bottom Row */}
//       <Card shadow="sm" padding="lg">
//         <Flex direction={'column'}>
//           <Flex direction={'row'}>
//               <IconFolder size={20} style={{marginTop:'5px'}}/>
//               <Text ml="sm" style={{fontWeight:'bolder',fontSize:'1.2em'}}>+200 Formats Supported</Text>
//           </Flex>
//           <Text mt="md">
//               CloudConvert is your universal app for file conversions. We support nearly all audio, video, document, ebook, archive, image, spreadsheet, and presentation formats. Plus, you can use our online tool without downloading any software.
//           </Text>
//         </Flex>
//       </Card>

//       <Card shadow="sm" padding="lg">
//         <Flex direction={'column'}>
//           <Flex direction={'row'}>
//               <ThemeIcon size="xl" radius="md" variant="light">
//               <Text size="xl" style={{marginBottom:'10px'}}>🔒</Text> {/* Using emoji as a placeholder */}
//               </ThemeIcon>
//               <Text style={{fontWeight:'bolder',fontSize:'1.2em',marginTop:'3px'}}>Data Security</Text>
//           </Flex>
//           <Text mt="md">
//               CloudConvert is ISO 27001 certified and has been trusted by our users and customers since its founding in 2012. No one except you will ever have access to your files. We earn money by selling access to our API, not by selling your data. Read more about that in our Security Overview.
//           </Text>
//         </Flex>
//       </Card>

//       <Card shadow="sm" padding="lg">
//         <Flex direction={'column'}>
//           <Flex>
//               <ThemeIcon size="xl" radius="md" variant="light">
//               <Text size="xl" style={{marginBottom:'10px'}}>🔧</Text> {/* Using emoji as a placeholder */}
//               </ThemeIcon>
//               <Text style={{fontWeight:'bolder',fontSize:'1.2em',marginTop:'3px'}}>High-Quality Conversions</Text> 
//           </Flex>
//           <Text mt="md">
//               Besides using open source software under the hood, we’ve partnered with various software vendors to provide the best possible results. Most conversion types can be adjusted to your needs such as setting the quality and many other options.
//           </Text>  
//         </Flex>
//       </Card>

//       <Card shadow="sm" padding="lg">
//         <Flex direction={'column'}>
//           <Flex>
//               <ThemeIcon size="xl" radius="md" variant="light">
//               <Text size="xl" style={{marginBottom:'10px'}}>🔌</Text> {/* Using emoji as a placeholder */}
//               </ThemeIcon>
//               <Text style={{fontWeight:'bolder',fontSize:'1.2em',marginTop:'3px'}}>Powerful API</Text>
//           </Flex>
//           <Text mt="md">
//               Our API allows custom integrations with your app. You pay only for what you actually use, and there are huge discounts for high-volume customers. We provide a lot of handy features such as full Amazon S3 integration. Check out the CloudConvert API.
//           </Text>
//         </Flex>
//       </Card>
//     </SimpleGrid>
//   );
// };

// export default FeaturesSection;

