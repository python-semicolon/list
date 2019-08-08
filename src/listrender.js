import React from 'react'
import Personal from './person'

function Listrender() {
   
    const names = ['A','B','C']
    const namelist =  names.map(name => <h2>{name}</h2>)
    const num = [1,2,3]
    const nums = num.map(nums => <p>{nums * 2}</p>)
    const arr = ['a'] 
    const arrs = arr.map(x => <h2>{x}</h2>)
    const persons = [
        {
          id: 1,    
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]

      const personlist = persons.map(personel =>  <Personal key={personel.id} personel={personel} />)
    return (
        <div>
            {
               namelist
            }
            {       
               arr.length 
            }
            {
                personlist
            }
            {
                nums
            }
            {
              arrs
            }
        </div>
    )
}

export default Listrender