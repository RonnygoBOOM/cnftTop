import React from "react";
import { Row, Col } from "reactstrap";
import { Stack } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="footer">
        <Stack>
          <div className="footer-lists">
            <Row className="justify-content-center">
              <Col>
                <ul className="footer-list">
                  Socials
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Discord</a>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul className="footer-list">
                  Links
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
              </Col>
            </Row>
          </div>
          <div className="footer-disclaimer">
            <p>
              TopCNFT is focused on providing honest educational content based on evidence. It is important to continue deeper research before
              investing, as we are not an authority on value; we offer only our opinions. Since this is a new industry and space, scams are
              rampant, creative, and ever-evolving. It is important to be vigilant and take measures to educate and protect yourself.
            </p>
            <p>Copyright 2022</p>
          </div>
        </Stack>
      </div>
    </>
  );
}

export default Footer;
