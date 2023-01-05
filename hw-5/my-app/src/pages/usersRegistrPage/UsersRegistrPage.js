import React, {useState} from 'react';
import {Col, Container, Form, Row, Button, Spinner, Alert} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {registerUserAction} from "../../redux/actions";

function UserRegisterPage(props) {

    const dispatch = useDispatch()

    const {preloader} = useSelector(state => state.preloaderReducer)

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const formsValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const registerUser = (event) => {
        event.preventDefault()
        dispatch(registerUserAction(user))
    }

    return (
        <Container>
            <h1 className="my-5">User register</h1>

            {preloader
                ?
                <Spinner animation="grow"/>
                :
                <Form onSubmit={registerUser}>
                    <Row>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Control
                                    type="text"
                                    placeholder="name"
                                    name="name"
                                    onChange={formsValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="username">

                                <Form.Control
                                    type="text"
                                    placeholder="username"
                                    name="username"
                                    onChange={formsValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Control
                                    type="text"
                                    placeholder="email"
                                    name="email"
                                    onChange={formsValue}
                                />
                            </Form.Group>
                        </Col>

                        <Col lg={3}>
                            <Button type="submit" variant="success" className="w-100">
                                register user
                            </Button>
                        </Col>
                    </Row>
                </Form>
            }

        </Container>
    );
}

export default UserRegisterPage;