import React from 'react'
import "./Home.css"
import { useState ,useEffect} from 'react'
import axios from 'axios'
const Home = () => {
 let [customers , setCustomers] = useState([])
 useEffect(() =>{
    axios.get("http://localhost:8080/api/customers").then((res) =>setCustomers(res.data))
    
 } ,[])
 
   function search(e){
    axios.get("http://localhost:8080/api/customers").then((res) =>{
        let info = res.data.filter((x) =>
        x.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        )
        setCustomers(info)
    })
   }
  return (
    <>
    <div className='home'>
    
    <div className='firstsectiondiv'>
        <div id="firstsectiondiv">
            <h1>Notary Public <span>Legal Solutions</span></h1>
        </div>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.</p>
    </div>
   </div>
   <div className='practise'>
    <div className='practisediv'>
        <h2>Practice Areas </h2>
    </div>
    
   </div>
   <div className='practisecard'>
    <div className='practisedivcards'>
        <div className='practcard'>
            <div className='practcardcontent' >

            <i class="fa-solid fa-school"></i>  
             <h3>Bankruptcy Law</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
        </div>
        <div className='practcard'>
            <div className='practcardcontent' >

            <i class="fa-solid fa-shield-halved"></i>
             <h3>Business Law</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
        </div>
        <div className='practcard'>
            <div className='practcardcontent' >

            <i class="fa-solid fa-hand-holding-medical"></i> 

             <h3>Civil Rights Law</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
        </div>
        <div className='practcard'>
            <div className='practcardcontent' >

            <i class="fa-solid fa-gun"></i> 
             <h3>Criminal Law</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
        </div>
        <div className='practcard'>
            <div className='practcardcontent' >

            <i class="fa-solid fa-jet-fighter"></i>
             <h3>Immigration Law</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
        </div>
        <div className='practcard'>
            <div className='practcardcontent' >

            <i class="fa-solid fa-house-chimney"></i>
             <h3>Family Law</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
        </div>
    </div>

   </div>
   <div className='twopicture'>
        <div className='twopicturediv' >
            <div  className='twopicturedivfirst'></div>
            <div  className='twopicturedivsecond'></div>
            <div  className='twopicturedivthird'>
            <h3>We Provide Highly Reliable & Effective Legal Solutions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
            <button className='twopicturebutton'>Book an appoinment</button>
            </div>

        </div>
   </div>
   <div className='customersdiv'>
<div className='customers'>
    <div className='customerstop'><strong>Happy Customers</strong></div>
    <div className='seacrh'><input onChange={(e) =>{
        search(e)
    }} placeholder='Search by Name'></input></div>
    
        
        
        <div id="customercardsdiv">
            {customers.map((customer)=>{
                return(
                    <>
                    <div className='customerscard'>
                    <div className='customerscardinfo'>
                        <div className='customerimg'>
                            <img alt='' src={`${customer.image}`}/>
                        </div>
                        <div className='spandiv'>
                            <span>{customer.name}</span>
                            <span className='ownerford'>{customer.pos}</span>
                            
                        </div>
                        
                    </div>
                    <div className='ownerp'>
                    <p>
                    {customer.desc}
                    </p>
                    </div>
                    </div>
                    
                    </>
                    
                )
            })}
       
        
        </div>
        
    
</div>
   </div>
   <div className='legalsolutions'>
    
    <div className='legalsolutionsdiv'>
    <div className='legalsolutionsfirst'>
        <img alt='' src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg"/>
    </div>
    <div className='legalsolutionssecond'>
        <h2><strong>We Have Legal Solutions</strong></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?

        </p>
        Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.
    
    
    </div>
    

    <div className='legalsolutionsthird'>
        <div className='legalsolutionsthirddiv'>How to download and register</div>
        <div id='legalsolutionsthirddiv'><p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p></div>
        <div className='legalsolutionsthirddivsecond'>How to create your PayPal account</div>
        <div className='legalsolutionsthirddivthird'>How to link your paypal and bank account</div>
    </div>

    </div>
   


   </div>
   <div className='footer'>
    <div className='footerdiv'>
        <div id="footerdiv">
            <h2 >About us</h2>
            <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className='footerdivicon'>
                <div className='footerdivicons'><i class="fa-brands fa-facebook"></i></div>
                <div className='footerdivicons'><i class="fa-brands fa-instagram"></i></div>
                <div className='footerdivicons'><i class="fa-brands fa-twitter"></i></div>
                <div className='footerdivicons'><i class="fa-brands fa-twitter"></i></div>


            </div>
        </div>
    </div>
   </div>
    </>
   
  )
}

export default Home