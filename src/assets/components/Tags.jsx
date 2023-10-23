import PropTypes from 'prop-types'
import Badge from 'react-bootstrap/Badge';

export const BadgeTags = ( { texto, bg } ) => {
  return (
    <>
    <Badge className='w-100' pill bg={ bg }>{ texto }</Badge>
    </>
  )
}

BadgeTags.propTypes = {
    texto: PropTypes.string,
    bg:PropTypes.string,
}

export default BadgeTags;
