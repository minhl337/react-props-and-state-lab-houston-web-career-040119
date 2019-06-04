import React from 'react'

class Pet extends React.Component {
  constructor(props){
    super(props)
    this.state={
      adopted:this.props.pet.isAdopted
    }
  }
  
  onAdoptPet=()=>{
    this.setState({
      adopted:true
    })
    console.log()
  }
  
  
  render() {
    // console.log(this.props.pet)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */this.props.pet.gender==="male" ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        
        {this.state.adopted===true ? <button className="ui disabled button">Already adopted</button> : 
        <button className="ui primary button"
          onClick={this.onAdoptPet}
        >Adopt pet</button>}
          
          
        </div>
      </div>
    )
  }
}

export default Pet
