import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import tw from 'twrnc';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={tw `flex-1 pt-6 items-center`}>
      <View style={tw `w-11/12 justify-center items-center bg-[#092635] p-4 rounded-lg`}>
        <Image source={movie.image} style={[tw `w-52 h-72 rounded-lg border-4 border-[#9EC8B9]`,{resizeMode: 'cover'}]} />
        <Text style={tw `text-2xl font-bold my-1 text-[#9EC8B9] text-center`}>{movie.name}</Text>
        <View style={tw `flex-row`}>
          <Text style={tw `text-lg text-[#5C8374] font-bold`}>Year Released: </Text>
          <Text style={tw `text-lg text-[#FFFFFF] font-bold`}>{movie.details.year}</Text>
        </View>
        <View style={tw `flex-row`}>
          <Text style={tw `text-lg text-[#5C8374] font-bold`}>Rating: </Text>
          <Text style={tw `text-lg text-[#FFFFFF] font-bold`}>{movie.details.rating}/10</Text>
        </View>
      </View>
      <ScrollView style={tw `w-11/12 mt-4`}>
        <View style={tw ` justify-center`}>
          <Text style={tw `text-lg text-[#5C8374] font-bold`}>Description:</Text>
          <Text style={tw `text-base text-[#092635]`}>{movie.details.description}</Text>

          <Text style={tw `text-lg text-[#5C8374] font-bold mt-4`}>Comments:</Text>
          <Text style={tw `text-base text-[#092635]`}>{movie.comments}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
