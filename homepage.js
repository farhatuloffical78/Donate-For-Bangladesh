// sticky scrolling part

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const nav = document.getElementById('nav');

  if (window.scrollY > 50) { 
    header.classList.add('backdrop-filter','bg-opacity-30', 'backdrop-blur-lg' ); 
    // nav.classList.remove('bg-navber');
    nav.classList.add('bg-navber', 'backdrop-filter','bg-opacity-30', 'backdrop-blur-lg');
  } else {
    nav.classList.add('bg-navber'); 
    nav.classList.remove('backdrop-filter','bg-opacity-30', 'backdrop-blur-lg');
    header.classList.remove('backdrop-filter','bg-opacity-30', 'backdrop-blur-lg' ); 
  }
});

// Shared function
// get input value
function getInputById(id) {
  const input = parseFloat(document.getElementById(id).value);
  return  input; 
}
// get button value
function getButtonValue(id) {
  const input = parseFloat(document.getElementById(id).innerText);
  return  input; 
}
// set time date formate
function formatDateTime(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const datePart = date.toLocaleDateString('en-BD', options);
  const timePart = date.toLocaleTimeString('en-BD', { hour: '2-digit', minute: '2-digit', hour12: true });
  return `${datePart} at ${timePart}`;
}

// Donate button for Noakhali
document.getElementById('button1').addEventListener('click', function() {
  const balance = getButtonValue('forNoakhali');
  const amount = getButtonValue('originalamount');
  const donateAmount = getInputById('money');
  if (isNaN(donateAmount) || donateAmount <= 0 || donateAmount.toString().trim() === '') {
    document.getElementById('money').value = '';
    return alert('Invalid input');
}
if(amount < donateAmount ){
  document.getElementById('money').value = ''; 
  return alert('Insufficient Balance');
}
  const totalDonatedAmount = balance + donateAmount; // Fixed typo
  const currentBalance = amount - donateAmount;

  document.getElementById('originalamount').innerText = currentBalance.toFixed(2);
  document.getElementById('forNoakhali').innerText = totalDonatedAmount.toFixed(2);
  document.getElementById('money').value = '';


   const historyItem = document.createElement('div');
  historyItem.className = 'border rounded-lg bg-white border-gray-300 mb-5 p-10';
  
  historyItem.innerHTML = `
    <p class="text-lg text-black font-bold">${donateAmount.toFixed(2)} BDT is donated for famine-2024 at Noakhali, Bangladesh</p>
    <p class="text-base text-gray-500">${formatDateTime(new Date())}</p>
  `;
  
  const history = document.getElementById('historylist');
  history.insertBefore(historyItem, history.firstChild);


  // Show popup after successful donation
  showPopup('Noakhali');
});

// Donate button for Feni
document.getElementById('button2').addEventListener('click', function() {
  const balanceF = getButtonValue('forfeni');
  const amountF = getButtonValue('originalamount');
  const donateAmountF = getInputById('donateamount');
  if(isNaN(donateAmountF) || donateAmountF <= 0 || donateAmountF.toString().trim() === ''){
    document.getElementById('donateamount').value = '';
  return alert('invalid input');
      }
      if(amountF < donateAmountF ){
        document.getElementById('donateamount').value = '';
        return alert('Insufficient Balance');
      }
  const totalDonatedAmountF = balanceF + donateAmountF; // Fixed typo
  const currentBalanceF = amountF - donateAmountF;
 
  document.getElementById('originalamount').innerText = currentBalanceF.toFixed(2);
  document.getElementById('forfeni').innerText = totalDonatedAmountF.toFixed(2);
  document.getElementById('donateamount').value = '';

  const historyItem = document.createElement('div');
  historyItem.className = 'border rounded-lg bg-white border-gray-300 mb-5 p-10';
  
  historyItem.innerHTML = `
    <p class="text-lg text-black font-bold">${donateAmountF.toFixed(2)} BDT is donated for famine-2024 at Feni, Bangladesh</p>
    <p class="text-base text-gray-500">${formatDateTime(new Date())}</p>
  `;
  
  const history = document.getElementById('historylist');
  history.insertBefore(historyItem, history.firstChild);

// Show popup after successful donation
showPopup('Feni');

});

// Donate button for Aid
document.getElementById('button3').addEventListener('click', function() {
  const balanceA = getButtonValue('foraid');
  const amountA = getButtonValue('originalamount');
  const donateAmountA = parseFloat(getInputById('donateaid')); // Parse to float

  if (isNaN(donateAmountA) || donateAmountA <= 0 || donateAmountA.toString().trim() === '') {
    document.getElementById('donateaid').value = '';
    return alert('Invalid input');
  }
  if(amountF < donateAmountF ){
    document.getElementById('donateaid').value = '';
    return alert('Insufficient Balance');
  }
  const totalDonatedAmountA = balanceA + donateAmountA; 
  const currentBalanceA = amountA - donateAmountA;
  
  document.getElementById('originalamount').innerText = currentBalanceA.toFixed(2);
  document.getElementById('foraid').innerText = totalDonatedAmountA.toFixed(2);
  document.getElementById('donateaid').value = '';

  const historyItem = document.createElement('div');
  historyItem.className = 'border rounded-lg bg-white border-gray-300 mb-5 p-10';
  
  historyItem.innerHTML = `
    <p class="text-lg text-black font-bold">${donateAmountA.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class="text-base text-gray-500">${formatDateTime(new Date())}</p>
  `;
  
  const history = document.getElementById('historylist');
  history.insertBefore(historyItem, history.firstChild);
// Show popup after successful donation
showPopup('Humankind');

});

// History button
const donateBtn = document.getElementById('donation');
const historyBtn = document.getElementById('history');
historyBtn.addEventListener('click', function() {
  historyBtn.classList.add('bg-btn','font-bold');
  historyBtn.classList.remove('border','border-secondbtn', 'bg-white');
  donateBtn.classList.add('bg-white','border', 'border-secondbtn');
  donateBtn.classList.remove('font-bold');
  document.getElementById('first-card').classList.add('hidden');
  document.getElementById('second-card').classList.add('hidden'); 
  document.getElementById('third-card').classList.add('hidden');
 document.getElementById('historylist').classList.remove('hidden');
});
// donation button
donateBtn.addEventListener('click', function() {
  donateBtn.classList.add('bg-btn','font-bold');
  donateBtn.classList.remove('border', 'border-secondbtn', 'bg-white');
  historyBtn.classList.add('bg-white', 'border', 'border-secondbtn');
  historyBtn.classList.remove('font-bold');
  document.getElementById('first-card').classList.remove('hidden');
  document.getElementById('second-card').classList.remove('hidden'); 
  document.getElementById('third-card').classList.remove('hidden');
  document.getElementById('historylist').classList.add('hidden');
});




  // Show popup

// Show popup function
function showPopup(donationPlace) {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popupMessage');

  popupMessage.textContent = 'Congrats!';
  const contentDiv = popup.querySelector('#popupmgs');
  contentDiv.innerHTML = `
    <img src="./assets/coin.png" class="h-12 w-12" alt="">
    <h1 class="text-lg text-gray-500 font-semibold text-center">You Have Donated for ${donationPlace}</h1>
    <h1 class="text-2xl text-black font-bold text-center">Successfully</h1>
  `;

  popup.classList.remove('hidden');
}

// Close popup when clicking the close button
document.getElementById('closePopup').addEventListener('click', function() {
  const popup = document.getElementById('popup');
  popup.classList.add('hidden');
});





