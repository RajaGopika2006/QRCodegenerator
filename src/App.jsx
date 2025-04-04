import { LearnComponents } from "./components/LearnComponents"
import "../src/App.css";
import { Student } from "./components/Student";
function App() {
  let customs="d";
  const items=[
    {id : 1,name:  "Item 1"},
    {id : 2,name:  "Item 2"},
      {id : 3,name:  "Item 3"},
      {id : 4,name:  "Item 4"}
     ]
 return (
 <>
  {/* <h1 className="he1">Hello</h1>
  <p className={customs}>25+87={25+87}</p>
 <Student name="Raja Gopika" age={18} ismarried={false}/>
 <Student />
 <childcomponent>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ducimus velit in quis provident error, eligendi amet doloremque odit deleniti dignissimos omnis eaque eos, fugit modi maiores possimus minima similique.</p>
 </childcomponent> */}
 <Arraysample items={items}/>
 </>

 );

}

export default App
