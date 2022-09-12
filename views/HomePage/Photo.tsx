import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard1';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';

import { media } from 'utils/media';

const PHOTO = [
  {
    imageUrl: '/kolu1.jpg',
    title: 'வடபழனி ஆண்டவர் கோவிலில் பக்தர்கள் பங்களிப்பில் சக்தி கொலு',
    description:
      '',
  },
  {
    imageUrl: '/kolu2.jpg',
    title: 'தினமலர் வாசகர்களின் கொலு புகைப்படங்கள் ',
    description:
      '',
  },

];

export default function photo() {
  return (
    <Container>
        <SectionTitle>போட்டோ</SectionTitle>
             <Link href="/features">
      <CustomAutofitGrid>
        {PHOTO.map((singlephotos, idx) => (
          <BasicCard key={singlephotos.title} {...singlephotos} />
        ))}
      </CustomAutofitGrid>
                 </Link>   
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
