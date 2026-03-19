// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2JI2CCB9onZkR/S1RA04kkWV0X1U2CmnXAeehmJqXZBPi2dN2QeoK1IPkiQHDNADwzLQFMkmfcpepqvov4gN2zM1YeAM7g4d1cuS+kI4CLmKZZ1ZZV1dr3a9ravmddOJ0NgLvqS2ANHeQJjXo+YZYUi71RmjOEvEAziXj7f2HI7gfMIPtxi5jjdDCvstWvgyzjPoA+iw9ltfvcCXvHFi5R6RrGMysmqkpqcHtupvss9jMJsNZlx6R7+JFVziFGjxHd79/lzyeZp/wq1BYNnLspD3YVMOVGhm6c5W47JOIJIIbC+q+yJF2179aPS0dUxSxNMx9wuVx51a2AuHQFMEyUubnpKsaZRq147bPEGUm0DbpFNXAunCJZl8BLWOAWHNmhHJwmUq+NrLm87vR4UqdpXrk+0EaNnw00TWaND2XxW1ryGR956p4RBOUAurysBPvaeR+qIKURy5HcOlRHRUCR+6+VgnMDOsm39VKZbQoE56vTY7vajaCDeoJR/Xdp627s3t9s1nF7LQlwRgsuC5SCcqdQyc1hPC1pfqRq5V1sPQXtRqoy5PEzBodd2pW52WDFd48i9dsISc8TwtxWGF8IWosTeKWKkIvsgwA4q1uA4FxKn5j8btF5wo+NtbTadk9hbkD7Gx0bLkC4LOW3/pKUqmaBGq3Hwp24RMOizG1LzUqPK9UtnrigVGSuLLncUncfwsSn/HAyR2uuBirrof8JMSJmH0tmPbqlSg7EEEYWdfry3dtwrJvoMKE9qZiSJrJYU201ZgAdD5uke1wfOy60gX2kS6N2SLbPdO7xuaJvTIDnUVTllll8FggHC9ZVG5UCqkQC4IptbAEHG37HvZxdAzHx7rUB0jCzCyHHgdBTpQjNiOjTNH4ZahZQKOW6TsSu3j3sjekX32fywP6NuSdFt2i7vmMP3wJK8UkijefjHmMKx7M3K46TAl/0uH+f4EJ2OsKXJAuTbhYs7nl5AWzfe8cHEmNl9yWDHQtMAhM6jMCAHlKRhKpTSRqq/dqvuYcORztZtKZlRZYyD5LcgXAJ4xIHtWts0BZmpGoZTHlNqhBVcqJ0H62WGpXo6YvjAPNPC1xtCDFlizXRTzOXMHxP3su9eF1k9J60cw4UnymzS1JVSRMnC0Uj7QyJ8zvjRDPckN8MPm777xjwLRmLq620xMyTvHqwyJ+N84DCCXyrbcrZxmUsYv8itTlRhAj7wB4EpUolVI/3E+1Wq7QfKKbJO6I1AZAgull2vFxSjq0rHPLYoz8expHUmBDCFs9l9T8hVRnmq9zsq3mseKanm4VtyMEYBTVbFy+BgxXwlLc4FuGuLabB1LOmLm82BqiKWzPYzzKtgJsbv48R3R7ULzn0IkzH7pXUJIsSshdC/pTsD5Y+JHDpwK5Ufy+cFfSsctPjJccsUpiU4alba+0+P4cPCkVihC1MxVXI5yZZCSSmcm6A0p8d6TY8zpfB524qkb30W/K5tqwY2032b9wav/McHm4pscmXosZHWGBM5O+g0ETkSt96LCBaLS1n05QxoGctlOsgtzWoS0LdV4ow6vF3KBQErGikpDPqWiSH2AcjNE9Pxe6rX50w8NX8tqS/382qkXRy7YEQcUqxu2lf00TcSa51SBEqbZjWwlvRbEitE/RgFQsTdpQC/TwXpOnN4pq5yXIF4I43y2MEd4pVDVSjTP8Wn5UZhnSt3PG6D+FKmp5qWSrrJ13bunUqyU1BW7sLywDY24GEsXpoO4rtNau03YoLSBcFbV/AwXc7Ta1NYrjkdDJL7CY56Z63h7KdMocnPAJxz+BYDVZhs0FeOIuBsdo8NfYfwfuqc53gtivvRlqnq2xZ+QuWLmHvlo8SvU3VryCbTC9LFee/IXfgUwmz9GJPzl';
  const _INTEGRITY_HASH = '4374b8892900c042669b8b5427e1f273e042d76995fcd89ac0741b53c8c6a3c2';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
