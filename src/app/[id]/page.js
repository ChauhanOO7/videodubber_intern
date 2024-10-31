'use client';

import data from '../../db.json';
import { useState, useEffect} from "react";
import { Button, Text, Title, Flex, Box,Card } from '@mantine/core';
import ArchiveFormatSelector from '../../components/ArchiveFormatSelector';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Vconverterinfo from '../../components/Vconverterinfo';
import { IconFolder } from '@tabler/icons-react';
import Vconvertlist from '../../components/Vconvertlist';

export default function Variablecomponent({params}){

    const [first, second] = params.id.split('-');
    const upperfirst=first.toUpperCase();
    const uppersecond=second.toUpperCase();
    const firstcontent = Object.entries(data).find(([key, value]) => key === upperfirst);
    const secondcontent = Object.entries(data).find(([key, value]) => key === uppersecond);

    const content={
        "title1":firstcontent[0],
        "title2":secondcontent[0],
        "body1":firstcontent[1].body,
        "body2":secondcontent[1].body
    }

    const formats={
        "format1":firstcontent[0]
    }

    const [isInputDialogOpen, setInputDialogOpen] = useState(false); // State for input format dialog
    const [isOutputDialogOpen, setOutputDialogOpen] = useState(false); // State for output format dialog
    const [selectedAudioFormat, setSelectedAudioFormat] = useState('MP3');
    const [selectedOutputFormat, setSelectedOutputFormat] = useState('WAV');

    useEffect(()=>{
        setSelectedAudioFormat(firstcontent[0]);
        setSelectedOutputFormat(secondcontent[0]);
    },[])


    // Toggle input format dialog
    const handleAudioFormatClick = (event) => {
        event.stopPropagation(); // Prevent the default dropdown from showing
        setInputDialogOpen((prevState) => !prevState); // Toggle input dialog
        setOutputDialogOpen(false); // Ensure the output dialog is closed
    };

    // Toggle output format dialog
    const handleOutputFormatClick = (event) => {
        event.stopPropagation(); // Prevent the default dropdown from showing
        setOutputDialogOpen((prevState) => !prevState); // Toggle output dialog
        setInputDialogOpen(false); // Ensure the input dialog is closed
    };

    return(
        <div style={{height:'100vh'}}>
            <Box
                style={(theme) => ({
                    backgroundColor: '#202020',
                    padding: '4rem',
                    color: theme.white,
                    position: 'relative', // Set relative positioning for the parent container
                })}
                >
                <Flex style={{ maxWidth: '80%', marginLeft: '180px' }}>
                    <Flex direction={'column'} style={{ maxWidth: '50%' }}>
                    <Title order={2}>{firstcontent[0]} to {secondcontent[0]} Converter</Title>
                    <Text>
                        CloudConvert converts your audio files online. Amongst many others, we support MP3, M4A, WAV, and WMA. You can use the options to control audio quality and file size.
                    </Text>
                    </Flex>

                    <Flex mt="lg" align="center" gap="md" style={{ paddingLeft: '100px' }}>
                    <Text>Convert</Text>
                    
                    {/* Input Format Button */}
                    <Button
                        onClick={handleAudioFormatClick}
                        sx={{ minWidth: 100 }}
                        variant="outline" // Optional styling
                    >
                        {selectedAudioFormat} {/* Display selected audio format */}
                    </Button>

                    <Text>to</Text>

                    {/* Output Format Button */}
                    <Button
                        onClick={handleOutputFormatClick}
                        sx={{ minWidth: 100 }}
                        variant="outline" // Optional styling
                    >
                        {selectedOutputFormat} {/* Display selected output format */}
                    </Button>

                    <Link href={`/${selectedAudioFormat.toLowerCase()}-${selectedOutputFormat.toLowerCase()}`}>
                        <Button sx={{ marginLeft: '10px' }} variant="filled">Go</Button>
                    </Link>
                    </Flex>
                </Flex>

                {/* Archive Format Selector Dialog for Input Format */}
                {isInputDialogOpen && (
                    <div style={{
                    position: 'absolute', // Make dialog absolute
                    top: '180px', // Position it directly below the input button
                    left: '750px', // Align with the input button
                    zIndex: 1000, // Ensure it's above other elements
                    width: '350px', // Set a constant width for the dialog
                    }}>
                    <ArchiveFormatSelector
                        selectedFormat={selectedAudioFormat} // Pass selected format
                        onSelect={(format) => {
                        setSelectedAudioFormat(format); // Update the selected format
                        setInputDialogOpen(false); // Close the dialog
                        }}
                        onClose={() => setInputDialogOpen(false)} // Close handler
                    />
                    </div>
                )}

                {/* Archive Format Selector Dialog for Output Format */}
                {isOutputDialogOpen && (
                    <div style={{
                    position: 'absolute', // Make dialog absolute
                    top: '180px', // Position it directly below the output button
                    left: '750px', // Align with the output button
                    zIndex: 1000, // Ensure it's above other elements
                    width: '350px', // Set a constant width for the dialog
                    }}>
                    <ArchiveFormatSelector
                        selectedFormat={selectedOutputFormat} // Pass selected format
                        onSelect={(format) => {
                        setSelectedOutputFormat(format); // Update the selected format
                        setOutputDialogOpen(false); // Close the dialog
                        }}
                        onClose={() => setOutputDialogOpen(false)} // Close handler
                    />
                    </div>
                )}
                </Box>
                
                <Card shadow="sm" padding="lg" style={{width:'80%',marginLeft:'10%',marginTop:'50px'}}>
                    <Flex>
                        <IconFolder size={20} style={{marginTop:'5px',marginRight:'10px'}}/>
                        <Text style={{fontWeight:'bolder',marginBottom:'10px',color:'gray',fontSize:'1.2em'}}>{firstcontent[0]}</Text>
                    </Flex>
                    <Text>{firstcontent[1].body}</Text>
                </Card>

                <Vconverterinfo content={content}/>
                <Vconvertlist formats={formats}/>
            
        </div>
    );
}

