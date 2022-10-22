import styled from "styled-components"
import FeaturedInfo from "../components/FeaturedInfo"

const Home = styled.div`
    flex:4;
`

export default function AdminHome() {
  return (
    <Home>
      <FeaturedInfo />
    </Home>
  )
}
