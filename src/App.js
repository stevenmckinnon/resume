import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <About/>
                <Resume/>
                <Footer/>
            </div>
        );
    }
}

export default App;
