import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';

import { media } from 'utils/media';

const PHOTO = [
  {
    imageUrl: '/poja.jpg',
    title: 'நவராத்திரி நான்காம் நாள் பூஜை முறை',
    description:
      '',
  },
  {
    imageUrl: '//poja.jpg',
    title: 'நவராத்திரி நான்காம் நாள் பூஜை முறை',
    description:
      '',
  },



export default function photo() {
  return (
    <Container>
        <SectionTitle>photo</SectionTitle>
      <CustomAutofitGrid>
        {PHOTO.map((singlephotos, idx) => (
          <BasicCard key={singlephotos.title} {...singlephotos} />
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
