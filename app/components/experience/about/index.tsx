import { Edges, Text } from "@react-three/drei";

const About = () => {
  const cardWidth = 4.2;
  const cardHeight = 3.9;
  const cardCenterY = 0.3;
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
        maxWidth={3.9}
        fontSize={0.55}
        position={[-1.9, startY, 0.01]}>
        LALIT KUMAR
      </Text>
      <Text
        font="./Vercetti-Regular.woff"
        color="#444"
        anchorX="left"
        anchorY="top"
        maxWidth={3.9}
        fontSize={0.24}
        position={[-1.9, startY - 0.65, 0.02]}>
        Full Stack Developer &amp; AI/ML Engineer
      </Text>
      <Text
        font="./Vercetti-Regular.woff"
        color="#333"
        anchorX="left"
        anchorY="top"
        maxWidth={3.9}
        lineHeight={1.35}
        fontSize={0.22}
        position={[-1.9, startY - 1.05, 0.03]}>
        Final-year B.Tech CSE (AI &amp; Data Science) at Poornima University, Jaipur (CGPA 8.7).
      </Text>
      <Text
        font="./Vercetti-Regular.woff"
        color="#333"
        anchorX="left"
        anchorY="top"
        maxWidth={3.9}
        lineHeight={1.35}
        fontSize={0.22}
        position={[-1.9, startY - 1.75, 0.03]}>
        I build full-stack web apps, 3D interactive experiences and AI/ML models.
      </Text>

      <group position={[-1.25, startY - 2.75, 0.01]}>
        <mesh>
          <planeGeometry args={[1.7, 0.4, 1]} />
          <meshBasicMaterial color="#777" opacity={0} wireframe />
          <Edges color="black" lineWidth={1} />
        </mesh>
        <Text
          font="./Vercetti-Regular.woff"
          color="black"
          anchorX="left"
          anchorY="middle"
          fontSize={0.3}
          position={[-0.7, 0.05, 0]}>
          OPEN TO WORK
        </Text>
      </group>
    </group>
  );
};

export default About;