import styled from "styled-components"
import "./WidgetLarge.css";
import logo from '../components/navbar/panel_logo.PNG';

const WidgetLg = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`

const WidgetLgTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`
const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`

const WidgetLgTr = styled.tr``

const WidgetLgTh = styled.th`
  text-align: left;
`

const WidgetLgUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600px;
`

const WidgetLgImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

const WidgetLgName = styled.span`
  margin-left: 10px;
`

const WidgetLgDate = styled.td`
  font-weight: 300;
`

const WidgetLgAmount = styled.td`
  font-weight: 300;
`

const WidgetLgStatus = styled.td``

const WidgetLgButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
`

export default function WidgetLarge() {
  const Button = ({type}) => {
    return <WidgetLgButton className={"widgetLgButton " + type}>{type}</WidgetLgButton>
  }
  return (
    <WidgetLg>
      <WidgetLgTitle>Friss tranzakciók</WidgetLgTitle>
      <WidgetLgTable>
        <WidgetLgTr>
          <WidgetLgTh>Vásárló</WidgetLgTh>
          <WidgetLgTh>Dátum</WidgetLgTh>
          <WidgetLgTh>Összeg</WidgetLgTh>
          <WidgetLgTh>Állapot</WidgetLgTh>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg img src={logo} />
            <WidgetLgName>Ligárt Ádám</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>2022.10.22</WidgetLgDate>
          <WidgetLgAmount>2400 Ft</WidgetLgAmount>
          <WidgetLgStatus>
            <Button type="Elfogadva" />
          </WidgetLgStatus>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg img src={logo} />
            <WidgetLgName>Ligárt Ádám</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>2022.10.22</WidgetLgDate>
          <WidgetLgAmount>2400 Ft</WidgetLgAmount>
          <WidgetLgStatus>
            <Button type="Elutasítva" />
          </WidgetLgStatus>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg img src={logo} />
            <WidgetLgName>Ligárt Ádám</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>2022.10.22</WidgetLgDate>
          <WidgetLgAmount>2400 Ft</WidgetLgAmount>
          <WidgetLgStatus>
            <Button type="Folyamatban" />
          </WidgetLgStatus>
        </WidgetLgTr>
      </WidgetLgTable>
    </WidgetLg>
  )
}
