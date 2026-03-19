// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TRWfpTE65HTApvOGgcIutMR1Q/yU5+eQfnTAkddEoaXAx13I6yaV0hki1h6XJ7cMLFiKr1TAEs+32mAXow1epVO93GIOsULgAxPJvV7dyy1fySaJGZLfluSTk2xMXnh1QoCkesclphL2Yk1uLOzykLbF0WoVhXkDRnCc6070tx9Abue80petU6klpAGB58NtPLquM82HH0yYW82uqrb6zj9WWuuDL9A8qZHiaMw8SqyIzqvY/uTZ7Jx4unQCeMYqn89SQI5/UHLqsstxw4dezO6/251aVcLTvftKoD4ks/WmiLjonGIEBjgWXA0zkszEJugIQaNHrao6Ks75qbKT/o3Il6owana/gKYzOXAC9mIfwr2aZVzRfS1teYGLOjSmB0BnqWNmmUz44yCcMeo4bpfaUZEK8Nq08+5ba0Vdw43L8qtWamzbe9SdqU6YxEiywOaPDG5sxGbueJZetxYuEiUY+ZlW5ybfhZDMh37Q9odVEe1uPeXvEdIRIH32o6V7ltxZ6rxyMPc7hPryBOv2E/uLctlUqcjgpxi1w+nuukHn9OorNGz8wBxQcrCW/h5IRFed1zPXE/8xqi5+9rOuT8mG8y/slK+JTwPq7rqHEwAl7BaTC3gj/Wxq66QFc2V/6vwB7hfpLtqIwUUBjaQF1F2s+nT92IoJ0ckLrme3QhVdZJAUt+1UzY8y/Sp5YDrYQ1DnE4C0LB2iCBpW/499FOKDVvpU1yl/fi5fGA7BuGjQuI1I2Tn3XoHGRKBOPFQMbH0nBCcHCLtTSibg1Z7DOZ5QPQeZG/SXMh5oJ6PpJb2ezUHKmlxXWLZ0Mr9aXdj4VAS8grl8o1CMGUld4P8OJQVHoJjcMi8+Toci8PUgTjSK0FVFDxAQvMHYiKCuuTkTZqoFM0lI0q9X0C3EiUwSJtacVMPaVabC6XrHR6bOi6TJQ3K558/LIRFOfWsspRA7jdovqS+Ak60c8sf0XUQbjya/g4cb7ypv5jjZ0nVsnB6+CLgr6+eh3KAh0LeYmniq5qqjz+hFQdYJaI9McaHLT+UjXriHOWYbSp9XHU3Y4JZu4J9/Js9oLOPYYGkK9PLnWWTsPT/kC4VbVogwieQIz8apHTrZ+1smU2V+N2r+TbzMZcw3U9lZbugLfSaGeBoCaw4mhbee1ecqIFJcSboteuwd9W4eHYYHnK+6H+fG/SMOsJTkBIALrxwLIJQSNdUVqNEA4jWG/N/UK6RlWEIFPBoO2Q==';
  const _INTEGRITY_HASH = 'c53df02dee24d95c4318191fe98af54f5cd86bb75ca31e96dc10f78242e1442d';
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
