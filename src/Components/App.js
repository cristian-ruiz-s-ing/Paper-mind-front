import React from 'react';
import '../Styles/App.css';
import Navbar from './Navbar';
import NavbarSelec from './NavbarSelec';
import Biblioteca from './Biblioteca.js';
import BibliotecaImp from './BibliotecaImp.js';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { useState } from 'react';

const initialBibl = [
  {
    index: "0",
    titulo: 'Importantes Uni 1',
    fecha: '01 Abril 2022',
    contenido: 'Notas importantes a tener en cuenta para la universidad'
  },
  {
    index:"1",
    titulo: 'Notas personales 1',
    fecha: '19 Octubre 2022',
    contenido: 'En esta biblioteca guardaré sólo notas personales que no se pueden compartir con nadie'
  },
  {
    index:"2",
    titulo: 'Importantes Uni 2',
    fecha: '02 Abril 2022',
    contenido: 'Notas importantes a tener en cuenta para la universidad'
  }
];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

function App() {
  const [bibliotecas, setBibliotecas] = useState(initialBibl);
  return (
    <DragDropContext onDragEnd={(result) => {
      const {source, destination} = result;
      if(!destination){
        return;
      }
      if(source.index === destination.index && source.droppableId === destination.droppableId){
        return;
      }
      setBibliotecas((prevBibliotecas) => reorder(prevBibliotecas, source.index, destination.index)
      );
    }
    }>
      <div className="App">
        <Navbar />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
        <div class="page-content container note-has-grid">
          <NavbarSelec/>
          <div class="tab-content bg-transparent">
            <Droppable droppableId="bibliotecas" direction='horizontal' >
              {(droppableProvided)=> (
              <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} id="note-full-container" class="note-has-grid row">
                {bibliotecas.map((bibliotecas, index) => (<Biblioteca 
                  index={index}
                  Bibid= {bibliotecas.index} 
                  titulo={bibliotecas.titulo} 
                  fecha={bibliotecas.fecha} 
                  contenido={bibliotecas.contenido} 
                  />))}
                
                {droppableProvided.placeholder}
              </div>)}
            </Droppable>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
