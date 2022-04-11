import {Routes, Route} from 'react-router-dom';
import Todos from "./pages/components/todo/Todos";
import Home from "./pages/Home";
import Photos from "./pages/components/photo/Photos"
import TodosId from "./pages/components/todo/TodosId";

function App() {
  return (
   <>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/todos" element={<Todos/>}/>
         <Route path="/photos" element={<Photos/>}/>
         <Route path="/todos/:id" element={<TodosId props/>}/>
     </Routes>
   </>
  );
}

export default App;
