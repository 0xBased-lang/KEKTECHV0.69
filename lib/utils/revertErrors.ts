import { BaseError, ContractFunctionRevertedError } from 'viem';

const REVERT_MESSAGES: Record<string, string> = {
  '0xd312a688': 'Bet amount is below the minimum allowed for this market.',
  '0xa117e0aa': 'Bet amount exceeds the maximum allowed for this market.',
  '0xa1f8e601': 'You already have a bet on the opposite outcome.',
  '0x61c54c4a': 'Betting is closed for this market.',
  '0x850c6f76': 'Market odds moved unfavorably. Try submitting with a lower minimum odds.',
};

type DecodedRevert = {
  selector?: string;
  message?: string;
};

export function decodeRevertError(error: unknown): DecodedRevert | undefined {
  if (!(error instanceof BaseError)) return undefined;

  const revertError = error.walk((err) => err instanceof ContractFunctionRevertedError);
  if (!(revertError instanceof ContractFunctionRevertedError)) {
    return undefined;
  }

  let rawData: string | undefined;
  if (typeof revertError.data === 'string') {
    rawData = revertError.data;
  } else if (revertError.data && 'data' in revertError.data) {
    rawData = revertError.data.data as string | undefined;
  }

  const selector = rawData?.slice(0, 10);
  if (!selector) {
    return { selector: undefined, message: revertError.shortMessage };
  }

  return {
    selector,
    message: REVERT_MESSAGES[selector] || revertError.shortMessage,
  };
}
