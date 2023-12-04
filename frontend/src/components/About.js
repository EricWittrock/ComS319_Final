function About() {
  return (
    <div className="text-white">
      <div className="aboutTitle" width="100%" style={{paddingTop: "2%"}}>
        <h1>About</h1>
        <hr
          style={{
            color: "white",
             backgroundColor: "whitesmoke",
            height: 10,
          }}
        />
      </div>

      <h2>SE/ComS319 Construction of User Interfaces, Fall 2023</h2>
      <div className="text-light" style={{paddingTop: "5%"}}>
        <h4>3 December 2023</h4>
        <p>Eric Wittrock                        ejw3@iastate.edu</p>
        <p>Kale Kester                          kmkester@iastate.edu</p>
      </div>
      <p style={{paddingTop: "10%"}}>Dr. Abraham N. Aldaco Gastelum       aaldaco@iastate.edu</p>
    </div>
  );
}

export default About;