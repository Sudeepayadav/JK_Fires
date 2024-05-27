import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function About() {
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
      <Container>
        <center class="container">
          <img src="images/abt_img1.jpg" className="a-img" alt="" />
          <p className="p-about">
            <b>Fire safety</b> is essential in any workplace to prevent loss of
            life, injuries, and damage to property. Ensuring a safe working
            environment involves understanding fire hazards, implementing
            preventive measures, and preparing for emergencies.
          </p>
          <br />
          <img src="images/abt_img3.jpg" className="a-img" alt="" />
          <p className="p-about">
            <b>Electrical Hazards:</b> Faulty wiring, overloaded circuits, and
            malfunctioning electrical equipment.
            <br />
            <b>Flammable Materials:</b> Chemicals, solvents, and other flammable
            substances stored or used inappropriately.
            <br />
            <b>Combustible Waste:</b> Accumulation of paper, wood, and other
            combustible materials.
            <br />
            <b>Heat Sources:</b> Machinery, equipment, and heating devices that
            can ignite fires if not managed properly.
            <br />
            <b>Human Error: </b>Smoking in non-designated areas, improper use of
            equipment, and negligence.
          </p>
          <br />
          <img src="images/abt_img6.jpg" className="a-img" alt="" />
          <p className="p-about">
            <b>Exit Routes:</b> Clearly mark and keep all exit routes
            unobstructed. Regularly check that exits are accessible.
            <br />
            <b>Assembly Point : </b> Designate safe assembly points for
            employees to gather after evacuating the building.
            <br />
            <b>Accountability: </b>Implement a system to account for all
            employees and visitors during an evacuation.
            <br />
            <b>Communication: </b>Establish a communication plan to provide
            updates and instructions during an emergency.
          </p>
          <br />
          <img src="images/abt_img7.jpg" className="a-img" alt="" />
          <p className="p-about">
            <b>Regulations and Standards:</b> Adhere to local fire safety
            regulations and standards, such as those set by OSHA (Occupational
            Safety and Health Administration) or NFPA (National Fire Protection
            Association).
            <br />
            <b>Inspections and Audits: </b>Conduct regular fire safety
            inspections and audits to ensure compliance and identify areas for
            improvement.
          </p>
          <br />
          <img src="images/abt_img5.png" className="a-img" alt="" />
          <p className="p-about">
            <b>Fire Extinguishers:</b> Install appropriate types of fire
            extinguishers (e.g., water, foam, CO2, dry powder) in accessible
            locations. Ensure regular maintenance and training for use.
            <br />
            <b>Fire Alarms: </b>Install and regularly test fire alarm systems to
            ensure they are functional.
            <br />
            <b>Smoke Detectors: </b> Place smoke detectors in strategic
            locations to provide early warning of fires.
            <br />
            <b>sprinkler Systems: </b> Install and maintain automatic sprinkler
            systems to control fires.
            <br />
            <b>emergency lighting: </b> Ensure emergency lighting is operational
            to guide occupants during an evacuation.
          </p>
          <br />
        </center>
      </Container>
    </>
  );
}

export default About;
