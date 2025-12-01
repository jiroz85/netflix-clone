import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h2>Starts at $7.99. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className="hero-form">
          <input
            type="email"
            className="hero-input"
            placeholder="Email address"
          />
          <button className="hero-button" type="submit">
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
