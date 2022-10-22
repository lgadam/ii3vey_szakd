import Panel from "./components/navbar/Panel";
import styled from "styled-components"
import Sidebar from "./components/Sidebar";
import AdminHome from "./pages/AdminHome";
import UserList from "./pages/UserList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const Container = styled.div`
  display: flex;
  margin-top: 10px;
`

function App() {
  return (
    <Router>
      <Panel />
      <Container>
        <Sidebar />
          <Routes>
              <Route exact path="/" index element={<AdminHome />} />
          </Routes>
          <Routes>
              <Route path="/users" index element={<UserList />} />
          </Routes>
      </Container>
    </Router>
  );
}

export default App;
