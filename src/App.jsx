import './App.css';
import { Header } from './Header/Header'
function App() {
  return (
    <div id='App' className="App">
      <Header />
      <main>
        <section className='section-main-banner1'>
          <h1>Make your <span>Discord Server</span><br></br>More Interestant!</h1>
          <p>
            Say Hello, to <strong>Friday BOT</strong>. The bot that can be what you need!
          </p>

          <ul className='ultimate-section-main'>
              <a href="#App">Documentation</a>
              <a href="#App">Add to Server</a>
          </ul>
          <p>
            <strong>*Or let's go see all the good things that Friday can Do!</strong>
          </p>
        </section>

        <section className='who-is-friday'>
          <div className="who-content">
            <h2>
              Who is <span>Friday?</span> Meet your new bot friend!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam eius, et culpa inventore dolor animi, iste quisquam est nam atque! Minus aspernatur amet non excepturi, necessitatibus dolore qui officiis.
            </p>
          </div>
          <div className="friday-card">
            <div className="card">
              <figure>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fbusiness-vol-26%2F100%2FArtboard_2-1024.png&f=1&nofb=1&ipt=7c0ee4067338916d1bf52072636e3a9394c7255d4801ef0501d3f7a2c0e1e393&ipo=images" alt="" />
              </figure>
              <div className="content">
                <h2>Friday Bot</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque modi, autem dolor aliquam eius temporibus expedita nam necessitatibus aliquid atque dolorem tenetur ullam optio ducimus aspernatur? Quae, consectetur nisi!</p>
              
                <ul>
                  <li>Music</li>
                  <li>Adm</li>
                  <li>More, and more!</li>
                </ul>
              
              </div>
            </div>
          </div>
        </section>

        <section className='commands'>
          <h1>
            What about the commands? What's the power of Friday?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat earum laboriosam culpa saepe vero delectus consectetur officiis dolore blanditiis?
          </p>
              <ul className="ultimate-command">
                <li>
                  <h2>$Helpe</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta nam quibusdam, consectetur fugit veritatis!</p>
                </li>
                <li>
                  <h2>$share</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsa ab aspernatur sed nostrum reprehenderit!</p>
                </li>
                <li>
                  <h2>$ping</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi quia, ducimus dolorum atque dolores!
                  </p>
                </li>
                <li>
                  <h2>$joke</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente neque distinctio hic. Doloremque, rem?</p>
                </li>
              </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
