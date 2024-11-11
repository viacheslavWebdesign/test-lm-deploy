import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { useState } from "react";
import * as THREE from "three";

/**
 *
 * @param {
 *    defaultActive: boolean,
 *    color: 'white' | 'black'
 * }
 * @returns
 */

const basePath =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "";

const logoSrc = `${basePath}/icons/logo.svg`;

const vertexShader = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec4 pos = vec4(position, 1.0);

    pos.x += sin(uTime * 7.0 + pos.x * 0.25) * 1.5;
    pos.y += sin(uTime * 5.0 + pos.y * 0.2) * 0.25;

    pos.z = position.z;

    gl_Position = projectionMatrix * modelViewMatrix * pos;
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  uniform vec3 uColor;

  vec2 SineWave(vec2 p) {
    float pi = 3.14159;
    float A = 0.05 + 0.1 * sin(uTime * 0.5);
    float w = 10.0 * pi;
    float t = uTime * pi / 180.0;
    float y = sin(w * p.x + t) * A;

    float newX = mod(p.x + 0.5, 1.0);
    float newY = mod(p.y + y, 1.0);

    return vec2(newX, newY);
  }

  void main() {
    vec2 uv = SineWave(vUv);
    gl_FragColor = vec4(uColor, 1.0);
  }
`;

function LogoSVG({ color, hovered, defaultActive }) {
  const svgData = useLoader(SVGLoader, logoSrc);

  const shapes = svgData.paths.flatMap((p) => p.toShapes(true));

  const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
    },
  });

  useFrame(({ clock }) => {
    if (hovered || defaultActive) {
      shaderMaterial.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh scale={[0.19, -0.19, 0.19]} position={[-3, 4.2, 0]}>
      <shapeGeometry args={[shapes]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  );
}

export function Logo({ color = "white", defaultActive = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="h-full w-auto">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
        }}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <ambientLight intensity={100} />
        <directionalLight position={[0, 0, 0]} intensity={100} />
        <LogoSVG
          color={color}
          hovered={hovered}
          defaultActive={defaultActive}
        />
      </Canvas>
    </div>
  );
}
