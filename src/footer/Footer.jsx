import React from "react";
import "./footer.css"


const Footer = () =>
{
        return (
                <>
                        <footer className="footer">

                                <div className="container">
                                        <div className="box1">
                                        <ul className="icons d_flex">
                                                <li><a href="www.facebook.com/monartisan.ci"><i class="fa-brands fa-facebook-f"></i></a></li>
                                                <li><a href="https://twitter.com/mon_artisanci"><i class="fa-brands fa-twitter"></i></a></li>
                                                <li><a href="www.linkedin.com/company/mon-artisan"><i class="fa-brands fa-linkedin"></i></a></li>
                                                </ul>
                                                </div>
                        
                                
                                <div className="box2">
                                        <ul className="list d_flex">
                                                <li><a href="www.monartisan.ci">www.monartisan.ci</a></li>
                                
                                                <li>MON ARTISAN AS</li>
                                
                                                <li>Côte d'ivoire, Abidjan</li>
                                        </ul>
                                        </div>

                                        </div>
                
        </footer>
                </>
        )
}

export default Footer