import Card from "@/component/Card/Card";
import "./Home.css";
import ModalCard from "@/component/Card/ModalCard";

export default function Home() {
  return (
    <div className="Home">
      <div className="Title"><span className="SmallTitle">the</span> Artfolio</div>
      <div className="Description">designDefined의 놀라운 포트폴리오를 지금 확인하세요</div>
      <div className="Navigator">
        <button className="Tab writing">
          글
        </button>
        <button className="Tab design">
          디자인
        </button>
        <button className="Tab programming">
          개발
        </button>
      </div>
      <div className="Contents">
        <div className="CardContainer">
          <Card title="HTML 뜯어보기" src="./bg_html.png" href="read/html"/>
          <Card title="CSS, 어렵지 않아요!" src="./bg_css.png" href="read/css"/>
          <ModalCard title="프로젝트 1" src="./bg_1.png">준비중입니다!</ModalCard>
          <ModalCard title="프로젝트 2" src="./bg_2.png">준비중입니다!</ModalCard>
          <ModalCard title="프로젝트 3" src="./bg_3.png">준비중입니다!</ModalCard>
          <ModalCard title="프로젝트 4" src="./bg_4.png">준비중입니다!</ModalCard>
        </div>
      </div>
    </div>
  )
}

