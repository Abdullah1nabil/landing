const Header = () => {
  return (
    <div class="home-cover">
      <img src="images/rectangle-17.png" alt="" />
      <div class="overlay">
        <div class="container">
          <header>
            <div className="head">
              <h1>Landings</h1>
              <div>
                <ul>
                  <li>
                    <a>WORK</a>
                  </li>
                  <li>
                    <a>FEATURES</a>
                  </li>
                  <li>
                    <a> BLOG</a>
                  </li>
                  <li>
                    <a> CONTACT US</a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div className="content">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <input type="submit" value="VIEW OUR PROJECTS" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
