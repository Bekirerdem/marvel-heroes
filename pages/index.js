import Head from "next/head";

if (typeof window === "object") {
  const imgBox = window.document.querySelectorAll(".imgBox");
  imgBox.forEach((popup) =>
    popup.addEventListener("click", () => {
      popup.classList.toggle("active");
    })
  );
}

function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

function HomePage() {
  return (
    <div>
      <Head>
        <title>Heroes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section>
        <header>
          <a className="logo">Heroes</a>
          <div className="toggle" onClick={toggleMenu}></div>
          <nav className="navigation">
            <a>Home</a>
            <a>Characters</a>
            <a>Movies</a>
            <a>Games</a>
            <a>More</a>
          </nav>
        </header>
        <div className="container">
          <div className="box">
            <div className="imgBox">
              <img className="imgBox1" src="/img/img.jpg" />
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img className="imgBox2" src="/img/img2.jpg" />
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img className="imgBox3" src="/img/img3.jpg" />
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
              <img className="imgBox4" src="/img/img4.jpg" />
            </div>
          </div>
        </div>
        <footer className="footer">
          <ul className="sci">
            <a>Twitter</a>
            <a>Github</a>
            <a>Linkedin</a>
          </ul>
          <p className="copyRight">©Bekir Erdem. 2021</p>
        </footer>
      </section>
    </div>
  );
}

export default HomePage;
