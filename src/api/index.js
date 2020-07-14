import endpoints from './endpoints';
import EndPoint from './EndPoint';

const baseUrl = 'https://pokeapi.co/api/v2';

class PokeApi {
  constructor() {
    Object.keys(endpoints).forEach((k) => {
      if (endpoints[k].path && endpoints[k].method) {
        // root element has path & method
        const { path, method, options = null } = endpoints[k];
        this[k] = new EndPoint({ path, method, options }, baseUrl, k);
        if (endpoints[k].alias) {
          endpoints[k].method.forEach((m) => {
            const aliasMethod = m.toLowerCase();
            this[`${aliasMethod}${endpoints[k].alias}`] = this[k][aliasMethod];
          });
        }
      } else {
        this[k] = {};
      }
      Object.keys(endpoints[k])
        .filter((k) => !['path', 'method', 'options', 'alias'].includes(k))
        .forEach((s) => {
          this[k][s] = new EndPoint(endpoints[k][s], baseUrl, `${k}.${s}`);
          if (endpoints[k][s].alias) {
            endpoints[k][s].method.forEach((m) => {
              const aliasMethod = m.toLowerCase();
              this[`${aliasMethod}${endpoints[k][s].alias}`] = this[k][s][
                aliasMethod
              ];
            });
          }
        });
    });
  }
}

const PokeApiInstance = new PokeApi();
Object.freeze(PokeApiInstance);
export default PokeApiInstance;
