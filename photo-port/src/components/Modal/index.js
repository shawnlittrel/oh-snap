import React from 'react';


function Modal({currentPhoto}) {

     const { name, category, description, index } = currentPhoto
     console.log('category', category);
     console.log('index', index);
     console.log('path', `../../assets/large/${category}/${index}.jpg`)

     return (
          <div className="modalBackdrop">
               <div className="modalContainer">
                    <h3 className="modalTitle">{name}</h3>
                    <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                    <p>{description}</p>
                    <button type="button">Close this modal</button>
               </div>
          </div>

     )
};

export default Modal;