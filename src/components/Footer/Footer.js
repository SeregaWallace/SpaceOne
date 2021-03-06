import './footer.css';
import logo from'../../logo.svg';

const FooterComponent = ( {links: { elon_twitter: elonMusk, flickr, twitter,Website }, summary }) => {

    return (
        <footer className="footer">
            <img src={logo} alt="logo SpaceONE" className="logo"/>
            <nav className="footer-nav">
                <ul className="list">
                    <li className="item">
                        <a href={elonMusk} rel="noopener noreferrer" target='_blank'
                        className="item-link">Elon Musk Twitter</a>
                    </li>
                    <li className="item">
                        <a href={twitter} rel="noopener noreferrer" target='_blank'
                        className="item-link">Twitter</a>
                    </li>
                    <li className="item">
                        <a href={flickr} rel="noopener noreferrer" target='_blank'
                        className="item-link">Flickr</a>
                    </li>
                    <li className="item">
                        <a href={Website} rel="noopener noreferrer" target='_blank'
                        className="item-link">Website</a>
                    </li>
                </ul>
            </nav>
            <p className="footer-text">
                {summary}
                <a className="footer-link" href="mailto:rideshare@spacex.com"> rideshare@spacex.com</a>
            </p>
        </footer>
    );

};

export default FooterComponent;