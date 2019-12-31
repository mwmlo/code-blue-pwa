import Link from 'next/link';

export default function Index() {
  return (
    <div>

      <div className="home-menu">

        <Link href="/meditation">
          <div className="main-box" id="destress">
            <h2>Destress</h2>
            <p>Relax with meditation</p>
          </div>
        </Link>

        <Link href="/schedule">
          <div className="main-box" id="schedule">
            <h2>Organise</h2>
            <p>Schedule your time</p>
          </div>
        </Link>

        <Link href="help">
          <div className="main-box" id="help">
            <h2>Reach Out</h2>
            <p>Find help</p>
          </div>
        </Link>

        <Link href="/choco-project">
          <div className="main-box" id="choco">
            <h2>Choco Project</h2>
            <p>Join the community</p>
          </div>
        </Link>

      </div>

    <style jsx>{`

      .home-menu {
        overflow: hidden;
        margin: 0 auto;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: absolute;
        background: #2786CB;
      }

      .main-box { 
        background: #FBF3E8; 
        width: 90vw;
        margin: 0 auto;
        margin-top: 3vh;
        margin-bottom: 3vh;
        height: 20vh;
        display: block;
        overflow: hidden;
        padding-top: 0;
        border-radius: 20px;
      }

      .main-box:hover {
        background: black; 
      }
            
      h2 { 
        font-family: "Raleway", sans-serif; 
        font-weight: bold; 
        font-size: 300%; 
        margin-top: 3vh;
        margin-left: 4vh;
        margin-bottom: 0;
      }

      p {
        font-family: "Montserrat", sans-serif;
        font-size: 150%;
        margin-top: 2vh;
        margin-left: 4vh;
      }

      #destress {
        color: #4488F4;
      }

      #schedule {
        color: rgba(215, 111, 134, 1);
      }

      #help {
        color: #474DBB;
      }
      
      #choco {
        color: #AB7F3E;
      }

    `}</style>

    </div>
  );
}