import { Flex, Text, Button } from '@mantine/core';
import AudioControls from '../components/AudioControls';
import FeaturesSection from '../components/FeaturesSection';
import AudioConverter from '../components/AudioConverter';
import ConverterComponent from '../components/ConverterComponent';
import ComparisonPage from '../components/veedvscanva/comparsion';
import OverviewComponent from '../components/veedvscanva/overview';
import FeatureComparison from '../components/veedvscanva/features';
import ImageCarousel from '../components/veedvscanva/testimonals';
import { Dropdown } from '../icons/Dropdown';
import { IconFilePlus} from '@tabler/icons-react';
import ArchiveFormatSelector from '../components/ArchiveFormatSelector';
import '@mantine/carousel/styles.css';

export default function Home() {

  const headings={
    title1:"canva",
    title2:"veed"
  }
  return (
    <>
    <AudioConverter/>
    <div style={{ padding: '20px',maxWidth: '70%',margin:'0 auto'}}>
      {/* Select File Button */}
      <Button fullWidth leftSection={<IconFilePlus/>} rightSection={<Dropdown/>} style={{backgroundColor: '#b53836',marginBottom: '30px',padding:'5px',color:'white',fontSize:'1.2em ',maxWidth:'20%',fontWeight:'normal',height:'3rem',marginLeft:'25rem'}}>
        Select File
      </Button>

      {/* Options Section */}
      {/* <Flex align="center" mb="md">
        <Text component="a" weight={700} size="lg"  style={{fontWeight:'bolder',fontSize:'1em',color:'#5a5a5a'}}>
          <span style={{ marginRight: '5px',color:'#5a5a5a'}}>🔧</span> OPTIONS
        </Text>
      </Flex> */}

      {/* Audio Section */}
      {/* <Flex align="center" mb="md">
        <Text component="a" weight={600} size="lg"  style={{fontWeight:'bolder',fontSize:'1em',color:'#5a5a5a'}}>
          <span style={{ marginRight: '10px',color:'#5a5a5a' }}>🔊</span> Audio
        </Text>
      </Flex> */}

      {/* Audio Controls */}
      {/* <AudioControls /> */}

      {/* featuressection */}
      <FeaturesSection/>

      <ConverterComponent />

      {/* <ArchiveFormatSelector/> */}

      <ComparisonPage message={headings}/>
      <OverviewComponent message={headings}/>
      <FeatureComparison message={headings}/>

      <Text style={{textAlign:'center',fontSize:'1.5em',fontWeight:'bolder',marginBottom:'20px'}}>Testimonals</Text>
      <ImageCarousel message={headings}/>

    </div>
    </>
    
  );
}
