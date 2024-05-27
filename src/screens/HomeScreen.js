import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faScaleBalanced,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { LinkContainer } from "react-router-bootstrap";

function HomeScreen() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <div className="marquee">
        <marquee>
          JK Fire & Security Systems - Wholesaler of iron pipe, iron tubes &
          steel pipes in Bengaluru, Karnataka.
        </marquee>

        <img
          className="main-img"
          src="images/main_img.jpg"
        />
      </div>
      <br />
      <br />
      <center>
        <button className="doller">
          <FontAwesomeIcon icon={faHandHoldingDollar} fade className="icon-d" />
        </button>
        <span>
          Nature of business-<b>WholeSaler</b>
        </span>
        <br />
        <br />
        <span>
          Legal Status of Firm-<b>Individual-Proprietor</b>
        </span>
        <button className="doller">
          <FontAwesomeIcon icon={faScaleBalanced} fade className="icon-d" />{" "}
        </button>
        <br />
        <br />
        <button className="doller">
          <FontAwesomeIcon icon={faFilePen} fade className="icon-d" />
        </button>
        <span>
          GST Number-<b>29AZHPJ7779H1ZM</b>
        </span>
        <br />
        <br />
      </center>
      <br />
      <div>
        <h2 className="hsn">Deals In HSN Code</h2>
        <br />
      </div>
      <center>
        <table className="table-1" style={{ borderCollapse: "collapse" }}>
          <tr>
            <th
              style={{
                textAlign: "center",
                border: "1px solid black",
                padding: "8px",
                backgroundColor: "#29335c",
                color: "#fff",
              }}
            >
              HSN Code
            </th>
            <th
              style={{
                textAlign: "center",
                border: "1px solid black",
                padding: "8px",
                backgroundColor: "#29335c",
                color: "#ffff",
              }}
            >
              HSN Description
            </th>
          </tr>
          <tr>
            <th
              style={{
                textAlign: "center",
                border: "1px solid black",
                padding: "8px",
              }}
            >
              7306
            </th>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              Other tubes, pipes and hollow profiles (for example, open seam or
              welded, riveted or similarly closed), of iron or steel.
            </td>
          </tr>
          <tr>
            <th
              style={{
                textAlign: "center",
                border: "1px solid black",
                padding: "8px",
              }}
            >
              8413
            </th>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              Pumps for liquids, whether or not fitted with a measuring device;
              liquid elevators.
            </td>
          </tr>
          <tr>
            <th
              style={{
                textAlign: "center",
                border: "1px solid black",
                padding: "8px",
              }}
            >
              8544
            </th>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              Insulated (including enamelled or anodised) wire, cable (including
              co-axial cable) and other insulated electric conductors, whether
              or not fitted with connectors; optical fibre cables, made up of
              individually sheathed fibres, whether or not assembled with
              electric conductors or fitted with connectors - winding wire.
            </td>
          </tr>
        </table>
      </center>
      <br />

      <div>
        <LinkContainer to="/product">
          <a href="/product">
            <h3
              style={{
                textAlign: "center",
                color: "#29335c",
                textDecoration: "none",
              }}
            >
              Products & Services
            </h3>
          </a>
        </LinkContainer>
        <center>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Iron Pipes</h5>
                    <LinkContainer to="/product">
                      <a href="#" className="btn btn-info">
                        Get Price & Details
                      </a>
                    </LinkContainer>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Iron Tubes</h5>
                    <LinkContainer to="/product">
                      <a href="#" className="btn btn-info">
                        Get Price & Details
                      </a>
                    </LinkContainer>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Steel Tubes</h5>
                    <LinkContainer to="/product">
                      <a href="#" className="btn btn-info">
                        Get Price & Details
                      </a>
                    </LinkContainer>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Steel Tubes</h5>
                    <LinkContainer to="/product">
                      <a href="#" className="btn btn-info">
                        Get Price & Details
                      </a>
                    </LinkContainer>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Liquid Pumps</h5>
                    <LinkContainer to="/product">
                      <a href="#" className="btn btn-info">
                        Get Price & Details
                      </a>
                    </LinkContainer>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Fibre Optic Cable</h5>
                    <LinkContainer to="/product">
                      <a href="#" className="btn btn-info">
                        Get Price & Details
                      </a>
                    </LinkContainer>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Insulated Cables</h5>
                    <LinkContainer to="/product">
                      <a href="#" className="btn btn-info">
                        Get Price & Details
                      </a>
                    </LinkContainer>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Insulated Conductors</h5>
                    <LinkContainer to="/product">
                      <a href="#" className="btn btn-info">
                        Get Price & Details
                      </a>
                    </LinkContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default HomeScreen;
