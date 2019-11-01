import React, { Component } from 'react';
import wule from '../assets/Wule.jpeg'
import Title from './Title';

class Bio extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          displayBio:false
    //     }
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this)
    // }
    state={displayBio: false}

    toggleDisplayBio=()=>{
        this.setState({
            displayBio: !this.state.displayBio
        })
    }
    
    render() {
        return (
            <div>
                <img src={wule} alt={"Wuletaw Tefera"} className='profile'/>
                <h1>Hello!</h1>
                <p>My name is Wuletaw.</p>
                {/* {this.state.displayBio ? <Title/>:null} */}
                <Title/>
                <p>I'm always looking forward to working on meaningful projects.</p>
               {
                   this.state.displayBio ? (
                       <div>
                           <p>I live in Dearborn, Michigan, and code every day.</p>
                           <p>My favorite languages are Java and JavaScript, and I think React.js is awesome.</p>
                           <p>Besides coding, I also love music and Movies!</p>
                           <button onClick={this.toggleDisplayBio}>Show less</button>
                       </div>
                   ):(
                       <div>
                           <button onClick={this.toggleDisplayBio}>Show more</button>
                       </div>
                   )
               }
                
            </div>
        )
    }
}

export default Bio
