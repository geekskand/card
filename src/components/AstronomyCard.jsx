const AstronomyCard = ({ imageSrc, title, description, cardStyle }) => {
  return (
    <div className={`rounded-lg shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300 ${cardStyle}`}>
      <div className="h-[300px] w-full">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 bg-white dark:bg-gray-800 transition-colors duration-300">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AstronomyCard;


  