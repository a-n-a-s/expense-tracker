import styled from "styled-components";
import HomeComponent from "./Modules/Home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 10px;
  align-items: center;
  /* width: 360px; */
`;

const Header = styled.div`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;

function App() {
  return (
    <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent/>
    </Container>
  );
}

export default App;
