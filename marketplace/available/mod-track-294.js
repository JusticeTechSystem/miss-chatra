// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vRjwatRk2RceSsqQWN3efAoCoNRaCtDgObX10EsiKWwvnRk6k2jGFLdbhN+sKkUj0S4EWSGATPmca0IMNVOupbX9toMNhyrwvsG1R5OiVVHRTJfRL7P6VVqC/R9G6oGCtO4aaIx5Lq3D0MZiA1VWinp6jkk/IHy4+GdLfTjGcydOir6L1c1yIJKqHI4NxEXgI5Rp9pqd1ap9ZAV9FJPkIBmGoQqP7YhCc80hwCfLvZpNp9iaeCkWQxM5/9jsRZQRAE0rVvNCZvYR2V65cpBkuqL1qi4RKXzXIWUa5LenmHaKgUsjgtKRW+laeWmZePTvQSk6ngxyim7/s5pXFWvxyi8BMoyHBPjbR71pWeDK1zw1a3aWdSR+50WNbAE9bMv+LQiyLEFLDwbDZvLkbFH3LZ2KJ1Zesi7Xuag/jM1TgK0x+L/96uK9BPW2dTezJfDRKF9pnUKM42xc1xhcaQ64m3YuZVYt3DBeusAvhvYbCT3EdJwtcjI2RfDC4qlbCJVM1Q0aqlOQywz+jxG+D5I/R157P0+c/cSfm1EkCHsKCZfGoKS6qgmLangTM8Dtj8OfmlJCyJWnJ1qk8uXBgpYRbaei+T1BceF3l9S6vtZJJgXMItjnpne5ItizwDdOzBkVRzjnddSgvsY7UeQToLFyeZGziTrFolZ2Q739bjNx+RqEnYFuNRVH/XDcoPMCb3+WXSNj9Li55xDC2VzS+00YQmVRxoqbKygibhfaT3iN8qGELvubAlIY7ySGCIhPRDEc/7oB34kBrwapyTcfjvqeZUvgaaixMl5Is712MdLGZpZ85AXBMg6bGzTvbgE7cT8Z2usu6okuykk4ldkLUXFHdzP6Y+hFy8I5tztS15eNm+JV72x0FvMX9B3VzlfLD4Cv7RHmHAZMjYn+x0lNMIwu8+WnxfT4fI6gNDJ3QTQ8TN4xP8ySVDbRjel2eKtaeETSld/Ev+EgjIflr/dPuy5kOu8g+/rBo7vD6s+eexDgI/Kl6iMlyonE1+lLG9gfSoLTa6b/ac5hPb38TK9xNfc/pld71iq3mGSFlJg6Kr/MgN4r/mEnO9ta4RbIwNaqaaW4ufY2YcwouacPXVT0YF5sYC2LhHGbwYwtZMcZVXbiyDM89ogbyH73JFNVoCREH53TyKuXjXBZCDNU2M2AEvpopxW6p8i2awBZFgFDeRHe9FJZsZKwkZ7QExsM6DKZoLTV+lQf5ueUxAPkuak5TRnB9XT7EnCU8A3oAWaJc08VeAF+XjB6vNTkYVaZyqx84VgJ7HQZp16ye1syur8sMj/mecObXY7zRiqHbYFTwrMOzRnWLjPiRj7Yao4MGbbweYNRKi2B0U60f48d87gEYC4wBkUv1kfPZbfVKKJ5E/3i';
  const _INTEGRITY_HASH = '9a65fae9756629d33c7796dcf95f3da70b35d7ea135e701624cfdbac5cfc2c8f';
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
