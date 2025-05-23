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
  type: 'bar' | 'line' | 'pie';
  data: ChartConfiguration<'bar' | 'line' | 'pie'>['data'];
  options?: ChartConfiguration<'bar' | 'line' | 'pie'>['options'];
  width?: string | number;
  height?: string | number;
}

const Charts: React.FC<MyChartProps> = ({ type, data, options, width = 600, height = 400 }) => {
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
        options: {
          responsive: true,
          maintainAspectRatio: false,
          ...options,
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]);

  return (
    <div
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      <canvas ref={chartRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Charts;
