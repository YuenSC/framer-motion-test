import { motion } from "framer-motion";
import { useState } from "react";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import Tooltip from "./ui/tooltip";

const ControlledBall = () => {
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [rotate, setRotate] = useState(0);

  return (
    <Tooltip content="You can control the ball's position, rotation, and scale with the sliders below">
      <div className="flex w-full items-center gap-20">
        <motion.div
          className="h-10 w-10 rounded-sm bg-blue-500"
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={{ x: x - 50, y: y - 50, rotate }}
        />
        <div className="flex max-w-[300px] flex-1 flex-col gap-2">
          <div className="flex flex-col gap-2">
            <Label className="text-left">X</Label>
            <Slider
              max={100}
              step={1}
              value={[x]}
              onValueChange={(value) => setX(value[0])}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-left">Y</Label>
            <Slider
              max={100}
              step={1}
              value={[y]}
              onValueChange={(value) => setY(value[0])}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-left">Rotate</Label>
            <Slider
              max={360}
              step={1}
              value={[rotate]}
              onValueChange={(value) => setRotate(value[0])}
            />
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default ControlledBall;
