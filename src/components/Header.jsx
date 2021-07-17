import React from 'react'

const Header = () => {
    return (
        <header>
            <div>
                <span>
                    <img src="./img/logo.png" alt="logo" /> Front Enginneer Test1
                </span>
            </div>

            <div>
                <span className="iconify" data-icon="si-glyph:bell" data-inline="false"></span>
                <span className="iconify" data-icon="bx:bxs-user-circle" data-inline="false"></span>
                <span className="iconify" data-icon="iconoir:nav-arrow-down" data-inline="false"></span>
            </div>
        </header>
    )
}

export default Header