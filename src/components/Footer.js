import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faCoffee, faCopyright, faEnvelope, faHouse, faInbox, faList, faLocation, faMap, faMapLocation, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'

const copyrightIcon = <FontAwesomeIcon icon={faCopyright} />
const phoneIcon = <FontAwesomeIcon icon={faPhone} />
const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
const ubicacionIcon = <FontAwesomeIcon icon={faMapLocation} />



export default function Footer() {
    return (
      <footer>
    <p>{copyrightIcon}  2022 Amigos Perdidos.</p>
    <p>{phoneIcon}  (381) 2222 07 3129</p>
    <p>{mailIcon}  hola@amigosperdidos.org</p>
    <p>{ubicacionIcon}  San Miguel De Tucuman, Argentina</p>
  </footer>
    )
}