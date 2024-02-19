import React from "react";
import "./Accomodation.css";
import acc from "./acc.png";
import i3 from "./3.png";
import i4 from "./4.png";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoReturnDownBack } from "react-icons/io5";
import { Link } from "react-router-dom";

function Accomodation() {
  return (
    <div className="acc">
      <Link to="/">
        <div className="back_btn">
          <IoReturnDownBack className="back_io" />
          <div className="back_txt">BACK</div>
        </div>
      </Link>
        {/* <div className="cloud"></div>
        <div className="cloud1"></div> */}
      <div className="acc_head">
        <div className="acc_p">ACCOMODATION</div>
        <div className="acc_s">
          At Netaji Subhas University of Technology, Delhi. Welcome to
          Moksha-Innovision, N.S.U.T.'s legendary cultural and technical
          festival, now celebrating its 22nd edition! India's premier college
          cultural and technical extravaganza. Organized by students and the
          D.S.W. office, Moksha-Innovison promises an unparalleled experience
          amidst the vibrant campus of N.S.U.T. At Moksha-Innovision, we
          prioritize the user experience above all else, ensuring that every
          guest leaves with unforgettable memories. With our commitment to
          excellence, we spare no effort to provide you with the best three days
          of your life. We cordially invite you to join us at Moksha-Innovision
          2024 for an unforgettable experience.
        </div>
        {/* <div className="acc_l">REGISTER</div> */}
        <div className="acc_p_a">Contingent Leader</div>
        <div className="acc_s">
          Join us as a Contingent Leader (CL) and be the link between your
          college and Moksha-Innovision (MV) at N.S.U.T., Delhi. As a CL, you'll
          be the go-to person for all accommodation queries, ensuring seamless
          communication between MV and your college community. Earn a
          certificate of appreciation from MV, N.S.U.T., Delhi, upon successful
          completion of your duties, along with various exciting incentives.
          Don't miss this opportunity to become a vital link in one of India's
          most prestigious cultural festivals!
        </div>
        <div className="acc_p_b">Instructions</div>
        <div className="acc_s">
          To ensure a comfortable experience for the eager participants of
          Moksha-Innovision, the Hospitality Department of MV is dedicated to
          offering convenient accommodation options during the festival. Given
          the extensive participation, we've devised a set of procedural
          guidelines to ensure a smooth and glitch-free process. Allow us to
          guide you through the steps!
        </div>
        <div className="acc_p_a">How to avail?</div>
        <div className="acc_s">
          1. Everybody willing to avail accommodation in Moksha-Innovision must
          register here first and then proceed to further steps. <br></br>2. All
          participants have to contact the Contingent Leader (hereafter referred
          to as ‘CL’) of their college; the details of whom would be made
          available to you once the CL is decided. <br></br>3. The registration
          for Contingent Leader has started. If your college has no CL, you can
          register yourself at{" "}
          <a href="https://www.mokshansut.com/cl" target={"_blank"}>
            https://www.mokshansut.com/cl
          </a>{" "}
          <br></br>4. CL will have to finalise the contingent before the given
          deadline and within the allotted contingent limit
        </div>
        <div className="heads_acc">
          <div>
            <img src={i3} className="a_wr ii" />
            <div style={{ marginTop: "-20px" }}>
              <a
                href="https://www.instagram.com/shreyansh0242?igsh=ZGdobzNyemhkYXph"
                target={"_blank"}
                style={{ color: "white" }}
              >
                <FaInstagram
                  style={{ fontSize: "30px", marginRight: "50px" }}
                />
              </a>
              <a
                href="https://wa.me/917840051946"
                target={"_blank"}
                style={{ color: "white" }}
              >
                <FaWhatsapp style={{ fontSize: "30px" }} />
              </a>
            </div>
          </div>
          <div>
            <img src={i4} className="a_wr ii" />
            <div style={{ marginTop: "-20px" }}>
              <a
                href="https://www.instagram.com/nikita_kanodia_/"
                target={"_blank"}
                style={{ color: "white" }}
              >
                <FaInstagram
                  style={{ fontSize: "30px", marginRight: "50px" }}
                />
              </a>
              <a
                href="https://wa.me/919599144212"
                target={"_blank"}
                style={{ color: "white" }}
              >
                <FaWhatsapp style={{ fontSize: "30px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <img src={acc} className="tower" />
    </div>
  );
}

export default Accomodation;
