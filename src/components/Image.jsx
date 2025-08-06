


function Image(){

    return(
     <div className="grid grid-cols-2 md:grid md:grid-cols-4">
     
      <picture>
          <source media="(min-width:768px)" srcSet="../../public/desktop/image-gallery-milkbottles.jpg" />
          <img src="../../public/mobile/image-gallery-milkbottles.jpg" alt="milkbottles" className="w-full  h-auto object-cover" />
                 </picture>

       <picture>
          <source media="(min-width:768px)" srcSet="../../public/desktop/image-gallery-orange.jpg" />
          <img src="../../public/mobile/image-gallery-orange.jpg" alt="orange" className="w-full h-auto object-cover" />
                 </picture>

                 <picture>
          <source media="(min-width:768px)" srcSet="../../public/desktop/image-gallery-cone.jpg" />
          <img src="../../public/mobile/image-gallery-cone.jpg" alt="cone" className="w-full h-auto object-cover" />
                 </picture>

                 <picture>
          <source media="(min-width:768px)" srcSet="../../public/desktop/image-gallery-sugarcubes.jpg" />
          <img src="../../public/mobile/image-gallery-sugar-cubes.jpg" alt="" className="w-full h-auto object-cover" />
                 </picture>          
     </div>
  
    )

}

export default Image;