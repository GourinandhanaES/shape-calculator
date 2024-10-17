function calculateBodyShape() {
  const bust = parseFloat(document.getElementById('bust').value);
  const waist = parseFloat(document.getElementById('waist').value);
  const hips = parseFloat(document.getElementById('hips').value);

  let shape = '';

  if (bust > hips && bust > waist) {
      shape = 'Inverted Triangle';
  } else if (hips > bust && hips > waist) {
      shape = 'Pear';
  } else if (bust === hips && bust > waist) {
      shape = 'Hourglass';
  } else if (waist >= bust || waist >= hips) {
      shape = 'Rectangle';
  } else {
      shape = 'Unknown shape';
  }

  document.getElementById('result').innerHTML = `Your body shape is: ${shape}`;
}