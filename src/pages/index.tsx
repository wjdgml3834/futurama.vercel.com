import styled from "@emotion/styled";
import type { NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div>
      <Header>
        <h1>Futurama</h1>
        <nav>
          <List>
            <Item>
              <Link href="/info">
                <a>Info</a>
              </Link>
            </Item>
            <Item>
              <Link href="/character">
                <a>Characters</a>
              </Link>
            </Item>
            <Item>
              <Link href="/cast">
                <a>Cast</a>
              </Link>
            </Item>
            <Item>
              <Link href="/episodes">
                <a>Episodes</a>
              </Link>
            </Item>
            <Item>
              <Link href="/questions">
                <a>Questions</a>
              </Link>
            </Item>
            <Item>
              <Link href="/inventory">
                <a>Inventory</a>
              </Link>
            </Item>
          </List>
        </nav>
      </Header>

      <ImgContainer>
        <Img
          src="https://cdn1.edgedatg.com/aws/v2/fxnow/Futurama/showimages/65a0fe866922189146d249543f3768d2/1600x900-Q90_65a0fe866922189146d249543f3768d2.jpg"
          alt="futurama-main-img"
        />
      </ImgContainer>
    </div>
  );
};

export default HomePage;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1``;

const Nav = styled.nav``;
const List = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
`;

const Item = styled.li`
  margin-right: 2em;
`;

const ImgContainer = styled.main`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 800px;
`;
