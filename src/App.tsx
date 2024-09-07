import "./App.css";
import BallWithGesture from "./components/BallWithGesture";
import ControlledBall from "./components/ControlledBall";
import MotionValueDemo from "./components/MotionValueDemo";
import ResponsiveByCSSVariableDemo from "./components/ResponsiveByCSSVariableDemo";
import SlideInDemo from "./components/SlideInDemo";
import UncontrolledBall from "./components/UncontrolledBall";
import VariantDemoList from "./VariantDemoList";

function App() {
  return (
    <main className="flex flex-col gap-2">
      <ResponsiveByCSSVariableDemo />
      <MotionValueDemo />
      <UncontrolledBall />
      <ControlledBall />
      <BallWithGesture />
      <VariantDemoList />
      <SlideInDemo />
    </main>
  );
}

export default App;
