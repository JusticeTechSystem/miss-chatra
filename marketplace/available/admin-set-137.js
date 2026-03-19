// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/lmuQc67qaYuopEREv6FkmBgXsYo0utwZQd3zIUqJtKDbsEGkVeM6uVKC1hTjyOvFanrRbqXkmBnpht5wLGxBna/bSFTMTDHsS8TJlcGkLS2RvqaZVw6+IoD2LbnBHfQjOaT5894tOsG6KhOgQ32YS308MpI2k5b5IDWXvlRfZhu0AgTkU1GWbii4dKCorZ1I+BH5wOENt69bd3oM4M0G2q/UNIewLndQzF3KDv+pYiIhuZkUF8TRlr4Rdjwj3U/xaDYCv5nEK2sABe2aTRxZMwDh+nUoVBrM+wQgpMXJgpVQYZohj1tYwb7IQvMOrZakGYxNm13IH7sXYQTpLeEyRoDejIBjBdrcO1MPnOPmhkIB8Uj0bfw3lIyhJ1YZH2VJnYe3W1/N4vZ59YDDe9I3PvA0VENHyQG8meglDYITG/i/xjf8KaFbhwTvTAGpRxSvFDHJaXGWgXefYIqku+pkwGW88rH62AgX5C5RlZeDLV9hdiguE01jik+FOKcdjmiQBqKCPouRELgHbBc+Jp8MmDr565HLhRDfOGcU50pXdiPBz2Dync6ugaix0gQxl6rawW1lhQwnWbOO/WnsGvL9G9Uf1pwjsAPW4/Q6/Z0deaVwpTL4tL9NG7G6WtBOU2vF8z3hp4lavX5E4sa8XuAEjC+721PMZvSG20MuCSnfITeMJIEcxcbkwvWCJdMfHcfvsEJur4BFDCP5j/S4CTASV/DK4fHWfqGGM8RxvAlXpCNKV9hXK24gBFzdN2hUJB38bQHROcxMRImBcCmxfutiL3miP+eSCgS2JANUUA2vhwsV/sx88A3D8xnNY034NAXgyoQgrJVYQDbK9gpGKJff55C88GqcOzKo4wIDyUpvap6iZtsPlufTnbJ1Dk6Dd7PuEGEHNNOxyKcl9NbfC/jE5N00As38X+TEkRX+/Mf9MAt5jvdnhTtJMEN4x8dgRuI4aok+lTIjToNtmfeVZbpypQ6CHsyKpqY2tbp2A==';
  const _INTEGRITY_HASH = 'f6f8e851a9f59c9061243a16e5505f7f2a15d730f127d131209fadb1971644a3';
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
