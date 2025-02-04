import styled from 'styled-components'
import { GlobalStyle } from './GlobalStyle'

export function WalletConnect() {
  return (
    <Background>
      <GlobalStyle />
      <WalletConnect />
    </Background>
  )
}

const Background = styled.div`
background-color: #f8f9fb;
`
