const Section = () => {
  return (
    <section>
      <div className="container">
        <div className="element-section">
          <h1>Featured Projects</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.
            Nunc varius ullamcorper felis. Nulla nibh ipsum, rutrum.
          </p>
        </div>
      </div>

      <div className="left">
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique ullamcorper luctus.
        </p>
        <input type="submit" value="VIEW OUR PROJECTS" />
      </div>
      <img className="right" src="images/Rectangle 10.png" alt="" />
    </section>
  );
};
export default Section;
