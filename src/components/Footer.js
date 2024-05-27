import React from "react";
import { LinkContainer } from "react-router-bootstrap";

function Footer() {
  return (
    <>
      <div>
        <footer class="foot">
          <div class="container">
            <div class="row">
              <div class="col-md">
                <ion-icon name="fast-food"></ion-icon>
                <h4>JK Fire & Security Systems</h4>
                <p className="address">
                  25/1 Chudasandra Layout, Huskur Post, Anekal Taluk Ksrp Camp,
                  Near Ganesh Temple Bengaluru Urban, bangalore central jail,
                  Bengaluru-560099, Karnataka, India
                </p>
                <spam> © 2024</spam>
              </div>
              <div class="col-md">
                <h4>Company</h4>
                <a href="/product" class="pft">
                  Products & Services
                </a>
                <br />
                <a href="/about" class="pft">
                  About Us
                </a>
                <br />
                <p class="pft">Team</p>
              </div>
              <div class="col-md">
                <a href="/contact">
                  {" "}
                  <h4 className="cont">Contact Us</h4>
                </a>
                <p class="pft">Help & Support</p>
                <p class="pft">Partner With Us</p>
                <h4>Legal</h4>
                <p class="pft">Terms & Conditions</p>
                <p class="pft">Cookie Policy</p>
                <p class="pft">Privacy Policy</p>
              </div>
              <div class="col-md">
                <h4>We Deliver TO</h4>
                <p class="pft"> All Over Bangaluru</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
