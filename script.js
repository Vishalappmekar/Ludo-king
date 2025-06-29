
let wallet = 0;

function loginUser() {
  const user = document.getElementById("username").value;
  if (user.length > 2) {
    document.getElementById("status").innerText = "✅ Logged in as " + user;
  } else {
    alert("Enter valid username");
  }
}

function addCoins() {
  wallet += 10;
  updateWallet();
}

function joinTournament() {
  if (wallet >= 10) {
    wallet -= 10;
    updateWallet();
    document.getElementById("status").innerText = "🎮 Joined Tournament!";
  } else {
    alert("Not enough balance!");
  }
}

function withdraw() {
  if (wallet >= 100) {
    wallet -= 100;
    updateWallet();
    document.getElementById("status").innerText = "💸 Withdraw request sent!";
  } else {
    alert("Minimum ₹100 required to withdraw!");
  }
}

function updateWallet() {
  document.getElementById("wallet").innerText = wallet;
}
