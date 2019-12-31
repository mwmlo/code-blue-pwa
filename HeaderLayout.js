import Navigation from "../components/Nav"

const HeaderLayout = props => (
  <div>
    <Navigation />

    <div className="header">
      {props.children}
    </div>

    <style jsx>{`

      .header {
        margin-top: 5vh;
        position: absolute;
        left: 0;
        top: 1vh;
        display: block;
        width: 90vw;
        height: 15vh;
        background: #2978F7;
        padding-left: 5vw;
        padding-right: 5vw;
        padding-top: 3vh;
        padding-bottom: 3vh;
        overflow: hidden;
      }
    `}</style>

  </div>
);

export default HeaderLayout;