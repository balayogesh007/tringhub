import './headerComponent.css';
import iconplus from './images/iconplus.svg';
import searchicon from './images/searchicon.svg';
import iconnotification from './images/iconnotification.svg';
import profile from './images/profile.png';
import { AddProject } from '../../components/projects/projectComponent';
import { useState } from 'react';

export const HeaderComponent = () => {
  const [addProject, setAddProject] = useState(false)

  return (
    <div className="header-container">

      <div className='search-container-parent'>
        <div className='search-container'>
          <img src={searchicon} alt="" className='search-icon' />
          <input type="text" className="search-project-input" placeholder="Search your project here" maxLength={30} />
        </div>
      </div>

      <div className='header-right-child'>
        <div>
          <button className="add-project-container" onClick={() => {setAddProject(true)}}>
            <img src={iconplus} alt="" className='icon-plus' />
            <span className='add-project'>Add Project</span>
          </button>
        </div>
        <div className='divider-1'></div>
        <div className='notification-icon-container'>
          <img src={iconnotification} alt="" />
        </div>
        <div className='divider-2'></div>
        <div className='profile-icon-container'>
          <img src={profile} alt="" className='profile-pic' />
        </div>
      </div>
      {addProject && <AddProject closeTheForm={setAddProject}/>}
    </div>
  )
}