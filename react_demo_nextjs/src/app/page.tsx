'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Navigation } from "./navigation";

export default function Home() {
  return (
    <section>
      <Navigation/>
      <HomeContent/>
    </section>
  );
}

function CocialNetwork() {
  return (
    <ul className="social">
      <li><a><img src="images/fb-icon.png" /></a></li>
      <li><a><img src="images/fb-icon.png" /></a></li>
      <li><a><img src="images/fb-icon.png" /></a></li>
      <li><a><img src="images/fb-icon.png" /></a></li>
      <li><a><img src="images/fb-icon.png" /></a></li>
    </ul>
  )
}

function HomeContent(){
  return(
    <article className="home">
        <div className="intro">
          <div className="hello">HELLO I'M</div>
          <h1 className="name">James Smith</h1>
          <div className="passionate">
            A Passionate <span>Software Engineer</span>
          </div>
          <div className="sayhello">
            <Link href="/account/register">SIGN UP</Link>
          </div>
        </div>
        <div className="person">
          <img src="/images/person.png"/>
        </div>
        <CocialNetwork/>
      </article>
  );
}
