import { useRef, useState } from "react";
import "./MoodSongs.css";

const MoodSongs = ({ songs }) => {
  const audioRefs = useRef([]); // store refs for each audio
  const [currentSong, setCurrentSong] = useState(null); // track which song is playing

  const handlePlayPause = (index) => {
    const currentAudio = audioRefs.current[index];
    if (!currentAudio) return;

    // Pause previous audio if different song
    if (currentSong !== null && currentSong !== index) {
      const previousAudio = audioRefs.current[currentSong];
      previousAudio.pause();
      previousAudio.currentTime = 0;
    }

    // Toggle play/pause for current audio
    if (currentSong === index && !currentAudio.paused) {
      currentAudio.pause();
      setCurrentSong(null);
    } else {
      currentAudio.play().catch((err) => console.error(err));
      setCurrentSong(index);
    }

    // Reset button when song ends
    currentAudio.onended = () => {
      setCurrentSong(null);
    };
  };

  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>

      {songs.map((song, index) => (
        <div className="song" key={index}>
          <div className="title">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>

          {/* Hidden audio element */}
          <audio ref={(el) => (audioRefs.current[index] = el)} src={song.audio} />

          {/* Play/Pause button */}
          <div
            className="play-pause-button"
            onClick={() => handlePlayPause(index)}
          >
            {currentSong === index && !audioRefs.current[index]?.paused ? (
              <i className="ri-pause-line"></i>
            ) : (
              <i className="ri-play-circle-fill"></i>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
