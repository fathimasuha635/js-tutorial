const user = {
  name: 'suha',
  age: 16,
  gender: 'female',
  role: 'user'
}
const student = {
  name: 'suha',
  age: 18,
  gender: 'female',
  role: 'student'
}

function isEven (num) {
  if (num % 2 === 0) {
    console.log(num)
  }
}
// for (let i = 0; i <= 10; i++) {
//   isEven(user.age)
// }

// create a function, where pass the user object as a prop and check the age if its greater than 18 return true else false.
// refer above user obect
// Expected Output: 18 => true 17 false

function checkAge (age) {
  if (!age) {
    console.log('pls provide user age')
  }
  if (age >= 18) {
    console.log(true)
  } else {
    console.log(false)
  }
}

checkAge(user.age)
