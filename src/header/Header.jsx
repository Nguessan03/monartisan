import React, { useState } from "react";
import { Link} from "react-router-dom";

import "./Header.css";


const Header = () =>
{
                window.addEventListener( "scroll", function (){
                const header = document.querySelector( ".header" )
                header.classList.toggle("active", window.scrollY > 70)
        } )

        const [MenuMobile, setMenuMobile] = useState(false)
        
        return (
                
        
                        <section className=" header ">
                        <div className="container d_flex">
                                <div className="image">
                                        <img src="./monartisan.png" alt="" />
                                </div>

                                
                                <div className={ MenuMobile ? "button  active" : "button b d_flex" } >
                                        
                                                
                                        <div>
                                                <Link to="/"><button className="btn1 b_btn">Déclarer un sinistre</button></Link>
                                        </div>

                                        <div>
                                                <Link to="/contact"><button className="btn2 b_btn">Formulaire de contact</button></Link>
                                        </div>
                                        
                                </div>
                                <div className="image sunu">
                                        <img src="./SUNU_Assurances.png" alt="" />
                                </div>
                                <button className="menu" onClick={()=>setMenuMobile(!MenuMobile)}>
                                        {
                                                MenuMobile? <i className="fas fa-times close home-btn"></i> : <i class="fa-solid fa-bars"></i>
                                        }
                        </button>
                        </div>  
                        </section>
                

        )

}

export default Header