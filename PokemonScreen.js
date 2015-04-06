'use strict';

var React = require('react-native');
var {
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

var getImageSource = require('./getImageSource');
var PokemonCell = require('./PokemonCell');
var PokemonType = require('./PokemonType');

var PokemonScreen = React.createClass({
  render: function() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
          <Image
            source={getImageSource(this.props.pokemon, false)}
            style={styles.detailsImage}
          />
          <View style={styles.rightPane}>
            <Text style={styles.pokemonName}>{this.props.pokemon.name}</Text>
            <PokemonType types={this.props.pokemon.types} />
            <View>
              <View style={styles.caract}>
                <Text style={styles.caractTitle}>Height:</Text>
                <Text style={styles.caractValue}>
                  {this.props.pokemon.height/10}m
                </Text>
              </View>
              <View style={styles.caract}>
                <Text style={styles.caractTitle}>Weigth:</Text>
                <Text style={styles.caractValue}>
                  {this.props.pokemon.weight/10}kg
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <Text>
          {this.props.pokemon.description}
        </Text>
        <View style={styles.separator} />
        <Evolution evolutions={this.props.pokemon.evolutions} />
      </ScrollView>
    );
  },
});

var Evolution = React.createClass({
  render: function() {
    if (!this.props.evolutions || !this.props.evolutions[0]) {
      return null;
    }

    return (
      <View>
        <Text style={styles.evolution}>Evolution</Text>
        {this.props.evolutions.map(pok =>
          <PokemonCell pokemon={pok} />
        )}
      </View>
    );
  },
});

var styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
  },
  rightPane: {
    justifyContent: 'space-between',
    flex: 1,
  },
  pokemonName: {
    flex: 1,
    fontSize: 20,
    fontWeight: '500',
  },
  caract: {
    marginTop: 5,
  },
  caractTitle: {
    fontSize: 14,
  },
  caractValue: {
    fontSize: 18,
    fontWeight: '500',
  },
  mainSection: {
    flexDirection: 'row',
  },
  detailsImage: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1 / PixelRatio.get(),
    marginVertical: 10,
  },
  evolution: {
    fontWeight: '500',
    marginBottom: 3,
  },
});

module.exports = PokemonScreen;
