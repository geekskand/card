import AstronomyCard from './AstronomyCard';

const ImageCard = () => {
  // Extended array of astronomy-related data
  const astronomyData = [

    {
      imageSrc: 'https://images.pexels.com/photos/2866604/pexels-photo-2866604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'Galaxies Far and Wide',
      description: 'A galaxy is a vast collection of stars, dust, and gas bound together by gravity. The Milky Way is just one of billions in the universe.',
    },
    {
      imageSrc: 'https://images.pexels.com/photos/127723/pexels-photo-127723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'Planets of the Solar System',
      description: 'Our solar system contains eight planets, each unique in composition and atmosphere. From rocky worlds to gas giants, they orbit the Sun.',
    },
    {
      imageSrc: 'https://images.pexels.com/photos/957053/pexels-photo-957053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'The Birthplace of Stars: Nebulae',
      description: 'Nebulae are massive clouds of dust and gas where new stars are born. Their colorful displays captivate astronomers and stargazers alike.',
    },
    
   
    {
      imageSrc: 'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'The Moons of Planets',
      description: 'Many planets have moons, each with unique characteristics. Earth’s moon influences tides, while others may harbor subsurface oceans.',
    },
    {
      imageSrc: 'https://images.pexels.com/photos/127744/pexels-photo-127744.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'Asteroids and Meteors',
      description: 'Asteroids are rocky remnants from the solar system’s formation. When they enter Earth’s atmosphere, they become meteors, often burning brightly.',
    },
    {
      imageSrc: 'https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'Auroras in the Sky',
      description: 'Auroras, or the northern and southern lights, are natural light displays in the Earth’s sky caused by charged particles colliding with atoms in the atmosphere.',
    },
   
    {
      imageSrc: 'https://images.pexels.com/photos/355395/pexels-photo-355395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'The Sun and Its Influence',
      description: 'The Sun is the star at the center of our solar system, providing light, heat, and energy that make life possible on Earth.',
    },
    
    
    {
      imageSrc: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'Gravitational Waves',
      description: 'Gravitational waves are ripples in space-time caused by massive celestial events, such as merging black holes or neutron stars.',
    },
  ];

  return (
    <div className="min-h-screen p-5 bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {astronomyData.map((item, index) => (
          <AstronomyCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            cardStyle="w-[300px] h-[450px]" // Fixed size for consistent cards
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCard;

