import styled from "styled-components"
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MovingIcon from '@mui/icons-material/Moving';
import "./FeaturedInfo.css";

const Featured = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
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
  return (
    <Featured>
        <FeaturedItem>
            <FeaturedTitle>Kimutatás</FeaturedTitle>
            <MoneyContainer>
                <FeaturedMoney>254,000 Ft</FeaturedMoney>
                <FeaturedMoneyRate>-11,432 Ft<TrendingDownIcon className="featuredIcon negative" /></FeaturedMoneyRate>
            </MoneyContainer>
            <FeaturedSbTitle>Összevetés az előző havi kimutatással</FeaturedSbTitle>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedTitle>Eladások</FeaturedTitle>
            <MoneyContainer>
                <FeaturedMoney>554,000 Ft</FeaturedMoney>
                <FeaturedMoneyRate>-2,342 Ft<TrendingDownIcon className="featuredIcon negative" /></FeaturedMoneyRate>
            </MoneyContainer>
            <FeaturedSbTitle>Összevetés az előző havi kimutatással</FeaturedSbTitle>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedTitle>Költség</FeaturedTitle>
            <MoneyContainer>
                <FeaturedMoney>132,000 Ft</FeaturedMoney>
                <FeaturedMoneyRate>+6,342 Ft<MovingIcon className="featuredIcon" /></FeaturedMoneyRate>
            </MoneyContainer>
            <FeaturedSbTitle>Összevetés az előző havi kimutatással</FeaturedSbTitle>
        </FeaturedItem>
    </Featured>
  )
}
