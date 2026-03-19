// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JyQdgR067ZioRQAZbi2CiPlTBOyPx7ydZ+rIY6z6bwyfjD1AVaDHFdVGB6DCDoB53lfxUhdHaMZp2fSZ23TFiQRn9i0q/vuaMQfZpijowwxrnyzKBJwSvmC0wypuy/YYxqTCzJVYebcF2kLtuOQ/TOHTSy2dx2BghOmaN7nqTaMA1UvZDrZxrB35w2INHd3MZw4RbWeQwTzN5XwudC2dKDACTyfcw1aSMeDtuau2Wx0PtwKOdb+ak4ItAaOHBTjSaigtozKHJhyEKA5JC06F0EMfdQIfJlv01rnhsVYeYs+WcGAijba1b+zlu9JYDYs3HtH6vwdroG8aJWJvgrVS0RuVENC1turYKI0mpwnmN49z/6k87rTg/OTV4TlCnzbsA+60MIhjiICwX9hnlaLSWDbvURopQSQI3j1HuPtMrM+BbZ6/ZsdFGIy2AGYl1MQOnrOBF3RCw5Ao2AwSMp9bfduND6N7WrRmGSMmFbsLzYCdlfh/U3WZrJ44aSq8tuUXCUAddKkxv91MPY7HpTqHVL9pcl8pYvMfkbr8jTh/F8ndVSkIgGoycRjLqOxVvn2nKMnioV18cAGhjXZrWkPY4+g+oT2zzv45ei4VPQENXcmzdqb3dt5keuboLUEpyHGd9qdCcQHExtVdH+vwU//Q4X8LUBYlGOuCXDufRH71l1M2N7eSFUp0qq0Y3il9vwbqVaka+4EqAKkKIFjLaeX5d364qP6KBatz7PNDStrU5jXdNA==';
  const _INTEGRITY_HASH = '23ffff9ed634c0b031bb1c137df88918d02d0887aba5394e8d4147e0bf9dd938';
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
