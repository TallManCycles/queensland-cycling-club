import React, { Component } from 'react'

import './Upcomingraces.css'

export default class Upcomingraces extends Component {
  render() {

    const races = [
        {
            id: 1,
            date: "15/12/2022",
            length: "100kms",
            title: "The ultimate one day classic"
        },
        {
            id: 2,
            date: "19/12/2022",
            length: "45kms",
            title: "Noosa Time Trial"            
        },
        {
            id: 3,
            date: "15/12/2022",
            length: "100kms",
            title: "The ultimate one day classic"
            
        },
        {
            id: 4,
            date: "15/12/2022",
            length: "100kms",
            title: "The ultimate one day classic"
        }            
    ]

    return (
        <section id="races">
        <h2>Upcoming Races</h2>
        <table className="racecalendar">
            <tbody>
            <tr>
                <th>Date</th>
                <th>Length (kms)</th>
                <th>Name</th>
                <th>More Details</th>
            </tr>
            {races.map(race => {
                return (
                    <tr key={race.id}>
                        <td>{race.date}</td>
                        <td>{race.length}</td>
                        <td>{race.title}</td>
                        <td>For more details <a href="#contact">contact us</a> for entry requirements.</td>
                    </tr>
                )
            })}  
            </tbody>         
        </table>
    </section>
    )
  }
}