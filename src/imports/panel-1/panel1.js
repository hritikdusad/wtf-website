import React, {Component} from 'react'
import { Col, Row, Grid } from 'react-bootstrap';
import BookingPage from './booking-page'
import UpdatesCarousel from  './updates-carousel'


class Panel1 extends Component {
    render() {
        return(
            <Grid>
                <Row>
                    <Col md={6}>
                     <BookingPage />
                    </Col>
                    <Col md={6}>
                     <UpdatesCarousel />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
export default Panel1;