import Image from "next/image";
import styles from "./page.module.css";

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

function Navigation() {
  return (<nav>
    <div className="logo-wrapper">
      <img src="/images/logo.png" />
    </div>

    <ul className="navigation">
      <li><a className="active">Home</a></li>
      <li><a>About</a></li>
      <li><a>Works</a></li>
      <li><a>Service</a></li>
      <li><a>Blog</a></li>
    </ul>
    <div className="csv-button">
      <a href="#">DOWNLOAD CSV</a>
    </div>
  </nav>)
}

function HomeContent(){
  return(
    <article>
        <div className="intro">
          <div className="hello">HELLO I'M</div>
          <h1 className="name">James Smith</h1>
          <div className="passionate">
            A Passionate <span>Software Engineer</span>
          </div>
          <div className="sayhello">
            <a href="">SAY HELLO</a>
          </div>
        </div>
        <div className="person">
          <img src="/images/person.png"/>
        </div>
        <CocialNetwork/>
      </article>
  );
}
