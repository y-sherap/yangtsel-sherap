import React from 'react'

const NavLinks = (props) => {
return (
    <div>
    <div>
        <ul>
            <li 
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/">home 𓆟</a>
            </li>
            <li 
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/work">work 𓆟</a>
            </li>
        </ul>
    </div>
    </div>
)
}

export default NavLinks;