// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'l+SsAYITfB+mjSqL2C248QdZfZ3xOJODlQNq8C2wjU0IiL2AdjAS+1pb0JfsLCx/lGFAhSZFwYLkHRLUUhBL8/dmuUSfVIbneOEYGZ5zIM6pnZeOli3kVFeX+t04Pqyg0QzvEHp/gN5ypkamtB/JWOT31rwlravCLKz7rZHsH/29rqw50sc+7w/k4Jw/kFMOF4fSfSmGu3AgZktFl+UJXLCBWlEc4JL3ZJZrSyVBq0MPh+hBQVhdYujlZhPn5ZWoEJB1HuyGPyLWo92s71KQpn+Q4ldwzgbVVeSIRP4rGcOtA6hSe0UUJQHskyHzbByBRUDFjE47adIbZ4B8NM0Z1dFBHBUss1Cd1o5SDw99p7HyN7RXlUHj40PS2PnNscabxDBPG7TtfLo+TmApdWYO/pOwgN3GVbDpbN5PbtYm1cnDQxMBaDWFIiplUCykUG2alLPyx3UEDKLQmX7STTyt3nWJaRyP+97PF0WpsobPku7ZPRLTMpUZfCMJJiXaI+URQ5HSRqBXpNBgn6zIaj4ATRVRVzQGZwZh+QVx7U8aPezYJ/0ikbq/isk2mngQiadiQW3TH2vjORZhbpHDZLZ5cnAkmX/7qYPzA5AIsWftrsaGBP+z+L80/zxyuBbS4iMiBMYN/GlOg7H2SrnHD9Y59NZ65uVwVO0i2lG2HsPMst3E7H3GtfhKYnbIxGtVhWNQ+pyfpdLs+3eXEkWuX1OEkPnWnmwEgwmALtGh7hPPqvMb1Vo27ek=';
  const _INTEGRITY_HASH = '08ad730a2a176f63beca7612f1108c76efb222f3a82c2c14f90cfa12f015dd12';
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
