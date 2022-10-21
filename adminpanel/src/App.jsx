import Panel from "./components/navbar/Panel";
import styled from "styled-components"
import Sidebar from "./components/Sidebar";

const Container = styled.div`
  display: flex;
`
const Others = styled.div`
  flex:4;
`

function App() {
  return (
    <div>
      <Panel />
      <Container>
        <Sidebar />
        <Others>other page</Others>
      </Container>
    </div>
  );
}

export default App;
