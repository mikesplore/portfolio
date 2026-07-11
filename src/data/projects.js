export const projectOrigins = {
  vela: [
    'Every remote-control tool I tried expected me to learn its command syntax. I wanted to tell a device what I needed in plain language and have it happen.',
    'Vela started as an experiment: what if the LLM is the parser? Function calling maps natural language to device actions — no parallel grammar to maintain.',
    'The VPSS relay came later, when I needed secure routing between a phone client and hardware that does not sit on a public IP.',
  ],
  farmpulse: [
    'A relative kept irrigation notes in a notebook and guessed when to water. Sensor data existed — it just never reached one place he could check on a phone.',
    'FarmPulse was built for that gap: pull readings in, show them simply, work when connectivity is patchy.',
    'FastAPI for ingestion, React for the dashboard — nothing fancy, just something a smallholder could actually open after a day in the field.',
  ],
  kipepeo: [
    'At the Build With AI hackathon, the prompt was credit assessment from data lenders already have — M-Pesa statements, usage patterns, mobile money behavior.',
    'Most teams reached for generic ML demos. We focused on parsing real statement formats and scoring from behavior signals lenders in Kenya actually care about.',
    'It won because it was specific to a problem here, not a slide-deck model.',
  ],
};
