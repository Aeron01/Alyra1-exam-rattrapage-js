const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']
const revTab = tab.reverse();
for (let i = 0; i < revTab.length; i++) {
  console.log(`${revTab[i]},Length ${revTab[i].length},Index ${revTab.indexOf(revTab[i])}`)
}

console.log(`\n`)

for (elem of revTab) {
  console.log(`${elem},Length ${elem.length},Index ${revTab.indexOf(elem)}`)
}

console.log(`\n`)

revTab.forEach(valu => console.log(`${valu},Length ${valu.length},Index ${revTab.indexOf(valu)}`));

console.log(`\n`)

let inc = 0
do {
  console.log(`${revTab[inc]},Length ${revTab[inc].length},Index ${revTab.indexOf(revTab[inc])}`)
  inc++

} while (inc < revTab.length)

console.log(`\n`)

let i = 0
while (i < revTab.length) {
  console.log(`${revTab[i]},Length ${revTab[i].length},Index ${revTab.indexOf(revTab[i])}`)
  i++
}