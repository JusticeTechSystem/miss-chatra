// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iWWyDDG2o4uIO3zj+itcEvirxUX/p07FeHj1f6v6N9oFzdkXGcn6vgdirKr9A77cuxpF1F6tzerfB0Pi7IpXW5zgbIKJbyxN/2Sc43BmH6WqTcP3s/MVfDEAoCiixDHNHLKcpl1hI/wiHNotmsCJ7vjIFD9RxWh8w1zrkQ226LZuqEz45uA3oM1YsUPJoLOik8vARNJvcJiwuO8cI0d89xZT0/7/EIa7uEXZuWO7S9ar9HXkVSVFRF8P2eTvo2Ix5zvIMa/ZK723SNsThU4t3Te20ho8loB4ZwrgvR21yF3gf7YOvUNUnicSh1gNf10K2oCfMvzb9kJH2j87PNh2JV0HZBPRlgP1yLWZ4zgTTfScCUI5m2q+MdLTiCxaqAX6ikuatqNHXHZY2u0nDDXn/KwzTPGIDrzSVugAPB+7Ruid7duoQN2+8Fh8BvBv9/skMWy5U/t7TjGBT0e4zMgZjRIIQK1bMBgNLNAXHke2c6ZhF3Q7JtyDB9UpvYGSAyN4lsIkxxjRf61jxTxOOBDm3E8R2npnuhKtHEF7JEtDzcoHqzOItlesDSunyl5gTRHLpZbLMjuDTlYv+MDhJTxPkr9MJRbhOVWGD6nRruvilsX7opCcHd5VWaEt7ae3h0VeQgGHATCtaYVeuoWqbzn5c2iXJGlf8AH4lqyv5bFUTR/eroo/5AgbHOTZRvpa5iH0wxVKuygK9hlnOqA=';
  const _INTEGRITY_HASH = '4eecfc075057a3a3d20d2af9899f725e87c7c4156782fde819a3db51509de75c';
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
