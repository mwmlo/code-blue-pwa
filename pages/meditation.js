import HeaderLayout from "../components/HeaderLayout"
import MeditationTabs from "../components/MeditationTabs"

export default function Meditation() {
  return (
    <div>
      <HeaderLayout>
        <h1 id="header-title">Destress</h1>
        <h3 id="header-subtitle">Unwind with a short session of meditation.</h3>
      </HeaderLayout>
      
      <MeditationTabs />

      <style jsx global>{`

        #header-title {
          font-family: "Raleway", sans-serif;
          font-size: 300%;
          margin-bottom: 0;
          margin-top: 1vh;
          color: white;
        }

        #header-subtitle {
          font-family: "Montserrat", sans-serif;
          font-size: 100%;
          font-weight: lighter;
          color: #FBF3E8;
        }

      `}</style>

    </div>
  );
}