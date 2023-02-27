import "./BannerStyle.css";
import banner from "../assets/homeBanner1.jpg";

function Banner() {
  return (
    <div className="banner">
      <img
        src={banner}
        alt="Une jammeuse prête à se lancer. Une illustration de Will Argunas."
      />
      <div className="bannerText">
        <h1>Roller Derby Rules</h1>
        <p>Teste tes connaissances des règles du Roller Derby</p>
        <a className="fakeBtn" href="/quizz">
          Commencer un quiz
        </a>
      </div>
    </div>
  );
}

export default Banner;
