import './global.css';
import { About } from "./About";
import { Hero } from "./Hero";
import {Skill} from "./Skill";
import { Project } from './Project';
import { Contact } from './Contact';

export const Layout = ({color,lan,ldata}) => {
  return (
    <div>
     <Hero    color={color} lan={lan} ldata={ldata}/>
     <About   color={color} lan={lan} ldata={ldata}/>
     <Skill   color={color} lan={lan} ldata={ldata}/>
     <Project color={color} lan={lan} ldata={ldata}/>
     <Contact color={color} lan={lan} ldata={ldata}/>
    </div>
  )
}

