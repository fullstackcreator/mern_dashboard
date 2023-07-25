import ReactApexChart from "react-apexcharts";
import { Typography, Box, Stack } from "@pankod/refine-mui";

import { PieChartProps } from "interfaces/home";

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor="background.paper"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      pl={3.5}
      pr={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
    >
      <Stack direction="column">
        <Typography fontSize={14} color="text.secondary">
          {title}
        </Typography>
        <Typography fontSize={24} color="text.primary" fontWeight={700} mt={1}>
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
        width="130px"
      />
    </Box>
  );
};

export default PieChart;
