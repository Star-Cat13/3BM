import { openModal, closeModal, plusSlides, currentSlide } from '../scripts/gallery.js';

const Rooms = () => {

    return (

        <>
            <div className="row room-pics">
                <div className="column">
                    <img src="https://github.com/Star-Cat13/3BM/blob/main/public/room05-400x284.jpg?raw=true" onClick={() => { openModal(); currentSlide(1); }} className="hover-shadow" />
                </div>
                <div className="column">
                    <img src="https://github.com/Star-Cat13/3BM/blob/main/public/room01-400x284.jpg?raw=true" onClick={() => { openModal(); currentSlide(2); }} className="hover-shadow" />
                </div>
                <div className="column">
                    <img src="https://github.com/Star-Cat13/3BM/blob/main/public/room03-400x284.jpg?raw=true" onClick={() => { openModal(); currentSlide(3); }} className="hover-shadow" />
                </div>
                <div className="column">
                    <img src="https://github.com/Star-Cat13/3BM/blob/main/public/room02-400x284.jpg?raw=true" onClick={() => { openModal(); currentSlide(4); }} className="hover-shadow" />
                </div>
            </div>

            {/* The Modal/Lightbox */}
            <div id="myModal" className="modal">
                <span className="close cursor" onClick={() => closeModal()}>&times;</span>
                <div className="modal-content">

                    <div className="mySlides">
                        <div className="numbertext">1 / 4</div>
                        <img src="https://threebearsmotel.com/wp-content/uploads/2021/06/room05-scaled.jpg" style={{ width: '100%' }} />
                        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">2 / 4</div>
                        <img src="https://threebearsmotel.com/wp-content/uploads/2021/06/room01-scaled.jpg" style={{ width: '100%' }} />
                        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">3 / 4</div>
                        <img src="https://threebearsmotel.com/wp-content/uploads/2021/06/room03-scaled.jpg" style={{ width: '100%' }} />
                        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                    </div>

                    <div className="mySlides">
                        <div className="numbertext">4 / 4</div>
                        <img src="https://threebearsmotel.com/wp-content/uploads/2021/06/room02-scaled.jpg" style={{ width: '100%' }} />
                        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                    </div>

                    {/* Next/previous controls */}
                    {/* <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a> */}

                    {/* Caption text */}
                    <div className="caption-container">
                        <p id="caption"></p>
                    </div>

                    {/* Thumbnail image controls */}
                    <div className='thumbnails-container'>
                        <div className="column">
                            <img className="demo" src="https://github.com/Star-Cat13/3BM/blob/main/public/room05-400x284.jpg?raw=true" onClick={() => currentSlide(1)} alt="" />
                        </div>

                        <div className="column">
                            <img className="demo" src="https://github.com/Star-Cat13/3BM/blob/main/public/room01-400x284.jpg?raw=true" onClick={() => currentSlide(2)} alt="" />
                        </div>

                        <div className="column">
                            <img className="demo" src="https://github.com/Star-Cat13/3BM/blob/main/public/room03-400x284.jpg?raw=true" onClick={() => currentSlide(3)} alt="" />
                        </div>

                        <div className="column">
                            <img className="demo" src="https://github.com/Star-Cat13/3BM/blob/main/public/room02-400x284.jpg?raw=true" onClick={() => currentSlide(4)} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

};

export default Rooms;