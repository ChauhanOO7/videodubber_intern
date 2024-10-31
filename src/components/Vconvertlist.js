// import conversionData from '../db2.json';
// import { Grid, Card, Text, Title, Group } from '@mantine/core';
// import { useState, useEffect } from 'react';


// const Vconvertlist = ({formats}) => {
//   const [conversionOptions, setConversionOptions] = useState({ convertFrom: {}, convertTo: {} });

//   useEffect(() => {
//     const convertFrom = {};
//     const convertTo = {};

//     // Populate 'Convert From' and 'Convert To' options
//     Object.keys(conversionData).forEach((format) => {
//       // Convert From <format> to related formats
//       convertFrom[format] = conversionData[format].related_formats.map((related) => `${format.toUpperCase()} to ${related.toUpperCase()}`);

//       // Convert To <format> from related formats
//       conversionData[format].related_formats.forEach((related) => {
//         if (!convertTo[related]) {
//           convertTo[related] = [];
//         }
//         convertTo[related].push(`${related.toUpperCase()} to ${format.toUpperCase()}`);
//       });
//     });

//     setConversionOptions({ convertFrom, convertTo });
//   }, []);

//   return (
//     <Grid>
//       {/* Convert From */}
//       <Grid.Col span={6}>
//         <Card shadow="sm" padding="lg">
//           <Group>
//             <Text size="xl" weight={700}>
//               🔄 CONVERT FROM
//             </Text>
//           </Group>
//           <Group direction="column" spacing="xs">
//             {Object.keys(conversionOptions.convertFrom).map((format, index) => (
//               <div key={index}>
//                 <Title order={4} mt="md">{format.toUpperCase()}</Title>
//                 {conversionOptions.convertFrom[format].map((option, i) => (
//                   <Text key={i} color="red">
//                     {option}
//                   </Text>
//                 ))}
//               </div>
//             ))}
//           </Group>
//         </Card>
//       </Grid.Col>

//       {/* Convert To */}
//       <Grid.Col span={6}>
//         <Card shadow="sm" padding="lg">
//           <Group>
//             <Text size="xl" weight={700}>
//               🔄 CONVERT TO
//             </Text>
//           </Group>
//           <Group direction="column" spacing="xs">
//             {Object.keys(conversionOptions.convertTo).map((format, index) => (
//               <div key={index}>
//                 <Title order={4} mt="md">{format.toUpperCase()}</Title>
//                 {conversionOptions.convertTo[format].map((option, i) => (
//                   <Text key={i} color="red">
//                     {option}
//                   </Text>
//                 ))}
//               </div>
//             ))}
//           </Group>
//         </Card>
//       </Grid.Col>
//     </Grid>
//   );
// };

// export default Vconvertlist;

'use client';


import conversionData from '../db2.json';
import { Grid, Card, Text, Title, Group,Box,Flex } from '@mantine/core';
import { useState, useEffect } from 'react';
import { IconDownload, IconX, IconRepeat, IconSettings, IconFilePlus, IconReload } from '@tabler/icons-react';

const Vconvertlist = ({ formats }) => {
  const [conversionOptions, setConversionOptions] = useState({ convertFrom: {}, convertTo: {} });

  useEffect(() => {
    const convertFrom = {};
    const convertTo = {};

    // Get the format value from the props
    const formatValue = formats.format1;

    // Check if the format exists in conversionData
    if (conversionData[formatValue]) {
      // Convert From <formatValue> to related formats
      convertFrom[formatValue] = conversionData[formatValue].related_formats.map((related) => 
        `${formatValue.toUpperCase()} to ${related.toUpperCase()}`
      );

      // Convert To related formats from <formatValue>
      conversionData[formatValue].related_formats.forEach((related) => {
        if (conversionData[related]) {
          convertTo[related] = [`${related.toUpperCase()} to ${formatValue.toUpperCase()}`];
        }
      });
    }

    setConversionOptions({ convertFrom, convertTo });
  }, [formats]);

  return (
    <Grid style={{width:'80%', marginLeft:'10%'}}>
      {/* Convert From */}
      <Grid.Col span={6}>
        <Card shadow="sm" padding="lg">
          <Group>
          <IconReload size={18} />
            <Text style={{fontSize:'1em',fontWeight:'bolder'}}>
                CONVERT FROM {formats.format1.toUpperCase()}
            </Text>
          </Group>
          <Group direction="column" spacing="xs">
            {Object.keys(conversionOptions.convertFrom).map((format, index) => (
              <div key={index} style={{marginTop:'10px'}}>
                {conversionOptions.convertFrom[format].map((option, i) => (
                  <Text key={i} style={{color:'#FA5252'}}>
                    {option}
                  </Text>
                ))}
              </div>
            ))}
          </Group>
        </Card>
      </Grid.Col>

      {/* Convert To */}
      <Grid.Col span={6}>
        <Card shadow="sm" padding="lg">
          <Group>
          <IconReload size={18} style={{marginBottom:'7px'}} />
            <Text style={{fontSize:'1em',fontWeight:'bolder',marginBottom:'10px'}}>
                CONVERT TO
            </Text>
          </Group>
          <Group direction="column" spacing="xs">
            {Object.keys(conversionOptions.convertTo).map((format, index) => (
              <div key={index}>
                {conversionOptions.convertTo[format].map((option, i) => (
                  <Text key={i} style={{color:'#FA5252'}}>
                    {option}
                  </Text>
                ))}
              </div>
            ))}
          </Group>
        </Card>
      </Grid.Col>
    </Grid>
  );
};

export default Vconvertlist;





