// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mJZeOHXzA2ZPZHJehsfVP+vy+mq6BiMiRp76FwP/gkOmIfjOxx1dvGGgmiI22IQ+H/nphkD9Sl1+FMPCRmijqMPXLeuHPkSB0EWu7nO89VE6EOcEDs6x0ZpFpo5WQRB8DE3Hnfd2m/pEDS8GUBn7ZQpOjHYOwCPrp7geIfv0DK+Ni7svkZqa6BQ3fA87TyL2J+oO6XxJYJvVKZvGqr0SOakGK+ll0Hf6kVR/DroeDzkXtDe0FNVrWw4tEQYQqdXIG4WkEkU0SDzIW1h7AQPU59fIMz7OUp5jndssSi9v7sTNrU2MlNPgO6BoegvE9Oyj0nNJfpbvqNDtGj31w7R+NvjcNqNCAYJlNnQtSGMEiiAuvwS6dFBrjzHYSl7fDr6j66/NopcNulXllq70+hfULZzP3h1ZBPWh9ElfXXTUuLTtNP9pLt/aFKDFQUTWT6AtOiTFpPZ6ciauJuSe3Sylr78cYxm7MI4SxRIbSnMf5WyiWmRW+c7KbSYiIUnP1+6aUqtPpUdmPyYpPYkU7XoD2dTXhjVhI5Zlmr95UuMc0Q7eD8NF3e6XJN1cCV9h3kh8dTrnsFLtKn9BKKbilPGzFnj9W2ZaCS7CC1TSutOGs0FI07dyoW/aD5pccS4XC21DqZ/8+KQqHMyJX3LcYGVlUIadh6su3m/nmiY1wYYVlS711b46liXkGQVn3SnzrpwzktAITkjXaLu+RHqrnz5Uico3t4XOXp9YnfBS6hDmGNOJwBrSMaZNvwv0p+fHyHngDyJn8xgmO1tvPuXunW8c6zUjkUIrrlH0g8/xHtOkR3QmG2T/rXbcrviggTEaq4Q9JajkGAoQ1vnHk5JKMlT53fc4lhYr4YDqRCICqDUjUv3ACDUmI2VWNUiewGYACp6rYiMomxoM56A2nEZA6bZwgqCJZRQHenHXQqRWplqbfBYA/OWQRlh/et3DJAZocLMCDyqOwCfhOaY43W03354HJ/tWd7NGGwYW957HVha0UMYE459JumBSm67UkBbzaAMkCBtmc6ywIyG/ZlYxlNQwYRYNDz82dh4zbExM2V9HMx+x7Woy3cnHLm1V6WN06n/rhkYio77P5j/tqJsKOWXtbfmxDBlKza+LobXb0Nf/IzSdNdmx175dWsZ6oFJ7kHXq5+Lk0vYLGigS8vSDGtNNZOC6TpO9Zz8esbGJql5pWrMAKMUa/G/FfWxXTjMHMF8fZ/Vd3TnIm5VNF3aBoOFR/2xVGjfTkIiWukFyEnQttyDkY6d99hLxR32RdMTQXdgiXWslOMYJrFDVeieNkSVlYiD4u3zC7fua/PiZmjE+lP1XHjxhF/9+iaYrs+fCGTkm';
  const _INTEGRITY_HASH = '385200f21372af24ccbe42169948d09a9c856be4143a6f33c7be511def0b91f0';
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
