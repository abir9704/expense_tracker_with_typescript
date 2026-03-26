import { Pie, PieChart, PieLabelRenderProps, PieSectorShapeProps, Sector } from 'recharts';


// #region Sample data


// #endregion
const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: PieLabelRenderProps & { name?: string }) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  // এখানে percent বাদ দিয়ে type দেখাচ্ছি
  return (
    <text x={x} y={y} fill="white" textAnchor={x > ncx ? 'start' : 'end'} dominantBaseline="central">
      {name}  {/* type name show */}
    </text>
  );
};

const MyCustomPie = (props: PieSectorShapeProps) => {
  return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
};

export default function Mrpie({ isAnimationActive = true,piedata }: { isAnimationActive?: boolean }) {
  return (
    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={piedata}
        labelLine={false}
        label={renderCustomizedLabel}
        fill="#8884d8"
        dataKey="value"
        nameKey="type"
        isAnimationActive={isAnimationActive}
        shape={MyCustomPie}
      />
     
    </PieChart>
  );
}