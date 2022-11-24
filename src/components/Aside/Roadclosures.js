import React, { Component } from 'react'

import './Roadclosures.css'

export default class Roadclosures extends Component {
  render() {
    return (
        <section id="roadClosures">
        <h2>Road Closures</h2>
       <ul>
           <li><p><strong>11/12/2022 - ⚠️ Special Event</strong>, Clem Jones Tunnel, Brisbane City <a href="https://qldtraffic.qld.gov.au/" target="_blank">(more details)</a></p></li>
           <li><p><strong>19/12/2022 - ⚠️ Special Event</strong>, Albert Street, Brisbane City <a href="https://qldtraffic.qld.gov.au/" target="_blank">(more details)</a></p></li>
           <li><p><strong>20/12/2022 - ⚠️ Special Event</strong>, Albert Street <a href="https://qldtraffic.qld.gov.au/" target="_blank">(more details)</a></p></li>
       </ul>
    </section>
    )
  }
}
