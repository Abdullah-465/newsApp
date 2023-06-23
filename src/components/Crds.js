import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Crds(props) {
    let uRlimg =  props.data.urlToImage ? props.data.urlToImage :'ert.png';
    return (
        <Card className=' my-4 mx-auto col-auto' style={{ width: '20rem' }}>
            <Card.Img variant="top" src={uRlimg} />
            <Card.Body>
                <Card.Title>News Title</Card.Title>
                <Card.Text>
                    {props.data.title.slice(0,60)}......
                </Card.Text>
                <a href={props.data.url} className="btn btn-dark stretched-link" target='_blank'>Detail</a>
            </Card.Body>
        </Card>
    );
}

export default Crds;