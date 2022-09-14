import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';



export default function FeaturesPage() {
  return (
    <Page title="வீடியோ">
      <Wrapper>
        <SectionTitle>நவராத்திரி முதல் நாள் வழிபாட்டு முறை</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=zPJOGq5RXDQ" />
        
      <SectionTitle>நவராத்திரி இரண்டாம் நாள் வழிபாட்டு முறை</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=oU6lypUboF0" />
     
         <SectionTitle>நவராத்திரி மூன்றாம்  நாள் வழிபாட்டு முறை</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
     
        
      </Wrapper>
    </Page>
     
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
