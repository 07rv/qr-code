type CallInput = {
  to: string;
  fromLabel: string;
};

export async function initiateCall({ to, fromLabel }: CallInput) {
  console.log(`📞 Calling ${to} for ${fromLabel}`);

  return {
    success: true,
    callId: `call_${crypto.randomUUID()}`,
  };
}
