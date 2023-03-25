const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const oscillator = audioContext.createOscillator();
const gainNode = audioContext.createGain();

oscillator.type = 'sine';
oscillator.frequency.value = 440;
oscillator.start();

gainNode.gain.value = 0;

oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);

document.body.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const frequency = (x / width) * 2000;
   
    const gain = 1 - (y / height);

    oscillator.frequency.value = frequency;
    gainNode.gain.value = gain;
});

document.body.addEventListener('mouseleave', () => {
    gainNode.gain.value = 0;
});
