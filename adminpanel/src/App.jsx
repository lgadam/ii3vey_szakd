import Panel from "./components/navbar/Panel";
import styled from "styled-components"
import Sidebar from "./components/Sidebar";
import AdminHome from "./pages/AdminHome";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`

function App() {
  return (
    <div>
      <Panel />
      <Container>
        <Sidebar />
          <AdminHome />
      </Container>
    </div>
  );
}

export default App;
