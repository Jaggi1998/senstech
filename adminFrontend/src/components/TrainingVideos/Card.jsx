import React from 'react';
import './TrainingVideos.css'

const Card = (props) =>{
    return(<>
    
            <tr key={props.id}>
            <td class="pl-4">{props.idx}</td>
            <td>
              <img src={props.imgSrc} className="rounded" width="70" alt="" />
                <span class="font-20 font-medium mb-0 ms-1">{props.text}</span>
            </td>
            <td>
                <span class="text-muted">{props.category}</span>
            </td>
            
            <td>
              <button type="button" class="btn btn-primary btn-circle btn-lg btn-circle"><i class="fa-solid fa-pen-to-square"></i> </button>
              <button type="button" class="btn btn-danger btn-circle btn-lg btn-circle ms-2"><i class="fa-solid fa-trash"></i> </button>
            </td>
          </tr>
                 
    </>)
}

export default Card