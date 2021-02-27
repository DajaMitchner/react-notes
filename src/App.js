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

