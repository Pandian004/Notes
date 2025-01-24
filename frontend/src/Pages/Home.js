import React, {useState} from 'react'
import EditorJS from '../Components/Editor/Editor.js';
import Navbar from '../Components/Navbar.js';
import Sidebar from '../Components/Sidebar.js'
// import Loader from '../Components/loader/loader.js';

const Home = () => {
  const [data, setData] = useState(null)
  const [title, setTitle] = useState("Untitled");
  const [isOpen, setIsOpen] = useState(true);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className=''>
      <Navbar isOpen={isOpen} />
      <Sidebar isOpen={isOpen} handleClick={handleClick} />
      <div className='my-20 mx-auto w-1/2 shadow-xl rounded-xl p-2 bg-white border-2'>
        <form>
          <input type='text' value={title} onChange={(e) => {setTitle(e.target.value)}} className='p-3 w-full text-3xl focus:outline-none' required></input>
          <EditorJS data={data} onChange={setData} editorBlock="editorjs-container" />
        </form>
      </div>
      {/* <Loader /> */}
    </div>
  )
}

export default Home;