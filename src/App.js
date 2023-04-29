
import './App.css';
import desenhar from './desenhar.js';


function App() {
  return (
   <div>
   <canvas id="canvas"></canvas>
   <div class="nav">
      <div class="clr" data-clr="#000"></div>
      <div class="clr" data-clr="#EF626C"></div>
      <div class="clr" data-clr="#fdec03"></div>
      <div class="clr" data-clr="#24d102"></div>
      <div class="clr" data-clr="#fff"></div>
      <button class="clear">Clear</button>
      <button class="save">save</button>
    </div>
    </div>
  );
}

desenhar();

export default App;
