import { useEffect, useState } from "react";
import { BachelorsThesisModal } from "./projectModals/BachelorsThesisModal";
import { BorghildModal } from "./projectModals/BorghildModal";
import { BoxByDorisModal } from "./projectModals/BoxByDorisModal";
import { FlappyDogeModal } from "./projectModals/FlappyDogeModal";
import { FootballCupCalculatorModal } from "./projectModals/FootballCupCalculatorModal";
import { GbgMuayThaiModal } from "./projectModals/GbgMuayThaiModal";
import { InstagramAnalyzerModal } from "./projectModals/InstagramAnalyzerModal";
import { MassStlExporterModal } from "./projectModals/MassStlExporterModal";
import { MobileKeyringModal } from "./projectModals/MobileKeyringModal";
import { PortfolioModal } from "./projectModals/PortfolioModal";
import { SnakeModal } from "./projectModals/SnakeModal";
import { StarAppModal } from "./projectModals/StarAppModal";
import { StiModal } from "./projectModals/StiModal";
import { StockAnalyzerModal } from "./projectModals/StockAnalyzerModal";
import { TotalRiskModal } from "./projectModals/TotalRiskModal";
import { ValbarometernModal } from "./projectModals/ValbarometernModal";
import { useNavigate, useParams } from "react-router-dom";
import { CultsSellerModal } from "./projectModals/CultsSellerModal";

const ProjectTile = (props: any) => {
  const open = (ev: any) => {
    ev.preventDefault();
    props.onClick();
  }

  return (
    <div className="grid-item">
      <a href="" data-content={props.label} id={props.projectId} style={props.style} onClick={open} />
    </div>
  )
}

