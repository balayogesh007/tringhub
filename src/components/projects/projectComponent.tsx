import './projectComponent.css';

export const ProjectComponent = () => {
  return (
    <div>

    </div>
  )
}


export const AddProject = ({closeTheForm}: any) => {  
  return (
    <div className='bg-form-modal'>
        <div className="add-project-popup">
          <div className='title-form-project-div'>
            <h1 className='title-form-project'>Add Project</h1>
          </div>
          <div>
            <div className='add-project-input-div'>
              <label htmlFor="" className='label-form-project'>Project Name</label>
              <input type="text" className='input-form-project'/>
            </div>
            <div className='add-project-input-div'>
              <label htmlFor="" className='label-form-project'>Sprint</label>
              <input type="text" className='input-form-project'/>
            </div>
            <div className='add-project-input-div'>
              <label htmlFor="" className='label-form-project'>End Date</label>
              <input type="text" className='input-form-project'/>
            </div>
            <div className='add-project-input-div'>
              <label htmlFor="" className='label-form-project'>Issues</label>
              <input type="text" className='input-form-project'/>
            </div>
            <div className='add-project-input-div'>
              <label htmlFor="" className='label-form-project'>Backlogs</label>
              <input type="text" className='input-form-project'/>
            </div>
            <div className='add-project-input-div'>
              <label htmlFor="" className='label-form-project'>Velocity</label>
              <input type="text" className='input-form-project'/>
            </div>
            <div className='add-project-input-div'>
              <label htmlFor="" className='label-form-project'>Backlogs</label>
              <input type="text" className='input-form-project'/>
            </div>
          <div className='form-action-container'>
            <button className='add-project-submit-button'>Submit</button>
            <button  onClick={() => {closeTheForm(false)}} className="add-project-cancel-button">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}