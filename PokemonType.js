'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var PokemonType = React.createClass({
  render: function() {
    if (!this.props.types) {
      return null;
    }

    return (
      <View style={styles.type}>
        {this.props.types.map(type =>
          <Text key={type.name} style={[styles.typeIcon, stylesType[type.name] || stylesType.default]}>
            {type.name.toUpperCase()}
          </Text>
        )}
      </View>
    );
  },
});

var styles = StyleSheet.create({
  type: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  typeIcon: {
    flex: 1,
    color: 'white',
    width: 56,
    marginTop: 1,
    marginBottom: 1,
    marginRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderRadius: 2,
    fontSize: 11,
    textAlign: 'center',
  }
});

var stylesType = StyleSheet.create({
  poison: {
    color: '#A040A0',
    borderColor: '#662966',
  },
  grass: {
    color: '#78C850',
    borderColor: '#4A892B',
  },
  water: {
    color: '#6890F0',
    borderColor: '#1753E3',
  },
  fire: {
    color: '#F08030',
    borderColor: '#B4530D',
  },
  ice: {
    color: '#98D8D8',
    borderColor: '#45B6B6',
  },
  electric: {
    color: '#F8D030',
    borderColor: '#C19B07',
  },
  dark: {
    color: '#705848',
    borderColor: '#362A23',
  },
  fairy: {
    color: '#E898E8',
    borderColor: '#D547D5',
  },
  fighting: {
    color: '#C03028',
    borderColor: '#82211B',
  },
  normal: {
    color: '#8A8A59',
    borderColor: '#79794E',
  },
  fly : {
    color: '#A890F0',
    borderColor: '#7762B6',
  },
  psychic: {
    color: '#F85888',
    borderColor: '#D60945',
  },
  bug: {
    color: '#A8B820',
    borderColor: '#616B13',
  },
  rock: {
    color: '#B8A038',
    borderColor: '#746523',
  },
  ghost: {
    color: '#705898',
    borderColor: '#413359',
  },
  dragon: {
    color: '#7038F8',
    borderColor: '#3D07C0',
  },
  steel: {
    color: '#B8B8D0',
    borderColor: '#7A7AA7',
  },
  ground: {
    color: '#E0C068',
    borderColor: '#AA8623',
  },
  default: {
    color: 'grey',
    borderColor: 'black',
  }
});

module.exports = PokemonType;
