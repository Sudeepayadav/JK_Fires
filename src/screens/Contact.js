import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleUser,
  faPhoneVolume,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Contact() {
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
      <h2 style={{ textAlign: "center" }}>Contact Us</h2>
      <center className="contact-m">
        <div>
          <img className="fire-img" src="images/gripfire.svg" />
          <br />
          <h3 className="cont-pointer">
            <FontAwesomeIcon icon={faLocationDot} /> JK Fire & Security Systems
          </h3>
          <p>
            25/1 Chudasandra Layout, Huskur Post, Anekal Taluk Ksrp Camp, Near
            Ganesh Temple Bengaluru Urban, bangalore central jail,
            Bengaluru-560099, Karnataka, India
          </p>
          <h4 className="cont-pointer">
            <FontAwesomeIcon icon={faCircleUser} /> Mr. Dilli Jayakumar. (Owner)
          </h4>
          <br />
          <h4 className="cont-pointer">
            <FontAwesomeIcon icon={faPhoneVolume} /> Call +91 8048250285
          </h4>
          <br />
          <h3>
            <FontAwesomeIcon icon={faMapLocationDot} />
          </h3>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1530.1990355364396!2d77.67434164947424!3d12.885060285072273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae134a20e725e3%3A0x6065e045bbe16dfe!2sSri%20Sowbhagya%20Ganapathi%20temple!5e0!3m2!1sen!2sin!4v1716616826506!5m2!1sen!2sin"
            className="map-link"
          ></iframe>
          <br />
        </div>
      </center>
      <br />
      <br />
    </>
  );
}

export default Contact;
