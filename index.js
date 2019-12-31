import Link from 'next/link';

export default function Index() {
  return (
      
      <div className="container">

        <Link href="/about">
          <a id="about">ABOUT</a>
        </Link>

        <div className="home-title">
          <h1>Code <br /> Blue </h1>
        </div>
        <div className="home-text">
          <Link href="/menu">
            <a>enter</a>
          </Link>
        </div>

      <style jsx global>{`

        * { padding: 0; margin: 0 auto; box-sizing: border-box; }

        body {
          overflow: hidden;
          top: 0;
          right: 0;
          background: #2786CB;
          display: block;
          width: 100vw;
          height: 100vh;
        }

        #about {
          float: right;
          margin-top: 25px;
          margin-right: 25px;
          font-family: "Montserrat", sans-serif;
          font-size: 150%;
        }

        .home-title { 
          float: left;
          text-align: left;
          padding-top: 10vh;
          margin-left: 10vw;
          height: 90%;
          display: block;
          padding-bottom: 10vh;
        }

        h1 { 
          font-family: "Raleway", sans-serif; 
          font-size: 1000%;
          color: #EDD4B2;
        }
                
        .home-text { 
          float: left;
          display: block;
          text-align: left;
          margin-left: 10vw;
          width: 90vw;
          background: black;
          padding-top: 10px;
          padding-bottom: 15px;
          padding-left: 20px;
        } 

        a { 
          font-family: "Montserrat", sans-serif;
          font-size: 300%; 
          text-decoration: none;
          color: white;
        }    

      `}</style>

    </div>
  );
}