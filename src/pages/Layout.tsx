import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TopBar from './components/TopBar';

import './../less/init.less';

import pkg from './../../package.json';
import Menu from './components/Menu';
import SnowEffect from './components/SnowEffect';
import { isHolidaySeason } from '../utils/helpers';

const MainContainer = styled.div``;

const Layout = () => {
  const version = pkg.version;

  return (
    <>
      <TopBar />
      {isHolidaySeason() && <SnowEffect />}
      <MainContainer id="main">
        <Menu />
        <div id="contentBar">
          <Outlet />
        </div>
        <div id="versionBox">v{version}</div>
      </MainContainer>
    </>
  );
};

export default Layout;
