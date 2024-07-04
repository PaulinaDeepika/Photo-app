import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Home.css'
import Footer from "./Footer";
function Home() {
  return (
  <>
    <div className="home">
      <Container style={{
        display:'flex'
      }}>
        <Row>
          <Col>
            <Card
              style={{
                width: "20rem",
                backgroundColor: "transparent",
                border: "0px",
              }}
            >
              <Card.Img
                variant="top"
                src="data:image/jpeg;base64,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"
                style={{
                  height: "150px",
                  width: "150px",
                  marginLeft: "95px",
                  marginTop: "60px",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    paddingLeft: "33px",
                  }}
                >
                  <Link to="/snapchat" style={{
                    color:'red'
                  }}>Snapchat</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "20rem",
                backgroundColor: "transparent",
                border: "0px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
                style={{
                  height: "150px",
                  width: "150px",
                  marginLeft: "95px",
                  marginTop: "65px",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    paddingLeft: "33px",
                  }}
                >
                  <Link to="/downloads" style={{
                    color:'red'
                  }}>Downloads</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              style={{
                width: "20rem",
                backgroundColor: "transparent",
                border: "0px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  height: "150px",
                  width: "150px",
                  marginLeft: "95px",
                  marginTop: "65px",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                  }}
                ><Link to="/images" style={{
                  color:'red'
                }}>Images</Link>
                </Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card
              style={{
                width: "20rem",
                backgroundColor: "transparent",
                border: "0px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEwod5hDKQsoL3mU6XhQiItORVh8DGfqkLw&usqp=CAU"
                style={{
                  height: "150px",
                  width: "150px",
                  marginLeft: "95px",
                  marginTop: "65px",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    
                  }}
                >
                  <Link to="/videos" style={{
                    color:'red'
                  }}>Videos</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div
          style={{
            marginleft: "35px",
          }}
        ></div>
      </Container>
      <Container>  
      </Container>
    </div>
    <Footer/>
    </>
  );
}
export default Home;
