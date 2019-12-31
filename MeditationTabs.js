const MeditationTabs = () => (
    <div className="tabs-body">

        <div className="session">
          <h1>Session 1</h1>
        </div>

        <div className="session">
          <h1>Session 2</h1>
        </div>

        <div className="session">
          <h1>Session 3</h1>
        </div>

        <div className="session">
          <h1>Session 4</h1>
        </div>

        <div className="session">
          <h1>Session 5</h1>
        </div>

        <div className="session">
          <h1>Session 6</h1>
        </div>

      <style jsx>{`

        .tabs-body {
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          height: 73vh;
          padding: 0;
          padding-left: 5vw;
          width: 100vw;
        }

        .session {
          background: #FBF3E8; 
          width: 42.5vw;
          margin-right: 5vw;
          margin-top: 2vh;
          margin-left: 0;
          margin-bottom: 0;
          height: 20vh;
          display: inline-block;
          overflow: hidden;
          border-radius: 20px;
        }

        .session:hover {
          background: #EDD4B2;
        }

        h1 {
          font-family: "Montserrat", sans-serif;
          font-size: 150%;
          margin-left: 4vw;
        }

      `}</style>

    </div>
);

export default MeditationTabs;
