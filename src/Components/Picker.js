import React from "react";
import PropTypes from 'prop-types';
import { Form, Select  } from "semantic-ui-react";

const Picker = ({ value, onChange,onSearch, options }) =>
        // (
        //     <span>
                
        //         <h1>{value}</h1>
        //         <select onChange={e => onChange(e.target.value)} value={value}>
        //         {options.map(option =>
        //             <option value={option} key={option}>
        //             {option}
        //             </option>
        //         )}
        //         </select>
                
        //     </span>
        // )
            
       
        
        (
                 <span>                
            <h1>{value}</h1> 
                      
                <Form.Field control={Select} onChange={(e,{ value })=>  onChange(value) } 
                    options = {options}
                />                 
            </span>             
        
        )
    



Picker.propTypes = {
    //options:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}

export default Picker;