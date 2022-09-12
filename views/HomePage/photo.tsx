import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';

import { media } from 'utils/media';

const photo = [
  {
    imageUrl: '/1f.jpg',
    title: 'நவராத்திரி நான்காம் நாள் பூஜை முறை',
    description:
      '',
  },
  {
    imageUrl: '/1f.jpg',
    title: 'நவராத்திரி நான்காம் நாள் பூஜை முறை',
    description:
      '',
  },
  {
    imageUrl: '/1f.jpg',
    title: 'நவராத்திரி நான்காம் நாள் பூஜை முறை',
    description:
      '',
  },
  {
    imageUrl: '/1f.jpg',
    title: 'நவராத்திரி நான்காம் நாள் பூஜை முறை',
    description:
      '',
  },
  {
   imageUrl: '/1f.jpg',
    title: 'நவராத்திரி நான்காம் நாள் பூஜை முறை',
    description:
      '',
  },
  {
    imageUrl: '/1f.jpg',
    title: 'நவராத்திரி நான்காம் நாள் பூஜை முறை',
    description:
      '',
  },
  {
    imageUrl: '/1f.jpg',
    title: 'நவராத்திரி நான்காம் நாள் பூஜை முறை',
    description:
      '',
  },
  {
     imageUrl: '/1f.jpg',
    title: 'நவராத்திரி நான்காம் நாள் பூஜை முறை',
    description:
      '',
  },
  {
    imageUrl: '/1f.jpg',
    title: 'நவராத்திரி நான்காம் நாள் பூஜை முறை',
    description:
      '',
  },
];


export default function photo() {
  return (
    <Container>
        <SectionTitle>photo</SectionTitle>
      <CustomAutofitGrid>
        {photo.map((singlephoto, idx) => (
          <BasicCard key={singlephoto.title} {...singlephoto} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
  

}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
