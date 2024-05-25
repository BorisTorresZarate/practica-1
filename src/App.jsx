
import './App.css'

function App() {

  return (
    <>
      <div className='conteiner'>
        <div className='left'>
          <h1>Welcome to the</h1>
          <h1>Frontend Quiz!</h1>
          <p>pick a subject to get started.</p>
        </div>
        <div className='rigth'>
          <div className='html'>
            <div className='conteiner-html'>
              <img src="/images/codigo.png" alt="" />
            </div>
            <p>HTML</p>
          </div>
          <div className='css'>
            <div className='conteiner-css'>
              <img src="/images/brocha.png" alt="" />
            </div>
            <p>CSS</p>
          </div>
          <div className='javascript'>
            <div className='conteiner-java'>
              <img src="/images/javascript.png" alt="" />
            </div>
            <p>Javascript</p>
          </div>
          <div className='Accessibility'>
            <div className='conteiner-access'>
              <img src="/images/accesibilidad.png" alt="" />
            </div>
            <p>Accessibility</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
