import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle style={lineheight:"1.8"}>நவராத்திரி தினங்களில் தேவிக்கு அலங்காரங்கள் என்ன, நவராத்திரி தினங்களின் ஒவ்வொரு நாளுக்கான பெருமைகள் என்ன, நாம் எப்படி அன்னையை வணங்க வேண்டும் என்பதை இங்கு பார்ப்போம்...</CustomOverTitle>
        <Heading>நவராத்திரி ஒன்பது இரவுகள் சிறப்புகள்</Heading>
        <Description>
          
      இந்தியாவில் கொண்டாடப்படும் பிரபலமான பண்டிகைகளில், நவராத்திரி மிக பிரம்மாண்டமான ஒன்றாகும்.
இந்தியாவின் மற்ற பண்டிகைகளைப் போலவே, நவராத்திரியும் திருவிழா கொண்டாடுவதற்கும் பல கொள்கைகள் இருக்கிறது. ஒரு விதத்தில் , நவராத்திரி திருவிழா கொண்டாடுவதால் நம் ஆன்மீக ஆற்றல்கள் வெளிப்படுகிறது. நம் ஆன்மிக பயணத்தில் துர்கா, லட்சுமி மற்றும் சரஸ்வதி ஆகிய மூவரின் கோட்பாடுகளை நாம் கடந்து செல்கிறோம்.அதாவது கல்வி,செல்வம்,வீரம் இவை மூன்றும் அனைவரின் வாழ்விலும் மிக முக்கியமான விஷயமாகும்.இந்த உலகில் ஒருவரின் ஒருவர் சுயத்தை உணர இது அவசியம் தேவைப்படுகிறது.

        </Description>
        <CustomButtonGroup>
          <Button onClick={() => setIsModalOpened(true)}>
            Subscribe to the newsletter <span>&rarr;</span>
          </Button>
          <NextLink href="#whitepaper" passHref>
            <Button transparent>
              Features <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
