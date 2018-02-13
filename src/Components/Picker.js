import React from "react";
import PropTypes from 'prop-types';
import { Form, Select, Input  } from "semantic-ui-react";


const onSearch = (e, text) => {

}
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
              <Form>    
                  <Form.Field onKeyPress={ e =>{ if(e.which == 13) onChange (e.target.value)}} control={Input} label='Search a term' placeholder='Type a word' />    
                <Form.Field label='Select a Topic!' control={Select} onChange={(e,{ value })=>  onChange(value) } 
                    options = {options}
                /> 
            </Form>                
            </span>             
        
        )
    



Picker.propTypes = {
    //options:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}

export default Picker;