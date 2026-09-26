import { Edges, Line, Text, TextProps } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useMemo, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";

import { usePortalStore } from "@stores";
import { Project } from "@types";

interface ProjectTileProps {
  project: Project;
  index: number;
  position: [number, number, number];
  rotation: [number, number, number];
  activeId: number | null;
  onClick: () => void;
  datePosition: 'top' | 'bottom';
}

const ProjectTile = ({ project, index, position, rotation, activeId, onClick, datePosition }: ProjectTileProps) => {
  const projectRef = useRef<THREE.Group>(null);
  const titleRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const dateRef = useRef<THREE.Group>(null);
  const viewBtnRef = useRef<THREE.Group>(null);
  const ghBtnRef = useRef<THREE.Group>(null);
  const hoverAnimRef = useRef<gsap.core.Timeline | null>(null);
  const [desktopHovered, setDesktopHovered] = useState(false);
  const isProjectSectionActive = usePortalStore((state) => state.activePortalId === "projects");
  const hovered = isMobile ? activeId === index : desktopHovered;
  const isTop = datePosition === 'top';

  const titleProps = useMemo(() => ({
    font: "./soria-font.ttf",
    color: "black",
  }), []);

  const subtitleProps: Partial<TextProps> = useMemo(() => ({
    font: "./Vercetti-Regular.woff",
    color: "black",
    anchorX: "left",
    anchorY: "top",
  }), []);

  useEffect(() => {
    if (!projectRef.current || !titleRef.current || !textRef.current || !dateRef.current) return;
    hoverAnimRef.current?.kill();

    const mesh = projectRef.current.children[0];

    hoverAnimRef.current = gsap.timeline();
    hoverAnimRef.current
      .to(projectRef.current.position, { z: hovered ? 1 : 0, duration: 0.2 }, 0)
      .to(projectRef.current.position, { y: hovered ? isTop ? -2 : 0 : 0 }, 0)
      .to(projectRef.current.scale, {
        x: hovered ? 1.3 : 1,
        y: hovered ? 1.3 : 1,
        z: hovered ? 1.3 : 1,
      }, 0)
      .to(titleRef.current.position, { y: hovered ? 0.7 : -0.8 }, 0)
      .to(textRef.current.position, { y: hovered ? 0.7 : 0 }, 0)
      // .to(textRef.current.scale, { y: hovered ? 1 : 0, x: hovered ? 1 : 0 }, 0)
      .to(textRef.current, { fillOpacity: hovered ? 1 : 0, duration: 0.4 }, 0)
      .to(dateRef.current.position, { y: hovered ? 2.6 : isTop? 1.4 : -1.4  }, 0)
      .to(mesh.scale, { y: hovered ? 2 : 1 }, 0)
      .to((mesh as THREE.Mesh).material, { opacity: hovered ? 0.95 : 0.3 }, 0)
      .to(mesh.position, { y: hovered ? 1 : 0 }, 0);

    if (project.url) {
      hoverAnimRef.current
        .to(viewBtnRef.current!, { y: hovered ? 1 : 0, x: hovered ? 1 : 0 }, 0)
        .to(viewBtnRef.current!.position, { z: hovered ? 0.3 : -1 }, 0);
    }
    if (project.github && project.github !== project.url) {
      hoverAnimRef.current
        .to(ghBtnRef.current!, { y: hovered ? 1 : 0, x: hovered ? 1 : 0 }, 0)
        .to(ghBtnRef.current!.position, { z: hovered ? 0.3 : -1 }, 0);
    }
  }, [hovered]);

  useEffect(() => {
    if (projectRef.current) {
      gsap.to(projectRef.current.position, {
        y: isProjectSectionActive ? 0 : -11,
        duration: 1,
        delay: isProjectSectionActive ? index * 0.1 : 0,
      });
    }
  }, [isProjectSectionActive]);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (!project.url) return;
    const button = e.eventObject;
    gsap.to(button.position, { z: 0, duration: 0.1 })
      .then(() => gsap.to(button.position, { z: 0.3, duration: 0.3 }));
    setTimeout(() => window.open(project.url, '_blank'), 50);
  };

  const handlePointerOver = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (!isMobile && isProjectSectionActive) {
      setDesktopHovered(true);
    }
  };

  return (
    <group
      position={position}
      rotation={rotation}
      onClick={onClick}
      onPointerOver={handlePointerOver}
      onPointerOut={() => !isMobile && isProjectSectionActive && setDesktopHovered(false)}>
      <group ref={projectRef}>
        <mesh>
          <planeGeometry args={[4.2, 2, 1]} />
          <meshBasicMaterial color="#FFF" transparent opacity={0.3}/>
          {/* <meshPhysicalMaterial transmission={1} roughness={0.3} /> */}
          { project.featured && <Edges color="black" lineWidth={2} /> }

          { !project.featured && <Line
            points={[
              [-2.1, -1, 0.11],
              [2.1, -1, 0.11],
              [2.1, 1, 0.11],
              [-2.1, 1, 0.11],
              [-2.1, -1, 0.11],
            ]}
            color="#777"
            lineWidth={1.5}
            dashed
            dashSize={0.12}
            gapSize={0.08}
          />}
        </mesh>
        <Text
          ref={titleRef}
          {...titleProps}
          position={[-1.9, -0.8, 0.101]}
          anchorX="left"
          anchorY="bottom"
          maxWidth={4}
          fontSize={0.8}>
          {project.title}
        </Text>
        <group ref={dateRef} position={[-1.25, 1.4, 0.01]}>
          <mesh>
            <planeGeometry args={[1.7, 0.4, 1]} />
            <meshBasicMaterial color="#777" opacity={0} wireframe />
            <Edges color="black" lineWidth={1} />
          </mesh>
          <Text
            {...subtitleProps}
            position={[-0.7, 0.2, 0]}
            fontSize={0.3}>
            {project.date.toUpperCase()}
          </Text>
        </group>
        <Text
          ref={textRef}
          {...subtitleProps}
          maxWidth={3.8}
          position={[-1.9, 2.3, 0.1]}
          // scale={[0, 0, 1]}
          fontSize={0.2}>
          {project.subtext}
        </Text>
        {project.tech && (
          <Text
            {...subtitleProps}
            color="#333"
            maxWidth={3.8}
            position={[-1.9, 3.6, 0.1]}
            fontSize={0.15}>
            {project.tech.join(' \u00B7 ')}
          </Text>
        )}
        {project.url && (
          <group
            ref={viewBtnRef}
            position={[1.3, -0.6, -1]}
            scale={[0, 0, 1]}
            onClick={handleClick}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}>
            <mesh>
              <boxGeometry args={[1.1, 0.4, 0.2]} />
              <meshBasicMaterial color="#222" />
              <Edges color="white" lineWidth={1} />
            </mesh>
            <Text
              {...subtitleProps}
              color="white"
              position={[-0.4, 0.15, 0.2]}
              fontSize={0.25}>
              VIEW ↗
            </Text>
          </group>
        )}
        {project.github && project.github !== project.url && (
          <group
            ref={ghBtnRef}
            position={[2.2, -0.6, -1]}
            scale={[0, 0, 1]}
            onClick={(e: ThreeEvent<MouseEvent>) => {
              e.stopPropagation();
              const button = e.eventObject;
              gsap.to(button.position, { z: 0, duration: 0.1 })
                .then(() => gsap.to(button.position, { z: 0.3, duration: 0.3 }));
              setTimeout(() => window.open(project.github as string, '_blank'), 50);
            }}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}>
            <mesh>
              <boxGeometry args={[0.7, 0.4, 0.2]} />
              <meshBasicMaterial color="#333" />
              <Edges color="white" lineWidth={1} />
            </mesh>
            <Text
              {...subtitleProps}
              color="white"
              position={[-0.2, 0.15, 0.2]}
              fontSize={0.2}>
              GH
            </Text>
          </group>
        )}
      </group>
    </group>
  );
};

export default ProjectTile;