import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Richtext = ({ content } : any ) =>{
 return (
    <div>
      {
       documentToReactComponents(content)
      }
    </div>
 )
}

export default Richtext