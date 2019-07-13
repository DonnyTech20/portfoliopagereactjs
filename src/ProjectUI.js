import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
    render() {
        const { title, image, description, link } = this.props.projects;
        return(
         <div style={{ display: 'inline-block', width: 400, margin: 20 }}>
             <h3>{title}</h3>
             <img src={image} alt='profile' style={{ width: 200, height: 170 }} />
             <p>{description}</p>
             <a href={link}>{link}</a>
         </div>
        )
    }
}




class Projects extends Component {
    render() {
        
    return (
        <fragment>
        <div>
        <h2>Highlighted Projects</h2>
        </div>
        <div>
            {
                PROJECTS.map(PROJECT => {
                    return (
                       
                <Project key={PROJECT.id} projects={PROJECT} />
                
                    );
                })
            }
        </div>
        </fragment>
     
    )
    
 }   
    
}
export default Projects;