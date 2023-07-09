import React from "react";
import "./Weather.css";




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
                <div className="col-6">
                <img src= "./weather/cloudy.svg" alt="cloudy"/>

                </div>
            </div>

        </div>
       
    )
} 

