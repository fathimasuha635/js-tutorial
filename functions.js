const user = {
  name: 'suha',
  age: 18,
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
for (let i = 0; i <= 10; i++) {
  isEven(user.age)
}
