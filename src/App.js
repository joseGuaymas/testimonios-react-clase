import './App.css';
import Testimonio from './componentes/Testimonio'

// Adaptamos el proyecto para hacer uso de cmponentes de clase en lugar de componentes funcionales

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alummnos</h1>
          <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='1'
          cargo='Ingeniera de Software'
          empresa='Spotfy'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero éste fue el mejor. Estudiar JavaScript, así como estructuras de datos y algoritmos me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniera de software en Spotify.'
          />
          <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='2'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podóa programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp ha cambiado mi vida. '
          />
          <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='3'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='freeCodeCamp fue la puerta de entrada ami casa como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de prodramación de un nivel de principiante a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
          />
        </div>
      </div>
    )
  }
}


export default App;
