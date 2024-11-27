import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card, IconButton } from 'react-native-paper';


const movies = [
  { title: 'bicicleta 1', image: 'https://bicimundomx.vtexassets.com/arquivos/ids/161727/Bicicleta-MTB.jpg?v=637865878561900000', description: 'Descripción de bicicleta  1' },
  { title: 'bicicleta  2', image: 'https://bicimundomx.vtexassets.com/arquivos/ids/161734-800-auto?v=637865878613570000&width=800&height=auto&aspect=true', description: 'Descripción de bicicleta 2' },
  { title: ' Audifono 3', image: 'https://m.media-amazon.com/images/I/61xIIdwxwRL.jpg', description: 'Descripción de bicicleta  3' },
  { title: 'bicicleta 4', image: 'https://www.ubuy.hn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODEydWh5UUlTbkwuX0FDX1NMMTUwMF8uanBn.jpg', description: 'Descripción de bicicleta 4' },
  { title: 'bicicleta  5', image: 'https://biciclub.com/wp-content/uploads/2021/01/Scalpel-carbon2-400x240.jpg', description: 'Descripción de bicicleta  5' },
  { title: 'bicicleta  6', image: 'https://subeybajabikes.com/blog/wp-content/uploads/2024/02/megamo-raise-15-sh12-blanca.jpg', description: 'Descripción de bicicleta  6' },
];

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [viewFavorites, setViewFavorites] = useState(false);

  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(movie)
        ? prevFavorites.filter((fav) => fav !== movie)
        : [...prevFavorites, movie]
    );
  };

  const showDescription = (movie) => {
    setSelectedMovie(movie);
  };

  const displayedMovies = viewFavorites ? favorites : movies;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>App bicicletas johansitoweb</Text>
          <TouchableOpacity onPress={() => setViewFavorites(!viewFavorites)}>
            <Text style={styles.favoritesText}>{viewFavorites ? 'Ver Todas' : 'Ver Favoritas'}</Text>
          </TouchableOpacity>
        </View>
        {selectedMovie ? (
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>{selectedMovie.title}</Text>
            <Text style={styles.descriptionText}>{selectedMovie.description}</Text>
            <Image source={{ uri: selectedMovie.image }} style={styles.descriptionImage} />
          </View>
        ) : (
          <View style={styles.moviesContainer}>
            {displayedMovies.map((movie, index) => (
              <Card key={index} style={styles.card}>
                <Image source={{ uri: movie.image }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle} onPress={() => showDescription(movie)}>{movie.title}</Text>
                  <IconButton
                    icon={favorites.includes(movie) ? 'heart' : 'heart-outline'}
                    color={favorites.includes(movie) ? 'red' : 'white'}
                    size={20}
                    onPress={() => toggleFavorite(movie)}
                  />
                </View>
              </Card>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 8,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  favoritesText: {
    fontSize: 18,
    color: '#ffffff',
    marginTop: 10,
  },
  moviesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: '#333333',
    marginBottom: 20,
    width: '45%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  descriptionContainer: {
    alignItems: 'center',
    padding: 20,
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 20,
  },
  descriptionImage: {
    width: 200,
    height: 300,
  },
});