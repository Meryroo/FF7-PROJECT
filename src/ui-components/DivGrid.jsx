import styled from 'styled-components';

const DivGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 40px;
  background-color: ${({ variant }) => (variant ? variant : 'none')};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow-x: ${({ flowx }) => flowx};
  overflow-y: ${({ flowy }) => flowy};
`;

const DivGrid = ({ children, variant, width, height, flowx, flowy }) => {
  return (
    <DivGridStyled
      flowx={flowx}
      flowy={flowy}
      width={width}
      height={height}
      variant={variant}
    >
      {children}
    </DivGridStyled>
  );
};

export default DivGrid;
