// ==============================
// 🌱 Sélection des éléments
// ==============================
const addBt = document.querySelector('#createHero');
// ==============================
// 🧠 Variables globales
// ==============================
const heroes = []
// ==============================
// 🎊 Fonctionnalités & Classes
// ==============================
class Chevalier {
  constructor(name, strength, magic) {
    this.name = name,
    this.strength = strength,
    this.magic = magic,
    this.life = 70,
    this.mana = 50,
    this.potions = 2
  }
  shout() {
    return `${this.name.toUpperCase()} entre dans la bataille !`;
  }
  attack(target) {
    if (this.isDead()) {return}
    console.log(`⚔️ ${this.name} attaque ${target.name} avec son épée !`);
    target.getDamages(this.strength);
  }
  magicAttack(target) {
    if (this.mana < 20) {
      return `${this.name} n'a pas assez de mana pour lancer le sort ...`;
    }
    if (this.isDead()) {return}
    console.log(`🔥 ${this.name} lance une boule de feu sur ${target.name}`);
    target.getDamages(this.magic);    
    this.mana -= 20;
    return `🔮 Mana restante de ${this.name} : ${this.mana}`;
  }
  getDamages(dgts) {
    this.life -= dgts;
    if (this.life <= 0) {
      this.life = 0;
      console.log(`💀 ${this.name} est tombé au combat ...`);
    } else {
      console.log(`❤️ ${this.name} a encore ${this.life} PV`);
    }
  }
  usePotion() {
    if (this.potions > 0 && !this.isDead()) {
      this.life += 30;
      this.potions--;
      if (this.life >= 100) {
        this.life = 100;
      }
      return `🧉 ${this.name} boit une potion. Vie : ${this.life} | Potions : ${this.potions}`;
    } else {
      return `${this.name} n'a plus de potion !`;
      
    }
  }
  isDead() {
    return this.life <= 0;
  }
}
function addHero(name, strenght, spellpower) {
  const newHero = new Chevalier(name, strenght, spellpower);
  heroes.push(newHero);
  console.log(heroes);
  displayHero(newHero);
}
function resetFields() {
  document.querySelector('#name').value = "";
  document.querySelector('#strength').value = "";
  document.querySelector('#spellPower').value = "";
  document.querySelector('#name').focus();
}
function displayHero(hero) {
  const list = document.querySelector('.hero-list');
  const div = document.createElement('div');
  div.classList.add('hero-card');
  div.innerHTML = `
    <h3>${hero.name}</h3>
    <p>💪 Force : ${hero.strength}</p>
    <p>✨ Magie : ${hero.magic}</p>
    <p>🔮 Mana : ${hero.mana}</p>
    <p>❤️ Vie : ${hero.life}</p>
    <div class="life"><div style="width:${hero.life}%"></div></div>
  `;
  list.appendChild(div);
}
// ==============================
// 🧲 Événements
// ==============================
addBt.addEventListener('click',(e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const strength = parseInt(document.querySelector('#strength').value);
  const magic = parseInt(document.querySelector('#spellPower').value);
  addHero(name, strength, magic);
  resetFields();
})

// 🧪 Tests unitaires
// const Olivier = new Chevalier("Olivier", 20, 10);
// const Mercy = new Chevalier("Mercy", 15, 20);
// console.log(Olivier);
// console.log(Mercy);
// console.log(Olivier.shout());
// console.log(Mercy.shout());
// Olivier.attack(Mercy);
// console.log(Olivier.magicAttack(Mercy));
// console.log(Mercy.usePotion());
// Mercy.attack(Olivier);
// Mercy.attack(Olivier);
// Mercy.attack(Olivier);
// Mercy.attack(Olivier);
// Mercy.attack(Olivier);
// Mercy.attack(Olivier);
// Mercy.attack(Olivier);