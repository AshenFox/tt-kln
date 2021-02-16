function App() {
  return (
    <div className="app">
      <header>
        <div className="container">
          <h1 className="header">Dashboard</h1>
          <h2 className="header__sub">Order basket redesign</h2>
        </div>
      </header>
      <main>
        <div className="container">
          {/* <div className="search">
            <div className="search__icon">
              <svg>
                <use href="../img/sprite.svg#icon__search"></use>
              </svg>
            </div>
            <input
              type="text"
              className="search__input"
              placeholder="What test are you looking for?"
            />
            <span className="search__count">7 tests</span>
          </div> */}
          {/* <div className="list">
            <div className="list__head">
              <div className="list__column">
                <div className="list__title-container">
                  <span className="list__title">NAME</span>
                  <div className="list__sort-icon">
                    <svg>
                      <use href="../img/sprite.svg#icon__down"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="list__column">
                <div className="list__title-container">
                  <span className="list__title">TYPE</span>
                  <div className="list__sort-icon">
                    <svg>
                      <use href="../img/sprite.svg#icon__down"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="list__column">
                <div className="list__title-container">
                  <span className="list__title">STATUS</span>
                  <div className="list__sort-icon">
                    <svg>
                      <use href="../img/sprite.svg#icon__down"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="list__column">
                <div className="list__title-container">
                  <span className="list__title">SITE</span>
                  <div className="list__sort-icon">
                    <svg>
                      <use href="../img/sprite.svg#icon__down"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="list__column"></div>
            </div>
            <div className="list__body">
              <div className="list__item">
                <div className="list__column">
                  <p className="list__name">
                    Order Basket redesing Order Basket redesing
                  </p>
                </div>
                <div className="list__column">
                  <span className="list__type">Classic</span>
                </div>
                <div className="list__column ">
                  <span className="list__status online">Online</span>
                </div>
                <div className="list__column">
                  <p className="list__site">google.comgoogle.com</p>
                </div>
                <div className="list__column">
                  <button className="list__action results">
                    <span>Results</span>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="not-found__container">
            <p className="not-found__message">
              Your search did not match any results
            </p>
            <button className="list__action finalize">
              <span>Reset</span>
            </button>
          </div> */}
          <div className="loader__container">
            <div className="loader__ring"></div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__link">
            <div className="footer__link-icon">
              <svg>
                <use href="../img/sprite.svg#icon__left"></use>
              </svg>
            </div>
            <span className="footer__link-text">Back</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
