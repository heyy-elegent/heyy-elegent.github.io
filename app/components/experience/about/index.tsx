import { Text } from "@react-three/drei";
import { isMobile } from "react-device-detect";
import * as THREE from "three";

type BioLine = { text: string; y: number; size: number };

const BioLines: BioLine[] = [
  { text: "Hi, I'm Lalit Kumar \u2014 Full Stack Developer & AI/ML Engineer", y: 1.1, size: 0.26 },
  { text: "B.Tech CSE (AI & Data Science) \u2022 CGPA 8.7 \u2022 Poornima University, Jaipur", y: 0.65, size: 0.18 },
  { text: "I build AI products, 3D web experiences & full-stack platforms.", y: 0.3, size: 0.18 },
];

const About = () => (
  <group>
    {BioLines.map((line, i) => (
      <Text
        key={i}
        font="./soria-font.ttf"
        fontSize={line.size}
        color="white"
        maxWidth={3.4}
        position={[0, line.y, 0]}
        textAlign="center"
      >
        {line.text}
      </Text>
    ))}
  </group>
);

export default About;
