import React from 'react'
import { motion } from 'framer-motion'


const Social = () => {
  return (
    <div>
        <ul className=''>
            {/* Facebook */}
            <a href="https://www.facebook.com">
                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{ delay: 0.0, duration: 0.5}}
                    variants={{
                        hidden: {opacity:0, y: 50},
                        visible: {opacity:1, y: 0}
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 64 64"> <linearGradient id="rhA40cqBlsJ1wx2ZjgJTqa_118501_gr1" x1="32.526" x2="32.526" y1="16.627" y2="56.834" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#rhA40cqBlsJ1wx2ZjgJTqa_118501_gr1)" d="M35.52,38.891h6.729l1.057-6.835H35.52v-3.736c0-2.839,0.928-5.358,3.584-5.358h4.268v-5.966c-0.75-0.101-2.335-0.323-5.332-0.323c-6.258,0-9.926,3.305-9.926,10.834v4.548h-6.433v6.835h6.433v17.788C29.385,56.869,30.676,57,32,57c1.197,0,2.366-0.109,3.52-0.266V38.891z"></path><linearGradient id="rhA40cqBlsJ1wx2ZjgJTqb_118501_gr2" x1="32" x2="32" y1="58" y2="6" gradientTransform="matrix(1 0 0 -1 0 64)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="none" stroke="url(#rhA40cqBlsJ1wx2ZjgJTqb)" strokeMiterlimit="10" strokeWidth="2" d="M32 7A25 25 0 1 0 32 57A25 25 0 1 0 32 7Z"></path></svg>
                </motion.li>
            </a>

            {/* Twitter */}
            <a href="https://www.twitter.com">
                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{ delay: 0.01, duration: 0.5}}
                    variants={{
                        hidden: {opacity:0, y: 50},
                        visible: {opacity:1, y: 0}
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 64 64"> <linearGradient id="iS8U25XJCb2VBQOwbuAcra_bYzsf9Bmocst_gr1" x1="32" x2="32" y1="9.936" y2="52.195" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#iS8U25XJCb2VBQOwbuAcra_bYzsf9Bmocst_gr1)" d="M57.595,16.086c-0.286-0.341-0.762-0.45-1.17-0.271c-0.614,0.271-1.245,0.512-1.891,0.719 c0.824-1.035,1.462-2.216,1.874-3.491c0.127-0.396-0.002-0.827-0.326-1.087c-0.324-0.261-0.774-0.295-1.131-0.083 c-1.777,1.041-3.672,1.788-5.641,2.223C47.244,12.122,44.449,11,41.555,11c-6.169,0-11.189,4.978-11.189,11.097 c0,0.404,0.022,0.81,0.067,1.214c-7.41-0.705-14.289-4.343-19.027-10.103c-0.207-0.252-0.518-0.385-0.85-0.362 c-0.325,0.025-0.618,0.207-0.784,0.488c-0.993,1.679-1.519,3.613-1.519,5.593c0,2.447,0.807,4.78,2.247,6.68 c-0.292-0.123-0.579-0.26-0.859-0.412c-0.311-0.167-0.686-0.161-0.988,0.021c-0.303,0.181-0.488,0.507-0.488,0.859v0.119 c0,3.708,1.868,7.073,4.786,9.104c-0.012-0.002-0.024-0.005-0.036-0.007c-0.35-0.065-0.699,0.062-0.93,0.327 c-0.231,0.265-0.306,0.631-0.198,0.966c1.182,3.648,4.149,6.371,7.769,7.332c-3.003,1.771-6.401,2.697-9.957,2.697 c-0.786,0-1.563-0.046-2.308-0.137c-0.467-0.059-0.906,0.218-1.063,0.657c-0.157,0.44,0.012,0.931,0.407,1.181 C11.478,51.38,17.064,53,22.79,53c18.772,0,29.989-15.119,29.989-29.736c0-0.271-0.005-0.541-0.014-0.81 c1.907-1.423,3.552-3.159,4.896-5.169C57.908,16.915,57.881,16.427,57.595,16.086z M51.167,21.143 c-0.279,0.197-0.438,0.523-0.422,0.865c0.02,0.415,0.034,0.834,0.034,1.256C50.779,36.897,40.31,51,22.79,51 c-3.982,0-7.894-0.84-11.499-2.452c4.226-0.321,8.198-1.85,11.575-4.468c0.335-0.26,0.47-0.702,0.336-1.104 s-0.506-0.677-0.93-0.686c-3.381-0.065-6.404-1.952-7.948-4.835c1.115,0.038,2.203-0.099,3.276-0.393 c0.447-0.123,0.751-0.537,0.735-1c-0.017-0.464-0.35-0.854-0.804-0.945c-3.773-0.752-6.632-3.773-7.244-7.449 c1.122,0.403,2.297,0.631,3.468,0.667c0.459,0.011,0.848-0.271,0.983-0.696c0.136-0.426-0.027-0.89-0.399-1.137 c-2.558-1.698-4.084-4.53-4.084-7.575c0-1.135,0.21-2.25,0.614-3.287c5.319,5.827,12.784,9.361,20.714,9.76 c0.328,0.022,0.617-0.116,0.817-0.357c0.202-0.241,0.278-0.563,0.207-0.868c-0.16-0.685-0.24-1.384-0.24-2.077 c0-5.016,4.122-9.097,9.189-9.097c2.537,0,4.979,1.047,6.7,2.871c0.235,0.248,0.581,0.359,0.917,0.296 c1.385-0.267,2.739-0.671,4.048-1.209c-0.729,1.007-1.665,1.865-2.759,2.514c-0.407,0.242-0.589,0.735-0.436,1.184 c0.153,0.447,0.597,0.73,1.068,0.669c0.952-0.117,1.886-0.292,2.797-0.525C53.06,19.666,52.15,20.449,51.167,21.143z"></path><linearGradient id="iS8U25XJCb2VBQOwbuAcrb_bYzsf9Bmocst_gr2" x1="38.903" x2="38.903" y1="9.936" y2="52.195" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#iS8U25XJCb2VBQOwbuAcrb_bYzsf9Bmocst_gr2)" d="M30.772,45.786l0.621,1.9c7.123-2.326,12.824-7.914,15.642-15.33l-1.869-0.711 C43.636,35.671,39.733,42.859,30.772,45.786z"></path><g><linearGradient id="iS8U25XJCb2VBQOwbuAcrc" x1="42" x2="42" y1="17.979" y2="21.528" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><circle cx="42" cy="20" r="2" fill="url(#undefined)"></circle></g></svg>
                </motion.li>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com">
                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{ delay: 0.02, duration: 0.5}}
                    variants={{
                        hidden: {opacity:0, y: 50},
                        visible: {opacity:1, y: 0}
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 64 64"> <linearGradient id="jm_nAfYbxsVmTlYr5N4x9a_43625_gr1" x1="32" x2="32" y1="6.667" y2="57.872" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#jm_nAfYbxsVmTlYr5N4x9a_43625_gr1)" d="M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z"></path><linearGradient id="jm_nAfYbxsVmTlYr5N4x9b_43625_gr2" x1="32" x2="32" y1="18.167" y2="45.679" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#jm_nAfYbxsVmTlYr5N4x9b_43625_gr2)" d="M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z"></path><linearGradient id="jm_nAfYbxsVmTlYr5N4x9c_43625_gr3" x1="46" x2="46" y1="12.75" y2="23.049" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#jm_nAfYbxsVmTlYr5N4x9c_43625_gr3)" d="M46 15A3 3 0 1 0 46 21A3 3 0 1 0 46 15Z"></path></svg>
                </motion.li>
            </a>

            {/* Linkedin */}
            <a href="https://www.linkedin.com">
                <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{ delay: 0.03, duration: 0.5}}
                    variants={{
                        hidden: {opacity:0, y: 50},
                        visible: {opacity:1, y: 0}
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 64 64"><linearGradient id="SUJNhpmDQDF27Y3OfwgfYa_44019_gr1" x1="19" x2="19" y1="24.858" y2="49.041" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#SUJNhpmDQDF27Y3OfwgfYa_44019_gr1)" fillRule="evenodd" d="M22 48L22 26 16 26 16 48 22 48z" clipRule="evenodd"></path><linearGradient id="SUJNhpmDQDF27Y3OfwgfYb_44019_gr2" x1="19.382" x2="19.382" y1="15.423" y2="23.341" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#SUJNhpmDQDF27Y3OfwgfYb_44019_gr2)" fillRule="evenodd" d="M19.358,23c2.512,0,4.076-1.474,4.076-3.554 c-0.047-2.126-1.564-3.649-4.028-3.649c-2.465,0-4.076,1.475-4.076,3.601c0,2.08,1.563,3.602,3.981,3.602H19.358L19.358,23z" clipRule="evenodd"></path><linearGradient id="SUJNhpmDQDF27Y3OfwgfYc_44019_gr3" x1="37.386" x2="37.386" y1="14.125" y2="49.525" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#SUJNhpmDQDF27Y3OfwgfYc_44019_gr3)" fillRule="evenodd" d="M26.946,48H34V35.911c0-0.648,0.122-1.295,0.313-1.758 c0.52-1.295,1.877-2.635,3.867-2.635c2.607,0,3.821,1.988,3.821,4.901V48h6V35.588c0-6.657-3.085-9.498-7.826-9.498 c-3.886,0-5.124,1.91-6.072,3.91H34v-4h-7.054c0.095,2-0.175,22-0.175,22H26.946z" clipRule="evenodd"></path><linearGradient id="SUJNhpmDQDF27Y3OfwgfYd_44019_gr4" x1="32" x2="32" y1="6.5" y2="57.5" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#SUJNhpmDQDF27Y3OfwgfYd_44019_gr4)" d="M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z"></path></svg>
                </motion.li>
            </a>
        </ul>
    </div>
  )
}

export default Social