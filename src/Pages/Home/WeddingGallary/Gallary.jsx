import Marquee from "react-fast-marquee";


const Gallary = () => {
    return (
        <div>
            <Marquee speed={20}>
  <div className=" w-56 h-60 flex space-x-24">
  <img className=" h-full w-full" src="https://i.ibb.co/5FB2Jh5/pexels-pixabay-265722.jpg" alt="" />
     <img className=" h-full w-full"  src="https://i.ibb.co/3dR2h3j/pexels-danielle-reese-2496344.jpg" alt="" />
     <img className=" h-full w-full"  src="https://i.ibb.co/gMzj11t/pexels-sadman-chowdhury-2058070.jpg" alt="" />
    <img className=" h-full w-full"  src="https://i.ibb.co/Mp522BQ/pexels-bashir-olawoyin-2074911.jpg" alt="" />
    <img className=" h-full w-full"  src="https://i.ibb.co/b7XJbTg/pexels-agung-pandit-wiguna-1185244.jpg" alt="" />
    <img className=" h-full w-full"  src="https://i.ibb.co/xYSxMR9/pexels-asad-photo-maldives-1024993.jpg" alt="" />
  </div>
  
            </Marquee>
        </div>
    );
};

export default Gallary;