import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>No.1 Tamil news website in the world</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/poja.jpg" title="பூஜை முறைகள்" overTitle="நவராத்திரி ">
            <p>
            ‘ஒன்பது இரவுகள்’ என்று பொருள்படும் நவராத்திரி, துர்கா, லட்சுமி மற்றும் சரஸ்வதி வடிவங்களில் தெய்வீக வழிபாட்டை ஒவ்வொரு மூன்று நாட்களும் வழிபடுகிறார்கள். இருப்பினும், பத்தாவது நாள் மிக முக்கியமான நாளாகும். இது ‘வெற்றியின் அடையாளமாகக் கொண்டாடப்படுகிறது.இதனை விஜயதாசமி என்று அழைக்கப்படுகிறது.
            </p>
            <p>துர்கா,லட்சுமி,சரஸ்வதி ஆகிய மூவரையும் இவ்வுலகில் வழிபடக் காரணம்,அனைத்து எதிர்மறை எண்ணங்களை அழித்து நேர்மறை குணங்களை வளர்க்கும் பண்புகளும்,நற்குணங்களும் இம்மூவரிடம் இருக்கிறது.அதனை இவ்வுலகில் வேரூன்றவே நாம் அவர்களை வணங்குகிறோம்.</p>
            <p>நம்மால் சிவன் என்னும் பெரும் சக்தியை இம்மூன்று சக்திகளின் அருள் இருந்தால் மட்டுமே உணர முடியும் என்று கூறப்படுகிறது. அதனால்தான், தேவி என்று அழைக்கப்படும் மகா சக்தியை மக்கள் அவரது பல்வேறு வெளிப்பாடுகளில் வணங்குகிறார்கள்.</p>
          </BasicSection>
          <BasicSection imageUrl="/9f.jpg" title="வழிபாடு தரும் பலன்கள்" overTitle="நவராத்திரி " reversed>
            <p>
             நவராத்திரி என்பது ஆன்மீக ஆர்வலர்களுக்கு மட்டுமல்ல; இது சதாரண மனிதர்கள் தங்கள் வாழ்க்கையை மேற்கொள்ளுவதற்கான பாடத்தைக் கற்பிக்கிறது.ஒரு மனிதன் வாழ்வின் தடைகளை தாண்டி வெற்றி பெற தைரியத்தின் அடையாளமான துர்கையை வழிபட வேண்டும்.அதே போன்று வாழ்வில் அமைதியையும் செழிப்பையும் பெற லட்சுமியை பிரார்த்தனைச் செய்ய வேண்டும்.
            </p>
            <p>மேலும் அறிவைப் பெறுவதற்காக சரஸ்வதியை வணங்க வேண்டும். இந்த மூன்றும் ஒரு முழுமையான உலக வாழ்க்கைக்கு அவசியமானவை. உண்மையில், நாம் இவ்வாறு வணங்கும் போது நமக்குள் இருக்கும் சக்தி தூண்டப்படுகிறது.</p>
          
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          
          <Features />
                    <ScrollableBlogPosts posts={posts} />
          
          


        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
