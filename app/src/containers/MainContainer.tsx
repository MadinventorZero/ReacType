import React, { useState, useContext, useEffect } from 'react';
import BottomPanel from '../components/bottom/BottomPanel';
import CanvasContainer from '../components/main/CanvasContainer';
import { styleContext } from './AppContainer';
import DemoRender from '../components/main/DemoRender';
import RightContainer from './RightContainer';

const MainContainer = () => {
  const { style } = useContext(styleContext);


  return (
    <div className="main-container" style={style} >
      <div className="main">
        <CanvasContainer />
        {/* Caret Component Render */}
        <DemoRender />
      </div>
      <div className='control-container'>
        {/* <RightContainer/> */}
        <BottomPanel />
      </div>
    </div>
  );
};

export default MainContainer;
