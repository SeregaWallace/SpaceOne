import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Youtube from 'react-youtube';
import Main from '../Main/Main.js';
import UseCalendar from '../UseCalendar/UseCalendar.js';

import './details.css';

const DetailsComponent = (props) => {

    const [launch, setLaunch] = useState(null);
    const { getLaunchInfo } = UseCalendar();

        useEffect(() => {
            setLaunch(getLaunchInfo(props.match.params.id));
        }, [getLaunchInfo, props.match.params.id]);

    if (!launch) return null;


    return (
        <>
            <Main name={launch.name} />

            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src={launch.links.patch.small} alt={launch.name}/>
                        </div>
                        <div className="details-content">
                            <p className="details-description">{launch.details}</p>
                        </div>
                    </div>
                    <Youtube className='details-youtube' videoId={launch.links.youtube_id} />
                </div>
                <Link to="/calendar" className="button button-back">go back</Link>
            </main>
        </>
    );

};

export default DetailsComponent;