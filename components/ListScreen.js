import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const movieData = [
  {
    id: 1,
    name: 'The Fast and The Furious',
    genre: 'Action',
    image: require('../assets/MoviePics/1.jpg'),
    details: {
      year: 2001,
      rating: 8,
      description: "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy."
    },
    comments: 'Classic and deals with a lot of things about cars.'
  },
  {
    id: 2,
    name: '2 Fast 2 Furious',
    genre: 'Action',
    image: require('../assets/MoviePics/2.jpg'),
    details: {
      year: 2003,
      rating: 10,
      description: "Former cop Brian O'Conner is called upon to bust a dangerous criminal and he recruits the help of a former childhood friend and street racer who has a chance to redeem himself."
    },
    comments: 'Good story and screenplay'
  },
  {
    id: 3,
    name: 'The Fast and The\nFurious: Tokyo Drift',
    genre: 'Action',
    image: require('../assets/MoviePics/3.jpg'),
    details: {
      year: 2006,
      rating: 8,
      description: 'A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.'
    },
    comments: 'Displays the amazing car culture of Tokyo, Japan.'
  },
  {
    id: 4,
    name: 'Fast and Furious',
    genre: 'Action',
    image: require('../assets/MoviePics/4.jpg'),
    details: {
      year: 2009,
      rating: 8,
      description: "Brian O' Conner, back working for the FBI in Los Angeles, teams up with Dominic Toretto to bring down a heroin importer by infiltrating his operation."
    },
    comments: 'A lot of stunts and good cars are here.'
  },
  {
    id: 5,
    name: 'Fast Five',
    genre: 'Action',
    image: require('../assets/MoviePics/5.jpg'),
    details: {
      year: 2011,
      rating: 8,
      description: 'Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom while in the sights of a powerful Brazilian drug lord and a dangerous federal agent.'
    },
    comments: 'My favorite among all the Fast and Furious movies.'
  },
  {
    id: 6,
    name: 'Fast and Furious 6',
    genre: 'Action',
    image: require('../assets/MoviePics/6.jpg'),
    details: {
      year: 2013,
      rating: 8,
      description: 'Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty.'
    },
    comments: 'Presents a whole new set of environment for the crew.'
  },
  {
    id: 7,
    name: 'Furious 7',
    genre: 'Action',
    image: require('../assets/MoviePics/7.jpg'),
    details: {
      year: 2015,
      rating: 8,
      description: 'Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.'
    },
    comments: 'Starts to focus on character stories rather than cars.'
  },
  {
    id: 8,
    name: 'The Fate of the Furious',
    genre: 'Action',
    image: require('../assets/MoviePics/8.jpg'),
    details: {
      year: 2017,
      rating: 8,
      description: 'When a mysterious woman seduces Dominic Toretto into the world of terrorism and a betrayal of those closest to him, the crew face trials that will test them as never before.'
    },
    comments: 'Shows amazing piece of technology that is a product of hacking.'
  },
  {
    id: 9,
    name: 'F9: The Fast Saga',
    genre: 'Action',
    image: require('../assets/MoviePics/9.jpg'),
    details: {
      year: 2021,
      rating: 8,
      description: "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother."
    },
    comments: "Has some weird technology that is far from it's genre. Suddenly had a mix of science fiction."
  },
  {
    id: 10,
    name: 'Fast X',
    genre: 'Action',
    image: require('../assets/MoviePics/10.jpg'),
    details: {
      year: 2023,
      rating: 8,
      description: 'Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.'
    },
    comments: 'Aquaman suddenly became a car guy HAHAHAHAHAHA.'
  },
];

const MovieListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
    style={tw `rounded-xl border-2 border-black mb-4 bg-white shadow-md`}
    onPress={() => navigation.navigate('Movie Details', { movie: item })}>
      <View style={tw `justify-center items-center mb-2`}>
        <Image source={item.image} style={[tw `w-full rounded-t-lg`,{resizeMode: 'cover'}]} />
        <View style={tw `px-2`}>
          <Text style={tw `text-lg font-bold mt-2 text-center`}>{item.name}</Text>
          <Text style={tw `text-base text-[#888888] text-center`}>{item.genre}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={tw `flex-1 justify-center items-center pt-4`}>
      <FlatList
        data={movieData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MovieListScreen;
