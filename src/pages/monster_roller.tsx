import { Container, Row, Col, Image } from "react-bootstrap";
import MonsterPicker from "../components/monster_picker";

export default function MonsterRoller() {
    return (
        <Container id="MonsterRoller">
            <Row className='d-flex justify-content-center'>
                <Col xs={12} md={4} className='d-flex justify-content-center'>
                    {/* <Image src={LostMountExpansion} rounded fluid/> */}
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs={10} md={4} className='d-flex justify-content-center'>
                    {/* <Image src={AdventurePackHeader} rounded fluid/> */}
                </Col>
            </Row>
            <MonsterPicker HeaderText="Roll New Monsters"/>
        </Container>
    )
}