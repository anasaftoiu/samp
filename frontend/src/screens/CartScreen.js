import { useContext } from "react";
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import  Button  from 'react-bootstrap/Button';



export default function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <div>
      <Helmet>
        <title>Cosul de cumpărături</title>
      </Helmet>
      <h1>Cosul de cumpărături</h1>
      <Row>
        <Col md={8}>
        {cartItems.length === 0 ? (
            <MessageBox>
              Cosul este gol.<Link to="/"> Mergi la cumparaturi.</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
              <Row className="align-items-center">
                <Col md={4}>
                <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded img-thumbnail"
                ></img>{' '}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button variant="light" disabled={item.quantity === 1}>
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button variant="light" disabled={item.quantity === 1}>
                        <i className="fas fa-minus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3}>${item.price}</Col>
                    <Col md={2}>
                      <Button variant="light">
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>   
              </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </div>
  );
};
