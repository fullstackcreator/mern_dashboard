import ReactApexChart from "react-apexcharts";
import { Typography, Box, Stack } from "@pankod/refine-mui";

import { PieChartProps } from "interfaces/home";

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor="#6d6d6d"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      pl={3.5}
      pr={2}
      gap={2}
      borderRadius={15}
      minHeight="110px"
      width="fit-content"
    >
      <Stack direction="column">
        <Typography fontSize={14} color="#cfc8ff">
          {title}
        </Typography>
        <Typography fontSize={24} color="#11142D" fontWeight={700} mt={1}>
          {value}
        </Typography>
      </Stack>

      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </Box>
  );
};

export default PieChart;
