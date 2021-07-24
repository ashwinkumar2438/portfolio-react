import {Link} from 'react-router-dom';

//Logo Component:
const Picture=require('@src/assets/profile-pic.jpeg');
const Logo=()=>(<img src={Picture.default} alt="profile-logo"/>)

const RightList=()=>{

    return (
        <>
        <li>
            <Link to='blogs'>Articles</Link>
        </li>
        <li>LinkedIn</li>
        <li>Medium</li>
        <li>Github</li>
        </>
    )
}

const HeaderComponents={Logo,RightList};

export default HeaderComponents