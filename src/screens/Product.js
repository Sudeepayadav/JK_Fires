import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Product() {
  return (
    <>
      <Link
        to="/"
        className="btn btn-dark"
        style={{ marginTop: "1rem", marginLeft: "1rem" }}
      >
        Go Back
      </Link>
      <br />
      <br />
      <center>
        <Container>
          <div className="row">
            <div className="col-md">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="images/steel_pipe.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Iron Pipe</h5>
                  <LinkContainer to="/contact">
                    <a href="/contact" className="btn btn-primary">
                      Ask Price
                    </a>
                  </LinkContainer>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="images/iron_tube.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Iron Tube</h5>
                  <LinkContainer to="/contact">
                    <a href="/contact" className="btn btn-primary">
                      Ask Price
                    </a>
                  </LinkContainer>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="images/iron_pipe.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Steel Pipe</h5>
                  <LinkContainer to="/contact">
                    <a href="/contact" className="btn btn-primary">
                      Ask Price
                    </a>
                  </LinkContainer>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="images/steel_tube.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Steel Tube</h5>
                  <LinkContainer to="/contact">
                    <a href="/contact" className="btn btn-primary">
                      Ask Price
                    </a>
                  </LinkContainer>
                </div>
              </div>
            </div>
            <hr />
            <br />
            <br />

            <div className="col-md">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="images/liquid_pumps.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Liquid Pumps</h5>
                  <LinkContainer to="/contact">
                    <a href="/contact" className="btn btn-primary">
                      Ask Price
                    </a>
                  </LinkContainer>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="images/fiber_optic.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Fiber Optic Cable</h5>
                  <LinkContainer to="/contact">
                    <a href="/contact" className="btn btn-primary">
                      Ask Price
                    </a>
                  </LinkContainer>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="images/insu_cable.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Insulated Cables</h5>
                  <LinkContainer to="/contact">
                    <a href="/contact" className="btn btn-primary">
                      Ask Price
                    </a>
                  </LinkContainer>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="images/ins_cond.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Insulated Conductor</h5>
                  <LinkContainer to="/contact">
                    <a href="/contact" className="btn btn-primary">
                      Ask Price
                    </a>
                  </LinkContainer>
                </div>
              </div>
            </div>
            <hr />
            <br />
            <br />

            <div className="col-md">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="images/fire_alarm.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Fire Alarm System</h5>
                  <LinkContainer to="/contact">
                    <a href="/contact" className="btn btn-primary">
                      Ask Price
                    </a>
                  </LinkContainer>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card" style={{ width: "18rem" }}>
                <img src="images/cctv.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">All Kind of CC-TV</h5>
                  <LinkContainer to="/contact">
                    <a href="/contact" className="btn btn-primary">
                      Ask Price
                    </a>
                  </LinkContainer>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="images/sprink.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Sprinkler System</h5>
                  <LinkContainer to="/contact">
                    <a href="/contact" className="btn btn-primary">
                      Ask Price
                    </a>
                  </LinkContainer>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="images/hose_estinguisher.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Hose Pipe</h5>
                  <LinkContainer to="/contact">
                    <a href="/contact" className="btn btn-primary">
                      Ask Price
                    </a>
                  </LinkContainer>
                </div>
              </div>
            </div>
            <hr />
            <br />
            <br />
          </div>
        </Container>
      </center>
    </>
  );
}

export default Product;
