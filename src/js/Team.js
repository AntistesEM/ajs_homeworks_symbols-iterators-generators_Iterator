export default class Team {
  constructor() {
    this.team = [];
  }

  add(newChar) {
    this.team.push(newChar);
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this.team.length;
    return {
      next: () => {
        if (current <= last) {
          return {
            done: false,
            value: this.team[current++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
