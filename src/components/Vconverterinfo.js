import { Grid, Flex, Text, Card, ThemeIcon } from '@mantine/core';
import { IconMusic } from '@tabler/icons-react';
import { IconFolder } from '@tabler/icons-react';

export default function Vconverterinfo({content}){

    return (
        <Grid gutter='lg' style={{width:'80%', marginLeft:'10%',marginTop:'70px'}}>
            <Grid.Col span={6}>
                <Card shadow="sm" padding="lg">
                <Flex align="center">
                    <IconMusic size={30}/>
                    <Text ml="sm" style={{fontWeight:'bolder',fontSize:'1.2em'}}>{content.title1}</Text>
                    <Text mt="xs" component='a' href="https://google.com" style={{marginLeft:'350px',marginBottom:'10px',color:'#b53836'}}>
                        {content.title1} Converter
                    </Text>
                </Flex>
                <Text mt="md">
                    {content.body1}
                </Text>
                </Card>
            </Grid.Col>

            <Grid.Col span={6}>
                <Card shadow="sm" padding="lg">
                <Flex align="center">
                <IconMusic size={30}/>
                    <Text ml="sm" style={{fontWeight:'bolder',fontSize:'1.2em'}}>{content.title2}</Text>
                    <Text mt="xs" component='a' href="https://google.com" style={{marginLeft:'350px',marginBottom:'10px',color:'#b53836'}}>
                        {content.title2} Converter
                    </Text>
                </Flex>
                <Text mt="md">
                {content.body2}
                </Text>
                </Card>
            </Grid.Col>
        </Grid>
    );
}