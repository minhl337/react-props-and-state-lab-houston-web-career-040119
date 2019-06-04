import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import petsData from "../data/pets.js"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: petsData,
      filters: {
        type: 'all'
      }
    }
  }
    
    initFetch=()=>{
    fetch("/api/pets").then(res=>res.json()).then(obj=>{
      this.setState({
        pets:obj
      })
    })
    }
    
    
   
    // fetchAnimals=(e)=>{
    //   let url
    //   e ? url = `/api/pets?type=${e}` : url = "/api/pets"
    //   fetch(url).then(res=>res.json()).then(obj=>{
    //   this.setState({
    //     pets:obj
    //   })
    // })
    // }

    onFindPetsClick=(e)=>{
    
    let search 
    
    
    this.state.filters.type==="all" ? search = "/api/pets" : search = `/api/pets?type=${this.state.filters.type}`

    
    fetch(search).then(res=>res.json()).then(obj=>{
      this.setState({
        pets:obj
      })
    })
  
  }

  onChangeType=(e)=>{
    
    this.setState({
      filters:{
        type: e.target.value
      }
    })
    // console.log(this.state.filters.type)
  }

  onAdoptPet=()=>{
    
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} animal={this.state.filters.type} findPets={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
