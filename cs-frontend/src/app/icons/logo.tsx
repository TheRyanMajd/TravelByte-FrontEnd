import Image from 'next/image';
import logo from '../../../public/cs_logo_transparent.png';
function LogoIcon() {
  return (
    <> 
    <Image
        src={logo}
        alt="CrewSync Logo"
        layout='static'
    />

    </>
   
  )
}

export default LogoIcon
