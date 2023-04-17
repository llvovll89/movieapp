import React from 'react'
import { Section } from '../../styles/GlobalStyle'
import { useSelector } from 'react-redux'

const EnterTainer = () => {
  const dark = useSelector((state) => state.darkMode.dark);
  return (
    <Section className={dark ? "" : "dark"}>
      <h1>아직정보가 없습니다.</h1>
      <h2>예능 출신 인물 준비중,,,</h2>
    </Section>
  )
}

export default EnterTainer