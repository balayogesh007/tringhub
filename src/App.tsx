import { Route, Routes, useLocation } from "react-router-dom"
import { ClientComponent } from "./components/clients/clientComponent";
import DashboardComponent from "./components/dashboard/dashboardComponent"
import { MemberComponent } from "./components/members/memberComponent";
import { MessageComponent } from "./components/messages/messageComponent";
import { ProjectComponent } from "./components/projects/projectComponent";
import { WorkPlanComponent } from "./components/workplan/workplanComponent";
import { HeaderComponent } from "./pages/header/headerComponent";
import SideBarComponent from "./pages/sideBar/sideBarComponent";
import './App.css';
import { useEffect } from "react";
import React from "react";

function App() {
  const location = useLocation();
  const [path, setPath] = React.useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      setPath('dashboard');
    } else {
      setPath(location.pathname);
    }
  })
  return (
    <div className="App">
      
      <div> <SideBarComponent sideBarPath = {path} /></div>

      <div style={{ width: window.innerWidth }}> 
        <div><HeaderComponent/></div>
        <div>
            <Routes>
              <Route path='/' element={<DashboardComponent/>} />
              <Route path='/members' element={<MemberComponent/>}/>
              <Route path='/projects' element={<ProjectComponent/>}/>
              <Route path='/clients' element={<ClientComponent/>}/>
              <Route path='/workplan' element={<WorkPlanComponent/>}/>
              <Route path='/messages' element={<MessageComponent/>}/>
            </Routes>
        </div>
    </div>
    </div>
  );
}

export default App;
