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
