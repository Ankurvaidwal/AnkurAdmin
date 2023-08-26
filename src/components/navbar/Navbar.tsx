import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>AnkurAdmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://scontent.fdel5-1.fna.fbcdn.net/v/t39.30808-6/316531106_1518272848586656_8166511574289053375_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=STy-FBHnchcAX_BxEgL&_nc_ht=scontent.fdel5-1.fna&oh=00_AfBWPfqhp9QrJXk18ODrmNOGjW4m_2Xk05ei0PIciy992g&oe=64EABB31" alt="" />
        </div>
        <img src="settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar