document.getElementById("subscriptionForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const amount = document.getElementById("amount").value;
  const frequency = document.getElementById("frequency").value;
  const recipient = document.getElementById("recipient").value;

  // Mock intent object (in real use, this would be signed & sent to Anoma)
  const intent = {
    type: "subscription",
    amount: amount + " USDC",
    frequency: frequency,
    recipient: recipient,
    timestamp: new Date().toISOString()
  };

  // Display in active subscriptions list
  const list = document.getElementById("subscriptionList");
  const item = document.createElement("li");
  item.textContent = `Pay ${intent.amount} ${intent.frequency} to ${intent.recipient}`;
  list.appendChild(item);

  // For demo: log the "intent"
  console.log("Generated Intent:", intent);

  // Reset form
  document.getElementById("subscriptionForm").reset();
});