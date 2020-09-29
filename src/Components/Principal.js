import React from 'react';
import Connect from './Connect';
import Projects from './Projects';
import Tech from './Tech';
import Welcome from './Welcome'


export default function Principal(){
    return(
        <>
        <Welcome/>
        <Projects/>
        <Tech/>
        <Connect/>
        </>
    )
}