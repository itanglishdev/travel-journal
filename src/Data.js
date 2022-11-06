// import colosseum from './images/Colosseo_2020.jpg'
// import oktoberfest from './images/oktoberfest-wiesn.jpg'
// import pyramid from './images/gyza.jpeg'

import {colosseum,oktoberfest,pyramid} from './images'
const data = [
    {
        name: 'Colosseum',
        location: 'Rome',
        startDate: '24/10/2021',
        endDate: '28/10/2021',
        description: 'The Colosseum is one of the 7 Greatest WOnder of the World, worth your time. One of the most visited place on Earth adn a representation of the history of the city',
        image:{colosseum},
    },
    {
        name: 'Oktoberfest',
        location: 'Munich',
        startDate: '24/9/2021',
        endDate: '28/9/2021',
        description: 'The Oktoberfest (or Wiesn to locals) is the biggest Folkfest in the whole World. Beer based has also rides and food. Being able to attend it is the most enjoying experence you will ever have',
        image:{oktoberfest}
    },
    {
        name: 'Gyza Pyramid',
        location: 'Rome',
        startDate: '21/12/2006',
        endDate: '28/12/2006',
        description: 'The Great Pyramid of Giza is the largest Egyptian pyramid and the tomb of Fourth Dynasty pharaoh Khufu. Built in the early 26th century BC during a period of around 27 years, the pyramid is the oldest of the Seven Wonders',
        image:{pyramid}
    }
]


export default data