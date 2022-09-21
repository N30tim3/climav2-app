import { useContext } from "react";
import AppContext from "../provider/appContext";

function Footer() {
  const {
    app: { isDark },
  } = useContext(AppContext);
  const anchorStyle = {
    color: "#C6C6C6",
  };
  return (
    <>
      <footer className="footer">
        <a
          href="https://github.com/N30tim3"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-github"></i> <span>GitHub</span>
        </a>
        <a
          href="https://www.facebook.com/timecelebi/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-facebook"></i> <span>Facebook</span>
        </a>
        <a
          href="https://www.linkedin.com/in/n30tim3/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-linkedin"></i> <span>LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/timecelebi/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-instagram"></i> <span>Instagram</span>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+525510961981"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-whatsapp"></i> <span>WhatsApp</span>
        </a>
        <a
          href="https://www.twitter.com/Yumenet"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-twitter"></i> <span>Twitter</span>
        </a>
        <a
          href="mailto:contactoitph@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-solid fa-envelope-open-text"></i> <span>Email</span>
        </a>
      </footer>
    </>
  );
}

export default Footer;
