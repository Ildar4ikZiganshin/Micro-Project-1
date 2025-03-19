document.getElementById('fetchData').addEventListener('click', async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

function displayData(data) {
  const container = document.getElementById('dataContainer');
  container.innerHTML = data.map(item => `
    <div class="item">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </div>
  `).join('');
}
