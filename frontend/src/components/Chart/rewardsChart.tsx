'use client';

import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default function LineChart() {
  return (
    <Line
      options={{
        color: '#fff',
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Time',
            },
            grid: {
              color: 'rgba(255,255,255,0.1)',
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Matrix',
            },
            grid: {
              color: 'rgba(255,255,255,0.1)',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
      data={{
        labels: ['1s', '1s', '1s', '1s', '1s', '1s', '1s'],
        datasets: [
          {
            label: 'Line 1',
            data: [40, 30, 80, 50, 35, 30, 80],
            fill: false,
            // borderColor: '#9f54ff',
            borderColor: '#b0c0f6',
            tension: 0.1,
            // display: false,
          },
          {
            label: 'Line 2',
            data: [65, 59, 40, 81, 56, 55, 40],
            fill: false,
            borderColor: '#5900d7',
            tension: 0.1,
            // display: false,
          },
        ],
      }}
    />
  );
}
