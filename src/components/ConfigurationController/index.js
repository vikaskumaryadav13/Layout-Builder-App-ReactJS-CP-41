// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
      } = value

      return (
        <div className="controller-section">
          <div>
            <h1>Layout</h1>
            <div className="input-container">
              <input
                type="checkbox"
                id="Content"
                checked={showContent}
                onChange={() => onToggleShowContent(prevState => !prevState)}
              />
              <label htmlFor="Content">Content</label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                id="LeftNavbar"
                checked={showLeftNavbar}
                onChange={() => onToggleShowLeftNavbar(prevState => !prevState)}
              />
              <label htmlFor="LeftNavbar">Left Navbar</label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                id="RightNavbar"
                checked={showRightNavbar}
                onChange={() =>
                  onToggleShowRightNavbar(prevState => !prevState)
                }
              />
              <label htmlFor="RightNavbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
