// export const randomColor = () =>
//   "#" + Math.floor(Math.random() * 16777215).toString(16);

export const randomColor = () => (Math.random() >= 0.5 ? "#000" : "#efefef");

export const lowRandom = () => Math.random() < 0.01;
