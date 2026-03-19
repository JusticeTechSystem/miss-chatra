// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gWEJheP70pxtwKDe6ZqR6lGk+r4YwUEf+KM/Q+H6BgXdhehyrxw5zjvRRgl+P7s/FdwO3zf4V6zIt17snoCi7yYy7jjWes+8NWrSldZT9oDhD1ZiZI0tDaKxadEMV4GOTOxDV57y8HG+ad2AfhbvURPIlv3hG5d6qBI5t7SzKCMPwp/xA0+4ir48TYFE4L/OPuWUoVZEadlcdT92i8jEF4IX2gC3TVAbrQf45kLy3JDtNAS9hqjWWi2KbGBgYGrPTgAQVlCqxm+GDUqUU7BOVf36FxnsCQK4G8wovz7w8PsOeQymT4a+2JvXTBSc9vs6kVhyqAZX+IpPHZW0LQ++x/+RIHZJaMIuIzzIjchTc3JSrvT9wK4X5A+roJ6ohZg8ADIPXAmgY740QNcI9QWD5MVub0qtkxhJW9Bp+wUB+XXxy9L0tARRgw5ngZ9M17o+2iooWuG6mx6JUlJDkl+Ft1QACxAR/XE4bvdOsDILjUuKNaw5cgW+Y/zkDWIcDj9qrRYb5Y1qfyfSFkbMXJ4ggI2ZUPQ/HK8OXDVzv8RLPOVi8OGrTd3I+cOdaNc+pd0CeLuy6r3mXGT/Y/9Mbz2hLltiyf2PeIJ4wsdjGyzJjRkMuaXWo1bS4GooZqmGy063Jf6MeQtSaSi9qVM6dilkhg4CCflKGjBqzK5oZXxFpi35INNzsFjVYYZAZkn6ciK6jc/oAI/UNa5ZF/gdE6AS7llwIGE0n5bQ1ncaAmFvkd4L4+KduP/5YMGliGUGhdd8tUb9cHRco+LQNwOu8ts++UhjaR1E/7CiSQYhLUqiZOUB4HmBMccnV9eLeSp/WyJ3odiqCt/FbK6ngK0f0P9b0QrQ/7R+StnIYv0Y1ltcY+vDsVyeAu0KwzpVQS2tKw9UQXRfiRSVhDeHbrQIIaAvE50kpKyPX/AEi8nkxV5zdsUNOcr4xc0qI6rBB7ZFcqvUphSSCjgWmew+i0V5h37A58YsIATvE1JpisllLt1XkSlmbPvu9GeNa7ZXZJOXv+1Xt5ovym7Iopuyi4U5oaOPD6TwTmoygGGIcKpJgbf7pNAw0SGyhc0pAkvwSpLvHCz86Nizh5hH4lSGeNNZtW4id2f5n9moVzqNURzQXYwT50Nx7LAsUdj3eTaOt9RU9+vLe8rjTQVHGIUY025d/YI+Gb6p6bRtDe/VjK6A1Z6GyyKLTGQM6747FLBJQUntUf0KFDDT008mPvkbolmvoOoqvg2F7RVQpy1Mcwvwoj29XTgrUVAs4/S+FtL8VbpAXV1C+ZogAk75uLzv1MOgMmG5C9Omm7206A9cjH0/XNobGFBwmfnNNAJAZ8zlp/JyoRZEhRfkB11H8psW/TOdLtuQdjQKrmmgNZl5i8a0BUewQ60wbZQgiOiPxdycBoLuZN3mddSAl42Erg==';
  const _INTEGRITY_HASH = 'f502fa004d9f52b53fe290962cd1348eb0317b973ef358380ca9205bcc53d74b';
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
