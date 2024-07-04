import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from "react-bootstrap/Card";
function Images(){
  return(
    <Container fluid>
      <h1><b>Recent Images</b></h1>
        <Row>
          <Col>
          <Card className="md-2" style={{ border:'5px', marginBottom:'50px', marginLeft:'100px', marginTop:'50px'}}>
                <Card.Img src='https://fixed.net/assets/uploads/images/blog/free-wordpress-gallery-plugins.jpg' alt='img'/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'5px', marginBottom:'50px', marginLeft:'100px', marginTop:'50px' }}>
                <Card.Img src='https://dancarrphotography.com/wp-content/uploads/2016/11/instagram-envira-gallery.jpg' alt='img'/>
                </Card>
          </Col>
          <Col>
          <Card style={{ border:'5px', marginBottom:'50px', marginLeft:'100px', marginTop:'50px' }}>
                <Card.Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexf5QjMhBaAvWHb3oCWTuIv9kkMb48vcJPQ&usqp=CAU' alt='img'/>
              </Card>
          </Col>
         <Col>
          <Card style={{  border:'5px', marginBottom:'50px', marginLeft:'100px', marginTop:'50px' }}>
                <Card.Img src='https://imageio.forbes.com/specials-images/imageserve/5e6e26d9aa5428000759e96c/women-washing-purple-water-lilies-in-Vietnam/0x0.jpg?format=jpg&crop=960,842,x0,y112,safe&width=960' alt='img'/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'5px', marginBottom:'50px', marginLeft:'100px', marginTop:'50px' }}>
                <Card.Img src='https://thumbs.dreamstime.com/b/tiger-wild-winter-nature-amur-tiger-running-snow-action-wildlife-scene-danger-animal-cold-winter-tajga-russ-84783074.jpg' alt='img'/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'5px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='img'/>
              </Card>
          </Col> 
         <Col>
          <Card style={{  border:'5px', marginBottom:'50px', marginLeft:'100px', marginTop:'50px' }}>
                <Card.Img src='https://cdn.pixabay.com/photo/2015/02/01/18/05/squirrel-619968_1280.jpg' alt='img'/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'5px', marginBottom:'50px', marginLeft:'100px', marginTop:'50px' }}>
                <Card.Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOK4s_jUXiRTOcOjsqyIAPTE5x3rgrq7eMK3eMzQCRlFukWO2pTPclC-Lg9xj5Cw2j6dI&usqp=CAU' alt='img'/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'5px', marginBottom:'50px', marginLeft:'10px', marginTop:'50px' }}>
                <Card.Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDPJYfKwesSRlk6SD4BbDwd5ovEyOrwN0F-A&usqp=CAU' alt='img'/>
              </Card>
          </Col> 
         <Col>
          <Card style={{  border:'5px', marginBottom:'50px', marginLeft:'100px', marginTop:'50px' }}>
                <Card.Img src='https://www.groovypost.com/wp-content/uploads/2019/07/sunset-beach-phone-photos-featured.jpg' alt='img'/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'5px', marginBottom:'50px', marginLeft:'100px', marginTop:'50px' }}>
                <Card.Img src='https://cdn.pixabay.com/photo/2014/06/21/08/43/rabbit-373691_640.jpg' alt='img'/>
              </Card>
          </Col>
          <Col>
          <Card style={{ border:'5px', marginBottom:'50px', marginLeft:'100px', marginTop:'50px' }}>
                <Card.Img src='https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='img'/>
              </Card>
          </Col> 
        </Row>
        </Container>
  )
}
export default Images;