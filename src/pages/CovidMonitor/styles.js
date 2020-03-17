import styled from 'styled-components';

const getColorByKind = kind => {
  switch (kind) {
    case 'confirmed':
      return '#ff0';
    case 'recovered':
      return '#0f0';
    case 'deaths':
      return '#f00';
    default:
      return '#0ff';
  }
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Monitor = styled.img`
  width: 900px;
`;

export const Row = styled.div`
  display: flex;
  padding: 20px 0;
`;

export const Displayer = styled.div`
  cursor: pointer;
  height: 120px;
  margin: 5px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 4px;
  color: ${({ kind }) => getColorByKind(kind)};
  border: 2px solid ${({ kind }) => getColorByKind(kind)};
  position: relative;

  &::before {
    content: '${({ kind }) => kind}';
    position: absolute;
    top: -22px;
    left: 4px;
    background: #282c33;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  max-height: 150px;
  overflow-y: auto;
`;

export const Detail = styled.div`
  width: 220px;
  height: 120px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 4px;
  color: #0ff;
  border: 2px solid #0ff;
`;
