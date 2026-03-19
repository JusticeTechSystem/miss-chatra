// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GNOnPCqa3cJDrvgAP3uApL+c/fAysWwZfMFDiASBWKVfO2tMSdWaLlPdI5XgzHC8NfjOi03bwCqQsBfPgWuk3row0+Sd44+eGEaata19sGquS+4ugzcNXe09bwQ5PVVorL6lhv5uZxz37d3TrTKpz0Sdx7gFyPCx+Wsy1tvpzcs+i5iZop82VfL2nJBQG+tD5pnp76mNCy6la0biEIXCq41JP5nxTfc/DWT4Ayw/+WnvPttwRDlUtoDtnJG0Q1ZNojLHeps4D0HimGIING/pnGb6rTWvZS7ybYhe+9r1YlHKXekwo4K2WTJeR0BvuH6m8aPzrr1F4eLjcTrPuXR2yTIJatBtg4qSlh4jszl4yArKac8+dP+IrdyjhAQpD+9lvclGD27t4AWypoPHOcut5S8W7df7OTUmRfTbytbWRQoUOO1aAkluUOUNQLyNKcGPNuUvhMwfuCZtLN5Vt3987noVkIkkTT8L7CYa+tGcWptBIT0kJMEz8lfMSExzF+p7vKXhq6c7RSyk4rO8yjaOuxoCTjiI1/MaesU/PR9O47NRykNUeyKNxCRQAKgeyeu0KHEgWlGmlHcKPPdEA5jcXl8ipUtIlaX7KZX5V9iGwbZmz/+sQSw52Wa+cqIV9Jvisjr5F7PB9SRSfMRWp9UQeDbfsHhJpKFAS2ZNJB2ZL2CW4AdDtqK6sSxpDwme3x2XK8ZxY/IuN9lfpI/D2mBb1n+hTcabb6ODjpVNUv99E/ifB8Egr750hGQAD6E7rCLxoDXQinyb+5UiuO6FwWhMrR9Q5w0zFVaEpDkEMp2PUGLaMe6YXl4OaJ1IIa6S1eaHPzvQf0tVnVLViBarKis76HePrCOVwLlRnecNkPzC2h0y+SFUZcmfrUzwbQK54oRXUnqu/CxdzgrHkUWgjVUQA8uHs9q977PO2cCZT9cZMTa7tH6gT5CT+0NoQifQ/exHcZO5LlmlayQByD3QTUd7xBLA6yi+RnW+hV5PKBzK7pVkag2lOzhvN//dNep3wsCmNzU/i463S7bSIhCFZYDJCLXPUKw7kOkFmRoNta/F3Brdi/dx4+/S/vBvbztFXVmnsHCUwN35kPhSBR8A1gdHG25lPzbhzbNfwkU/LinRfe+JXBuFpz2aQPNHorWT42tgoDGqd5hY2vvIJf9GJcK7yaPXvbkEqRcQem//7ZgSJS7Ib1hfeGnKF1JOE3uBZ3Y7vWOtSJzUQyc=';
  const _INTEGRITY_HASH = 'e0040039e648f5112cdfa60115f01bdaac8faa47bc2892e15b07cb52dcc95f77';
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
