import Panel from "./components/navbar/Panel";
import styled from "styled-components"
import Sidebar from "./components/Sidebar";
import AdminHome from "./pages/AdminHome";
import UserList from "./pages/UserList";
import User from "./pages/User";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddUser from "./pages/AddUser";
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
          <Routes>
              <Route path="/user/:userId" index element={<User />} />
          </Routes>
          <Routes>
              <Route path="/addUser" index element={<AddUser />} />
          </Routes>
      </Container>
    </Router>
  );
}

export default App;
