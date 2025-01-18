function unlockWeapons(weaponCount = 99, currencyCount = 9999) {
    function generateItemData(itemList, isCurrency = false) {
        let dataList = [];
        let currentCount = isCurrency ? currencyCount : weaponCount;
        
        itemList.forEach(item => {
            dataList.push(`{"N":"${currentCount}","ID":${item.ID}}`);
        });

        return `[${dataList.join(',')}]`;
    }

    const gameData = Boot.prototype.game['_state']['_states'].get('Boot')['_gameData'];
    const userBackpack = Boot.prototype.game['_state']['_current'].user.source.backpack;

    const weapons = generateItemData(gameData.weapon);
    const outfits = generateItemData(gameData.outfit);
    const hats = generateItemData(gameData.hat);
    const relics = generateItemData(gameData.relic);
    const fossils = generateItemData(gameData.fossil);
    const items = generateItemData(gameData.item);
    const boots = generateItemData(gameData.boots);
    const spellRelics = generateItemData(gameData.spellRelic);
    const currency = generateItemData(gameData.currency, true);
    const followers = generateItemData(gameData.follow);
    const mounts = generateItemData(gameData.mount);
    const mathInt = generateItemData(gameData.mathTownInterior);
    const mathTownFrame = generateItemData(gameData.mathTownFrame);
    const keys = generateItemData(gameData.key);
    const emotes = generateItemData(gameData.emote);

    Boot.prototype.game['_state']['_current'].user.source.house.data.items = {};
    const houseData = {
        A: [],
        N: weaponCount,
    };

    Boot.prototype.game['_state']['_states']
        .get('Boot')
        ['_gameData'].dorm.forEach(item => {
            Boot.prototype.game['_state']['_current'].user.source.house.data.items[item.ID] = houseData;
        });

    userBackpack.data.weapon = JSON.parse(weapons);
    userBackpack.data.item = JSON.parse(items);
    userBackpack.data.outfit = JSON.parse(outfits);
    userBackpack.data.relic = JSON.parse(relics);
    userBackpack.data.boots = JSON.parse(boots);
    userBackpack.data.hat = JSON.parse(hats);
    userBackpack.data.currency = JSON.parse(currency);
    userBackpack.data.fossil = JSON.parse(fossils);
    userBackpack.data.follow = JSON.parse(followers);
    userBackpack.data.mount = JSON.parse(mounts);
    userBackpack.data.key = JSON.parse(keys);
    userBackpack.data.spellRelic = JSON.parse(spellRelics);
}

let weaponCount = parseInt(prompt('Made by rxzyx (rzx)DEOBFED BY WRESTLE. How many of every weapon do you want?'));
let currencyCount = parseInt(prompt('Made by rxzyx (rzx)DEOBFED BY WRESTLE. How many of every currency do you want?'));

if (weaponCount && currencyCount) {
    unlockWeapons(weaponCount, currencyCount);
    alert('Done, made by rxzyx (rzx) DEOBFED BY WRESTLE.');
} else {
    alert('Unexpected Answer');
}
