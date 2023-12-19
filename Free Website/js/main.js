





const allLinks = document.querySelectorAll('a');

const linkedToWood = [];
for (const link of allLinks) {
  if (link.href.includes('#wood')){
    linkedToWood.push(link);
  }
}


// make the recipes fill in a link to the building that requires it to be built.