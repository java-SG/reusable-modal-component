import { useState } from 'react'
import Modal from './Modal.tsx'
import './App.css'

function App() {

  const [displayModal, setDisplayModal] = useState<boolean>(false);

  return (
    <>
      {displayModal &&
        <Modal onClose={() => { setDisplayModal(false) }}>
          <div className="bg-white text-black flex justify-center items-center h-[80vh] w-[90vw] border-[2px] rounded-[15px]">Modal Content</div>
        </Modal>}
      <div
        className="
          h-screen w-screen
          flex justify-evenly items-center
          ">
        <div className="flex flex-col justify-evenly items-center h-full w-full">
          <div className="max-w-[70vw] max-h-[70vh] text-center">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </div>
          <button
            className="bg-blue-500 py-[1px] px-[5vh] hover:bg-blue-300 border-[2px] rounded-[15px] text-center transition duration-300 cursor-pointer"
            onClick={() => setDisplayModal(true)}
            aria-label="Modal">
            Get Modal
          </button>
        </div>
      </div>
    </>
  )
}

export default App