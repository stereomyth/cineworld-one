export default function(...args) {
  const result = {};

  if (args.length === 1) {
    for (const prop of Object.keys(args[0])) {
      result[prop] = {
        get() {
          return this.$store.state[prop];
        },
        set(value) {
          this.$store.commit(args[0][prop], value);
        },
      };
    }
  } else {
    for (const prop of Object.keys(args[1])) {
      result[prop] = {
        get() {
          return this.$store.state[args[0]][prop];
        },
        set(value) {
          this.$store.commit(args[0] + '/' + args[1][prop], value);
        },
      };
    }
  }

  return result;
}
