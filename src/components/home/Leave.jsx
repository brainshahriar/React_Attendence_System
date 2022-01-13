import React, { Component } from 'react'
import { Container, Form ,Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import Footerdekstop from '../common/Footerdekstop'

class Leave extends Component {
    render() {
        if (!localStorage.getItem("token")) {
            return <Redirect to="/login" />;
          }
        return (
            <>
            <Container>
                <br />
                <Form>
            <Form.Control onChange={this.messageOnChange} className="form-control m-2" as="textarea" rows={3} placeholder="Reason for previous leave" />

            <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login"> Send </Button>
            </Form>
            <br />
            <br />
            <Form>
            <Form.Control onChange={this.messageOnChange} className="form-control m-2" as="textarea" rows={3} placeholder="Request for advance Leave" />

            <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login"> Send </Button>
            </Form>
            </Container>
            <Footerdekstop/>
            </>
        )
    }
}

export default Leave
