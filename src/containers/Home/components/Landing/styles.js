import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`

export const Background = styled.img``

export const Header = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  text-align: center;
  font-size: 50px;
  letter-spacing: 0.6px;
`