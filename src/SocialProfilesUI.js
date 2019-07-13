import React, { Component } from 'react';
import Social_Profiles from './data/socialProfiles';




class SocialProfile extends Component {
    render() {
   
    const { link, image } = this.props.socialProfile;

        return (
           <span>
           <a href={link}>{link}
             <img src={image} alt='social-profile' style={{ width: 110, height: 100, margin: 20 }} />
             </a>
           </span>
        )
    }

}


class SocialProfilesUI extends Component {
    render() {
        return (
            <div>
                <h2>Connect with me!</h2>
            
            <div>
                {
                    Social_Profiles.map(Social_Profiles => {
                        return  (
                            
                         <SocialProfile key={Social_Profiles.id} socialProfile={Social_Profiles} />
                         );
                        
                    })
                }
            </div>
            </div>
        )
    }
}

export default SocialProfilesUI;