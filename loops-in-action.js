//Sum numbers
const calculateSumButton = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}

calculateSumButton.addEventListener("click", calculateSum);

//Highlight Links
const highlightLinksButton = document.querySelector("#highlight-links button");

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButton.addEventListener("click", highlightLinks);

//Your Information
const dummyUserData = {
  firstName: "Godwin",
  lastName: "Chinda",
  age: 25,
};

const displayUserDataButton = document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataList = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataList.textContent = outputText;
    outputDataElement.append(newUserDataList);
  }
}

displayUserDataButton.addEventListener("click", displayUserData);

//Statistics
const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Math.floor(): 5.64 =>5
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement = document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    //     if (rolledNumber == enteredNumber) {
    //         hasRolledTargetNumber = True;
    //     }
    numberOfRolls++;
    const newRollListItemElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById('output-total-rolls');
  const outputTargetNumberElement = document.getElementById('output-target-number');

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);
