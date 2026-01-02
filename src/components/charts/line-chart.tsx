type LineChartProps = {
  data: number[];
  width?: number;
  height?: number;
};

export default function LineChart({ data, width = 520, height = 180 }: LineChartProps) {
  const padding = 24;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = (width - padding * 2) / (data.length - 1);

  const points = data.map((value, index) => {
    const x = padding + index * stepX;
    const y = padding + (height - padding * 2) * (1 - (value - min) / range);
    return { x, y };
  });

  const linePoints = points.map((point) => `${point.x},${point.y}`).join(" ");
  const areaPath = `M ${points[0].x},${height - padding} L ${linePoints} L ${
    points[points.length - 1].x
  },${height - padding} Z`;

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id="flow-line" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1F5EFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1F5EFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g stroke="#E2E8F0" strokeWidth="1">
        {[0, 1, 2, 3].map((index) => {
          const y = padding + ((height - padding * 2) / 3) * index;
          return <line key={index} x1={padding} y1={y} x2={width - padding} y2={y} />;
        })}
      </g>

      <path d={areaPath} fill="url(#flow-line)" />
      <polyline
        points={linePoints}
        fill="none"
        stroke="#1F5EFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.map((point, index) => (
        <circle key={index} cx={point.x} cy={point.y} r="3.5" fill="#1F5EFF" />
      ))}
    </svg>
  );
}
