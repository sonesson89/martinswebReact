const TopBar = () => {
  return (
    <div id="topBar">
      <div id="topBarInnerContainer">
        <h1>
          <span id="martin">martin</span>
          <span id="sonesson">sonesson</span>
          <span id="se">.se</span>
        </h1>
        <div id="socialMedia">
          <a
            href="http://se.linkedin.com/pub/martin-sonesson/47/b65/200"
            target="_blank"
          >
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>
          <a href="http://www.github.com/sonesson89" target="_blank">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://dribbble.com/martinsonesson" target="_blank">
            <i className="fab fa-dribbble fa-2x"></i>
          </a>
          {/* <a href="https://twitter.com/Martin_Sonesson" target="_blank">
            <i className="fab fa-twitter fa-2x"></i>
          </a> */}
          <a href="http://martinsonesson.wordpress.com" target="_blank">
            <i className="fab fa-wordpress fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
