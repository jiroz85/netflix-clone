import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-question">Questions? Call 1-866-952-4456</p>

        <div className="footer-links">
          <div className="footer-column">
            <a href="a">FAQ</a>
            <a href="a">Help Center</a>
            <a href="a">Account</a>
            <a href="a">Media Center</a>
          </div>

          <div className="footer-column">
            <a href="a">Investor Relations</a>
            <a href="a">Jobs</a>
            <a href="a">Ways to Watch</a>
            <a href="a">Terms of Use</a>
          </div>

          <div className="footer-column">
            <a href="a">Privacy</a>
            <a href="a">Cookie Preferences</a>
            <a href="a">Corporate Information</a>
            <a href="a">Contact Us</a>
          </div>

          <div className="footer-column">
            <a href="a">Speed Test</a>
            <a href="a">Legal Notices</a>
            <a href="a">Only on Netflix</a>
          </div>
        </div>

        <div className="footer-language">
          <select className="language-select">
            <option>English</option>
            <option>Español</option>
          </select>
        </div>

        <p className="footer-country">Netflix Ethiopia</p>
      </div>
    </footer>
  );
}

export default Footer;
