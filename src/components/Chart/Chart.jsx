import React, { useRef, useEffect } from 'react';

const Chart = ({hourlyTemperatures}) => {
  const canvasRef = useRef(null);
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let x = 10;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;

    x += 20;
    const firstY = canvas.height - hourlyTemperatures[0] + 10; 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(x, firstY);

    for (let i = 1; i < 24; i++) {
        x += 20; 
        const y = canvas.height - hourlyTemperatures[i] + 10; 
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    let uniqueHourlyTemperatures = hourlyTemperatures.filter(onlyUnique);

    ctx.font = '10px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.lineWidth = 2;
    let labelX = 10;
    for (let i = 0; i < 24; i++) {
        labelX += 20;
        const labelY = canvas.height - 5;
        ctx.fillText((currentHour + i) % 24, labelX, labelY);
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < uniqueHourlyTemperatures.length; i++) {
        const labelX = 25;
        const labelY = canvas.height - uniqueHourlyTemperatures[i] + 10;
        ctx.fillText(uniqueHourlyTemperatures[i] / 8 + "°C", labelX, labelY);
    }

  }, [currentHour, hourlyTemperatures]);


  
  return (
    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <canvas ref={canvasRef} width={500} height={300} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Chart;