import Image from "next/image";
import React from "react";
import team from "./team.module.css";

function Clietns() {
  return (
    <div id="team" className={team.mainHolder}>
      <div className={team.holder}>
        <div className={team.holderT}>
          <h1>Our Team</h1>
        </div>
        <div className={team.teamBox}>
          <div className={team.team}>
            <div className={team.personHolder}>
              <div className={team.personI}>
                <Image src={"/team_3.jpg"} alt="team_1" fill />
              </div>
              <div className={team.details}>
                <h3>Sina</h3>
                <p>Business owner , Installer</p>
                <a href="tel:+61 410 700 727">
                  <h3>+61 410 700 727</h3>
                </a>
                {/* <Image
                  src={"/linkedin.png"}
                  alt="team_1"
                  width={35}
                  height={35}
                /> */}
              </div>
            </div>
          </div>
          <div className={team.team2}>
            <div className={team.personHolder}>
              <div className={team.details}>
                <h3>Alma</h3>
                <p>Admin</p>

                <a href="tel:+61 449 659 126">
                  <h3>+61 449 659 126</h3>
                </a>
                {/* <Image
                  src={"/linkedin.png"}
                  alt="team_1"
                  width={35}
                  height={35} */}
                {/* /> */}
              </div>
              <div className={team.personV}>
                <Image src={"/team_2.jpg"} alt="team_1" fill />
              </div>
            </div>
          </div>
          {/* <div className={team.team3}>
            <div className={team.personHolder}>
              <div className={team.personC}>
                <Image src={"/team_1.jpg"} alt="team_1" fill />
              </div>
              <div className={team.details}>
                <h3>Saeid noormohammad</h3>
                <p>Ceo</p>
                <Image
                  src={"/linkedin.png"}
                  alt="team_1"
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Clietns;
