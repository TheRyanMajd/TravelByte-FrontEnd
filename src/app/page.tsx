// import { disableReactDevTools } from "@fvilers/disable-react-devtools";
'use client'
import LandingScreen from '../components/component/v1landingscreen'; // Correct the component name and import statement
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
