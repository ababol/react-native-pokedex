'use strict';

var React = require('react-native');
var {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;
var getImageSource = require('./getImageSource');
var PokemonType = require('./PokemonType');

var PokemonCell = React.createClass({
  render: function() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.onSelect}>
          <View style={styles.row}>
            <Image
              source={getImageSource(this.props.pokemon, true)}
              style={styles.cellImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.pokemonName} numberOfLines={1}>
                #{this.props.pokemon.pkdx_id} -  {this.props.pokemon.name}
              </Text>
              <Text style={styles.pokemonHp} numberOfLines={1}>
                {this.props.pokemon.height/10}m / {this.props.pokemon.weight/10}kg - HP: {this.props.pokemon.hp}
              </Text>
              <PokemonType types={this.props.pokemon.types} />
            </View>
          </View>
        </TouchableHighlight>
        <View style={styles.cellBorder} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  pokemonName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  pokemonHp: {
    color: '#999999',
    fontSize: 12,
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
  },
  cellImage: {
    backgroundColor: 'white',
    height: 90,
    marginRight: 10,
    width: 90,
  },
  cellBorder: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // Trick to get the thinest line the device can display
    height: 1 / PixelRatio.get(),
    marginLeft: 4,
  }
});

module.exports = PokemonCell;
