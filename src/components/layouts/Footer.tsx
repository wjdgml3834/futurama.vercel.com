import styled from "@emotion/styled";
import React from "react";

export const Footer = () => {
  return (
    <HomeFooter>
      <p>
        Powered by <span>JungHee</span>
      </p>
    </HomeFooter>
  );
};

const HomeFooter = styled.footer`
  display: block;
  width: 100vw;
  min-height: 30vh;
  text-align: center;
  font-size: 2em;
  padding: 20px 0;
  color: white;
  background-color: #6f6f6f;
`;
