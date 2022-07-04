import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Img,
} from "./HeaderStyles";
const Header = () => (
  <Container>
    {/* <Img src={"/images/prof.jpg"} /> */}
    {/* <NavLink>Rishav Das</NavLink> */}
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "#ffffff" }}>
          <DiCssdeck size="4rem" />{" "}
          <span style={{ fontSize: 25, fontWeight: "bold" }}>Rishav Das</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/d19rsabhah">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/rishav-das-570378210/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/27_rsabhah">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://www.instagram.com/rsabhah_17/?r=nametag">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
