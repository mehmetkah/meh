const judgeVegetable = function (vegetables, metric) {
  if (metric === "redness") {
    let rednessArray = [];
    for (let i = 0; i < vegetables.length; i++) {
      rednessArray.push(vegetables[i].redness);
    }
    const highestRedness = Math.max(...rednessArray);
    const vegetable = vegetables.find((x) => x.redness === highestRedness);
    return vegetable.submitter;
  } else if (metric === "plumpness") {
    let plumpnessArray = [];
    for (let i = 0; i < vegetables.length; i++) {
      plumpnessArray.push(vegetables[i].plumpness);
    }
    const highestPlumpness = Math.max(...plumpnessArray);
    const vegetable = vegetables.find((x) => x.plumpness === highestPlumpness);
    return vegetable.submitter;
  }
};
