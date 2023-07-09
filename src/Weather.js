import React from "react";
import "./Weather.css";
import { InlineSVG } from 'react-inlinesvg';




 export default function Weather() {
    return (
       <div className="Weather">
           <div class="input-group"> 
               <input type="text" id="" name="" class="form-control" value="Enter City"/>
                 <div class="input-group-append"> 
                   <button type="button" class="btn waves-effect waves-light btn-custom">
                    <i class="fa fa-search mr-1"> </i> FIND WEATHER</button>
    
            
                 </div>
            </div>
            <div className="row">
                 <InlineSVG src= "img/weather-icons/cloudy.svg" alt= "cloudy" className="cloud-img" />
                </div>
            </div>
        )
} 

