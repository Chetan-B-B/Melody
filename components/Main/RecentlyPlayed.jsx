import RecentlyPlayedList from "./RecentlyPlayedList";

const DUMMY = [
  {
    id: "id1",
    image:
      "https://elevationchurch.s3.amazonaws.com/filedownloads/elevation_podcast_audio.jpg",
    songName: "Elevation",
    creatorName: "Steven Furtick",
  },
  {
    id: "id2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3hO5k3nyTE1eR2DEpzNQO7vvYmiMj2Bhkw&usqp=CAU",
    songName: "The Gary Vee",
    creatorName: "Gary Vee",
  },
  {
    id: "id3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSV3QvDyvwI19LAQwKJFu87WclyPMLOHC7Q&usqp=CAU",
    songName: "The Daily Show",
    creatorName: "Trevor Noah",
  },
  {
    id: "id4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGXSOcVZqiPJSZ_DpE49pzYUA3IVIeHJ14Rw&usqp=CAU",
    songName: "Daily Podcast",
    creatorName: "joel osteen",
  },
  {
    id: "id5",
    image:
      "https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461335?b=1&k=20&m=1289461335&s=170667a&w=0&h=7L30Sh0R-0JXjgqFnxupL9msH5idzcz0xZUAMB9hY_k=",
    songName: "The MindSet Menotr",
    creatorName: "Rob Dial",
  },
];

const RecentlyPlayed = () => {
  return (
    <div>
      <h3 className="font-medium leading-tight text-2xl mt-0 mb-2 tracking-wider">
        RECENTLY PLAYED
      </h3>
      {DUMMY.map((el) => {
        return <RecentlyPlayedList key={el.id} {...el} />;
      })}
    </div>
  );
};

export default RecentlyPlayed;
