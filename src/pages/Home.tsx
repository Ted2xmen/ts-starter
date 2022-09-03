import styled from 'styled-components';
import Counter from '../features/counter/Counter';

const Title = styled.h1`
  font-size: 50px;
  color: red; // This is a test};
`;

function Home() {
  return (
    <div>
      <Title>Vite + React</Title>
      <Counter />
    </div>
  );
}

export default Home;
