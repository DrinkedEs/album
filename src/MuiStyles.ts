const styles = {
  container: {
    color: "white",
    textAlign: "center",
    padding: { xs: 2, md: 4 },
    borderRadius: 2,
    boxShadow: 3,
    // overflow: "hidden",      <-- quítalo o cámbialo por auto
    overflowY: { xs: "auto", md: "hidden" },
    minHeight: { xs: "auto", md: "100vh" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 2,
    color: "white",
    animation: "fadeIn 2s",
    fontSize: { xs: "1.5rem", md: "2.5rem" },
  },
  message: {
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
    animation: "fadeIn 3s",
    fontSize: { xs: "1rem", md: "2rem" },
  },
  carouselBox: {
    marginBottom: 4,
    width: "100%",
    maxWidth: "600px",
    marginX: "auto",
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxHeight: { xs: "50vh", md: "70vh" },
    objectFit: "contain",
    borderRadius: 10,
  },
  videoBox: {
    display: "flex",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    maxHeight: "70vh",
    objectFit: "contain",
    borderRadius: 10,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  },
};

export default styles;
