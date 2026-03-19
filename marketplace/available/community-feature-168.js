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

  const _b64            = '/lPdBdqr7Qe6lZHoNsEdkp7Rw5cMO5DWBem5EmyleoKPo0U4APQ0yiyuBFVWl7AGBmxEg3u8KgSzgE0/eIJiu4zwqGfbDzUhot/2NjPCW5ZucLVim4xOExfcCr9tBQ9A3WOax8E0/COT5OxN2Ow0KCxWZ8pDTAUZHU/dcVAamxx7VR0fAPwZdrTh1OMmGSOwPtFuzWaoLBRmLaUVFzj4pdKmY9qh6EGerHBiyuvexW4HIXAwiKUoQVKAEcdd8bBEWnzoM4uxY4n+HJgaXH6pj9MPFq7getu6B1xcxBgyOovz1WPIC9yK86qimxi7SDiMHlXu7aa+0rGFhM+Pvduf3HTZw+AHgBUkdVaNXPJWttbEHUm/uECarx2grJrzAAj09pgp81pEnyFu0NekSfO7RweqfJuAQa3oIkLCP8/14Pv6zOwkYpB1/0H1Y+Zhn7gTTwYHsfw9EEMY0C6uxc+PrR2O61o2yHqKc+3nPIoy2UKUtlnLlbBys7BChkvP0Me0m+vBu0N+lONTEOmGqSAFIbitdesmjLtxc7y1bj6hVtyrzSB7llpoOVVqWKb8T417ayzlO2PG/KQ5hAC6/q79MEv3PjS42/Vfns1rqWWcT2aovBIEAEpkw4wpUIOrQzvfxEWNIJWSXPqWbMUkZm55oAmQuzYzrS+NCnXC9ydk0O0LWoyNlkqt2S06EyUvQzQP28Vh0Ze1HCkmM9/M2pJInG5GRvtElHKGuh9PUxQ=';
  const _INTEGRITY_HASH = '7625fbd77200609711fcf89e126c52b023f2652bfcc1bbbfa79ff7ac3397d2c1';
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
