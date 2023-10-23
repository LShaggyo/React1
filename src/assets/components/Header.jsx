import PropTypes from 'prop-types'

export const Header = ({ titulo }) => {
  return (
    <>
    <h1>{ titulo }</h1>
    </>
  )
}

Header.propTypes = {
  titulo: PropTypes.string
}

export default Header
