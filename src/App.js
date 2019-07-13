import React, { Component } from 'react';
import Projects from './ProjectUI';
import SocialProfilesUI from './SocialProfilesUI';
import profile from './assets/profile.jpeg';

class App extends Component {
    state = { displayBio: false };
    
        

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

     render()  {    
        return (  
            <div>
            <img src={profile} alt='profile' style={{borderradius: 100, width: 400, height: 300}} />
                <h1>Welcome!</h1>
                <p>My name is Donny Techiera, I'm a junior software engineer.</p>
                <p>I'm always looking forward to learning and growing by working on meaningful projects.</p>

        {
         this.state.displayBio ? (

         <div>
         <p>I currently resides in Atlanta Georgia, and enjoy coding daily to grow as a developer.</p>
         <p>My favorite tech stack is MERN, and I think React.js is amazingly cool.</p>
         <p>Besides coding I hang out with my buddy Max aka man/women bestfriend, and he loves hiking to chase squirrels.</p>
         <button onClick={this.toggleDisplayBio}>Show less</button>
     </div>
    ) : (
        <div>
            <button onClick={this.toggleDisplayBio}>Read more </button>
        </div>

    )
  }
 <hr />
 <Projects />
 <hr />
 <SocialProfilesUI />
 
 </div>                  
  )
 }
}

export default App;