import { ICardDestData } from '../types/card.data.type';
import { Title } from '../components/typography/title';
import { FaMapLocationDot } from "react-icons/fa6";

export const cardDestData:ICardDestData[] = [
    {
        btnIcon:<FaMapLocationDot/> ,
        imgSrc:"src/assets/alee-des-baobabs.jpg",
        title:<Title title='Allee des Baobabs'/>,
        description:"Destination destination some information about this card ( depends on the card destination information )",
        btnLabel:"Add to Map",
        imgAlt:"Destination 1",
    },
    {
        btnIcon:<FaMapLocationDot/>,
        imgSrc:"src/assets/2 (2).jpg",
        title:<Title title='Tsingy of Bemaraha'/>,
        description:"Destination destination some information about this card ( depends on the card destination information )",
        btnLabel:"Add to Map",
        imgAlt:"Destination 1",
    },
    {
        btnIcon:<FaMapLocationDot/>,
        imgSrc:"src/assets/la-bella-donna.jpg",
        title:<Title title='La Bella Donna'/>,
        description:"Destination destination some information about this card ( depends on the card destination information )",
        btnLabel:"Add to Map",
        imgAlt:"Destination 1",
    },
    {
        btnIcon:<FaMapLocationDot/>,
        imgSrc:"src/assets/pain-sucre-diego.jpg",
        title:<Title title='Diego'/>,
        description:"Destination destination some information about this card ( depends on the card destination information )",
        btnLabel:"Add to Map",
        imgAlt:"Destination 1",
    },
]