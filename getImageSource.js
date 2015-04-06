'use strict';

function getImageSource(pokemon: Object, mini: boolean): {uri: ?string} {
  if (pokemon.pkdx_id > 10000) {
    return { uri: 'http://babol.me/assets/pokemon/mini/mega_evo/' + pokemon.pkdx_id + '.gif' }
  }

  return mini ? { uri: 'http://babol.me/assets/pokemon/mini/' + pokemon.pkdx_id + '.png' }
              : { uri: 'http://babol.me/assets/pokemon/full/' + pokemon.pkdx_id + '.png' };
}

module.exports = getImageSource;
