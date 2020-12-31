import './App.css';
// import semua data yang diperlukan termasuk file yang akan kita gunakan pada saat membuat router
// perintah dibawah digunakan untuk mengaktifkan component react yang ada pada folder node module
import React, {Component} from 'react';
// import plugin router yang kita butuhkan
import { BrowserRouter, Route} from 'react-router-dom';
// import file yang akan dipanggil melalui router
import Home from './component/Home';
import Navbar from './component/Navbar';
import Tampil from './component/Tampil';
import Input from './component/Input';
import Edit from './component/Edit';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Navbar/>
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/input" component={Input}/>
            <Route path="/tampil" component={Tampil}/>
            <Route path="/edit/:id" component={Edit}/>
          </div>
      </BrowserRouter>
    )
  }
}

export default App;
