function parseJwt(token) {
  return JSON.parse(atob(token.split('.')[1]));
}

const user_id = Boot.prototype.game['_state']['_current'].user.source.userID;
const hp = Boot.prototype.game['_state']['_current'].user.source.data.hp;

function unlockPets(level = 100) {
  const firstFunc = (function () {
    let initialized = true;
    return function (context, callback) {
      let method = initialized
        ? function () {
            if (callback) {
              const result = callback.apply(context, arguments);
              callback = null;
              return result;
            }
          }
        : function () {};
      initialized = false;
      return method;
    };
  })();

  const secondFunc = (function () {
    let initialized = true;
    return function (context, callback) {
      let method = initialized
        ? function () {
            if (callback) {
              const result = callback.apply(context, arguments);
              callback = null;
              return result;
            }
          }
        : function () {};
      initialized = false;
      return method;
    };
  })();

  const firstCallback = firstFunc(this, function () {
    return firstCallback
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(firstCallback)
      .search('(((.+)+)+)+$');
  });
  firstCallback();

  const secondCallback = secondFunc(this, function () {
    let context;
    try {
      const constructor = Function('return (function() {}.constructor("return this")())');
      context = constructor();
    } catch (e) {
      context = window;
    }
    const consoleMethods = (context.console = context.console || {});
    const logMethods = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
    for (let i = 0; i < logMethods.length; i++) {
      const boundMethod = secondFunc.constructor.prototype.bind(secondFunc);
      const methodName = logMethods[i];
      const originalMethod = consoleMethods[methodName] || boundMethod;
      boundMethod['__proto__'] = secondFunc.bind(secondFunc);
      boundMethod.toString = originalMethod.toString.bind(originalMethod);
      consoleMethods[methodName] = boundMethod;
    }
  });
  secondCallback();

  fetch(`https://api.prodigygame.com/game-api/v1/character/${user_id}?userID=${user_id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: sessionStorage.getItem('JWT_TOKEN'),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      function createPetData(includeStats = true) {
        const petsData = [];
        Boot.prototype.game['_state']['_states']
          .get('Boot')
          ['_gameData'].pet.forEach((pet) => {
            if (includeStats) {
              petsData.push(
                `{"levelCaught":${data.data.level},"ID":"${pet.ID}","stars":99999,"catchDate":${Date.now()},"level":${level},"foreignSpells":[61,67,55,58,70,81,75,78]}`
              );
            } else {
              petsData.push(
                `{"firstSeenDate":${Date.now()},"ID":"${pet.ID}","timesBattled":1,"timesRescued":1}`
              );
            }
          });
        return `[${petsData.join(',')}]`;
      }

      const petData = createPetData();
      const encounterPetData = createPetData(false);

      data.pets = JSON.parse(petData);
      data.encounters.pets = JSON.parse(encounterPetData);

      fetch(`https://api.prodigygame.com/game-api/v3/characters/${user_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: sessionStorage.getItem('JWT_TOKEN'),
          Accept: 'application/json',
        },
        body: JSON.stringify({
          data: JSON.stringify(data),
          userID: user_id,
        }),
      });
    });
}

const level = parseInt(
  prompt('Made by rxzyx (rzx)DEOBFED BY WRESTLE. Unlocking all pets, what level do you want them to be?')
);

if (level) {
  unlockPets(level);
  alert('You will need to login again.');
  window.location.reload();
} else {
  alert('Unexpected Answer');
}
