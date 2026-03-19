// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9+Mw4vMuW1DnYavo/esCajp17FFoTBcAYN2GK2/2AOOMKxaCXfpUA4z5bJtQv/+fWXleipDOkWTvOOYgR9s7cE0gl3jO0rNLUg6TYEMQHN1ao+tcOIQW3LU8MqzxiPTOwUp1W0hz6D7LSAZOIPh/jTgbFkadTCawcQ0l8HFf/Ui1C2+wm7wBKMWCfVDevG4utc1yI2S46NOfvsK0HQSRy2aok8sA09VMK3QX6PB3CEsF7SPeSltqmo5f+Q68Kvaizutig1piVDykfEJZkzbtOtMXj3XbrmcQCIEXQO/fiiDeTCSrMd6olYYZz98RNhzkrNpTfLHK8+i5o83llrhpZodTLV3+7KbyuykBBFgKdI8ylARJMmqwfZxHW0F9UNAqRi5ZKnlSc7US9bwbRSsYPYc1qpxvkbYOuHBUHpqvr/bI91BSTVDgtXzIPZik3qeFs77WSayr3aLozyRdnXXJfEB5qCgyct9Z5C15YdC8aUfNZl52wT49u8W8f2/bUTlQQz4tjkxOPZxAvSoPMgwwkxIZ3BKkgriv3BazC9FcUGWu830Cygj/IXvw/7EYWnnx6Nwyd7xJtQxFOljqWAel2zgCpTqy7BBoA8JVbC1yPUg7QMKwN4he17KBCsvq2mv3X4xQ4MCO6TKEQJfqIhl4fBHyeIIcjED4e0DqleS0l0IWuKa80wdA4sht4h+ryNgMhrey7hz8YXEeywHJqZmSSvgD3327sU9XP1jIHEOoAIb1B9gwgcqFlh6e';
  const _INTEGRITY_HASH = '911d77e82ba6d2fbc9bd8614c4f6a8ae0552d9352b68db091a6bcae09652cb42';
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
