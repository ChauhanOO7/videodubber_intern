'use client';

import { Table, Text, Center } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import data from '../../db3.json';

export default function FeatureComparisonTable({message}) {

  const firstcontent = Object.entries(data).find(([key, value]) => key === message.title1);
  const secondcontent = Object.entries(data).find(([key, value]) => key === message.title2);
  const body1=firstcontent[1];
  const body2=secondcontent[1];
  const features1=body1.features;
  const features2=body2.features;

  const updatedFeatures1 = features1.map(feature1 => {
    const matchingFeature = features2.find(feature2 => feature2.name === feature1.name);
    return { 
        ...feature1, 
        product2: matchingFeature ? matchingFeature.product2 : false 
    };
});

  return (
    <Table highlightOnHover withBorder withColumnBorders style={{ margin: '20px',width:'80%'}}>
      <thead>
        <tr>
          <th style={{textAlign:'right',paddingRight:'45px'}}>
            <Text size="lg" style={{fontWeight:'bolder'}}>
              Writing Features
            </Text>
          </th>
        </tr>
        <tr>
          <th>Feature</th>
          <th>{firstcontent[0].toUpperCase()}</th>
          <th>{secondcontent[0].toUpperCase()}</th>
        </tr>
      </thead>
      <tbody>
        {updatedFeatures1.map((feature, index) => (
          <tr key={index} style={{textAlign:'center'}}>
            <td>{feature.name}</td>
            <td>
              <Center>
                {feature.product ? (
                  <IconCheck size={20} color="green" />
                ) : (
                  <IconX size={20} color="red" />
                )}
              </Center>
            </td>
            <td>
              <Center>
                {feature.product2 ? (
                  <IconCheck size={20} color="green" />
                ) : (
                  <IconX size={20} color="red" />
                )}
              </Center>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
