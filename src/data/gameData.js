export const scriptData = {
  initiator: {
    start: {
      text: "Scenario 1 (The Bill): The date ends. Traditional scripts suggest that as the 'Initiator,' you must pay to demonstrate status and interest.",
      options: [
        { text: "Pay the full bill (Tradition)", nextNode: "step2", impact: { tradition: 10, agency: 0 } },
        { text: "Suggest splitting the bill (Agency)", nextNode: "step2", impact: { tradition: -5, agency: 10 } }
      ]
    },
    step2: {
      text: "Scenario 2 (The Next Move): You step outside. The script says the man is responsible for the 'logistics' of the night. There is a silence.",
      options: [
        { text: "Wait for her to suggest something", nextNode: "step3", impact: { tradition: 5, agency: -5 } },
        { text: "Suggest going for a walk (Taking Lead)", nextNode: "step3", impact: { tradition: 5, agency: 5 } }
      ]
    },
    step3: {
      text: "Scenario 3 (Physicality): You want to hold her hand. The script favors non-verbal escalation—making a move without 'killing the mood' by talking.",
      options: [
        { text: "Brush hands and wait for a sign", nextNode: "step4", impact: { tradition: 10, agency: 0 } },
        { text: "Ask: 'Can I hold your hand?' (Disrupting Script)", nextNode: "step4", impact: { tradition: -10, agency: 15 } }
      ]
    },
    step4: {
      text: "Scenario 4 (The Invitation): She invites you in for 'coffee.' The script suggests this is a coded signal for sex and you should be 'ready.'",
      options: [
        { text: "Assume sex is expected", nextNode: "step5", impact: { tradition: 10, agency: 0 } },
        { text: "Ask: 'Just coffee, or something more?'", nextNode: "step5", impact: { tradition: -5, agency: 15 } }
      ]
    },
    step5: {
      text: "Scenario 5 (The Pace): Things are moving fast. You actually want to slow down, but the script says men 'always' want sex.",
      options: [
        { text: "Go along with it anyway", nextNode: "results", impact: { tradition: 15, agency: -15 } },
        { text: "Say: 'I want to slow down'", nextNode: "results", impact: { tradition: -10, agency: 20 } }
      ]
    },
    results: {
      text: "Initiator Simulation Complete. You have seen how the script pressures the 'leader' to perform.",
      options: [{ text: "Return to Role Selection", nextNode: "reset", impact: { tradition: 0, agency: 0 } }]
    }
  },

  gatekeeper: {
    start: {
      text: "Scenario 1 (The Bill): The bill arrives. The script suggests you should wait and allow the man to pay to show he is a 'provider.'",
      options: [
        { text: "Wait for him to reach for it", nextNode: "step2", impact: { tradition: 10, agency: 0 } },
        { text: "Reach for your wallet immediately", nextNode: "step2", impact: { tradition: -5, agency: 10 } }
      ]
    },
    step2: {
      text: "Scenario 2 (The Move): He is quiet. The script says the 'Gatekeeper' should be passive and let the man drive the direction of the night.",
      options: [
        { text: "Wait for him to suggest a plan", nextNode: "step3", impact: { tradition: 5, agency: -5 } },
        { text: "Suggest: 'Let's go get dessert'", nextNode: "step3", impact: { tradition: -5, agency: 10 } }
      ]
    },
    step3: {
      text: "Scenario 3 (Physicality): He is trying to hold your hand. The script says you should give subtle 'cues' rather than being direct.",
      options: [
        { text: "Give a subtle non-verbal signal", nextNode: "step4", impact: { tradition: 10, agency: 0 } },
        { text: "Say: 'I'd love for you to hold my hand'", nextNode: "step4", impact: { tradition: -10, agency: 15 } }
      ]
    },
    step4: {
      text: "Scenario 4 (The Invitation): You invite him in for coffee. You just want to talk, but you know the script implies more.",
      options: [
        { text: "Let him assume what he wants", nextNode: "step5", impact: { tradition: 10, agency: 0 } },
        { text: "State: 'Just coffee, I'm not ready for more'", nextNode: "step5", impact: { tradition: -10, agency: 20 } }
      ]
    },
    step5: {
      text: "Scenario 5 (Consent): Things escalate. The script says you are the 'manager' of his desires. You feel pressured to say yes.",
      options: [
        { text: "Comply to avoid awkwardness", nextNode: "results", impact: { tradition: 15, agency: -10 } },
        { text: "Firmly set a boundary", nextNode: "results", impact: { tradition: -10, agency: 25 } }
      ]
    },
    results: {
      text: "Gatekeeper Simulation Complete. You have seen how the script pressures the 'responder' to be passive.",
      options: [{ text: "Return to Role Selection", nextNode: "reset", impact: { tradition: 0, agency: 0 } }]
    }
  },

  neutral: {
    start: {
      text: "Scenario 1 (The Bill): You view this date as a meeting of equals. Gender roles do not dictate the finances.",
      options: [
        { text: "Suggest splitting 50/50", nextNode: "step2", impact: { tradition: 0, agency: 10 } },
        { text: "Offer to pay because you invited them", nextNode: "step2", impact: { tradition: 0, agency: 10 } }
      ]
    },
    step2: {
      text: "Scenario 2 (The Move): You are both standing outside. There is no 'assigned' leader.",
      options: [
        { text: "Ask: 'What would you like to do next?'", nextNode: "step3", impact: { tradition: 0, agency: 10 } },
        { text: "Suggest a joint decision on the next spot", nextNode: "step3", impact: { tradition: 0, agency: 10 } }
      ]
    },
    step3: {
      text: "Scenario 3 (Physicality): You want to be close. You value clear, communicative consent over 'vibes.'",
      options: [
        { text: "Ask: 'How do you feel about holding hands?'", nextNode: "step4", impact: { tradition: -5, agency: 15 } },
        { text: "Ask: 'Is it okay if I sit closer?'", nextNode: "step4", impact: { tradition: -5, agency: 15 } }
      ]
    },
    step4: {
      text: "Scenario 4 (The Invitation): You invite them in. You want to make sure the intent is clear for both parties.",
      options: [
        { text: "Explicitly discuss what 'coming in' means", nextNode: "step5", impact: { tradition: -5, agency: 20 } },
        { text: "Set a time limit for the night", nextNode: "step5", impact: { tradition: 0, agency: 15 } }
      ]
    },
    step5: {
      text: "Scenario 5 (Mutual Pleasure): You are focused on mutual satisfaction rather than performing a role.",
      options: [
        { text: "Check in: 'Are we on the same page?'", nextNode: "results", impact: { tradition: -10, agency: 20 } },
        { text: "Encourage them to share their boundaries", nextNode: "results", impact: { tradition: -10, agency: 20 } }
      ]
    },
    results: {
      text: "Neutral Simulation Complete. You have prioritized communication over cultural scripts.",
      options: [{ text: "Return to Role Selection", nextNode: "reset", impact: { tradition: 0, agency: 0 } }]
    }
  }
};