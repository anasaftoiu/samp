import {Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <Container className="small-container">
      <Helmet>
        <title>Cont</title>
      </Helmet>
      <h1 className="my-3">Cont</h1>
      <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
            type="email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Parola</Form.Label>
        <Form.Control
          type="email" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Conecteaza-te</Button>
        </div>
        <div className="mb-3">
          Client nou?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Creeaza-ti contul</Link>
        </div>
      </Form>
    </Container>
  )
}