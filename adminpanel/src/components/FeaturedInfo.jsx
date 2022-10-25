import styled from "styled-components"
import MovingIcon from '@mui/icons-material/Moving';
import "./FeaturedInfo.css";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";

const Featured = styled.div`
    display: flex;
    justify-content: space-between;
    width: 450px;
`

const FeaturedItem = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const FeaturedTitle = styled.span`
    font-size: 18px;
`

const MoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`

const FeaturedMoney = styled.span`
    font-size: 32px;
    font-weight: 700;
`

const FeaturedMoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`

const FeaturedSbTitle = styled.span`
    font-size: 15px;
    color: #666666;
`

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  useEffect(() => {
    const getIncome = async () => {
        try {
          const res = await userRequest.get("orders/income");
          setIncome(res?.data);
        } catch {}
      };
      getIncome();
  }, []);
  return (
    <Featured>
        <FeaturedItem>
            <FeaturedTitle>Kimutatás</FeaturedTitle>
            <MoneyContainer>
                {income.map(item =>(
                <FeaturedMoney>{item.total / 10}Ft</FeaturedMoney>))}
                <FeaturedMoneyRate><MovingIcon className="featuredIcon" /></FeaturedMoneyRate>
            </MoneyContainer>
            <FeaturedSbTitle>Havi kimutatás a rendelések beérkezésének összegéről</FeaturedSbTitle>
        </FeaturedItem>
    </Featured>
  )
}
