import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h3>Oopss...</h3>
        <p>Halaman yang anda tuju tidak ditemukan...</p>
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;
