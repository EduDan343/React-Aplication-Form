import PropTypes from "prop-types";

export const Navbar = ({ children }) => {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center", color: "white" }}>Form React</h2>
        <div
          style={{
            width: "85%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {children}
        </div>
      </header>
      <hr style={{ width: "90%", height: "2px", backgroundColor: "#808080" }} />
    </>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
};
