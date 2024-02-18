export default function Item({content} : {content : string}){
    return (
        <li>
              <a
                href="#"

                className="block pr-2 text-lg text-white transition-all hover:text-primaryBlue-700"
                aria-current="page"
              >
                {content}
              </a>
        </li>
    )
}