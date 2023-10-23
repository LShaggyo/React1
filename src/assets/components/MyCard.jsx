import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import BadgeTags from './Tags'

export const MyCard = ( { url, name, description, bg, texto } ) => {

    const cardStyle ={
        width:'22rem',
        padding:'.5rem'
    }
    const imgStyle ={
        width:'100%',
        height:'450px'
    }

return (
    <>
    <CardGroup className='p-3'>
            <Card style={ cardStyle }>
            <Card.Img variant="top" src={ url } style={ imgStyle } />
            <Card.Body>
                <Card.Title>{ name }</Card.Title>
                <Card.Text>
                { description }
                </Card.Text>
            </Card.Body>
            <BadgeTags bg = { bg } texto = { texto }
                />
            </Card>
    </CardGroup>
    </>
)
}

MyCard.propTypes = {
    url: PropTypes.string,
    name:PropTypes.string,
    description:PropTypes.string,
    bg: PropTypes.string,
    texto:PropTypes.string
}

export default MyCard
