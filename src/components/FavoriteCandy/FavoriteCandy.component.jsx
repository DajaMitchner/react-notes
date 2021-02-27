import React, {Component} from 'react'

import './FavoriteCandy.styles.css'

class FavoriteCandy extends Component {
    constructor(props){
        super(props)
    }
render(){
    let studentArray = this.props.candies.studentData
    return studentArray.map(student => {
        return (
            <p key={student.id} className='candy'>{student.name}</p>
        )
    })
}


}
export default FavoriteCandy