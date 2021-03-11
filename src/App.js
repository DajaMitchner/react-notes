import Home from './components/Home/Home.component';
import StudentList from './components/StudentList/StudentList.component';
import Form from './components/Form/Form.component.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

// function App() {
//   return (
//     <div>
//     <Home/>
//     <StudentList/>
//     </div>
//   );
// }
function App(){
   return (
      <Router>
    <div>
    {  <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/students' component={StudentList}/>
         <Route exact path='/form' component={Form}/>
         </Switch> }
   </div>
   </Router>
  )
}
export default App;

const App = ( ) => {
  const stories = [ ... ];

return (
  <div>
    <h1>My Hacker Stories</h1>
    <Search/>
    <hr />

    <List list={stories}/>
  </div>
);
};
const Search = ( ) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = event => {
    setSearchTerm(event.target.value);
  }
  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange}/>

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  )
}
//A
const handleSearch = event => {
  console.log(event.target.value)

return (
  <div> 
    <h1>My Hacker Stories</h1>
    <Search onSearch={handleSearch}/>
    <hr/>
    <List list={stories}/>
  </div>
);
}
const Search = props => {
  const [searchTerm,setSearchTerm] = React.useState('');
  const handleChange = event => {
    setSearchTerm(event.target.value);

    //B
    props.onSearch(event)
  };
  return (...);
};
const App = () => {
  const stories = [ ... ];

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch ={handleSearch} />
      <hr />

      <List list={stories}/>
    </div>
  )
}
const Search =props => (
  <div>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text' onChange={props.onSearch} />
  </div>
)