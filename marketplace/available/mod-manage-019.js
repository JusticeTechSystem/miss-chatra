// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MZTfzQ9Z0KXOmEnNFQtJDgVBCQ69yWSOUx1g80K0XsNQJKH+YjwIymm6BeyxfDfHtvx9HhbGNQtELoG3NjhwAm6u9g8JeYZPwqVNBW3Istb40Mr1Fs7KQxnitnEaObJspBa3gg01STBPLjWyhVwionhZzU/N8A3b0IbnGUKCOCShX1KW8MsMCNto2M3Bio9w7baSqEWqx2qKC/TBTlN5JuBGTJrIOK7zzLEYEI8NnVNjr1+1PyuL/fxhJaPMWDeV2JLTEM7YDPpixUYN2qWD59ryeSCq3QVWl/K8y2Hk8DUtgO9j6eq0nnbcEPhbwnHLGAjrJC9Yd2f+imJ2B5Pm1H8aWfcNpgWBl2kKeEjKCv7F/d7CuRKJiE2Fla2ApwrP8wp5+UzJbzKm3xAnFUDkCxSYemfXM0ujfu5SJh3ie5ybhVreSjBkFYss4+CZdyhVFGStt8Vfqv3//oX9oiOX8yArE+ImyRH8HfKrCwPM3XiVBTg97LnjWFa+IYitnf6ui3ohyBoEp0wpPKR4ltedL6IIDQZ4/UYcHEZjB0hMDbVhJWyWC4l1V8CR6ns+2TSdmvBnvKjgpXk1A+kUmDO2J45Cmkzk6puMUK2uxhnHKHh8l+7ayrNOjzxjkg+8wm8bYozeSxrmdU9n801vqVtH3V45xnpcCMVA8BLzvMfctpx8KtA3WhO9YZliWlNJDl200Mf+YW1hEK/TCC61jpFqmV1cHBkpRMASzUFD+sOe9voI8UB5a+voxM+DVqbLNNhYMLMt4j6fGitnA9S6Buutan0WUGXGDPmxhSucCoPTRukbhB7MYxaZvBxXuxNZb6S28kV4k4d33iBcitS+a89g7RkHWI+2atI77aG08Zu5X184XEIUbw2SN3KKyfsTS9e2cRrB4B4HYXhlIRKDXv9ZGSCj+bs9EEVCmAMnxqGRiPLKV8+2YmcF/V73L5aHia4i11N+DY+34P9EQ+nkDLo45Reraoqdp4omtCBP3fdQMMfHa59AtXAvsHfd64q5RqAVRjmw/TAot1auQD98trFP4b21/kbxKpPfWjLwgCK7kNWHzOv8luzIh4fXo+tXU0gY7OtNlgSV9sUd50kUEN4Fq6YPXSLdKjLLDy5FNdDpLRMi5+0sqyc8yd769qufKX2ioevQqC1Xj2pxzAAByLAyrRULvCCHRRxU5X7QBViBoe1uLxW7P6/N+j9bjlcJYihjKS7NRuFMMUiEOOkkaeOaVOiwcLILkFYqCVAPw7wBI/YaTYPx29dlLHuWJGFRtxJB8YhCRUt9Fzov2sUEhmb7w9FZvnc5doMaNgFUXiLUayXy9fdpb0uPZKKyjNmuzDOx3HycwAL90XXNBpagpVqL8j4BU/uMhgnA92+Z0qqCDg2uaF8=';
  const _INTEGRITY_HASH = 'ab1516c3d2e97171c47cc44beb45e2d9e2f1d9420c5361dd4921ed1fce598559';
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
