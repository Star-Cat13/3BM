import '../assets/navbar.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

// const Navbar = () => {

//     useEffect(() => {
//         window.addEventListener("resize", () => {
//             // Remove the "responsive" class from the navbar when the window is resized
//             var x = document.getElementById("myTopnav");
//             if (window.innerWidth > 768 && x.className.includes("responsive")) {
//                 x.className = "topnav";
//             }
//         });

//         return () => {
//             window.removeEventListener("resize", () => { });
//         };
//     }, []);

//     return (
//         <div>

//             <nav className="navbar topnav">
//                 <ul className='nav-links'>
//                     <li>
//                         <Link to="/">
//                             <span className="nav-text">
//                             </span>
//                         </Link>
//                     </li>

//                     <li>
//                         <Link to="/home">
//                             <i className="fa fa-home fa-2x"></i>
//                             <span className="nav-text">
//                                 Home
//                             </span>
//                         </Link>

//                     </li>

//                     <li>
//                         <Link to="/contact">
//                             <i className="fa fa-comments fa-2x"></i>
//                             <span className="nav-text">
//                                 Contact
//                             </span>
//                         </Link>

//                     </li>


//                     <li>
//                         <Link to="/about">
//                             <i className="fa fa-info fa-2x"></i>
//                             <span className="nav-text">
//                                 About
//                             </span>
//                         </Link>
//                     </li>

//                     <li>
//                         <Link to="/gallery">
//                             <i className="fa fa-camera-retro fa-2x"></i>
//                             <span className="nav-text">
//                                 Gallery
//                             </span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="javascript:void(0);" className="icon" onclick="myFunction()">
//                             <i className="fa fa-bars fa-2x"></i>
//                         </Link>
//                     </li>

//                 </ul>

//             </nav>

//         </div>

//     );
// };

// export default Navbar;




const Navbar = () => {
    const [responsive, setResponsive] = useState(false);

    const handleToggleResponsive = () => {
        setResponsive(prevState => !prevState);
    };

    return (
        <div>
            <nav className={`navbar topnav ${responsive ? 'responsive' : ''}`} id="myTopnav">
                <Link to="/home" className="active">
                    <i className="fa fa-home fa-2x"></i>
                    <span className="nav-text">
                        Home
                    </span>
                </Link>
                <Link to="/about">
                    <i className="fa fa-info fa-2x"></i>
                    <span className="nav-text">
                        About
                    </span>
                </Link>
                <Link to="/contact">
                    <i className="fa fa-comments fa-2x"></i>
                    <span className="nav-text">
                        Contact
                    </span>
                </Link>

                <a href="javascript:void(0);" className="icon" onClick={handleToggleResponsive}>
                    <i className="fa fa-bars"></i>
                </a>
            </nav>
        </div>
    );
};

export default Navbar;