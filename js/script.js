const kinton = document.querySelectorAll('.kinton');
const goku = document.querySelectorAll('.goku');
const papanSkor = document.querySelector('.papan-score');

let kintonSebelumnya;
let	selesai; 
let skor;

function randomKinton(kinton) {
	  const t = Math.floor(Math.random() * kinton.length);
	  const tRandom = kinton[t];
	  if (tRandom == kintonSebelumnya) {
	  	randomKinton(kinton);
	  }
	  kintonSebelumnya = tRandom;
	  return tRandom;
}

function munculkanGoku() {
	const tRandom = randomKinton(kinton);
	tRandom.classList.add('muncul');

	setTimeout(() => {
		tRandom.classList.remove('muncul');
		if (!selesai) {
			munculkanGoku();
		}
	}, 550);
}

function mulai() {
	selesai = false;
	skor = 0;
	papanSkor.textContent = 0;
	munculkanGoku();
	setTimeout(() => {
		selesai = true;
	}, 100000);
}

function pukul() {
	skor++;
	papanSkor.textContent = skor;
	this.parentNode.classList.remove('muncul');
}

kinton.forEach(t => {
	t.addEventListener('click', pukul);
});