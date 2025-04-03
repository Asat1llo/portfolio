import { Switch } from "@headlessui/react";
import { language } from '../data/localization';

export const ColorButton=({setColor,color,lan})=>{

  return (
    <div className="md:flex items-center gap-4 pr-">
 <span className="text-xs uppercase">{language[lan].header.light}</span>
 <Switch
   checked={color}
   onChange={setColor}
   className="relative inline-flex items-center h-5 w-10 rounded-full bg-gray-600 transition-all duration-300"
 >
   <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-all duration-300 ${color ? "translate-x-5" : "translate-x-1"}`} />
 </Switch>
 <span className="text-xs uppercase">{language[lan].header.dark}</span> 
  </div> 
  );
}

