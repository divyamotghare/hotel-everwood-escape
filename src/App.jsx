import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Heading>The Everwood Escape</Heading>
        <Button onClick={() => alert("check out")}>check in</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
