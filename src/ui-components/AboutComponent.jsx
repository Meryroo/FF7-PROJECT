import styled from 'styled-components';

import Anchor from './Anchor';
import Image from './Image';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: yellow;
  color: black;
  margin: 0rem;
  padding: 0rem;
  height: 350px;
  width: 300px;
  gap: 20px;
  border: none;
`;

const AboutComponents = ({ img, imgname, link }) => {
  return (
    <StyledDiv>
      <Image src={img} alt={imgname} width="100%" />

      <Anchor href={link}>
        <Image
          src="https://res.cloudinary.com/dysog0ybg/image/upload/v1676300979/SocialMedia%20Icons/linkedin_rxabeq.png"
          alt="linkedin"
          width="25px"
          height="25px"
        />
      </Anchor>
      <Anchor href={link}>
        <Image
          src="https://res.cloudinary.com/dysog0ybg/image/upload/v1676300979/SocialMedia%20Icons/github_a3wdej.png"
          alt="github"
          width="25px"
          height="25px"
        />
      </Anchor>
    </StyledDiv>
  );
};

export default AboutComponents;
