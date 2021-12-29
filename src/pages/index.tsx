import styled from "@emotion/styled";
import type { NextPage } from "next";
import Link from "next/link";
import { MEDIA_QUERY_END_POINT } from "../constants";

const HomePage: NextPage = () => {
  return (
    <HomeContainer>
      <Header>
        <Title>Futurama</Title>
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
        <img
          src="https://cdn1.edgedatg.com/aws/v2/fxnow/Futurama/showimages/65a0fe866922189146d249543f3768d2/1600x900-Q90_65a0fe866922189146d249543f3768d2.jpg"
          alt="futurama-main-img"
          className="MainImg"
        />
      </ImgContainer>
    </HomeContainer>
  );
};

export default HomePage;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #111111;
  height: 50px;
  font-size: 1rem;
  color: white;
  position: sticky;
  top: 0;
`;

const Title = styled.h1`
  margin-right: 20px;
  font-size: 20px;
`;

const Nav = styled.nav`
  width: 100%;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
`;

const Item = styled.li`
  margin-right: 2em;
`;

const ImgContainer = styled.main`
  width: 100vw;
  display: flex;
  border-sizing: border-box;
  background-color: #6f6f6f;
  margin: 0 auto;
  .MainImg {
    width: 70%;
    margin: 100px auto;
    border-radius: 20%;
  }
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    min-height: calc(100vh - 120px);
  }
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    .MainImg {
      width: 80%;
      min-height: calc(100vh - 120px);
    }
  }
`;
