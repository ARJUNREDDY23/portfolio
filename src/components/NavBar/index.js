import './index.css'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

// Write your code here

const NavBar = props => {
  const {onSelect, selectedId} = props

  const renderItems = navBarItem => {
    const {id, iconUrl, name} = navBarItem
    const classNameing = selectedId === id ? 'selected-class' : 'normal-class'
    const selected = () => {
      onSelect(id)
    }
    return (
      <li key={id} onClick={selected} role="list" className={classNameing}>
        <img src={iconUrl} alt={name} className="nav-icon" />
        <p>{name}</p>
      </li>
    )
  }

  return (
    <div className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
        alt="profile"
        className="profile-image"
      />
      <ul className="nav-items-container">
        {navBarItems.map(navBarItem => renderItems(navBarItem))}
      </ul>
    </div>
  )
}
export default NavBar
