import React from 'react';

function Button() {

    const App = () => {
       const element = document.getElementsByClassName('text-');
       const myElements = Array.forom(element);
       myElements.forEach((element) => {
        element.style.color = 'blue';
      });
        };


  return (
  <div>
    <button onClick={()=>App()} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Powiększ czcionkę</button>
  </div>
  );
};

export default Button;