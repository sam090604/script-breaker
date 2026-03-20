export const scriptData = {
  start: {
    text: "The date is going well. The bill arrives. The 'Traditional Sexual Script' suggests the man should pay to establish a provider role. What do you do?",
    options: [
      { text: "Pay the full bill (Reinforce Script)", nextNode: "initiatingMove", impact: { tradition: 10, agency: 0 } },
      { text: "Suggest splitting the bill (Disrupt Script)", nextNode: "initiatingMove", impact: { tradition: -5, agency: 10 } }
    ]
  },
  initiatingMove: {
    text: "You're walking home. The script usually places the 'burden' of initiation on the man, while the woman acts as the 'gatekeeper.' Who makes the move?",
    options: [
      { text: "Wait for him to initiate (Passive Role)", nextNode: "communication", impact: { tradition: 10, agency: -5 } },
      { text: "Explicitly ask to go upstairs (Active Agency)", nextNode: "communication", impact: { tradition: -10, agency: 15 } }
    ]
  },
  communication: {
    text: "Things are heating up. The script often assumes 'consent' is implied by the setting. How do you handle the next step?",
    options: [
      { text: "Go with the flow (Non-verbal script)", nextNode: "end", impact: { tradition: 5, agency: 0 } },
      { text: "Stop and discuss boundaries (Communicative Agency)", nextNode: "end", impact: { tradition: -5, agency: 20 } }
    ]
  },
  end: {
    text: "The night ends. Your choices have mapped your relationship with cultural sexual scripts.",
    options: [
      { text: "Restart Simulation", nextNode: "start", impact: { tradition: 0, agency: 0 } }
    ]
  }
};