import { Edges, Text } from "@react-three/drei";

const Tools = () => {
  const cardWidth = 4.2;
  const cardHeight = 3.9;
  const cardCenterY = 0.3;
  const pitch = 0.5;

  const skillGroups: { title: string; items: string }[] = [
    { title: "LANGUAGES", items: "TypeScript · JavaScript · Python · Java · C++" },
    { title: "FRONTEND", items: "React · Next.js · Tailwind · Three.js · GSAP" },
    { title: "BACKEND", items: "Node.js · Express · FastAPI · PostgreSQL · Redis" },
    { title: "ML / AI", items: "PyTorch · TensorFlow · OpenCV · HuggingFace" },
    { title: "TOOLS", items: "Git · Docker · Firebase · Vercel · GitHub Pages" },
  ];

  const startY = cardCenterY + cardHeight / 2 - 0.45;

  return (
    <group>
      <mesh position={[0, cardCenterY, 0]}>
        <planeGeometry args={[cardWidth, cardHeight, 1]} />
        <meshBasicMaterial color="#FFF" transparent opacity={0.85} />
        <Edges color="black" lineWidth={2} />
      </mesh>

      <Text
        font="./soria-font.ttf"
        color="black"
        anchorX="left"
        anchorY="top"
        fontSize={0.48}
        position={[-1.9, startY, 0.01]}>
        TECH STACK &amp; TOOLS
      </Text>

      {skillGroups.map((group, i) => (
        <group key={group.title}>
          <Text
            font="./Vercetti-Regular.woff"
            color="#222"
            anchorX="left"
            anchorY="top"
            fontSize={0.2}
            position={[-1.9, startY - 0.7 - i * pitch, 0.02]}>
            {group.title}
          </Text>
          <Text
            font="./Vercetti-Regular.woff"
            color="#555"
            anchorX="left"
            anchorY="top"
            maxWidth={cardWidth - 0.4}
            fontSize={0.18}
            position={[-1.9, startY - 0.94 - i * pitch, 0.03]}>
            {group.items}
          </Text>
        </group>
      ))}
    </group>
  );
};

export default Tools;