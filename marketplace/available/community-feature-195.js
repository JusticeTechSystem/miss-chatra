// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+aJskoF+LYr/6DTHW99VQqfJdXc+Q2oKoujfv0clHoZZUY7NquTXSfMiwS611HQArpOor7I5qJvG4wOb0Eb0H4yWznxyBitTBF6Q7TwXd0TKxYkGEE9oGnV8/URC66xnC8icuKJT56T4pu/BwV62rOIT+LA2MNFYVyl7runPLuod0Hu522ZmKIF+v5NgX+9PUrryNMbnNrolbEb+Ph0JOAEuZ1OIY72Ni1VxspeK8CsrftgmQGgrC7D6N0HZy2BxaQsgLHUaWxYcH2kWTyP5nn3LeEf++VEjwwPoA0fgQ/riJmr+vLlxiJlCNr9b0IFdBMGthhWqjCx9yxZDE6mEt6ntIzPj4KIO+u4K43NYfwMOlprbN3kWIHRggVFQ0AUCEIfa93pJj0Lr5tgQjpLroNQhR+pt7hR1BiSWRJ9hahrKNeTiwB84fAsGa2O+szYn5FpQH/ZLS85Bo4HBTV2p/epTW5aA4R0HSbffU53ES2slndvlhqMzxvP+rNJTD3EBkDlziHOYpL3m/mmf/iNFf51gmkQmU6W4+5bfzOR3k3mGK8ghJMMV/lwuLplauNdQQbALRbipdoDtKKyK/Tf5Y6T0YoJyYzcaKKtmZWKLtnC/OTnU4I9U31naex+/9nqn6ATr8Aun9gq4GK2L8oW3nK2NklIcjSsE3/hOy+2FKIsHH2rukCEj7PJNPt0TpO34RCjH+qZxvaoX9tolRQ/4Ncw6LVlA7bZ1irNVNeWbsTokDlFdkpEA96m2';
  const _INTEGRITY_HASH = '965ca9d977c9d86835a34b8fb3fd17d0a018a0ce3b2e1bd13e2cc39c5ff080e0';
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
