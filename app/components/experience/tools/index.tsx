import { Text } from "@react-three/drei";

type Skill = { text: string; y: number; size: number };

const SkillLines: Skill[] = [
  { text: "LANGUAGES & DATA", y: 1.1, size: 0.22 },
  { text: "JavaScript, TypeScript, Python, C++, SQL", y: 0.8, size: 0.16 },
  { text: "FRONTEND & WEB", y: 0.42, size: 0.22 },
  { text: "React, Next.js, Three.js, GSAP, TailwindCSS", y: 0.12, size: 0.16 },
  { text: "BACKEND & DATABASES", y: -0.26, size: 0.22 },
  { text: "Node.js, Express, MongoDB, MySQL, Firebase", y: -0.56, size: 0.16 },
  { text: "AI/ML & GEN-AI", y: -0.94, size: 0.22 },
  { text: "PyTorch, TensorFlow, scikit-learn, LangChain", y: -1.24, size: 0.16 },
  { text: "TOOLS & 3D", y: -1.62, size: 0.22 },
  { text: "Git, Docker, VS Code, Blender, Vercel", y: -1.92, size: 0.16 },
];

const Tools = () => (
  <group>
    {SkillLines.map((line, i) => (
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

export default Tools;

