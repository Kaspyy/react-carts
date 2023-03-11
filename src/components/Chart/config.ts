export const options = {
  responsive: true,
  mantainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      title: {
        display: true,
        text: 'Price',
      },
    },
  },
};
