document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('play-pause');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.querySelector('.progress-container');
    const currentTimeSpan = document.getElementById('current-time');
    const durationTimeSpan = document.getElementById('duration-time');
    const songTitle = document.getElementById('song-title');
    const artistName = document.getElementById('artist-name');

    // Lista de músicas (pode ser carregada de uma API no futuro)
    const playlist = [
        {
            title: 'Crazy',
            artist: 'Aerosmitch',
            src: 'musicas/Aerosmith Crazy Lyrics.mp3'
        },
           {
            title: 'Love You To Want Me',
            artist: 'Lobo ',
            src: 'musicas/Lobo Love You To Want Me HD TRADUÇÃO romanticas8080.mp3'
        },
          {
            title: 'We Said Goodbye',
            artist: 'Dave Maclean',
            src: 'musicas/Dave Maclean We Said Goodbye HD TRADUÇÃO romanticas8080.mp3'
        },
        {
            title: 'Lonely Is The Night',
            artist: 'Air Supply',
            src: 'musicas/Air Supply Lonely Is The Night.mp3'
        },
        {
            title: 'Right Here Waiting',
            artist: 'Richard Marx',
            src: 'musicas/Richard Marx Right Here Waiting Official Music Video.mp3'
        },
        {
            title: 'Straight From The Heart',
            artist: 'Bryan Adams',
            src: 'musicas/Bryan Adams Straight From The Heart Live in Lisbon 2005.mp3'
        },
        {
            title: 'Bridge Over Troubled Water',
            artist: 'Simon Garfunkel',
            src: 'musicas/Simon Garfunkel Bridge Over Troubled Water Audio.mp3'
        },
        {
            title: 'Almost Paradise',
            artist: 'Mike Reno Ann Wilson',
            src: 'musicas/Mike Reno Ann Wilson Almost Paradise Subtitulado Español.mpg.mp3'
        },
        {
            title: 'Nothing Else Matters',
            artist: 'Metallica ',
            src: 'musicas/Metallica Nothing Else Matters Legendado Tradução Musicaepoesia.mp3'
        },
        {
            title: 'Skyline Pigeon',
            artist: 'Elton John',
            src: 'musicas/Elton John Skyline Pigeon Live in São Paulo Brazil.mp3'
        },
        {
            title: 'Forever Young',
            artist: 'Alphaville',
            src: 'musicas/Alphaville Forever Young Official Video.mp3'
        },
       {
            title: 'The Unforgiven',
            artist: 'Metallica ',
            src: 'musicas/Metallica The Unforgiven Official Music Video.mp3'
        },
          {
            title: 'Cry Softly Time Is Mourning',
            artist: 'Secret Service',
            src: 'musicas/💌 Secret Service Cry Softly Time Is Mourning ᴴᴰ Tradução 💌.mp3'
        },
          {
            title: 'How Deep Is Your Love',
            artist: 'Bee Gees',
            src: 'musicas/Bee Gees How Deep Is Your Love Official Video.mp3'
        },
          {
            title: 'I Started A Joke Live in New York',
            artist: 'Bee Gees',
            src: 'musicas/Bee Gees I Started A Joke Live in New York 2001 HD Legendado.mp3'  
        },
        {
            title: 'The Way You Are',
            artist: 'Secret Service ',
            src: 'musicas/Agnetha Fältskog ABBA Ola Håkansson Secret Service — The Way You Are OFFICIAL VIDEO 1985.mp3'  
        },
        {
            title: 'The Bangles',
            artist: 'Eternal Flame',
            src: 'musicas/The Bangles Eternal Flame TRADUÇÃO romanticas8080.mp3'  
        },
         {
            title: 'Lover Why ',
            artist: 'Century',
            src: 'musicas/Century Lover Why HD TRADUÇÃO romanticas8080.mp3'  
        },
         {
            title: 'Ill Be Over You',
            artist: 'Toto ',
            src: 'musicas/Toto Ill Be Over You HD TRADUÇÃO romanticas8080.mp3'  
        },
         {
            title: 'I Want to Know What Love Is',
            artist: 'Foreigner',
            src: 'musicas/Foreigner I Want to Know What Love Is HD TRADUÇÃO romanticas8080.mp3'  
        },
         {
            title: ' Baby Can I Hold You',
            artist: 'Tracy Chapman',
            src: 'musicas/Tracy Chapman Baby Can I Hold You HD TRADUÇÃO romanticas8080.mp3'  
        },
         {
            title: 'All Through the Night',
            artist: 'Cyndi Lauper',
            src: 'musicas/Cyndi Lauper All Through the Night In Japan HD TRADUÇÃO romanticas8080.mp3'  
        },
         {
            title: 'Still Loving You',
            artist: 'Scorpions',
            src: 'musicas/Scorpions Still Loving You HD TRADUÇÃO romanticas8080.mp3'  
        },
         {
            title: 'Stuck On You',
            artist: 'Lionel Richie',
            src: 'musicas/Stuck On You.mp3'
        },
          {
            title: 'Flying',
            artist: ' Chris de Burgh',
            src: 'musicas/Flying tradução.mp3'
        },
         {
            title: 'Where Are You Now',
            artist: 'Nazareth ',
            src: 'musicas/Nazareth Where Are You Now HD TRADUÇÃO romanticas8080.mp3'
        },
         {
            title: 'Never Say Goodbye',
            artist: 'Bon Jovi',
            src: 'musicas/Bon Jovi Never Say Goodbye HD TRADUÇÃO romanticas8080.mp3'
        },
         {
            title: 'We re All Alone',
            artist: 'Rita Coolidge',
            src: 'musicas/Rita Coolidge We re All Alone HD TRADUÇÃO romanticas8080.mp3'
        },
         {
            title: 'Lost in Your Eyes',
            artist: 'Debbie Gibson',
            src: 'musicas/Debbie Gibson Lost in Your Eyes HD Tradução romanticas8080.mp3'
        },
         {
            title: 'Lea ',
            artist: 'Toto',
            src: 'musicas/Toto Lea TRADUÇÃO romanticas8080.mp3'
        },
         {
            title: 'Angelica e Ramone',
            artist: 'ecret Service',
            src: 'musicas/Secret Service Angelica e Ramone HD TRADUÇÃO romanticas8080.mp3'
        },
         {
            title: 'Wind of change',
            artist: 'Scorpions',
            src: 'musicas/Scorpions Wind of change HD TRADUÇÃO romanticas8080.mp3'
        },
           {
            title: 'The Sunshine Band Please Don t Go',
            artist: 'KC',
            src: 'musicas/KC The Sunshine Band Please Don t Go HD TRADUÇÃO romanticas8080.mp3'
        },
           {
            title: 'Sailing',
            artist: 'Rod Stewart',
            src: 'musicas/Sailing Tradução Rod Stewart.mp3'
        },
           {
            title: 'Don t Close Your Eyes Tonight ',
            artist: 'John Denver',
            src: 'musicas/John Denver Don t Close Your Eyes Tonight HD TRADUÇÃO romanticas8080.mp3'
        },
           {
            title: 'It Must Have Been Love',
            artist: 'Roxette',
            src: 'musicas/Roxette It Must Have Been Love Official Music Video.mp3'
        },
           {
            title: 'Alone',
            artist: 'Heart',
            src: 'musicas/Heart Alone.mp3'
        },
            {
            title: 'Making love out of nothing at all ',
            artist: 'Air Supply',
            src: ' musicas/Legendado.mp3'
        },
               {
            title: 'All Out Of Love ',
            artist: 'Air Supply ',
            src: 'musicas/Air Supply All Out Of Love Official HD Video.mp3'
        },
               {
            title: 'Just As I Am',
            artist: 'Air Supply ',
            src: 'musicas/Air Supply Just As I Am.mp3'
        },
                {
            title: 'Empty Garden Hey Hey Johnny',
            artist: 'Elton John',
            src: 'musicas/Empty Garden Hey Hey Johnny.mp3'
        },
                {
            title: 'Hard to Say I m Sorry',
            artist: 'Chicago Band',
            src: 'musicas/Hard to Say I m Sorry 2009 Remaster.mp3'
        },
             {
            title: 'You re The Inspiration',
            artist: 'Chicago Band',
            src: 'musicas/Chicago You re The Inspiration Lyrics.mp3'
        },
             {
            title: 'Every Time You Go Away',
            artist: 'Paul Young',
            src: 'musicas/Every Time You Go Away.mp3'
        },
              {
            title: 'Careless Whisper',
            artist: 'George Michael',
            src: 'musicas/Careless Whisper.mp3'
        },
              {
            title: 'Always',
            artist: 'Tlantic Starr',
            src: 'musicas/Always.mp3'
        },
              {
            title: 'JANE ',
            artist: 'CENTURY',
            src: 'musicas/CENTURY JANE legendado.mp3'
        },
              {
            title: 'Gone with the winner',
            artist: 'Century',
            src: 'musicas/Century Gone with the winner tradução.mp3'
        },
              {
            title: 'Vivir sin aire',
            artist: 'Maná ',
            src: 'musicas/Maná Vivir sin aire LEGENDADO PORTUGUÊS.mp3'
        },
        
       
    ];

    let currentSongIndex = 0;
    let isPlaying = false;

    // Função para carregar a música
    function loadSong(song) {
        audio.src = song.src;
        songTitle.textContent = song.title;
        artistName.textContent = song.artist;
        // O `load()` é importante para que o navegador carregue os metadados da nova música
        audio.load();
    }

    // Função para tocar/pausar
    function playPauseSong() {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            audio.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    }

    // Função para avançar para a próxima música
    function nextSong() {
        currentSongIndex++;
        if (currentSongIndex > playlist.length - 1) {
            currentSongIndex = 0; // Volta para a primeira se for a última
        }
        loadSong(playlist[currentSongIndex]);
        if (isPlaying) { // Se estava tocando, continua tocando
            audio.play();
        } else {
            // Se estava pausado, reseta o botão para play
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    // Função para voltar para a música anterior
    function prevSong() {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = playlist.length - 1; // Volta para a última se for a primeira
        }
        loadSong(playlist[currentSongIndex]);
        if (isPlaying) { // Se estava tocando, continua tocando
            audio.play();
        } else {
            // Se estava pausado, reseta o botão para play
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    // Atualiza a barra de progresso e os tempos
    audio.addEventListener('timeupdate', (e) => {
        const { duration, currentTime } = e.target;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;

        // Atualiza o tempo atual
        let currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;
        currentTimeSpan.textContent = `${currentMinutes}:${currentSeconds}`;
    });

    // Quando a música é carregada e seus metadados estão disponíveis
    audio.addEventListener('loadedmetadata', () => {
        const duration = audio.duration;
        let durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) durationSeconds = `0${durationSeconds}`;
        durationTimeSpan.textContent = `${durationMinutes}:${durationSeconds}`;
    });

    // Avança para a próxima música quando a atual termina
    audio.addEventListener('ended', () => {
        nextSong();
    });

    // Clica na barra de progresso para mudar o tempo da música
    progressContainer.addEventListener('click', (e) => {
        const width = progressContainer.clientWidth; // Largura total da barra
        const clickX = e.offsetX; // Posição do clique em relação ao contêiner
        const duration = audio.duration;

        audio.currentTime = (clickX / width) * duration;
    });

    // Event Listeners para os botões
    playPauseBtn.addEventListener('click', playPauseSong);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);

    // Carrega a primeira música ao iniciar
    loadSong(playlist[currentSongIndex]);
});