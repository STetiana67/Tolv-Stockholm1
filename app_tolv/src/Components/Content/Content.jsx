import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Karta from './Foto/karta-ny-tolv.png'
import Start2 from './Foto/start-2.jpg'

function ResponsiveAuto() {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <div>
            <Carousel />
          </div>
        </Col>

        <Col md={4}>
          <div>
            <aside class="opening-hours">
              <h3>Opening hours</h3>
              <div class="hours">
                <p>
                  <span>O'Learys</span>
                </p>
                <p><span>Mon-Tue</span> 10.30-23</p>
                <p><span>Wed-Thur</span> 10.30-00</p>
                <p><span>Friday</span> 10.30-02</p>
                <p><span>Saturday</span> 11-02</p>
                <p><span>Sunday</span> 11-23</p>
                <p><span>Event Center</span> Opens 11 at weekdays.</p>
                <p><span>-----------------------------</span></p>
                <p><span>Boston Grill</span></p>
                <p><span>Wed-Thu</span> 17-22</p>
                <p><span>Friday</span> 17-23</p>
                <p><span>Saturday</span> 16-23</p>
                <p><span>-----------------------------</span></p>
                <p><span>Taco Bar</span></p>
                <p><span>Mon-Thur</span> 11-20</p>
                <p><span>Fri-Sat</span> 11-23</p>
                <p><span>Sunday</span> 12-20</p>
                <p><span>-----------------------------</span></p>
                <p><span>Colosseum Nightclub</span></p>
                <p><span>Fri-Sat</span> 22-03</p>
                <p><span>-----------------------------</span></p>
                <p><span>Club Backdoor</span></p>
                <p><span>Fri-Sat</span> 22-05</p>
                <p><span>-----------------------------</span></p>
                <div class="more-hours"><a href="/oppettider">All opening hours</a>
                </div>
              </div>
            </aside>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md>md=true
          <div>
            <p>text</p>
          </div>
        </Col>
        <Col md>md=true
        </Col>
      </Row>
      <Row>
        <Col md>md=true
          <img src={Start2} />
        </Col>
      </Row>
 
      <Row>
        <Col md>md=true
          <img src={Karta} alt="karta" />
        </Col>
      </Row>
    </Container>
  );
}

export default ResponsiveAuto;