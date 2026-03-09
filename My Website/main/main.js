// const working = (time) =>
//   8 ? 'working hour is overtime' : 'working under time';
// console.log(working(10));

// const names = [
//   {
//     name: 'john',
//     age: 28,
//     grade: '11D',
//     gender: 'Male',
//   },
//   {
//     name: 'Robert',
//     age: 20,
//     grade: '12A',
//     gender: 'Male',
//   },
//   {
//     name: 'Angela',
//     age: 18,
//     grade: '10E',
//     gender: 'Female',
//   },
// ];

// // names.forEach(function (item, index, arr) {
// //   console.log(arr);
// // });

// const newArray = names
//   .map(function (item) {
//     return item;
//   })
//   .join('');

// console.log(newArray);
// const name = ['ronaldo', 'messi', 'makara'];
// console.log(name.reverse());

// const student = [
//   {
//     name: `johnson`,
//     Grade: 1,
//     score: 35,
//   },
//   {
//     name: `ling`,
//     Grade: 5,
//     score: 24,
//   },
//   {
//     name: `Angela`,
//     Grade: 7,
//     score: 39,
//   },
// ];
// const checkScore = () => {
//   for (let i = 0; i < student.length; i++) {
//     const point = student[i].score;
//     student[i].result = `Pass`;
//     student[i].result2 = `Fail`;
//     if (point <= 25) {
//       console.log(
//         `Student : ${student[i].name} \nFrom Grade : ${student[i].Grade} \nScore : ${student[i].score} \nResult : ${student[i].result}\n=========`
//       );
//     } else {
//       console.log(
//         `Student : ${student[i].name} \nFrom Grade : ${student[i].Grade} \nScore : ${student[i].score} \nResult : ${student[i].result2} \n==========`
//       );
//     }
//   }
// };
// checkScore();

// const checkMojilous = (x) => {
//   return x % 2 === 0 ? `Condition Is Odd` : `Condition Is Even`;
// };
// console.log(checkMojilous(8));

// const car = [`bwm`, `tesla`, `roll royce`];
// let i = 0;
// while (i < car.length) {
//   console.log(`No.${i + 1} Brand is ${car[i]}`);
//   i++;
// }

// const student = [
//   {
//     name: `smos`,
//     score: 12,
//   },
//   {
//     name: `Juliet`,
//     score: 20,
//   },
//   {
//     name: `romeo`,
//     score: 9,
//   },
// ];
// for (let i = 0; i < student.length; i++) {
//   const score = student[i].score;
//   if (score > 10) {
//     console.log(
//       `Student :${student[i].name} \nScore : ${student[i].score} \nResult : Pass`
//     );
//   } else {
//     console.log(
//       `Student :${student[i].name} \nScore : ${student[i].score} \nResult : Fail`
//     );
//   }
// }

// const stu = [
//   {
//     name: `john`,
//     age: 20,
//     job: `developer`,
//   },
//   {
//     name: `jessica`,
//     age: 22,
//     job: `dcotor`,
//   },
//   {
//     name: `robert`,
//     age: 25,
//     job: `taxi driver`,
//   },
// ];
// const newArray = stu.map(function (item) {
//   return item;
// });
// console.log(newArray);

// let a = 90;
// let b = true;
// let sum = a - b;
// console.log(sum);

// const welcome = (cbf) => `hello bro ${cbf()}`;
// const name = () => {
//   console.log(`smos`);
// };
// console.log(welcome(name));

// let a = 9;
// const b = 11;
// let sum = a < b ? `true` : `false`;
// console.log(sum);
