const DISTRIBUTION_LIST = [
  "alice@example.com",
  "bob@example.com",
  "carol@example.com",
];

export default {
  async email(message) {
    const failures = [];

    for (const recipient of DISTRIBUTION_LIST) {
      if (recipient.toLowerCase() === message.to.toLowerCase()) {
        continue;
      }

      try {
        await message.forward(recipient);
      } catch (error) {
        failures.push(`${recipient}: ${error?.message || "unknown error"}`);
      }
    }

    if (failures.length > 0) {
      message.setReject(`Unable to forward to all recipients (${failures.join("; ")})`);
    }
  },
};
