// import { Flex, Box, Text, Divider } from '@mantine/core';

// export default function OverviewComponent() {
//   return (
//     <Flex
//       direction="row"
//       justify="space-between"
//       align="flex-start"
//       style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#f9f9f9' }}
//     >
//       {/* Left Side */}
//       <Box style={{ maxWidth: '45%' }}>
//         <Text size="lg" weight={700}>
//           Rating
//         </Text>
//         <Text size="md" color="blue" weight={600} style={{ marginBottom: '10px' }}>
//           Score 9.2 out of 10
//         </Text>

//         <Text size="lg" weight={700}>
//           Most Used By
//         </Text>
//         <Text size="md" style={{ marginBottom: '10px' }}>
//           N/A
//         </Text>

//         <Text size="lg" weight={700}>
//           Product Summary
//         </Text>
//         <Text size="sm" style={{ marginBottom: '10px' }}>
//           Canva is a popular, simple online graphic design tool. Users can import images, use templates to design banners and logos, or pay to use Canva's premium stock images/paid templates (elements starting at $1).
//         </Text>

//         <Text size="lg" weight={700}>
//           Starting Price
//         </Text>
//         <Text size="md" weight={600}>
//           $12.95 per month
//         </Text>
//       </Box>

//       <Divider orientation="vertical" size="md" style={{ margin: '0 20px' }} />

//       {/* Right Side */}
//       <Box style={{ maxWidth: '45%' }}>
//         <Text size="lg" weight={700}>
//           Rating
//         </Text>
//         <Text size="md" color="blue" weight={600} style={{ marginBottom: '10px' }}>
//           Score 5.8 out of 10
//         </Text>

//         <Text size="lg" weight={700}>
//           Most Used By
//         </Text>
//         <Text size="md" style={{ marginBottom: '10px' }}>
//           Mid-Size Companies (51-1,000 employees)
//         </Text>

//         <Text size="lg" weight={700}>
//           Product Summary
//         </Text>
//         <Text size="sm" style={{ marginBottom: '10px' }}>
//           VEED.IO aims to make professional video production simple. Its online video workflow tools allow teams to record, edit, review, and share video. VEED.IO has single-click features such as auto-subtitling, translations, transitions, custom branding, and more.
//         </Text>

//         <Text size="lg" weight={700}>
//           Starting Price
//         </Text>
//         <Text size="md" weight={600}>
//           $10 per user
//         </Text>
//       </Box>
//     </Flex>
//   );
// }


import { Table, Text } from '@mantine/core';
import data from '../../db3.json';

export default function OverviewComponentTable({message}) {

  const heading1=message.title1;
  const heading2=message.title2;
  const firstcontent = Object.entries(data).find(([key, value]) => key === heading1);
  const secondcontent = Object.entries(data).find(([key, value]) => key === heading2);
  const body1=firstcontent[1];
  const body2=secondcontent[1];
  return (
    <Table highlightOnHover withBorder withColumnBorders style={{ margin: '20px' }}>
      <thead>
        <tr>
          <th style={{width:'30%',padding:'10px'}}>Overview</th>
          <th style={{padding:"10px"}}>{heading1.toUpperCase()}</th>
          <th style={{padding:"10px"}}>{heading2.toUpperCase()}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Text size="lg" weight={700} style={{textAlign:'center'}}>
              Rating
            </Text>
          </td>
          <td style={{padding:"10px"}}>
            <Text size="md" color="blue" weight={600}>
              {body1.rating}
            </Text>
          </td>
          <td style={{padding:"10px"}}>
            <Text size="md" color="blue" weight={600}>
              {body2.rating}
            </Text>
          </td>
        </tr>
        <tr>
          <td>
            <Text size="lg" weight={700} style={{textAlign:'center'}}>
              Most Used By
            </Text>
          </td>
          <td>
            <Text size="md" style={{padding:"10px"}}>{body1.mostusedby}</Text>
          </td>
          <td>
            <Text size="md" style={{padding:"10px"}}>{body2.mostusedby}</Text>
          </td>
        </tr>
        <tr>
          <td>
            <Text size="lg" weight={700} style={{textAlign:'center'}}>
              Product Summary
            </Text>
          </td>
          <td>
            <Text size="sm" style={{padding:"10px"}}>
              {body1.productsummary}
            </Text>
          </td>
          <td>
            <Text size="sm" style={{padding:"10px"}}>
              {body2.productsummary}
            </Text>
          </td>
        </tr>
        <tr>
          <td>
            <Text size="lg" weight={700} style={{textAlign:'center'}}>
              Starting Price
            </Text>
          </td>
          <td>
            <Text size="md" weight={600} style={{padding:"10px"}}>
              {body1.startingprice}
            </Text>
          </td>
          <td>
            <Text size="md" weight={600} style={{padding:"10px"}}>
              {body2.startingprice}
            </Text>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
