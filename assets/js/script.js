// assets/js/script.js
document.addEventListener('DOMContentLoaded', function() {
  // Weather button (random status)
  var btnW = document.getElementById('btn-weather');
  if (btnW) {
    btnW.addEventListener('click', function() {
      var statuses = ['Cerah', 'Berawan', 'Hujan Ringan', 'Hujan Lebat', 'Berangin'];
      var s = statuses[Math.floor(Math.random()*statuses.length)];
      document.getElementById('weather').innerText = 'Status cuaca: ' + s;
    });
  }

  // Estimator
  var btnEst = document.getElementById('btn-estimate');
  if (btnEst) {
    btnEst.addEventListener('click', function() {
      var d = parseFloat(document.getElementById('input-distance').value) || 0;
      var r = parseFloat(document.getElementById('input-rate').value) || 0;
      var result = d * r;
      document.getElementById('estimate-result').innerText = 'Rp ' + result.toLocaleString();
    });
  }

  // Gallery toggle
  var showAll = document.getElementById('show-all');
  var hideAll = document.getElementById('hide-all');
  var gallery = document.getElementById('gallery');
  if (showAll && gallery) {
    showAll.addEventListener('click', function() {
      Array.from(gallery.children).forEach(function(c){ c.style.display = 'block'; });
    });
  }
  if (hideAll && gallery) {
    hideAll.addEventListener('click', function() {
      Array.from(gallery.children).forEach(function(c){ c.style.display = 'none'; });
    });
  }

  // Form validation & submit (kontak)
  var form = document.getElementById('feedback-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var msg = document.getElementById('message').value.trim();
      var rating = parseInt(document.getElementById('rating').value) || 0;
      if (!name || !email || !msg) {
        alert('Semua field wajib diisi.');
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        alert('Email tidak valid.');
        return;
      }
      if (rating < 1 || rating > 5) {
        alert('Rating harus antara 1 dan 5.');
        return;
      }
      // Append review locally
      var reviews = document.getElementById('reviews');
      var card = document.createElement('div');
      card.className = 'p-3 bg-white rounded shadow';
      card.innerHTML = '<strong>'+name+'</strong> <small class="text-muted"> - Rating: '+rating+'</small><p>'+msg+'</p>';
      reviews.prepend(card);
      alert('Terima kasih atas ulasan Anda!');
      form.reset();
    });
  }

  // If detail.html with query param ?id= set the image/title
  var params = new URLSearchParams(window.location.search);
  if (params.has('id')) {
    var id = params.get('id');
    var img = document.getElementById('detail-image');
    var title = document.getElementById('detail-title');
    var desc = document.getElementById('detail-desc');
    if (img) img.src = 'assets/img/destinasi' + id + '.png';
    if (title) title.innerText = 'Destinasi ' + id + ' - Kuta Mandalika';
    if (desc) desc.innerText = 'Deskripsi lengkap untuk Destinasi ' + id + ' di Kuta Mandalika. Informasi lokasi, fasilitas, rute, dan tips berkunjung.';
  }
});
