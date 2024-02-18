import { Title } from "../components/typography/title";
import { ICardDestData } from "../types/card.data.type";
import { FaMapLocationDot } from "react-icons/fa6";

export const cardRestaurantData:ICardDestData[] = [
    {
        btnIcon:<FaMapLocationDot/> ,
        imgSrc:"src/assets/hotel-safari-vezo.jpg",
        title:<Title title='Hotel Safari Vezo'/>,
        description:"Destination destination some information about this card ( depends on the card destination information )",
        btnLabel:"Add to Map",
        imgAlt:"Destination 1",
    },
    {
        btnIcon:<FaMapLocationDot/>,
        imgSrc:"src/assets/laltraluna-blu-notte.jpg",
        title:<Title title='Laltraluna Blu Notte'/>,
        description:"Destination destination some information about this card ( depends on the card destination information )",
        btnLabel:"Add to Map",
        imgAlt:"Destination 1",
    },
    {
        btnIcon:<FaMapLocationDot/>,
        imgSrc:"src/assets/l-altra-faccia-della.jpg",
        title:<Title title='Altra Faccia Della'/>,
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