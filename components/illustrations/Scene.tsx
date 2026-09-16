export type Stage = "sketch" | "rough" | "line" | "color";

type BaseShape =
  | { kind: "ellipse"; cx: number; cy: number; rx: number; ry: number; fill: string; rotate?: number }
  | { kind: "circle"; cx: number; cy: number; r: number; fill: string }
  | { kind: "rect"; x: number; y: number; w: number; h: number; rx?: number; fill: string; rotate?: number }
  | { kind: "path"; d: string; fill: string }
  | { kind: "polygon"; points: string; fill: string };

export type SceneDef = {
  viewBox?: string;
  bg: string;
  shapes: BaseShape[];
  guides?: BaseShape[];
};

const OFFSETS: Record<Stage, [number, number][]> = {
  sketch: [
    [0, 0],
    [2.2, -1.4],
    [-1.8, 1.6],
    [1.2, 1.8],
    [-1.4, -1.2],
  ],
  rough: [
    [0, 0],
    [0.9, -0.6],
    [-0.7, 0.7],
  ],
  line: [[0, 0]],
  color: [[0, 0]],
};

const STROKE_BY_STAGE: Record<Stage, { color: string; width: number; opacity: number }> = {
  sketch: { color: "#7C8DB0", width: 1.6, opacity: 0.55 },
  rough: { color: "#4B4038", width: 2.2, opacity: 0.85 },
  line: { color: "#221B14", width: 2.6, opacity: 1 },
  color: { color: "#221B14", width: 1.6, opacity: 1 },
};

function shapeToPath(shape: BaseShape, dx: number, dy: number, key: string, fill: string, stroke: string, strokeWidth: number, strokeOpacity: number) {
  const commonStroke = { stroke, strokeWidth, strokeOpacity, vectorEffect: "non-scaling-stroke" as const };
  switch (shape.kind) {
    case "ellipse":
      return (
        <ellipse
          key={key}
          cx={shape.cx + dx}
          cy={shape.cy + dy}
          rx={shape.rx}
          ry={shape.ry}
          fill={fill}
          transform={shape.rotate ? `rotate(${shape.rotate} ${shape.cx} ${shape.cy})` : undefined}
          {...commonStroke}
        />
      );
    case "circle":
      return <circle key={key} cx={shape.cx + dx} cy={shape.cy + dy} r={shape.r} fill={fill} {...commonStroke} />;
    case "rect":
      return (
        <rect
          key={key}
          x={shape.x + dx}
          y={shape.y + dy}
          width={shape.w}
          height={shape.h}
          rx={shape.rx ?? 0}
          fill={fill}
          transform={shape.rotate ? `rotate(${shape.rotate} ${shape.x + shape.w / 2} ${shape.y + shape.h / 2})` : undefined}
          {...commonStroke}
        />
      );
    case "polygon":
      return <polygon key={key} points={shape.points} fill={fill} transform={`translate(${dx} ${dy})`} {...commonStroke} />;
    case "path":
      return <path key={key} d={shape.d} fill={fill} transform={`translate(${dx} ${dy})`} {...commonStroke} />;
  }
}

export function Scene({ def, stage, className }: { def: SceneDef; stage: Stage; className?: string }) {
  const offsets = OFFSETS[stage];
  const strokeCfg = STROKE_BY_STAGE[stage];
  const isLineOnly = stage !== "color";

  return (
    <svg
      viewBox={def.viewBox ?? "0 0 400 300"}
      className={className}
      role="img"
      aria-label="Illustration process preview"
    >
      <rect x={0} y={0} width={400} height={300} fill={stage === "color" ? def.bg : "#FBF3E7"} />

      {stage === "sketch" &&
        def.guides?.map((g, i) => (
          <g key={`guide-${i}`} opacity={0.35} strokeDasharray="4 4">
            {shapeToPath(g, 0, 0, `guide-${i}`, "none", "#9AA7C7", 1.4, 0.6)}
          </g>
        ))}

      {def.shapes.map((shape, i) =>
        offsets.map(([dx, dy], j) =>
          shapeToPath(
            shape,
            dx,
            dy,
            `${i}-${j}`,
            isLineOnly ? "none" : shape.fill,
            strokeCfg.color,
            strokeCfg.width,
            strokeCfg.opacity
          )
        )
      )}
    </svg>
  );
}
