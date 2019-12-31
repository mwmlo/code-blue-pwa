import Link from 'next/link';
import Navigation from "../components/Nav";

export default function About() {
  return (
    <div>

      <Navigation />

      <div className="body">

        <div className="about-header">
          <h1>About</h1>
          <h3>Code Blue is a mental health web app designed to help stressed out YC students.</h3>
        </div>

        <br/>

        <div className="about-content">
          <h2>Creators</h2>
          <p>Hello.<br/><br/> We’re a group of sad IB kids who created this app for our CAS project, in order to support fellow students’ mental health. <br/><br/> Please support us by rating us below and giving us feedback.</p>
          {/* <Rating /> */}
          <p>Thanks,<br/><br/> Beverly Law, Michelle Lo, Leyla Ozcan, Carmen Vidal</p>

          <br/>

          <h2>Credits</h2>
          <p>Thank you to Mr Colonel for supplying his meditation expertise.</p>
        </div>

      </div>

      <style jsx>{`

        .body {
          display: block;
          width: 100vw;
          height: 94vh;
          position: absolute;
          bottom: 0;
          left: 0;
          background: #FBF3E8;
        }

        .about-header {
          height: 25vh;
          margin: 0 auto;
          text-align: center;
        }

        h1 {
          font-family: "Raleway", sans-serif;
          font-size: 400%;
        }

        h3 {
          font-family: "Montserrat", sans-serif;
          font-weight: lighter;
          font-size: 150%;
          width: 80vw;
          margin: 0 auto;
        }

        .about-content {
          display: block;
          background: #EDD4B2;
          padding: 3vw;
          position: absolute;
          width: 94vw;
          overflow: hidden;
          bottom: 0;
        }

        h2 {
          font-family: "Raleway", sans-serif;
          font-size: 150%;
        }

        p {
          font-family: "Open Sans", sans-serif;
          font-size: 100%;
        }

      `}</style>

    </div>
  );
}  