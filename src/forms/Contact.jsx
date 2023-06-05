import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Contact = () =>
{

        // Initialiser les valeur contactFormData à vide 
        const [ contactFormData, setcontactFormData ] = useState( {
                telephone: '',
                email: '',
                message: '',
                 
        });


        function contactFormvalue (event)
        {
                setcontactFormData( {
                        ...contactFormData,
                        [ event.target.name ]: event.target.value.toString() //   mettre à jours les valeurs de contactFormData
                });
  }

        
        function contactFormSubmit(e){
                e.preventDefault()

                sendData( contactFormData )

        }

        // Envoyer les données du formulaire en utilisant la methode axios
        function sendData ( contactFormData )
        {
                axios.post( 'http://localhost/api/contact.php', contactFormData, {
                        headers: {
                                'Content-Type': 'application/json'
                        }
} )
                
                        .then( response =>
                        {
                                alert( response.data )
                                console.log( contactFormData)
                                
                        } )
                        .catch( error =>
                        {
                        
                                alert('Erreur lors de l\'envoie des données')
                })
        }


        return (
                <>
                        <section className="form_container">
                                <div className="heading">
                                        <h2>Contactez-nous</h2>

                                </div>

                                <div className="contact d_flex">

                                        <div className="left"></div>
                                
                        <div className="formContain">
                                <form onSubmit={contactFormSubmit}  className="container form">

                                        <div className="formgroup  d_flex ">
                                                <label htmlFor="">
                                                        Telephone
                                                        <input type="tel" name="telephone" id="" value={contactFormData.telephone} onChange={contactFormvalue}/>
                                        </label>
                                                <label htmlFor="">
                                                        Email
                                                        <input type="tel" name="email" id="" value={contactFormData.email} onChange={contactFormvalue}/>
                                        </label>
                                        </div>
                                        
                                        <label htmlFor="">
                                                Message
                                                <textarea name="message" id="" cols="30" rows="10" className="field" value={contactFormData.message} onChange={contactFormvalue}></textarea>
                                        </label>

                                        <button type="submit" className="butn">Envoyer</button>
                                        </form>
                                </div>
                                        <div className="question">
                                                <h2>Vous avez une question ?</h2>
                                                <div className="para">
                                        <p>Nous traiterons votre demande et nous vous reviendrons soit par mail ou directement par appel.</p>
                                
                                        </div>        
                                                </div>
                                                
                                </div>
                                
                </section>
                </>
        )
}

export default Contact