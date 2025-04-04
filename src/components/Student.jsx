import React from 'react'
export const Student = (props) => {
  return (
    <div className='Student'>
        <table>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>       
                     </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}
                </td>
                
            </tr>
            <tr>
                <th>IS married</th>
                <td>{props.ismarried?"yes":"no"}</td>
            </tr>
            
        </table>
    </div>
  )
}
Student.defaultProps={
   name : "No name",
   age : 0 
}
