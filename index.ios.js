/**
 * Pokedex React Native App
 * Similar to the Facebook Example:
 * https://github.com/facebook/react-native/tree/master/Examples/Movies
 */
'use strict';

var React = require('react-native');
window.React = React;
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var SearchScreen = require('./SearchScreen');

var Pokedex = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Pokédex',
          component: SearchScreen,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Pokedex', () => Pokedex);
