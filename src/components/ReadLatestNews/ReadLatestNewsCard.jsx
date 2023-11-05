const ReadLatestNewsCard = ({ news }) => {
  console.log(news);
  return (
    <div className="space-y-4">
      <img
        src={news?.image}
        alt={`image of news ${news.title}`}
        className="h-48 w-full"
      />
      <p className="font-medium text-lg">{news?.title}</p>
      <p>{news?.date}</p>
    </div>
  );
};

export default ReadLatestNewsCard;
