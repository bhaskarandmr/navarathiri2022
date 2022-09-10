import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';

import { media } from 'utils/media';

const FEATURES = [
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


export default function Features() {
  return (
    <Container>
        <SectionTitle>வீடியோ</SectionTitle>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
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
