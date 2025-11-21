import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DonutModelModal } from './3dModelModals/DonutModelModal';
import { PortfolioAnimationModal } from './3dModelModals/PortfolioAnimationModal';
import { OrcModelModal } from './3dModelModals/OrcModelModal';
import styled from 'styled-components';
import { TriplaneModelModal } from './3dModelModals/TriplaneModelModal';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const ModelTileImg = styled.img`
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.65);
`;

const ModelTile = (props: any) => {
  return (
    <ModelTileImg
      className="artGalleryImg threedmodel"
      width="150"
      height="150"
      onClick={props.onClick}
      style={{ backgroundImage: `url(${props.thumbnail})` }}
    />
  );
};

function ThreeDModels() {
  const navigate = useNavigate();
  const { modelId } = useParams();
  const [openedModal, setOpenedModal] = useState('');

  let loaded = false;

  useEffect(() => {
    if (!loaded) {
      loaded = true;
      if (modelId) {
        setOpenedModal(modelId);
      }
    }
  }, []);

  useEffect(() => {
    if (modelId) {
      setOpenedModal(modelId);
    }
  }, [modelId]);

  const clickProjectTile = (id: string) => {
    navigate(id);
    setOpenedModal(id);
  };

  const closeProjectTile = () => {
    navigate('');
    setOpenedModal('');
  };

  return (
    <>
      <ProjectsContainer>
        <ModelTile
          onClick={() => clickProjectTile('donut')}
          thumbnail={'./../src/assets/3dmodels/donut/thumbnail.png'}
        />
        <ModelTile
          onClick={() => clickProjectTile('portfolioanimation')}
          thumbnail={'./../src/assets/3dmodels/start/thumbnail.png'}
        />
        <ModelTile
          onClick={() => clickProjectTile('orc')}
          thumbnail={'./../src/assets/3dmodels/orc/thumbnail.png'}
        />
        <ModelTile
          onClick={() => clickProjectTile('plane')}
          thumbnail={'./../src/assets/3dmodels/triplane/thumbnail.png'}
        />
      </ProjectsContainer>
      <DonutModelModal
        onClose={() => closeProjectTile()}
        isOpen={openedModal === 'donut'}
      />
      <PortfolioAnimationModal
        onClose={() => closeProjectTile()}
        isOpen={openedModal === 'portfolioanimation'}
      />
      <OrcModelModal
        onClose={() => closeProjectTile()}
        isOpen={openedModal === 'orc'}
      />
      <TriplaneModelModal
        onClose={() => closeProjectTile()}
        isOpen={openedModal === 'plane'}
      />
    </>
  );
}

export default ThreeDModels;
