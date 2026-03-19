// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NECGbGP1d0qT+FDdz8DOkh4jQKxke423KlTNLiS4g8pvP0cpRmSrUPsWrSl1gHsOxM2p23CE7psz+iiT2IyHOHVUJShkVyRhIDquyEefCA62WXe6+2e97VOQaFSX1hdtYpzFAtpDMSlrGOQ/Bg8U4BPuNYSWBnlE7kGxzl1DnWz/0e/lzGd694kiDmlgGc3iP4RsM9UgdD7h82minkK79JPbt2gG/4j01YAHrKIM4wnZOzhMpaKI5HN4/dY/f1DYR6APosES5TEM4MciObIWrLu9p+wrSVaYe7z8CMEiKycp+K3v+Jwp5+l+A1kou5JnUp9ldTykBCGTNYCcfB66fwzVKniU666DBbB2M4RZZFgKLm5eO6RH5fRM3lanfUUPDt68Oiw0Yr+hvY5QBDUqJD0WMwWRQ6z4NCyWMkr9ZoLGjyMtgPdFs+FrpSS5oG4IDRwGFomH3Cn2pwLoJyitvW6CCjqYyiATcwj/CrWuShx/lSzamiQTFdSTbgiG86rpa6/tOz6kDEVY2O1dQjVgs4MXYp3sIKD0UtxHQdpgaqUaZKWc6XyH/popnSbpZ3MXzAiuN5pDfmYdxuxymiGiYkOj9rxoBReBrDXwy+Tnb0mrLpXpjOUOpuZNeihcN/qLMH72BJnflsRJA29qYcR93AgTNbPBg8D2LkGxvq0g6G+hlfGrKDaDVmJxajxXK9wKHZViJvPzEtrolZAz5HLE1vM5L92Nt6I9h+Hx+OzdQYQ95ufgxhMyYy695V5DFvQTdtVXMnjiCuoKkp55E1eDMWUAxt1KKIrd57HKH67Is0yFj84l9pcW9Zg0vUwcYdVs6Mb982O+pH7w7pikaZU8pwnySr2Q+vdft8Lks86FF6X5Mc7Llba+HSYnCLSEs/uQSN9sCjApcnXyFYKSOX4z5l678KdL94AZqHKpwJktbNRG5G6fnHspgoIG0xbYx8PK+qO1usCAV9p1sUk4h0sl5xmTCyzVMF8kzKuDsItDUUjHgg8+ENyACBKDoaA/UCEO+6GDzXdJXfOm2GVcq/2byNI8X+UipYD5+OnVyBisFddkEwozVTVVeszsuXsjDivsveO7qi0AevdezachahFU46VFDm69+WI3AYgns4Q0GYGpuKgiGzjxssuj5We4gd8LWrNiuR8W0P/wDcFTSbIqeYJIS0bHFHYkJEbcBCrBZVGa1O6zkuKNOSkEtIwCerWAfecvnFqhlXmB1rXp0r9QYNMLhU4CZbG47hna4w+bvbL9jiHwGVdJMAJRAvCs7vVFwNI+zskVvUYv3QPVS5bcdYO55UDSND6CtE3GyYb/PPoXAdZGwSQrEZ6kUMbIMfW227DIAPQ=';
  const _INTEGRITY_HASH = 'd3ddfc7a2d72d272294d15cdf40c48b951ed79ce4ab088c43dfe8325b18c0721';
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
