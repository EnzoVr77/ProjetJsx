type TrackTitleProps = {
    title: string;
};

export default function TrackTitle({ title }: TrackTitleProps) {
    return <p className="text-lg font-semibold text-white">{title}</p>;
}
