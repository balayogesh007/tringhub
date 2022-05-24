/* eslint-disable jsx-a11y/alt-text */
import './sideBarComponent.css';
import dashboardActive from './images/dashboardActive.svg'
import dashboardicon from './images/dashboardicon.svg';
import memberActive from './images/memberActive.svg';
import members from './images/members.svg';
import projects from './images/projects.svg';
import projectActive from './images/projectActive.svg'
import clients from './images/clients.svg';
import clientActive from './images/clientActive.svg';
import messages from './images/messages.svg';
import messageActive from './images/messageActive.svg';
import workplan from './images/workplan.svg';
import workplanActive from './images/workplanActive.svg'
import Logo from './images/Logo.svg';
import { useNavigate } from "react-router-dom";



const SideBarComponent = ({sideBarPath}: any) => {
  const history = useNavigate();

  const Dashboard = () => {
    history({
      pathname:'/'
    })
  }

  const Member = () =>{
    history({
      pathname: '/members'
    });
  }

  const Project = () =>{
    history({
      pathname: '/projects'
    });
  }

  const Client = () =>{
    history({
      pathname: '/clients'
    });
  }

  const WorkPlan = () =>{
    history({
      pathname: '/workplan'
    });
  }

  const Message = () =>{
    history({
      pathname: '/messages'
    });
  }
return(
  <div className="parent-container">
    <div className="tring-logo">
      <img src={Logo} alt="" className="web-logo"/>
    </div>
    { sideBarPath.includes('dashboard') ?
      <div className="Child-container-active">
        <div className="select-left-bar"></div>
        <img src={dashboardActive} alt="" className="svg-icon"/>
        <span className="left-rail-text-active">DASHBOARD</span>
      </div> :
      <div className="Child-container" onClick={Dashboard}>
        <img src={dashboardicon} alt="" className="svg-icon"/>
        <span className="left-rail-text">DASHBOARD</span>
      </div>
    }

    {
      sideBarPath.includes('members') ? 
      <div className="Child-container-active">
        <div className="select-left-bar"></div>
        <img src={memberActive} alt="" className="svg-icon-test"/>
        <span className="left-rail-text-active">MEMBERS</span>
      </div> :

      <div className="Child-container" onClick={Member}>
        <img src={members} alt="" className="svg-icon"/>
        <span className="left-rail-text">MEMBERS</span>
      </div>
    }

    {
      sideBarPath.includes('projects') ?
      <div className="Child-container-active">
        <div className="select-left-bar"></div>
        <img src={projectActive} alt="" className="svg-icon"/>
        <span className="left-rail-text-active">PROJECTS</span>
      </div> : 
      <div className="Child-container" onClick={Project}>
        <img src={projects} alt="" className="svg-icon"/>
        <span className="left-rail-text">PROJECTS</span>
      </div>
    }

    {
      sideBarPath.includes('clients') ?
      <div className="Child-container-active" >
        <div className="select-left-bar"></div>
        <img src={clientActive} alt="" className="svg-icon"/>
        <span className="left-rail-text-active">CLIENTS</span>
      </div> :
      <div className="Child-container" onClick={Client}>
        <img src={clients} alt="" className="svg-icon"/>
        <span className="left-rail-text">CLIENTS</span>
      </div>
    }

    {
      sideBarPath.includes('workplan') ?
      <div className="Child-container-active">
        <div className="select-left-bar"></div>
        <img src={workplanActive} alt="" className="svg-icon"/>
        <span className="left-rail-text-active">WORKPLAN</span>
      </div> :
      <div className="Child-container" onClick={WorkPlan}>
        <img src={workplan} alt="" className="svg-icon"/>
        <span className="left-rail-text">WORKPLAN</span>
      </div>
    }

    {
      sideBarPath.includes('messages') ?
      <div className="Child-container-active">
        <div className="select-left-bar"></div>
        <img src={messageActive} alt="" className="svg-icon"/>
        <span className="left-rail-text-active">MESSAGES</span>
      </div> :
      <div className="Child-container" onClick={Message}>
        <img src={messages} alt="" className="svg-icon"/>
        <span className="left-rail-text">MESSAGES</span>
      </div>
    }
  </div>
)
}

export default SideBarComponent;