import styled from "styled-components"
import "./WidgetLarge.css";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";

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
  
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  
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
        {orders.map(order=>(
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgName>{order.userId}</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>{order.createdAt}</WidgetLgDate>
          <WidgetLgAmount>{order.amount / 10}Ft</WidgetLgAmount>
          <WidgetLgStatus>
            <Button type={order.status} />
          </WidgetLgStatus>
        </WidgetLgTr>
        ))}
      </WidgetLgTable>
    </WidgetLg>
  )
}
