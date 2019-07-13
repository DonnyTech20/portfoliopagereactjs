import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.jpeg';

const PROJECTS = [
    {
        id: 0,
        title: 'Example React Native App',
        description: 'A React native App that Iv\'e built, involving JS an core mobile dev concepts!',
        link: 'https://github.com/DonnyTech20/reactnativeyoutube',
        image: project1
    },
    {
        id: 1,
      title: 'My UI Testing',
      description: 'A Cypress.io UI testing App that logs in as a client and click submit button ',
      link: 'https://github.com/DonnyTech20/Newsletter-Cypressio',
      image: project2
    },
    {
        id: 2,
        title: 'My API',
        description: 'A Weather map API in which my friends can check the forecast!',
        link: 'https://github.com/DonnyTech20/weather-api',
        image: project3
    }

];
export default PROJECTS;