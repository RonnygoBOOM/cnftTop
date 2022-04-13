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
              <Col offset="2">
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
              TopCNFT is focused on education and providing transparency when
              possible. It is important to continue deeper research before
              investing. Since this is a new industry and space, scams are
              rampant, and it is important to be vigilant and safe.
            </p>
            <p>add copyright here</p>
          </div>
        </Stack>
      </div>
    </>
  );
}

export default Footer;
