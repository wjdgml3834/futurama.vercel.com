import styled from "@emotion/styled";
import React from "react";
import { Footer } from ".";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

const Container = styled.main`
  margin: 0 auto;
`;
