import React from 'react'
import Todo from './Todo'


const LeftPane = () => {
    return(
        <div className="left-pane">
            <div className="personal-data">
                <h5> <span class="iconify" data-icon="gg:home-screen" data-inline="false" style={{fontSize: '25px', color: '#000'}}></span> Profile infomation</h5>
                <p>
                    <span className="iconify" data-icon="grommet-icons:phone" data-inline="false"></span> 07062725781
                </p>
                <p>
                    <span className="iconify" data-icon="ph:envelope-thin" data-inline="false"></span>&nbsp;uchennnaongit@gmail.com
                </p>
                <p>
                    <span className="iconify" data-icon="mdi-light:map-marker" data-inline="false"></span> Aba Abia
                </p>
                <p>
                    <span className="iconify" data-icon="fluent:notebook-24-regular" data-inline="false"></span> 0 journal entry
                </p>
                <p>
                    <span className="iconify" data-icon="iconoir:fingerprint-squared" data-inline="false"></span> 3 Fingerprints enrolled
                </p>
            </div>

            <div className="to-do">
                <Todo />
            </div>
        </div>
    )
}

export default LeftPane