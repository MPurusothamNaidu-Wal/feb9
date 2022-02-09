import logo from './logo.svg';
import './App.css';
import BetterTodo from './TodoApp';
import Comment from './Comment';
import Forum from './Forum';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <Comment
      date={new Date().getDate().toString()}
      month={new Date().getMonth().toString()}
      year={new Date().getFullYear().toString()}></Comment><br /><br />
      <Forum topic = "What is React"></Forum> <br /><br />
      <Products></Products>
    </div>
  );
}

export default App;
