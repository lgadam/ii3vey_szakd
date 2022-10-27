import styled from "styled-components"
import logo from '../components/navbar/panel_logo.PNG';
import PageviewIcon from '@mui/icons-material/Pageview';
import "./WidgetSmall.css";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";

const WidgetSm = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
`
const WidgetSmTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
`

const WidgetSmList = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
`

const WidgetSmListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`

const WidgetSmImg = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const WidgetSmUser = styled.div`
    display: flex;
    flex-direction: column;
`

const WidgetSmUserName = styled.span`
    font-weight: 800;
`

const WidgetSmButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 8px 10px;
    background-color: #6fdcab;
    cursor: pointer;
`

export default function WidgetSmall() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <WidgetSm>
      <WidgetSmTitle>Új felhasználók</WidgetSmTitle>
      <WidgetSmList>
        {users.map(user=>(
        <WidgetSmListItem key={user._id}>
            <WidgetSmImg img src={logo}/>
            <WidgetSmUser>
                <WidgetSmUserName>{user.username}</WidgetSmUserName>
            </WidgetSmUser>
              <WidgetSmButton><PageviewIcon className="widgetSmIcon"/>Megtekintés</WidgetSmButton>
        </WidgetSmListItem>
        ))}
      </WidgetSmList>
    </WidgetSm>
  )
}
