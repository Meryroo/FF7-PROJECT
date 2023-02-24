import styled from 'styled-components';

const MinMaxFilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ height }) =>
    height === 'lg' ? '80px' : height === 'sm' ? '40px' : '60px'};
  width: ${({ width }) =>
    width === 'lg' ? '500px' : width === 'sm' ? '250px' : '350px'};
  padding: 10px 5px;
  position: relative;
`;
const MinMaxFilter = ({ width, height, action, minMin, maxMin, minMax, maxMax }) => {
  return (
    <MinMaxFilterStyled
      width={width}
      height={height}
      minMin={minMin}
      maxMin={maxMin}
      minMax={minMax}
      maxMax={maxMax}
    >
      <input
        className="maxInput"
        type="range"
        min={minMax}
        max={maxMax}
        defaultValue={maxMax}
        onChange={action}
        style={{ width: `${100 - minMax}%` }}
      />
      <input
        className="minInput"
        type="range"
        min={minMin}
        max={maxMin - 1}
        defaultValue={minMin}
        onChange={action}
        style={{ width: `${maxMin}%` }}
      />
    </MinMaxFilterStyled>
  );
};

export default MinMaxFilter;
