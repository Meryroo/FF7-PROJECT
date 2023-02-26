import styled from 'styled-components';

const DivGridStyled = styled.div`
  display: grid;
  grid-template-columns: ${({ cols }) => (cols ? cols : '1fr 1fr')};
  grid-auto-rows: minmax(100px, auto);
  grid-gap: ${({ gridgap }) => (gridgap ? gridgap : '40px')};
  background-color: ${({ variant }) => (variant ? variant : 'none')};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow-x: ${({ flowx }) => flowx};
  overflow-y: ${({ flowy }) => flowy};
`;
      {children}
    </DivGridStyled>
  );
};

export default DivGrid;
