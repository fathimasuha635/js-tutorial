const user = {
  name: 'suha',
  age: 18,
  subjects: {
    english: 34,
    hindi: 35,
    kannada: 36,
  }
}
const {english, hindi, kannada} = user.subjects
const totalMarks = english+hindi+kannada
if(english>=35 && hindi>=35 && kannada>=35 ){
    console.log(true);
} else {
    console.log(false);
}


