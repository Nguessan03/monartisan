import React, { useState } from "react";
import axios from "axios";
import "./styles.css"

const Sinistre = () =>
{
        //  Initialiser les valeurs de formData à vide

        const [ formData, setformData ] = useState( {
                assurance: '',
                numero: '',
                nomprenom: '',
                email: '',
                contact1: '',
                contact2: '',
                lieu: '',
                intervention: '',
                date: '',
                details: '' 
        });


        function formValue (event)
        {
                setformData( {
                        ...formData,
                        [ event.target.name ]: event.target.value.toString() //   mettre à jours les valeurs de formData
                        
                });
  }

        
        function formSubmit(e){
                e.preventDefault()

                sendData( formData )

        }

        // Envoyer les données du formulaire en utilisant la methode axios

        function sendData ( formData )
        {
                axios.post( 'http://localhost/api/sinistre.php', formData, {
                        headers: {
                                'Content-Type' : 'application/json'
                        }
                } )
                
                        .then( response =>
                        {
                                console.log( "Reponse du serveur", response.data )
                                console.log(formData)
                                
                        } )
                        .catch( error =>
                        {
                        
                                console.log('Erreur lors de l\'envoie des données', error)
                })
        }


        return (
                <>
                        <section className="form_container">
                                <div className="heading">
                                        <h2>Formulaire de declaration de sinitre</h2>

                                </div>

                                <div className="sinistre">
                                        
                        <div className="formContain">
                                <form onSubmit={formSubmit }  className="container formsini">
                                        <div className="formgroup d_flex">
                                        <label htmlFor="">
                                                        Assurance
                                                        <select name="assurance" id="" value={formData.assurance} onChange={formValue}>
                                                        <option value=" ALLIANZ ">ALLIANZ</option>
                                                        <option value=" SUNU"> SUNU</option>
                                                        <option value="SONAM">SONAM</option>
                                                        <option value="WAFA">WAFA</option>
                                                </select>
                                                
                                                </label>
                                                
                                        <label htmlFor="">
                                                Numéro de police
                                                        <input type="text" name="numero" value={formData.numero }  onChange={formValue}/>
                                                </label>
                                        </div>

                                        <label htmlFor="">
                                                Nom et prénom
                                                <input type="text" name="nomprenom" className="field" value={ formData.nomprenom } onChange={formValue } />
                                        </label>

                                        <label htmlFor="">
                                                Email
                                                <input type="email" name="email" className="field" value={ formData.email } onChange={formValue } />
                                        </label>

                                        <div className="formgroup  d_flex ">
                                                <label htmlFor="">
                                                        Contact1
                                                        <input type="tel" name="contact1" id="" value={formData.contact1} onChange={formValue}/>
                                        </label>
                                                <label htmlFor="">
                                                        Contact2
                                                        <input type="tel" name="contact2" id="" value={formData.contact2} onChange={formValue}/>
                                        </label>
                                        </div>
                                        <div className="formgroup  d_flex">
                                                <label htmlFor="">
                                                        Lieu
                                                        <input type="text" name="lieu" value={formData.lieu} onChange={formValue}/>
                                                </label>
                                                <label htmlFor="">
                                                        Nature de l'intervention
                                                <select name="intervention" id="" value={formData.intervention} onChange={formValue}>
                                                        <option value="plomberie">Plomberie</option>
                                                        <option value="electricité">Electricité</option>
                                                        <option value="climatisation">Climatisation</option>
                                                        <option value="jardin">Jardin</option>
                                                        <option value="peinture">Peinture</option>
                                                        <option value="netoyage">Netoyage</option>
                                                </select>
                                                </label>
                                                </div>
                                        
                                        <label htmlFor="">
                                                Date
                                                <input type="datetime-local" name="date" id=""  className="field" value={formData.date} onChange={formValue } />
                                        </label>
                                        
                                        <label htmlFor="">
                                                Details
                                                <textarea name="details" id="" cols="30" rows="10" className="field" value={formData.details} onChange={formValue}></textarea>
                                        </label>
                                        
                                                        <button type="submit" className="butn">Envoyer</button>
                                                        
                                        </form>
                                </div>
                </div>
                                
                </section>
                </>
        )
}

export default Sinistre