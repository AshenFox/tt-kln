function App() {
  return (
    <div className='app'>
      <header>
        <div className='container'>
          <h1 className='header'>Dashboard</h1>
        </div>
      </header>
      <main>
        <div className='container'>
          <div className='search'>
            <div className='search__icon'>
              <svg>
                <use href='../img/sprite.svg#icon__search'></use>
              </svg>
            </div>
            <input
              type='text'
              className='search__input'
              placeholder='What test are you looking for?'
            />
            <span className='search__count'>7 tests</span>
          </div>
          <div className='list'>
            <div className='list__head'>
              <div className='list__column'>
                <span className='list__title'>NAME</span>
                <div className='list__sort-icon'>
                  <svg>
                    <use href='../img/sprite.svg#icon__down'></use>
                  </svg>
                </div>
              </div>
              <div className='list__column'>
                <span className='list__title'>TYPE</span>
                <div className='list__sort-icon'>
                  <svg>
                    <use href='../img/sprite.svg#icon__down'></use>
                  </svg>
                </div>
              </div>
              <div className='list__column'>
                <span className='list__title'>STATUS</span>
                <div className='list__sort-icon'>
                  <svg>
                    <use href='../img/sprite.svg#icon__down'></use>
                  </svg>
                </div>
              </div>
              <div className='list__column'>
                <span className='list__title'>SITE</span>
                <div className='list__sort-icon'>
                  <svg>
                    <use href='../img/sprite.svg#icon__down'></use>
                  </svg>
                </div>
              </div>
              <div className='list__column'></div>
            </div>
            <div className='list__body'>
              {/* ITEM */}
              <div className='list__item'>
                <div className='list__column'>
                  <p className='list__name'>
                    Order Basket redesing Order Basket redesing
                  </p>
                </div>
                <div className='list__column'>
                  <span className='list__type'>Classic</span>
                </div>
                <div className='list__column '>
                  <span className='list__status online'>Online</span>
                </div>
                <div className='list__column'>
                  <p className='list__site'>google.comgoogle.com</p>
                </div>
                <div className='list__column'>
                  <button className='list__action results'>
                    <span>Results</span>
                  </button>
                </div>
              </div>
              {/* ========= */}
              {/* ITEM */}
              <div className='list__item'>
                <div className='list__column'>
                  <p className='list__name'>Order Basket redesing</p>
                </div>
                <div className='list__column'>
                  <span className='list__type'>Classic</span>
                </div>
                <div className='list__column '>
                  <span className='list__status online'>Online</span>
                </div>
                <div className='list__column'>
                  <p className='list__site'>google.com</p>
                </div>
                <div className='list__column'>
                  <button className='list__action results'>
                    <span>Results</span>
                  </button>
                </div>
              </div>
              {/* ========= */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
