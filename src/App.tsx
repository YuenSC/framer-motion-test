import AnimatedButton from "./components/AnimatedButton";
import BallWithGesture from "./components/BallWithGesture";
import ControlledBall from "./components/ControlledBall";
import LayoutAnimation from "./components/LayoutAnimation";
import MotionValueDemo from "./components/MotionValueDemo";
import ResponsiveByCSSVariableDemo from "./components/ResponsiveByCSSVariableDemo";
import SharedLayoutAnimation from "./components/SharedLayoutAnimation";
import SlideInDemo from "./components/SlideInDemo";
import UncontrolledBall from "./components/UncontrolledBall";
import VariantDemoList from "./components/VariantDemoList";

function App() {
  return (
    <main className="flex flex-col gap-2 p-4">
      <SharedLayoutAnimation />
      <LayoutAnimation />
      <div className="flex">
        <AnimatedButton>Click</AnimatedButton>
      </div>
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
