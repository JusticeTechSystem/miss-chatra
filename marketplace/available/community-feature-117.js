// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LTNYX+wT6mekKEepiEcAxgpIn7OWxgOWtd7bTQ+v+atiYHe9FnH0mbd9rn9Gi6m+Iyt7bkX0t83v871PrOpYulrxlIMEJEVs8OFQ7XLRlzf5NObPEwoKAaXxwqvBw2skrF0R8K5Mav5hf295h1o7o9tctC7/DSRlvDRdJqMaalx9N2dXlKmTET22KGzvLRtjCIwhhoTdCUeU0G6CTdDD8xY4fb8zqooARS//1VBgB1LqE/7CZkGD+z+1tzspuZfeaHelJk41MbNfZLrTnUd7baebRS9bokdnGPYuKtjpipHxxECShaeIR63M1qwA8NgBqWGcqqr863jgGqgwuBXoKB+H4H5AyUjG2fRqJMPFq4tUPTjgigsqF30b4pgpqhZziE6EpSj8rj2yESTz+aae3yhbjLhR9rXadmOOD3MCLbIfdTymdXP8QqxnnMRVpF8WzO2od2gzfwycs0gm5Uopc/bVoW1wChO/C99uNSUzUUF4wSjYGgR2O9nMxJ6R7MZUo+oS+mPOwOcZ5WfbdTVXpy2T6vYAt2z/aNjt4TlKe/bmRSAQT/5EuvmvTbsM4cdukHLfwdkni7LfOaMy6AvKoJg8bpYEriIpm0/ttlLg4PEOGF+jELUnUcrYDkNZ0s9M+dUd/SMbq18RRAIhgM6icZ80b4l6Klu6oGtX/4w5GRMqB4YEsPCPvzPMbX6klACaVB7zdTONqAhBk5g9VicdGapxuQC/T5cI6hL9h4WfVJw8CQY=';
  const _INTEGRITY_HASH = '3af16b3e65ad8f84c7dcbc741f84cf39dc66fa1b0882e24726336abf02f38df8';
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
