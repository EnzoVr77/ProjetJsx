type Track = {
    id: number;
    title: string;
    preview: string;
    album: {
        cover_medium: string;
    };
};

export default function TrackCard({ track }: { track: Track }) {
    return (
        <div className="bg-gradient-to-br from-purple-800 to-purple-600 p-4 rounded-xl shadow-xl hover:scale-[1.02] transition-all duration-300">
            <img
                src={track.album.cover_medium}
                alt={`Cover of ${track.title}`}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-lg font-semibold text-white mb-2 text-center">{track.title}</p>
            <audio controls src={track.preview} className="w-full rounded-md" />
        </div>
    );
}