const Projects = () => {
  const [openedModal, setOpenedModal] = useState('');
  const navigate = useNavigate();
  const { projectId } = useParams();

  let loaded = false;

  useEffect(() => {
    if (!loaded) {
      loaded = true;
      if (projectId) {
        setOpenedModal(projectId);
      }
    }
  }, []);

  const clickProjectTile = (id: string) => {
    navigate(id);
    setOpenedModal(id);
  }

  const closeProjectTile = () => {
    navigate('');
    setOpenedModal('')
  }

  return (
    <div className="projects">
      <div className="mainContentItem full center" style={{ height: '100%', width: '100%', float: 'none', margin: '0 auto' }}>
        <ProjectTile onClick={() => clickProjectTile('risk')} label="TotalRisk" projectId="risk" style={{ background: "url(./../src/assets/projectThumbnails/ecmaRisk2.png)", backgroundSize: 'cover', backgroundPosition: "center -15px" }} />
        <ProjectTile onClick={() => clickProjectTile('stockAnalyzer')} label="Stock Analyzer" projectId="stockAnalyzer" style={{ background: "url(./../src/assets/projectThumbnails/stockAnalyzer.png)" }} />
        <ProjectTile onClick={() => clickProjectTile('portfolio')} label="Portfolio" projectId="portfolio" style={{ background: "url(./../src/assets/projectThumbnails/portfolio.png)" }} />
        <ProjectTile onClick={() => clickProjectTile('cultsSeller')} label="Cults3D Stats" projectId="cultsSeller" style={{ background: "url(./../src/assets/projectThumbnails/cults3dstats.png)", backgroundPositionY: '-60px' }} />
        <ProjectTile onClick={() => clickProjectTile('sti')} label="STI-Starcraft" projectId="sti" style={{ background: "url(./../src/assets/projectThumbnails/sti.png)" }} />
        {/* <ProjectTile onClick={() => clickProjectTile('valbarometern')} label="Valbarometern" projectId="valbarometern" style={{ background: "url(./../src/assets/projectThumbnails/valbarometern.png)" }} /> */}
        <ProjectTile onClick={() => clickProjectTile('borghild')} label="Borghild (D2R bot)" projectId="borghild" style={{ background: "url(./../src/assets/projectThumbnails/borghild.png)" }} />
        <ProjectTile onClick={() => clickProjectTile('massStlExporter')} label="Mass STL Exporter" projectId="massStlExporter" style={{ background: "url(./../src/assets/projectThumbnails/massStlExporter.png)", backgroundSize: '108% !important', backgroundPositionY: '-63px', backgroundPositionX: '-2px' }} />
        <ProjectTile onClick={() => clickProjectTile('wcc')} label="World/Euro Cup Calculator" projectId="wcc" style={{ background: "url(./../src/assets/projectThumbnails/wcc.png)" }} />
        <ProjectTile onClick={() => clickProjectTile('gbgmuaythai')} label="GBG Muay Thai" projectId="gbgmuaythai" style={{ background: "url(./../src/assets/projectThumbnails/gbgmuaythai.png)", backgroundPositionX: '-33px', backgroundPositionY: '-40px' }} />
        <ProjectTile onClick={() => clickProjectTile('snake')} label="Gyro Snake" projectId="snake" style={{ background: "url(./../src/assets/projectThumbnails/snake.png)", backgroundPositionY: '-80px' }} />
        <ProjectTile onClick={() => clickProjectTile('instaanalytics')} label="Instagram Analyzer" projectId="instaanalytics" style={{ background: "url(./../src/assets/projectThumbnails/instaanalytics.png)" }} />
        <ProjectTile onClick={() => clickProjectTile('exjobb')} label="Bachelors thesis" projectId="exjobb" style={{ background: "url(./../src/assets/projectThumbnails/exjobb.png)" }} />
        <ProjectTile onClick={() => clickProjectTile('boxByDoris')} label="Box By Doris" projectId="boxByDoris" style={{ background: "url(./../src/assets/projectThumbnails/boxByDoris.png)" }} />
        <ProjectTile onClick={() => clickProjectTile('mkp')} label="Mobile Keyring" projectId="mkp" style={{ background: "url(./../src/assets/projectThumbnails/mkp.png)" }} />
        <ProjectTile onClick={() => clickProjectTile('starapp')} label="Star App" projectId="starapp" style={{ background: "url(./../src/assets/projectThumbnails/starapp.png)" }} />
        <ProjectTile onClick={() => clickProjectTile('flappyDoge')} label="FlappyDoge" projectId="flappyDoge" style={{ background: "url(./../src/assets/projectThumbnails/flappyDoge.png)" }} />
        {/*
      <div className="grid-item">
        <a href="" data-content="Star App" data-ng-click="controller.openProject('starapp')" style="background: url(../../build/assets/projectThumbnails/starapp.png)">
        </a>
      </div> */}
        {/* <div className="grid-item">
          <a href="" data-content="FlappyDoge" data-ng-click="controller.openProject('flappyDoge')" style="background: url(../../build/assets/projectThumbnails/flappyDoge.png)">
          </a>
        </div> */}
        {/* <div className="grid-item">
          <a href="" data-content="Arduino Robot" data-ng-click="controller.openProject('arduinoRobot')" style="background: url(../../build/assets/projectThumbnails/arduinoRobot.png)">
          </a>
        </div> */}
        {/* <div className="grid-item">
          <a href="" data-content="WH40k Simulator" data-ng-click="controller.openProject('wh40k')" style="background: url(../../build/assets/projectThumbnails/wh40k.png)">
          </a>
        </div> */}
        {/* <div className="grid-item">
          <a href="" data-content="Flickr Editor" data-ng-click="controller.openProject('flickrEditor')" style="background: url(../../build/assets/projectThumbnails/flickrEditor.png)">
          </a>
        </div> */}
      </div>


      <TotalRiskModal onClose={() => closeProjectTile()} isOpen={openedModal === 'risk'} projectId="risk" />
      <ValbarometernModal onClose={() => closeProjectTile()} isOpen={openedModal === 'valbarometern'} projectId="valbarometern" />
      <StockAnalyzerModal onClose={() => closeProjectTile()} isOpen={openedModal === 'stockAnalyzer'} projectId="stockAnalyzer" />
      <PortfolioModal onClose={() => closeProjectTile()} isOpen={openedModal === 'portfolio'} projectId="portfolio" />
      <StiModal onClose={() => closeProjectTile()} isOpen={openedModal === 'sti'} projectId="sti" />
      <BorghildModal onClose={() => closeProjectTile()} isOpen={openedModal === 'borghild'} projectId="borghild" />
      <SnakeModal onClose={() => closeProjectTile()} isOpen={openedModal === 'snake'} projectId="snake" />
      <InstagramAnalyzerModal onClose={() => closeProjectTile()} isOpen={openedModal === 'instaanalytics'} projectId="sninstaanalyticsake" />
      <BachelorsThesisModal onClose={() => closeProjectTile()} isOpen={openedModal === 'exjobb'} projectId="exjobb" />
      <FootballCupCalculatorModal onClose={() => closeProjectTile()} isOpen={openedModal === 'wcc'} projectId="wcc" />
      <BoxByDorisModal onClose={() => closeProjectTile()} isOpen={openedModal === 'boxByDoris'} projectId="boxByDoris" />
      <MobileKeyringModal onClose={() => closeProjectTile()} isOpen={openedModal === 'mkp'} projectId="mkp" />
      <StarAppModal onClose={() => closeProjectTile()} isOpen={openedModal === 'starapp'} projectId="starapp" />
      <GbgMuayThaiModal onClose={() => closeProjectTile()} isOpen={openedModal === 'gbgmuaythai'} projectId="gbgmuaythai" />
      <FlappyDogeModal onClose={() => closeProjectTile()} isOpen={openedModal === 'flappyDoge'} projectId="flappyDoge" />
      <MassStlExporterModal onClose={() => closeProjectTile()} isOpen={openedModal === 'massStlExporter'} projectId="massStlExporter" />
      <CultsSellerModal onClose={() => closeProjectTile()} isOpen={openedModal === 'cultsSeller'} projectId="cultsSeller" />
    </div>
  );
}

export default Projects;