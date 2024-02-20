// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => {
  const renderLeftNavbar = () => (
    <div className="left-nav-bar">
      <h1>Left Navbar Menu</h1>
      <ul>
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
        <li>Item4</li>
      </ul>
    </div>
  )
  const renderRightNavbar = () => (
    <div className="right-nav-bar">
      <h1>Right Navbar</h1>
      <div className="boxes-container">
        <div>Ad 1</div>
        <div>Ad 2</div>
      </div>
    </div>
  )
  const renderContent = () => (
    <div className="content-container">
      <h1>Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body">
            {showLeftNavbar && renderLeftNavbar()}
            {showContent && renderContent()}
            {showRightNavbar && renderRightNavbar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
