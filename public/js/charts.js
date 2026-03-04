// ── 공통 차트 옵션 ──
const textColor = '#7f86a0';
const gridColor = 'rgba(46,51,80,0.6)';

Chart.defaults.color = textColor;
Chart.defaults.font.family = "'Noto Sans KR', system-ui, sans-serif";
Chart.defaults.font.size = 12;

// ── 1. 매출 추이 차트 ──
const revenueCtx = document.getElementById('revenueChart').getContext('2d');

const months = ['3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', '1월', '2월'];

const gradientBook = revenueCtx.createLinearGradient(0, 0, 0, 240);
gradientBook.addColorStop(0, 'rgba(108,99,255,0.3)');
gradientBook.addColorStop(1, 'rgba(108,99,255,0.0)');

const gradientEbook = revenueCtx.createLinearGradient(0, 0, 0, 240);
gradientEbook.addColorStop(0, 'rgba(67,217,173,0.25)');
gradientEbook.addColorStop(1, 'rgba(67,217,173,0.0)');

const revenueChart = new Chart(revenueCtx, {
  type: 'line',
  data: {
    labels: months,
    datasets: [
      {
        label: '종이책',
        data: [1120, 980, 1050, 1180, 1340, 1250, 1100, 1580, 1720, 1890, 1420, 1380],
        borderColor: '#6c63ff',
        backgroundColor: gradientBook,
        borderWidth: 2.5,
        pointRadius: 4,
        pointBackgroundColor: '#6c63ff',
        tension: 0.4,
        fill: true,
      },
      {
        label: '전자책',
        data: [480, 420, 510, 590, 620, 580, 540, 720, 810, 870, 680, 720],
        borderColor: '#43d9ad',
        backgroundColor: gradientEbook,
        borderWidth: 2.5,
        pointRadius: 4,
        pointBackgroundColor: '#43d9ad',
        tension: 0.4,
        fill: true,
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        position: 'top',
        labels: { boxWidth: 10, boxHeight: 10, borderRadius: 5, useBorderRadius: true, padding: 16 }
      },
      tooltip: {
        backgroundColor: '#22263a',
        borderColor: '#2e3350',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString()}억 원`
        }
      }
    },
    scales: {
      x: { grid: { color: gridColor }, ticks: { color: textColor } },
      y: {
        grid: { color: gridColor },
        ticks: { color: textColor, callback: v => v + '억' }
      }
    }
  }
});

// ── 2. 장르 파이 차트 ──
const genreCtx = document.getElementById('genreChart').getContext('2d');
new Chart(genreCtx, {
  type: 'doughnut',
  data: {
    labels: ['문학·소설','자기계발','경제·경영','에세이','SF·판타지','어린이·YA','기타'],
    datasets: [{
      data: [28, 22, 18, 12, 10, 7, 3],
      backgroundColor: ['#6c63ff','#43d9ad','#f7b731','#ff6584','#ff9d42','#82d2ff','#b8c0e0'],
      borderWidth: 0,
      hoverOffset: 8,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '68%',
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#22263a',
        borderColor: '#2e3350',
        borderWidth: 1,
        callbacks: { label: ctx => ` ${ctx.label}: ${ctx.raw}%` }
      }
    }
  }
});

// ── 3. 연령대 차트 ──
const ageCtx = document.getElementById('ageChart').getContext('2d');
new Chart(ageCtx, {
  type: 'bar',
  data: {
    labels: ['10대', '20대', '30대', '40대', '50대', '60대+'],
    datasets: [
      {
        label: '2025',
        data: [8, 24, 28, 22, 13, 5],
        backgroundColor: 'rgba(108,99,255,0.3)',
        borderColor: '#6c63ff',
        borderWidth: 1.5,
        borderRadius: 5,
      },
      {
        label: '2026',
        data: [9, 22, 31, 23, 11, 4],
        backgroundColor: 'rgba(67,217,173,0.3)',
        borderColor: '#43d9ad',
        borderWidth: 1.5,
        borderRadius: 5,
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', labels: { boxWidth: 10, boxHeight: 10, borderRadius: 5, useBorderRadius: true, padding: 14 } },
      tooltip: {
        backgroundColor: '#22263a',
        borderColor: '#2e3350',
        borderWidth: 1,
        callbacks: { label: ctx => ` ${ctx.dataset.label}: ${ctx.raw}%` }
      }
    },
    scales: {
      x: { grid: { color: gridColor } },
      y: {
        grid: { color: gridColor },
        ticks: { callback: v => v + '%' },
        max: 40,
      }
    }
  }
});

// ── 4. 장르 성장률 차트 ──
const growthCtx = document.getElementById('growthChart').getContext('2d');
new Chart(growthCtx, {
  type: 'bar',
  data: {
    labels: ['AI·테크','SF·판타지','에세이','자기계발','경제·경영','문학·소설','어린이·YA','수험서','만화·그래픽'],
    datasets: [{
      label: '전년 대비 성장률 (%)',
      data: [61, 38, 22, 18, 11, 7, 4, -5, -12],
      backgroundColor: [
        'rgba(255,101,132,0.7)','rgba(255,157,66,0.7)',
        'rgba(67,217,173,0.7)','rgba(67,217,173,0.5)',
        'rgba(108,99,255,0.6)','rgba(108,99,255,0.4)',
        'rgba(130,210,255,0.5)',
        'rgba(127,134,160,0.4)','rgba(127,134,160,0.4)'
      ],
      borderColor: [
        '#ff6584','#ff9d42','#43d9ad','#43d9ad',
        '#6c63ff','#6c63ff','#82d2ff',
        '#4a506b','#4a506b'
      ],
      borderWidth: 1.5,
      borderRadius: 6,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#22263a',
        borderColor: '#2e3350',
        borderWidth: 1,
        callbacks: { label: ctx => ` 성장률: ${ctx.raw > 0 ? '+' : ''}${ctx.raw}%` }
      }
    },
    scales: {
      x: { grid: { color: gridColor } },
      y: {
        grid: { color: gridColor },
        ticks: { callback: v => v + '%' },
      }
    }
  }
});

// ── 5. 계절별 차트 ──
const seasonCtx = document.getElementById('seasonChart').getContext('2d');
new Chart(seasonCtx, {
  type: 'radar',
  data: {
    labels: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    datasets: [
      {
        label: '문학·소설',
        data: [72, 68, 75, 82, 88, 85, 95, 90, 80, 78, 92, 98],
        borderColor: '#6c63ff',
        backgroundColor: 'rgba(108,99,255,0.08)',
        borderWidth: 2,
        pointRadius: 3,
      },
      {
        label: '자기계발',
        data: [98, 90, 85, 92, 88, 70, 65, 60, 75, 82, 88, 93],
        borderColor: '#43d9ad',
        backgroundColor: 'rgba(67,217,173,0.08)',
        borderWidth: 2,
        pointRadius: 3,
      },
      {
        label: '경제·경영',
        data: [85, 80, 92, 95, 90, 75, 65, 62, 80, 85, 82, 88],
        borderColor: '#f7b731',
        backgroundColor: 'rgba(247,183,49,0.08)',
        borderWidth: 2,
        pointRadius: 3,
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', labels: { boxWidth: 10, boxHeight: 10, borderRadius: 5, useBorderRadius: true, padding: 14 } },
      tooltip: { backgroundColor: '#22263a', borderColor: '#2e3350', borderWidth: 1 }
    },
    scales: {
      r: {
        angleLines: { color: gridColor },
        grid: { color: gridColor },
        pointLabels: { color: textColor, font: { size: 11 } },
        ticks: { display: false },
        min: 50,
      }
    }
  }
});

// ── 탭 전환 (매출 차트 예시) ──
function switchTab(el, type) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  if (type === 'quarterly') {
    revenueChart.data.labels = ['Q2 2025','Q3 2025','Q4 2025','Q1 2026'];
    revenueChart.data.datasets[0].data = [3210, 3690, 5190, 2800];
    revenueChart.data.datasets[1].data = [1520, 1740, 2400, 1400];
  } else {
    revenueChart.data.labels = months;
    revenueChart.data.datasets[0].data = [1120,980,1050,1180,1340,1250,1100,1580,1720,1890,1420,1380];
    revenueChart.data.datasets[1].data = [480,420,510,590,620,580,540,720,810,870,680,720];
  }
  revenueChart.update();
}
