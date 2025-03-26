import React from 'react';
import SideBar from './SideBar.jsx';
import Feed from './Feed.jsx';
import Suggesstions from './Suggesstions.jsx';

function App() {

  return(
    <div className ='d-flex ' style={{height: '100vh'}}>
      <div className='w-20'><SideBar/></div>
      <div className ='w-50 '><Feed /></div>
      <div className ='w-30'><Suggesstions /></div>
    </div>
  );
}
export default App;