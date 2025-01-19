document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-button');
    const text =  document.getElementById('text')
    playButton.addEventListener('click', () => {
      if (audio.paused) {
        text.style.display = 'block';
          // Animasi mengetik
        const typed = new Typed('#typed-text', {
            strings: ['Halo Dania! fadhra cuma mau sampaikan perasaannya fadhra buat perempuan hebat nya fadhra','"    Dania fadhra merasa bersyukur banget dengan hubungan ini yang suudah kita jalanin sejauh ini dan fadhra juga seneng banget karena bisa menjalaninya sama dania, dan ya karena cuma dania yang fadhra mau. cuma dania yang akan selalu fadhra pilih untuk menjalanin moment moment Bahagia. cuma dania yang akan selalu fadhra usahakan. kehadirann dania adalah anugerah terindah buat fadhra dan tak akan pernah tergantikan oleh yang lain dan akan selalu fadhra inget. trus fun fact aja fadhra mesti ngerasa mau nangis klo nyanyi lagu anugerah terindah yg lagunya tulus itu tpi bukan nangis karena sedih tpi nangis karena bersyukur bisa ada di sisinya fadhra yang selalu temenin fadhra yang mau nemenin fadhra Ketika yg lain ndak ada yang nemenin fadhra. fadhra sangat bersyukur banget makanya fadhra bilang dania anugerah terindah nya fadhra. trus fadhra pengen juga kita terus ciptakan kenangan kenangan yang Bahagia kenangan yang akan buat kita menangis nanti namun bukan menangis karena sedih menangis karena Bahagia kita bisa menciptakan moment yang menyenangkan itu Bersama ya. Dania Rizky Maulita terima kasih sudah jadi anugerah terindah nya fadhra hehe. trus fun fact juga kemarin pas qt itu fadhra hampir nangis pas nyanyi lagu itu ya karena perasaan itu hehe. fadhra selalu sayang daniaa, fadhra pengen terus buat dania ketawa dan senyum Bahagia terus kaya kemarin hari sabtu. hehe im so loving u my universe. get well soon cantiknya fadhra, ya Allah jangan buat dania terus kesakitan sembuhkan sakitnya dania ya Allah dan terus  jaga hubungan kita berdua Aamiin ya rab..."'],
            typeSpeed: 55,
            backSpeed: 0,
            loop: false
        });
        audio.play();
        playButton.textContent = 'Pause Lagu';
      } else {

        audio.pause();
        playButton.textContent = 'Putar Lagu';
       

      }
    });

});