import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
 
  render() {
    // console.log(this.props.adoptPet)
    return (<div className="ui cards">
        {this.props.pets.map(x=>{
          return <Pet pet={x}/>
        })}
    </div>)
  }
}

export default PetBrowser
