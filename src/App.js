import Profile from './component/profile';
 import './App.css'


function App() {
  const handleName = (name) => {
    alert('this is a view only page');
  }

  return (
    <div className="App">
       <img src={'xmastree.jpg'}/>
      <Profile fullName="Frank Ocean" bio="Black in complexion" profession="Software Engineer" handleName={handleName} />
       
    
     

      
    </div>
  );
}


export default App;