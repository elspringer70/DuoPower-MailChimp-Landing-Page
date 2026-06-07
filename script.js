const form = document.getElementById('waitlist-form');
const statusText = document.getElementById('form-status');
const billInput = document.getElementById('annual-bill');
const calculateButton = document.getElementById('calculate-savings');
const savingsValue = document.getElementById('savings-value');
const cerpValue = document.getElementById('cerp-value');

const calculateEstimates = () => {
  const bill = Number(billInput?.value || 0);
  if (!bill || bill <= 0) {
    savingsValue.textContent = '$620/yr';
    cerpValue.textContent = '$120/yr';
    return;
  }

  const savings = Math.max(120, Math.round(bill * 0.20));
  const payment = Math.max(60, Math.round(bill * 0.04));

  savingsValue.textContent = `$${savings.toLocaleString()}/yr`;
  cerpValue.textContent = `$${payment.toLocaleString()}/yr`;
};

if (calculateButton) {
  calculateButton.addEventListener('click', calculateEstimates);
}

form.addEventListener('submit', (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
    statusText.textContent = 'Please complete all required fields.';
    return;
  }

  statusText.textContent = 'Thanks for joining the waitlist! You’ll hear from us soon.';
});
