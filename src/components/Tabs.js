import React, { useEffect, useState } from 'react'
import {CiPizza} from 'react-icons/ci'
import { GiNoodles,GiFruitBowl,GiCheckMark} from 'react-icons/gi'
import { MdOutlineIcecream} from 'react-icons/md'
import { featchTabData } from '../service'



function Tabs(props) {
    const [active, setActive]= useState('Pizza')
    const [tabdata, setTabData] =useState('')
     const [tablabel , setTabLabel]= useState([
        {
            name: 'Pizza',
            icon:<CiPizza></CiPizza>,
            id:'0209cb28fc05320434e2916988f47b71'
        },
        {
            name: 'Noodels',
            icon:<GiNoodles></GiNoodles>,
            id:'31c5de9edb4e2e9cc47997030647930d'
        },
        {
            name: 'Desert',
            icon:<GiFruitBowl></GiFruitBowl>,
            id:'eb3e2b49525a0c8ce7327436f843321a'
        },
        {
            name: 'Ice cream',
            icon:<MdOutlineIcecream></MdOutlineIcecream>,
            id:'480fd56ab4d71c204c2b75e16edbbd21'
        },
     ])
     const handelClick=(name, id)=>{
        setActive(name)
        featchTabData(id).then(response=>{
            setTabData(response)
            props.setLoader(false)

        })
     }

     useEffect(()=>{
        featchTabData(tablabel[0].id).then(response=>{
            setTabData(response)
            props.setLoader(false)
        })
     }, [])
  return (
    <div className="container">
    <h1 className='recipeHeading'>What would you like to have!</h1>
    <div className="tabs">
        {tablabel.map((item, index)=>(
            <div onClick={()=>(handelClick(item.name, item.id),props.setLoader(true))} className={`tablist ${active === item.name?'active':""}`}>
                {item.icon}
            <span>{item.name}</span>
        </div>
            ))}
            
    </div>
    <div className='recipe_banner'>
       { tabdata !== '' &&<>
            <div className="left-col">
                <span className='badge'>{tabdata.recipe.cuisineType[0].toUpperCase()}</span>
                <h1>{tabdata.recipe.label}</h1>
                <p><strong>Recipe by:</strong><small>{tabdata.recipe.source}</small></p>
                <h3>Ingredients</h3>
                <div className='ingredients'>
                    <ul>
                        {tabdata.recipe.ingredientLines.map((list, index)=>
                            (<li key={index}><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>{list}</span></li>)

                        )}
                        
                    
                    </ul>
                </div>
            </div>
            <div className="right-col">
                <div className="image-wrapper">
                <img src={tabdata.recipe.image} alt={tabdata.recipe.label} />
                </div>
            </div>
            </>
       }
    </div>
</div>
  )
}

export default Tabs
