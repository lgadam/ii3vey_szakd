import styled from "styled-components"
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

const Chart = styled.div`
    margin: 20px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const ChartTitle = styled.h3`
    margin-bottom: 20px;
`

export default function Charts({title,data,dataKey}) {
  return (
    <Chart>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#2cbc7b"/>
            <Line type="monotone" dataKey={dataKey} stroke="#2cbc7b"/>
            <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Chart>
  )
}
