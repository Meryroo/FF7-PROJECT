import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: flex;
  justify-content: ${({ justify }) =>
    justify === 'center'
      ? 'center'
      : justify === 'flex-end'
      ? 'flex-end'
      : justify === 'flex-star'
      ? 'flex-star'
      : justify === 'space-around'
      ? 'space-around'
      : justify === 'space-between'
      ? 'space-between'
      : 'center'};
  align-items: ${({ align }) =>
    align === 'center'
      ? 'center'
      : align === 'flex-end'
      ? 'flex-end'
      : align === 'flex-star'
      ? 'flex-star'
      : align === 'space-around'
      ? 'space-around'
      : align === 'space-between'
      ? 'space-between'
      : 'center'};
  background-color: ${({ variant }) => (variant ? variant : '#2d3e48')};
  color: ${({ color }) => (color ? color : '#10101C')};
  height: ${({ height }) => height};
  width: 100%;
  padding: ${({ padding }) => padding};
  margin: ${(margin) => margin};
  & .iconsfooter ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  & .iconsfooter ul img {
    height: 100%;
    width: 26px;
    filter: invert(90%);
  }
  & .footerscuared img {
    filter: invert(90%);
  }
`;
const Footer = ({ justify, align, color, height, padding, margin, variant }) => {
  return (
    <FooterStyled
      justify={justify}
      align={align}
      color={color}
      height={height}
      padding={padding}
      margin={margin}
      variant={variant}
    >
      <div className="footerscuared">
        <img
          src="https://res.cloudinary.com/dysog0ybg/image/upload/v1677165711/se_logo-3x-GCifjuXox_wlxvuy.webp"
          alt="scuared Logo"
        />
      </div>
      <div className="iconsfooter">
        <ul>
          <li>
            <img
              src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1677165419/insta_tecmmc.webp"
              alt="Istagram Icon"
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1677165423/twi_kx2e6n.webp"
              alt="Twitter Icon"
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1677165421/face_spq3ck.webp"
              alt="Facebook Icon"
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1677165425/you_o61n62.webp"
              alt="Youtube Icon"
            />
          </li>
        </ul>
      </div>
    </FooterStyled>
  );
};

export default Footer;
