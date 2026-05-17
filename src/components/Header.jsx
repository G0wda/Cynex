function Header() {
  return (
    <header className="site-header">
      <div className="logo-placeholder" aria-label="Left logo placeholder">
        <img  className="college-logo" src="/src/assets/aiet-logo.png" alt="logo" />
      </div>

      <div className="header-title">
        <h1>Alva's Institute of Engineering and Technology</h1>
        <h3>A Unit of Alva's Education Foundation(R), Moodubidire</h3>
        <h4>(Affilliated to VTU, Belgaum, Approved by AICTE, New Delhi, Recognized by Govt. of Karnataka)</h4>
      </div>

      <div className="logo-placeholder" aria-label="Right logo placeholder">
        <img  className="branch-logo" src="/src/assets/aiet-logo.png" alt="logo" />
      </div>
    </header>
  );
}

export default Header;
