
import "./dashboardComponent.css";
import icon_document from './images/icon_document.svg';
import icon_microsoft from './images/icon_microsoft.svg';
import ovalBlue from './images/ovalBlue.png';
import ovalGreen from './images/ovalGreen.png';
import ovalViolet from './images/ovalViolet.png';
import ovalYellow from './images/ovalYellow.png';
import ovalOrange from './images/ovalOrange.png';


const DashboardComponent = () => {
  return(
    <div>
      <div className="dashboard-container">
        <div className="dashboard-header">
          Dashboard
        </div>
        <div className="overview-gallery-container">
          <div className="project-overview">
            <div className="project-header-container">
              <span className="project-header">Projects Overview</span>
              <div className="downloadable-format">
                <span>Download Report</span>
                <img src= {icon_microsoft} alt="" className="ms-excel-icon"/>
                <img src={icon_document} alt="" className="pdf-icon"/>
              </div>
            </div>
            <div className="divider-3"></div>
            <div className="project-body">
              <div className="piechart-container">
                    <h1>HELLO</h1>
              </div>
              <div className="table-container">
                <table className="table-parameters">
                  <thead>
                    <tr className="table-header-data">
                      <th className="head1">Project Status</th>
                      <th  className="head2">136 Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={ovalBlue} alt="" className="oval"/>
                        Discovery
                      </td>
                      <td className="second-data">
                        <tr>
                          <td>15</td>
                          <td>11%</td>
                        </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={ovalViolet} alt="" className="oval"/>
                        Oppurtunity
                      </td>
                        <td className="second-data">
                        <tr>
                          <td>19</td>
                          <td>1%</td>
                        </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>
                       <img src={ovalOrange} alt="" className="oval"/>
                       Ongoing
                      </td>
                      <td className="second-data">
                        <tr>
                          <td>01</td>
                          <td>14%</td>
                        </tr>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={ovalYellow} alt="" className="oval"/>
                        Parked
                      </td>
                      <td className="second-data">
                        <tr>
                          <td>01</td>
                          <td>1%</td>
                        </tr>
                      </td>
                    </tr>
                    <tr >
                      <td>
                        <img src={ovalGreen} alt="" className="oval"/>
                        Ready
                      </td>
                      <td className="second-data">
                        <tr>
                          <td>95</td>
                          <td>70%</td>
                        </tr>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="project-gallery">
            <div className="gallery-header-container">
              <span className="project-gallery-header">Project Gallery</span>
              <div className="dropdown-container">
              <select className="dropdown-lists">
                <option value="Plantd-App">Plantd-App</option>
                <option value="Reuters-RCOM">Reuters</option>
                <option value="SRMG">SRMG</option>
                <option value="Sopheon">Sopheon</option>
              </select>
              </div>
            </div>
            <div className="divider-4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardComponent;