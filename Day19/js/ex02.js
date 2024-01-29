function DaoInteger(number) {
  while (number !== 0) {
    const lastNumber = number % 10;

    DaoNumber = DaoNumber * 10 + lastNumber;

    number = (number / 10) | 0;
  }

  return DaoNumber;
}

let DaoNumber = 0;
const number = 12850;
const Dnumber = DaoInteger(number);

console.log(`Số gốc: ${number}`);
console.log(`Số đảo : ${Dnumber}`);
