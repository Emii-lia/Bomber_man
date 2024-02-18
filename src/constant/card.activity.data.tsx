import { Title } from '../components/typography/title';
import { FaMapLocationDot } from "react-icons/fa6";
import { ICardDestData } from '../types/card.data.type';

export const cardActvityData:ICardDestData[] = [
    {
        btnIcon:<FaMapLocationDot/> ,
        imgSrc:"src/assets/dive-snorkeling-boat.jpg",
        title:<Title title='Dive Snorkeling Boat'/>,
        description:"Destination destination some information about this card ( depends on the card destination information )",
        btnLabel:"Add to Map",
        imgAlt:"Destination 1",
    },
    {
        btnIcon:<FaMapLocationDot/>,
        imgSrc:"src/assets/edena-kely.jpg",
        title:<Title title='Edena kely'/>,
        description:"Destination destination some information about this card ( depends on the card destination information )",
        btnLabel:"Add to Map",
        imgAlt:"Destination 1",
    },
    {
        btnIcon:<FaMapLocationDot/>,
        imgSrc:"src/assets/lemur-catta.jpg",
        title:<Title title='Lemur Catta'/>,
        description:"Destination destination some information about this card ( depends on the card destination information )",
        btnLabel:"Add to Map",
        imgAlt:"Destination 1",
    },
    {
        btnIcon:<FaMapLocationDot/>,
        imgSrc:"src/assets/la-piscine-naturelle.jpg",
        title:<Title title='La Piscine Naturelle'/>,
        description:"Destination destination some information about this card ( depends on the card destination information )",
        btnLabel:"Add to Map",
        imgAlt:"Destination 1",
    },
]