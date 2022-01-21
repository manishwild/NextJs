import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'
//always start with capital
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function deleteHandler(params) {
    //console.log('Clicked')
    setModalIsOpen(true)
  }

  function closeModalHandler(params) {
    setModalIsOpen(false)
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
      {/* {modalIsOpen ? <Modal /> : null} // shortcut */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  )
}

export default Todo
