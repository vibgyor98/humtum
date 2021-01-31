import React from 'react';

import cldblueSky from '.\src\component\video\cldblueSky.mp4';

const BackgroundVideo = () => {
    return (
        <video autoPlay loop muted>
            <source src={cldblueSky} type="video/mp4" />
        </video>
    )
}

export default BackgroundVideo;