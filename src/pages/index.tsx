import type { NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div>
      <h1>Futurama</h1>
      <ul>
        <li>
          <Link href="/info">
            <a>Info</a>
          </Link>
        </li>
        <li>
          <Link href="/character">
            <a>Characters</a>
          </Link>
        </li>
        <li>
          <Link href="/cast">
            <a>Cast</a>
          </Link>
        </li>
        <li>
          <Link href="/episodes">
            <a>Episodes</a>
          </Link>
        </li>
        <li>
          <Link href="/questions">
            <a>Questions</a>
          </Link>
        </li>
        <li>
          <Link href="/inventory">
            <a>Inventory</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
