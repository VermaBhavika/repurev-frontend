// components/MyChart.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import {
  Chart,
  ChartConfiguration,
  registerables 
} from 'chart.js';

Chart.register(...registerables);

interface MyChartProps {
  type: 'bar' | 'line' | 'pie' ;
  data: ChartConfiguration<'bar' | 'line' | 'pie'>['data'];
  options?: ChartConfiguration<'bar' | 'line' | 'pie'>['options'];
}

const MyChart: React.FC<MyChartProps> = ({ type, data, options }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    const chartCanvas = chartRef.current;

    if (chartCanvas) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); 
      }

      chartInstance.current = new Chart(chartCanvas, {
        type,
        data,
        options,
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartRef} />;
};

export default MyChart;
