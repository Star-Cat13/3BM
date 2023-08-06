
const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer-top' >
                    <div className='hours' >
                        <h2>COME ON IN!</h2>
                        <span>Office Hours: 8 AM to 10 PM </span> <br />
                        <span>OPEN YEAR ROUND <br />Excluding the first two weeks of December. </span>
                    </div>
                    <div className='contact'>
                        <h2>CONTACT</h2>
                        <span>PHONE </span><span>(406) 362-4355 </span> <br />
                        <span>EMAIL </span><span>threebearsmotel@gmail.com</span><br />
                        <span>ADDRESS </span><br /><span>MT HWY 200<br />
                            203 Main St.<br />
                            Lincoln, Montana  59639</span>
                    </div>
                </div>
                <div className='links'>
                    <h2>EXPLORE LINCOLN</h2>
                    <img src='https://threebearsmotel.com/wp-content/uploads/2021/06/LincolnLogo-300x183.png' />
                    {/* add links */}
                    <ul>
                        <li><a href="http://lincolnmontana.com/">Lincoln Valley Chamber of Commerce</a></li>

                        <li><a href="http://lincolnmontana.com/events">Lincoln Montana Upcoming Events</a></li>

                        <li><a href="http://www.sculptureinthewild.com/">Blackfoot Pathways Sculpture in the Wild</a></li>

                        <li><a href="https://continentaldividetrail.org/trip-planning/">Continental Divide Trail</a></li>

                        <li><a href="https://www.hicountry.com/">Hi-Country Snack Foods</a></li>
                    </ul>
                </div>

            </footer>
            <div>
                <p>© Copyright threebearsmotel.com</p>
            </div>
        </>
    );
};


export default Footer;  