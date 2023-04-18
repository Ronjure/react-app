import { Button, Card, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";

import styled from "@emotion/styled";

import { increase, decrease, setNumber } from "../../store/redux-basic";

export function ReduxBasic() {
  const count = useSelector((state: { basic: { value: number } }) => state.basic.value)

  const dispatch = useDispatch()

  function handleChange(val: number | null) {
    dispatch(setNumber(val as unknown as number));
  }

  return (
    <div>
      Redux 基本用法。
      <Section>
        <Card>
          <Button type="primary" onClick={() => dispatch(increase())}>+</Button>
          <Button danger onClick={() => dispatch(decrease())}>-</Button>

          <div>
            <InputNumber value={count} onChange={handleChange}></InputNumber>
          </div>
        </Card>
        <Card>{count}</Card>
      </Section>
    </div>
  )
}

const Section = styled.section`
display: grid;
grid-template-columns: 300px 300px;
justify-content: center;
column-gap: 50px;
`
