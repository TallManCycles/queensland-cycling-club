import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({title}) {
  return ReactDOM.createPortal((
    <section id="modalBox">
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close" onclick="onClose()">&times;</span>
                <section id="contact">
                    <div class="contactuscontainer">
                    <h2 id="modalTitle" >Contact Us</h2>
                    <form name="contact_us" method="#">
                        <ul class="contactus">
                            <li>
                                <label for="first_name">First Name:</label>
                                <input type="text" id="first_name" name="first_name" required/>
                            </li>
                            <li>
                                <label for="last_name">Last Name:</label>
                                <input type="text" id="last_name" name="last_name" required/>
                            </li>
                            <li>
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" required/>
                            </li>                                                            
                            <li>
                                <input type="checkbox" id="racedetails" name="racedetails"/> 
                                <label for="racedetails">Race details</label>                             
                            </li>
                            <li>
                                <input type="checkbox" id="groupridedetails" name="groupridedetails"/> 
                                <label for="groupridedetails">Join a group ride</label>                             
                            </li>
                            <li>                                
                                <input type="checkbox" id="complaint" name="complaint"/> 
                                <label for="complaint">Lodge a complaint</label>                             
                            </li>
                            <li>
                                <label for="message">Message:</label>
                                <textarea id="message" name="message"></textarea>
                            </li>
                            <li><p id="thankyou" ></p></li>
                        </ul>
                        <p>
                        <button type="button" onclick="contactUs()">Submit</button>
                        </p>
                    </form>
                </div>
                </section>
            </div>
        </div>
    </section> 
  ),document.body)
}
