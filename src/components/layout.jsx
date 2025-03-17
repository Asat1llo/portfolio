import './global.css';
import { About } from "./About";
import { Hero } from "./Hero";
import {Skill} from "./Skill";
import { Project } from './Project';
import { Contact } from './Contact';

export const Layout = ({color}) => {
  return (
    <div>
     <Hero    color={color}/>
     <About   color={color}/>
     <Skill   color={color}/>
     <Project color={color}/>
     <Contact color={color}/>
    </div>
  )
}

