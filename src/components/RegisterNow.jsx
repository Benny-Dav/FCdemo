import { Link } from 'react-router-dom'
import Button from './Button'


const RegisterNow = () => {
   


    return (
        <section className="relative h-[50vh] w-full bg-no-repeat bg-cover bg-bottom " style={{ backgroundAttachment:"fixed", backgroundImage: "url(https://images.unsplash.com/photo-1599204606468-5c63999e6e26?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb3RiYWxsJTIwbmV0fGVufDB8fDB8fHww)" }}>
            {/* overlay */}
            <div className="absolute inset-0 bg-black/80">
            </div>
            {/* content */}
            <div className="relative h-full flex flex-col items-center text-center py-8 gap-8">
                <p className="text-[#FF6F00] text-sm font-semibold uppercase tracking-wider">JOIN OUR TEAM</p>
                <h2 className="font-extrabold text-white text-3xl w-[60%]">Join the Academy, Develop your talent and get Discovered !</h2>
                
         {/* CTAs */}
         <div className="flex justify-center items-center gap-4 mt-8">
         <Button to="/registration" variant="primary">Register Now</Button>
        
         </div>
                
            </div>
        </section>
    )
}

export default RegisterNow;