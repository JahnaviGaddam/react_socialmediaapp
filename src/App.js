import { Routes,Route, Link, useParams, Navigate, useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";

import { DataProvider } from "./Context/DataContext";

function App() {


  return (
    <div className="App">

      <DataProvider>

        <Header title="Janu Social Media"/>
        <Nav/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post" >
            <Route index element={<NewPost/>}  />
          
            <Route path=":id" element={<PostPage/>} />
          </Route>
          
          <Route path="/edit/:id" element={<EditPost /> } />
          <Route path="/about"  element={<About/>} />
          <Route path="*" element={<Missing/>} />
        </Routes>
        <Footer/> 


        {/* <nav>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li> <Link to="/about"> About</Link> </li>
            <li><Link to="/postpage">PostPage</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          
          <Route path="/postpage/" element={<PostLayout/>}>
            <Route index element={<PostPage/>} />                   This is nested routing
                                                                    index is used to directly render the postpage*
            <Route path=":id" element={<Post/>} />
            <Route path="newpost" element={<NewPost/>} />
            <Route path="*" element={<Missing/>} ></Route>
          </Route>
        </Routes>   */}

      </DataProvider>

    </div>
  );
}

export default App;
