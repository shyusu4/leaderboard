const addScore = async (name, score) => {
  const body = {
    user: name,
    score: score,
  };
  const url =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVc6yZtu/scores/';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  });
  return response.json();
};

const getScore = async () => {
  const url =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVc6yZtu/scores/';
  const response = await fetch(url);
  return response.json();
};

const displayScore = () => {
  const scoreChart = document.querySelector('.score-chart');
  getScore().then((result) => {
    scoreChart.innerHTML = '';
    result.result.forEach((data) => {
      scoreChart.innerHTML += `<li><span class="user">${data.user}</span>: <span class="score">${data.score}</span></li>`;
      return result;
    });
  });
};

export { addScore, getScore, displayScore };
