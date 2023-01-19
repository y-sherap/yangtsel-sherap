import React from 'react'

const NavLinks = (props) => {
return (
    <div>
    <div>
        <ul>
            <li 
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/">yangtsel sherap</a>
            </li>
            <li 
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/info">info</a>
            </li>
        </ul>
    </div>
    </div>
)
}

export default NavLinks;