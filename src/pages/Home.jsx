
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonials";
import Image from "../components/Image";
import Footer from "../components/Footer";


function Home(){

  return(
    <div className="flex flex-col min-h-screen overflow-hidden overflow-y-auto">
      <Hero/>
    
     {/* Transform  Section */}
     <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center overflow-hidden ">

    
        <div className="text-center px-5 py-10 flex flex-col gap-5  md:text-left   md:w-[50%] lg:p-20 ">
        <h1 className="text-gray-900 font-black text-[35px] text-wrap ">Transform Your <br/> brand </h1>
        <p>We are full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.</p>
        
        <button className="md:w-[30%] relative inline-block group font-extrabold  focus:outline-none">
  <h1 className=" relative  z-10 ">LEARN MORE</h1>
  <span
    className="absolute left-[145px] top-1/2  md:left-[50px] md:top-1/2  px-12  mt-1 h-2.5  bg-yellow-200 group-hover:bg-yellow-400   rounded-full  -translate-x-1/4  w-max  transition-transform  "
  ></span>
</button> 



      </div>

        <div className="md:w-[50%]">
          <picture>
          <source media="(min-width:768px)" srcSet="../../public/desktop/image-transform.jpg" />
          <img src="../../public/mobile/image-transform.jpg" alt="" className="w-full h-auto object-cover" />
                 </picture>
        </div>
     
     </div>

  {/* Stand out  Section */}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center overflow-hidden">


        
        <div className="md:w-[50%]">
          <picture>
          <source media="(min-width:768px)" srcSet="../../public/desktop/image-stand-out.jpg" />
          <img src="../../public/mobile/image-stand-out.jpg" alt="" className="w-full h-auto object-cover" />
                 </picture>
        </div>

    
        <div className="text-center px-5 py-10 flex flex-col gap-5 md:text-left   md:w-[50%] lg:p-20 ">
        <h1 className="text-gray-900 font-black text-[35px] text-wrap ">Stand out to the right  <br/> audience </h1>
        <p>Using a collaborative formula of designers,researchers,photographers,videographers and copywriters we'll  build and extend your brand digital places </p>
     <button className="md:w-[30%] relative inline-block group font-extrabold  focus:outline-none">
  <h1 className=" relative  z-10 ">LEARN MORE</h1>
  <span
    className="absolute left-[145px] top-1/2  md:left-[50px] md:top-1/2  px-12  mt-1 h-2.5  bg-red-200 group-hover:bg-red-400   rounded-full  -translate-x-1/4  w-max  transition-transform  "
  ></span>
</button> 




     

      </div>

     
     </div>



       {/* Graphics & Photography  Section */}
       
       <div className=" md:flex ">
        
          <div className="relative bg-graphics-mobile bg-cover bg-center h-[550px] md:bg-graphics-desktop md:w-[50%] flex justify-center ">
           <div className="absolute bottom-2">
             <div className="px-2 py-8    flex flex-col gap-5 items-center  text-GreenDark text-center">
               <h1 className="text-[25px] font-extrabold">Graphic Design</h1>
               <p className="text-[15px]">Great design makes you memorable. We deliver <br/> artwork that underscores your brand message <br/> and captures potential clients' attention </p>
                       </div>
           </div>
                    
           </div>
         
         
         
          <div className="relative bg-photography-mobile bg-cover bg-center h-[550px] overflow-hidden md:bg-photography-desktop md:w-[50%] flex justify-center">
           <div className="absolute bottom-2">
             <div className="px-6 py-8   flex flex-col gap-5 items-center text-Blue text-center  ">
               <h1 className="text-[25px] font-extrabold">Photography</h1>
               <p className="text-[15px]  ">Increase your credibility by getting the most <br/> stunning, high quality photos  that improve your <br/> business image.</p>
                       </div>
           </div>
           </div>
         
       </div>

         {/* Testimonial Section */}
        <Testimonial/>
         {/* Image Section */}
        <Image/>

         {/* Footer Section */}
         <Footer/>

    
    </div>
  )
    
}


export default Home; 