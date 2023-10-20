import SongBar from "./SongBar";
const RelatedSongs = ({
  data: data,
  activeSong,
  isPlaying,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => {
  console.log(data);
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-white">Related Songs:</h2>
      <div className="mt-6 w-full flex flex-col">
        {data?.map((song, i) => (
          <SongBar
            key={`${artistId}-${song.key}-${i}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
