import logo from './logo.svg';
import './App.css';
import Card from './Card';
function App() {
  var cities = [
    {cname:"Ahmedabad",des:"t has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Ha",theme:"dark"},
    {cname:"Delhi",des:"Delhi has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Ha",theme:"light"},
    {cname:"Mumbai",des:"Mumbai has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Ha",theme:"dark"},
    {cname:"Indore",des:"Indore has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Ha",theme:"light"},
    {cname:"Pune",des:"Pune has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Ha",theme:"dark"},
    {cname:"Banglore",des:"Banglore has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Ha",theme:"light"},
  ];
  var citiesData = cities.map((city)=>
  {
    return <Card m={city.theme} t={city.cname} d={city.des}></Card>
  });
  return (
    <div className="App">
      <div className='Card-Container'>
     {citiesData}
        </div>
        <h2>thi sis footer content </h2>
    </div>
  );
}

export default App;
