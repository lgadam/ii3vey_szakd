import styled from "styled-components"
import logo from '../components/navbar/panel_logo.PNG';
import PageviewIcon from '@mui/icons-material/Pageview';
import "./WidgetSmall.css";

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

const WidgetSmUserTitle = styled.span`
    font-weight: 300;
    color: #282828;
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
  return (
    <WidgetSm>
      <WidgetSmTitle>Új felhasználók</WidgetSmTitle>
      <WidgetSmList>
        <WidgetSmListItem>
            <WidgetSmImg img src={logo}/>
            <WidgetSmUser>
                <WidgetSmUserName>lgadam</WidgetSmUserName>
                <WidgetSmUserTitle>Programtervező Informatikus</WidgetSmUserTitle>
            </WidgetSmUser>
            <WidgetSmButton><PageviewIcon className="widgetSmIcon"/>Megtekintés</WidgetSmButton>
        </WidgetSmListItem>
        <WidgetSmListItem>
            <WidgetSmImg img src={logo}/>
            <WidgetSmUser>
                <WidgetSmUserName>lgadam</WidgetSmUserName>
                <WidgetSmUserTitle>Programtervező Informatikus</WidgetSmUserTitle>
            </WidgetSmUser>
            <WidgetSmButton><PageviewIcon className="widgetSmIcon"/>Megtekintés</WidgetSmButton>
        </WidgetSmListItem>
        <WidgetSmListItem>
            <WidgetSmImg img src={logo}/>
            <WidgetSmUser>
                <WidgetSmUserName>lgadam</WidgetSmUserName>
                <WidgetSmUserTitle>Programtervező Informatikus</WidgetSmUserTitle>
            </WidgetSmUser>
            <WidgetSmButton><PageviewIcon className="widgetSmIcon"/>Megtekintés</WidgetSmButton>
        </WidgetSmListItem>
      </WidgetSmList>
    </WidgetSm>
  )
}
