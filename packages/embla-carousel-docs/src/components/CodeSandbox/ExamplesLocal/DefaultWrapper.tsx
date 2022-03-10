import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { frameCollapseStyles } from 'components/SiteLayout'
import { breakpoints } from 'consts'
import { useInView } from 'react-intersection-observer'
import { defaultStyles, SLIDE_HEIGHT } from './defaultStyles'

const FRAME_SPACING = '1.6rem'
const FRAME_HEIGHT = `calc(${SLIDE_HEIGHT} + (${FRAME_SPACING} * 2))`
const FRAME_RADIUS = '0.4rem'

const Wrapper = styled.div`
  height: ${FRAME_HEIGHT};
  padding: ${FRAME_SPACING};
  background-color: var(--background-code);
  position: relative;

  ${breakpoints.maxSm} {
    ${frameCollapseStyles};
  }
  ${breakpoints.minSm} {
    border-radius: ${FRAME_RADIUS};
  }

  ${defaultStyles};
`

type PropType = PropsWithChildren<{}>

export const DefaultWrapper = (props: PropType) => {
  const { children } = props
  const [inViewRef, inView] = useInView()
  return <Wrapper ref={inViewRef}>{inView ? children : null}</Wrapper>
}
