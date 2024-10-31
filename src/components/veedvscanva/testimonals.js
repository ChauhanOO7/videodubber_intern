'use client';

import { Image, Card, Text, Group, Button, rem,Flex } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons-react';
import classes from '../../app/CarouselCard.module.css';
import data from '../../db3.json';

export default function CarouselCard({message}) {

  const firstcontent = Object.entries(data).find(([key, value]) => key === message.title1);
  const secondcontent = Object.entries(data).find(([key, value]) => key === message.title2);
  const body1=firstcontent[1];
  const body2=secondcontent[1];
  const testimonals1=body1.testimonals;
  const testimonals2=body2.testimonals;
  const slides1 = testimonals1.map((text) => (
    <Carousel.Slide key={text} className={classes.carouselSlide}>
      <Text style={{fontWeight:'bold',marginBottom:'20px'}}>{text.name}</Text>
      <Text style={{paddingRight:'30px'}}>{text.review}</Text>
    </Carousel.Slide>

  ));

  const slides2 = testimonals2.map((text) => (
    <Carousel.Slide key={text} className={classes.carouselSlide}>
      <Text style={{fontWeight:'bold',marginBottom:'20px'}}>{text.name}</Text>
      <Text style={{paddingRight:'30px'}}>{text.review}</Text>
    </Carousel.Slide>

  ));

  return (
    <>
    <Flex justify={'space-between'} style={{marginBottom:'20px'}}>
      <Text style={{paddingLeft:'250px',fontWeight:'bolder'}}>CANVA</Text>
      <Text style={{paddingRight:'250px',fontWeight:'bolder'}}>VEED</Text>
    </Flex>
    <Flex>
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides1}
        </Carousel>
      </Card.Section>
    </Card>
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides2}
        </Carousel>
      </Card.Section>
    </Card>
    </Flex>
    </>
  );
}