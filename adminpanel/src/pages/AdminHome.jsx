import { useEffect, useMemo, useState } from "react";
import styled from "styled-components"
import Charts from "../components/Charts"
import FeaturedInfo from "../components/FeaturedInfo"
import WidgetLarge from "../components/WidgetLarge";
import WidgetSmall from "../components/WidgetSmall";
import { userRequest } from "../requestMethods";

const Home = styled.div`
    flex:4;
`
const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`

export default function AdminHome() {
  const [ userStats,setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Január",
      "Február",
      "Március",
      "Április",
      "Május",
      "Június",
      "Július",
      "Augusztus",
      "Szeptember",
      "Október",
      "November",
      "December",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stat");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <Home>
      <FeaturedInfo />
      <Charts data={userStats} title="Felhasználó statisztika" dataKey="Active User"/>
      <HomeWidgets>
        <WidgetSmall />
        <WidgetLarge />
      </HomeWidgets>
    </Home>
  )
}
