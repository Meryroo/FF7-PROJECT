import styled from 'styled-components';

const TextComponentStyled = styled.p`
  color: ${(color) => color};
  size: ${(size) => size};
`;

const TextComponent = ({ color, size, text }) => {
  return (
    <TextComponentStyled color={color} size={size}>
      {text}
    </TextComponentStyled>
  );
};

export default TextComponent;
