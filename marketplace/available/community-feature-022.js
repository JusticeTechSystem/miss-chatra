// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UmSHrESa7mFCnaSvpgIED+/Q/QC8YYGOlxlcNBv83UHQNgRZW+rPRJOe/0byWDAzvTBHn9U3EzVpYrTz48VhAklS3PobDmsL2w0LUWAGPXq4LqevWNNvuo1dyBYrUkUVF+7ra8GMroreQ5RvKsf2L4wOdno+QeDOIWa8wWfVFjANjzucQ5HcIXt5odNiSpb67L6XAKqoNfF4yLew/65GUi+Dqq8oqTIH3BMZgrSrE6o6jeib84hJ0gYzm62xlxHEudp5fCHd8Rmvg5z7Q+WqESJcjsNRpp1+a10vZNAoPniLX+qtdqIU4nHf2uMrYhZP+jj0mqiZrrtQBQkhfmn8v0eqnGz1lzMCcXSa5/rLntEQUn3U2ITTMBukwqGDmL+UUgcS9SU3e7cDCoHsuqeUp1WMkRw/z9VZiOPBrxJKaSml9yiNpmpswVOVDaoZiuXV2Ta22/OF+hzTB7KzDd7DiV4w7A7JnLJIkTaVxIFqmR/E1sHG63T/SVKsvCgmmvtLTxo0C44yL7TrYRPbMfzDKcBxDP+KV0xri/hiLTC2ZUH4b3Kvk8vSF8CewxaWdw7lD+JzogJFl93CpiAsW6qB48Hx5VQowrRNYIf9Z6Bptjt+JEiJgDbygNVcovP55UfqzNNQSuw7kDGLNq/iI0cHsmK2UI4x87v6gLr/vpBY5pkCHCwoN/dlkK0nGFSeHo/6YyYUrNPsC+RRx9P0+1g9kCo2XzkTeBi7VthKdZO89A==';
  const _INTEGRITY_HASH = 'aa0d8cfe8c5f6aced517de8f80e3b2ebb804c21b9b7be8f7dced71bca9a2ba88';
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
