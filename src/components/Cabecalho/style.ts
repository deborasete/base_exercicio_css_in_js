import styled from 'styled-components'

type CabecalhoProps = {
  backgroundColor: string
  textColor: string
}

export const CabecalhoEstilizado = styled.header<CabecalhoProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  text-align: center;
  padding: 24px 0;
`
