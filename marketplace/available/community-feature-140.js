// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1n0/EolcV3o7GBKtt+anfIGo3BWm6x3ltGe6V6s8BV1/aR2YV7wNdZkjRJhIHPJ2EnmyPrz6CAumdfQKgTd3JeSQsR9cNu/uBZQ1xjvvsZCGT2G4HlOOg0qEBGqHqxsSE4hiP8LcA1OALFrca5KbZEXmFHn3dzKSAxRPU60xSRJYaK9eLOkd0p0YtBYXh4FisAic2Mv2UldezkzdVih4ebXzqQGbHW1tHZgpqL9gfxFCtNESrKeFBUCbTn6Axo5W418R+dW84KSvlbOBaQozvcCGjeMCvIRbrw0VNKvmp4iiayuJFvl2CY6whZ/PSvamzfY/qXflfA9R84l3RXKXZku3MuTBZs4z/B+x592mbfDELzis898Pqgvbb4rjok0CW6QjoPJs8LYZCLUg4YSuuOrngA/181RWls+CFPfm3Irk+v5ElheSFf7Cr5opZzwtMbwTCvHDQjSx+KNs4Ou8tdGfypWo1jW9MyaNt91jo7MLHowQvRux6HgSltcOuDcvkODCOkIxuAIVPleHZrTWt7aYChnOYSSGZHSaFLNnb1dUNZzX9RqNQYqBv4veIdVjvXyU4gyzYO3msId+aiZYakQC5ZL10Sx1H3eMCs50iRtGmfJl934j3WxiPSDKZtCibEihFmH9i4/C0A9PhbUZ8pvE033QjB0H3pQZ5ucLhMWHjvkkKID4an+voY9Q1YzaN6Q+eKV/gGU7rA3Uce+2BhHm8MJ8QZ4alg90vzMp63RB9G4YGCgjxHGW';
  const _INTEGRITY_HASH = '21bf489bd8ab6da15e2aa4b101d2cf1da3f2b907caabe438371587b6e4e86737';
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
