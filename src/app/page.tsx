// import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import Image from "next/image";
import LandingScreen from '../components/component/v0landingscreen'; // Correct the component name and import statement
// if (process.env.NODE_ENV === 'production') {
//   disableReactDevTools();
// }
export default function Home() {
  return (
    <main className="">
      <div className="">
        <LandingScreen /> {/* Use the component as a JSX element */}
      </div>
    </main>
  );
}
