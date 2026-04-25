'use client';
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export function Navigation() {
    const router = useRouter();
    const pathName = usePathname();
    return (<nav>
      <div className="logo-wrapper">
        <img src="/images/logo.png" />
      </div>
  
      <ul className="navigation">
        <li><Link className={pathName == "/"?"active":""} href="/">Home</Link></li>
        <li><Link className={pathName == "/about"?"active":""} href="/about">About</Link></li>
        <li><a>Works</a></li>
        <li><a>Service</a></li>
        <li><a>Blog</a></li>
      </ul>
      <div className="csv-button">
        <a href="#">DOWNLOAD CSV</a>
      </div>
    </nav>)
  }