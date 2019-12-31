import Link from 'next/link';

const Navigation = () => (
    <div>
        <Link href="/meditation">
            <a>Destress</a>
        </Link>
        <Link href="/schedule">
            <a>Schedule</a>
        </Link>
        <Link href="/help">
            <a>Find Help</a>
        </Link>
        <Link href="/choco-project">
            <a>The Choco Project</a>
        </Link>

      <style jsx>{`
        div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 4vh;
          background: black;
          padding-top: 2vh;
          display: block;
        }

        a {
          font-family: "Montserrat", sans-serif;
          font-size: 100%;
          color: white;
          text-decoration: none;
          padding-left: 2vw;
          padding-right: 2vw;
          padding-top: 3vh;
          padding-bottom: 3vh;
        }

        a:hover, a:active {
          color: black;
          background: white;
        }

      `}</style>

    </div>
);

export default Navigation;
