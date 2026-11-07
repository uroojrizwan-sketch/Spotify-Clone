const fileInput = document.getElementById("fileInput")
const songsGrid = document.getElementById("songsGrid")
const audio = document.getElementById("audio")
const playBtn = document.getElementById("playBtn")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const prev = document.getElementById("prev")
const play = document.getElementById("play")
const next = document.getElementById("next")
const progress = document.getElementById("progress")
const volume = document.getElementById("volume")
const currentCover = document.getElementById("currentCover")
const currentArtist = document.getElementById("currentArtist")
const currentTitle = document.getElementById("currentTitle")
const search = document.getElementById("search")



let songs = []
let currentIndex = 0

// load songs

function loadSong(index) {
    const song = songs[index]
    if (!song) return

    audio.src = URL.createObjectURL(song.file)
    currentTitle.textContent = song.title
    currentArtist.textContent = song.artist

    const coverSrc = song.cover && song.cover.trim() !== "" ? song.cover :
        fallbackImages[index % fallbackImages.length]

        currentCover.src = coverSrc

    audio.play()
    play.className = "ti ti-player-pause"

}

// play toggle

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play()
        play.className = "ti ti-player-pause"
    } else {
        audio.pause()
            play.className = "ti ti-player-play"
        
    }
})

// next song 
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length
    loadSong(currentIndex)
})

// prev song
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length
    loadSong(currentIndex)
})

// progress
audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0
})

// seek

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration
})

// vol

volume.addEventListener("input", () => {
    audio.volume = volume.value
})

// search

search.addEventListener("input", () => {
    const query = search.value.toLowerCase()
    Array.from(songsGrid.children).forEach((card) => {
        const title = card.dataset.title.toLowerCase()
        card.style.display = title.includes(query) ? "block" : "none"
    })
})

// random fallback artist

const randomArtists = [
    "John", "sam", "sarah", "james"
]

// helper get random artists

function getRandom() {
    return randomArtists[Math.floor(Math.random() * randomArtists.length)]
}

// load songs
fileInput.addEventListener("change", (e) => {
    songs = []
    songsGrid.innerHTML = ""
    const files = Array.from(e.target.files).filter((f) => f.type.startsWith("audio"))
    files.forEach((file, idx) => {
        let song = { file, title: file.name, artist: "", cover: "" }

        new jsmediatags.Reader(file).read({
            onSuccess: (tag) => {
                if (tag.tags.title) song.title = tag.tags.title
                if (tag.tags.artist && tag.tags.artist.trim() !== "") {
                    song.artist = tag.tags.artist
                } else {
                    song.artist = getRandom()
                }
                if (tag.tags.picture) {
                    let data = tag.tags.picture.data
                    let format = tag.tags.picture.format
                    let base64 = "";
                    for (let i = 0; i < data.length; i++){
                        base64 += String.fromCharCode(data[i]);}
                    song.cover = `data:${format};base64,${window.btoa(base64)}`;

                }
                renderSong(song, idx)
            },
            onError: () => {
                song.artist = getRandom()
                renderSong(song, idx)
            }
        })
        songs.push(song)
    })
})
// fallback img
const fallbackImages = [
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg",
    "image/4.jpg",
    "image/5.jpg",
    "image/6.jpg",
    "image/7.jpg",
]

// render songs

function renderSong(song, idx) {
    const card = document.createElement("div")
    card.className = "bg-zinc-900 hover:bg-zinc-800 p-3 rounded-lg cursor-pointer"
    card.dataset.title = song.title

    // cover img
    const coverSrc = song.cover && song.cover.trim() !== "" ? song.cover : fallbackImages[idx % fallbackImages.length]

    card.innerHTML = `
    <img src="${coverSrc}"
    class = "w-full h-32 object-cover rounded mb-2" />
    <p class = "font-bold truncate">${song.title}<p/>
    <p class = " text-xs text-gray-400 truncate" > ${song.artist}<p/>
    `

    card.addEventListener("click",()=>{
        currentIndex = idx
        loadSong(currentIndex)
    })

    songsGrid.appendChild(card)
}