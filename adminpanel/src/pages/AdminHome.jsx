import styled from "styled-components"
import Charts from "../components/Charts"
import FeaturedInfo from "../components/FeaturedInfo"
import WidgetLarge from "../components/WidgetLarge";
import WidgetSmall from "../components/WidgetSmall";
import { userData } from "../dummyData";

const Home = styled.div`
    flex:4;
`
const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`

export default function AdminHome() {
  return (
    <Home>
      <FeaturedInfo />
      <Charts data={userData} title="Felhasználó statisztika" dataKey="Active User"/>
      <HomeWidgets>
        <WidgetSmall />
        <WidgetLarge />
      </HomeWidgets>
    </Home>
  )
}
