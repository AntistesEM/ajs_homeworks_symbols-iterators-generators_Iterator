import Character from './Character';
import Team from './Team';

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Демон',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

const newChar1 = new Character(char1);
const newChar2 = new Character(char2);
const newTeam = new Team();
newTeam.add(newChar1);
newTeam.add(newChar2);

for (const item of newTeam) {
  console.log(item);
}
