import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div>
        <Image src="/images/pokeball.png" width="100" height="100" />
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
