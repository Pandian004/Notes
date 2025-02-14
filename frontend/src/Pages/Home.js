import React, {useContext, useEffect,useRef, useState} from 'react'
import { EditorContext } from '../Components/Editor/EditorContext.js';
import Navbar from '../Components/Navbar.js';
import Sidebar from '../Components/Sidebar.js'
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import { useReactToPrint } from "react-to-print";



// import Loader from '../Components/loader/loader.js';

const Home = () => {
  // let initialData = '';
  // const [data, setData] = useState('');
  const [title, setTitle] = useState("Untitled");
  const [isOpen, setIsOpen] = useState(true);
  const [id, setId] = useState('');
  const {initEditor, editorInstanceRef} = useContext(EditorContext);
  const editorRef = useRef(null);
  const updateId = useRef(null);
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() =>{
    axios.get("http://localhost:5000/profile", {withCredentials: true})
    .then(res => setId(res.data.id))
    .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    if(!editorRef.current){
      initEditor();
      editorRef.current = true;
    }
  },[initEditor])

  const handleSave = async () => {
    const data = await editorInstanceRef.current.save();
    if(updateId.current){
      const id = updateId.current;
      axios.put("http://localhost:5000/updateNote", {id, data})
      .then(res => {
        toast.success('Successfully Updated')
      })
      .catch(err => console.log(err));
      console.log(id);
    }
    else{
      axios.post("http://localhost:5000/upload", {title, data, id})
      .then(res =>{ 
        
        toast.success('Successfully saved')
      })
      .catch(err => console.log(err));
      console.log(data);
    }
  }

  function toPrint(){
    reactToPrintFn();
  }

  function handleEdit(id){
    let content;
    updateId.current = id;
    axios.post("http://localhost:5000/update", {id})
    .then(res => {
      content = JSON.parse(res.data.content)
      editorInstanceRef.current.render({
        blocks: content.blocks
      })
      setTitle(res.data.title)
    })
    .catch(err => console.log(err));
  }

  function handleNew() {
    setTitle("Untitled");
    editorInstanceRef.current.render({
      blocks: ""
    })
    updateId.current = null;
  }
  return (
    <div className=''>
      <Toaster richColors/>
      <Navbar isOpen={isOpen} onSave={handleSave} onPrint={toPrint} />
      <Sidebar isOpen={isOpen} handleClick={handleClick} handleNew={handleNew} onEdit={handleEdit} />
      <div className=' editor my-20 mx-auto w-1/2 shadow-xl rounded-xl p-2 bg-white border-2'>
        <form>
          <input id='title' type='text' value={title} onChange={(e) => {setTitle(e.target.value)}} className='p-3 w-full text-3xl focus:outline-none' required></input>
          <div ref={contentRef} id = "editorjs"></div>
        </form>
      </div>
      {/* <Loader /> */}
    </div>
  )
}

export default Home;