
const information = (maj, lastName, firstName, age, sex) => {
  age = Number(age)
  console.log(`prenom: ${lastName}`)
  console.log(`nom: ${firstName}`)
  console.log(`age: ${age}`)
  switch (sex) {
    case ('M'):
      if (age < maj) {
        return console.log(`Monsieur, vous serez majeur dans ${age - maj} ans`)
      } else {
        return console.log(`Monsieur, vous êtes majeur depuis ${age - maj} ans`)
      }
      break
    case ('F'):
      if (age < maj) {
        return console.log(`Madame, vous serez majeur dans ${age - maj} ans`)
      } else {
        return console.log(`Madame, vous êtes majeur depuis ${age - maj} ans`)
      }
      break
    case ('?'):
      if (age < maj) {
        return console.log(`Vous serez majeur dans ${age - maj} ans`)
      } else {
        return console.log(`Vous êtes majeur depuis ${age - maj} ans`)
      }
      break
  }
}
let maj = 18

information('Sofiane', 'Akermoun', 39, 'M')