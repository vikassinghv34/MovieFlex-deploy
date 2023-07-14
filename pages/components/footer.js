import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container-fluid ">
      <div className="row text-center p-2 bg-secondary text-light fw-5 align-items-center">
        <div className="col-md-3 col-12 fs-5">&copy; Copyright 2023-2024 </div>
        <Link className="navbar-brand text-center col-md-5" href="/">
            <Image src={'/movie-flex-white-logo.png'} alt="logo" width={200} height={60}></Image>
          </Link>
        <div className="col-md-3 col-12 fs-5">Developed by Vikas Singh</div>
      </div>
    </div>
  );
};

export default Footer;
