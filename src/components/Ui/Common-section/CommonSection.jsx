import React from 'react'
import './commonSection.css'
import {Container} from 'reactstrap' 
function CommonSection({title}){
    return(
        <section className='common__section'>
            <Container className='text-center'><h2>{title }</h2></Container>
        </section>
    )
   
}

export default CommonSection