import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import label from '../images/white-label.jpg'

const HeaderWrapper = styled.div`
  background: #0b0b0b;
  margin-bottom: 0;
  img {
    margin-bottom: 0;
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  maxwidth: 960px;
  padding: 1rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            style={{
              width: '100px',
            }}
            src={label}
            alt="twelves"
          />{' '}
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
