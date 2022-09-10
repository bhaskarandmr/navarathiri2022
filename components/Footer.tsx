import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon,YoutubeIcon} from 'react-share';
import styled from 'styled-components';TwitterIcon
import Container from 'components/Container';
import { media } from 'utils/media';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        
        <BottomBar>
          <ShareBar>
            <NextLink href="https://twitter.com/dinamalarweb" passHref>
              <a>
                <TwitterIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.facebook.com/Dinamalardaily" passHref>
              <a>
                <FacebookIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.youtube.com/dinamalardaily" passHref>
              <a>
                <YoutubeIcon size={50} round={true} />
              </a>
            </NextLink>
          </ShareBar>
          <Copyright>&copy; Copyright © 2022 Dinamalar - No.1 Tamil website in the world</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}



const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
