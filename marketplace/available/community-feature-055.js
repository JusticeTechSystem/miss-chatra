// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9eUZxMLaJTt1EDjKYnAXBGCgWNNXuVsxBB2so2QN/2Y4GPpSU3PVyc3Tw/W/iUqewihQKVt0s4bQJeBfmnuoA8HrkPEXEnliw4TuZ1jFtz5u51M+Yrrr/p6NfcrPwFOKAzNenzbZ8Wm8GI/wAoaO7kC9MDx6PGbgS0ZPkjaXV1Cy080FR2UdNWmkrym6BFOKOwPAUfr6H/mE2UTxn9MAPdTEPnaMWelGl2CxajANQZ07pM8z1FdTSvYkPJ7F3vZpXt9uSt4pnuQKX68+spz7q7mHG2So9kBOBkQGDWkkrNHq+OKP+eq0Lr40hKYUU/Sw6Bp4AsOVq0FNoW5Kv4O6OCM4p4MlCD7+uZYJPukBExpRfH3Ra8sUoiXj2m16BZnhbha5lbfMkSkBdMZR957nkMnNk9fQPQACuYQyVdpAcClG6p0RXYtwKR0SE1JSoyi8nwW+uvkNCKCdP5ZgjAq98L9+oW6BvQw2uiv9JLz9oFW7pbfQucQdCF6PBWUTZ8yKMfNj+P+p5bRgq06gP/R9RKACcv/anhAg9eBoxJDmUqP0IXFPwNKdCU8EJdIcOAwLTiv3HWx8Vj8R6tOWMcL9kJOc1Xzdp6j/7dygXWkvxC0VDhBj4hxoM3cobL5y+wl4Svc7wUSdwiBBW/H5nL8pB7+RCuP0u6WE7pczqBOvZ3Z8qdagjJkc0D9pRZ3U7Fzqs26q1NOZD0c5CyJJiiFtAoHzmm8ALb5wOJp8gIZVFNtD0medEG8=';
  const _INTEGRITY_HASH = '21e9f004bbe3300ecafe6005594736d073a492d04e36a4997508480cc989c7a3';
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
