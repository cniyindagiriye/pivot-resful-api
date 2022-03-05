export const dateToString = (date) => new Date(date).toISOString();

export const join = (t, a, s) => {
  const format = (m) => {
    const f = new Intl.DateTimeFormat('en', m);
    return f.format(t);
  };
  return a.map(format).join(s);
};
