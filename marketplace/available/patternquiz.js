// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'J2j50LcfKPleOu8e5H6nshooR8yoPT1295dCItDtwzYH2hPrYYlbs9C0p8S+P4ejqf86FBxOS1AJ2BsTbIWAsKE6NRAdkAgbRHDck2XQEHFkBTFxUyLQiJOhZFCDlKiPdp+L9Jms8qFHnALmjndH1eVzMiLwZPsfsdXHKwc6OQCAmonO8JHqQIHF70KMyMQUETWXVaI0iQJ5YxNXSfV3ZkIj6P+B4Qlu9mrfNRuHlGC8gpSX7BE6k7Eex4lFdXD/euIAftFVd407PdfSh6RYTtIX5g1GQDCCM5xPfxmedaW47O7HZFXC/n2ZasghxGX/SgOHhSwzMMidONiMtnH9Tp6oe+ETVDZOG6kFrXhkk1em/jQOraICO3/af0XUdASzTuJvmVK5pVSvkr+uGRVd9K+QskNIR/uLFt1R+bIe/f4CgjgGrzNxzYchwAenV/0KnajgKRaVZaFX/+uO2NcPGM5pnzkVHboc3n7MfhUDc1TnR1VKpGQG2IrbmPA5/6+7ElZ0MJBVhaAtps8ELhpq//8YxRBqZ691veCdaLQFEQwrW36PEVxtlwpzfzTrG0kGAYW0sFooVcsadNyTp8np/rg2PZJIktBggZLQUVYIJoEb7ZarpaVZUFmt3glTYyujQaTu6qURLnXXAJ7l/tiU1UcuU9Jdl+y+GNYQwC1/IsQ4Bg8zWjwpx1rV9Rs6ukKHVMiEDjdJ2yZCCv58Ire8t7y7rP7lU6dt+r5xurl8+JCmx1KMrfA4TuakATONearXVQaLXFrIQQuN9KwlVECcKfByiTXZRq061TAq8ardbkYkgqOdZEle0dbE3PTBVrfPTlGzvN/JbQMatioYGWFFp+Y3+oIjfmvhVw3rZ0kcpDRvecpaxd2qKjRDXfo9AJ8ESqSU6C/HqtoXOUYGa9ee5h4Y9nHGniQrtQnI6FiYuZVMltuvi7iyyDmt6XuTR7d76rBg1MPR2AK6p/rF2d6MIc+1RYm/MCuQh2JFpCiJ2XL5hvg4yKB5FX9tr4ouR1/qDpgiS/7DiymUT9KiLymGs/LVKqH6v6ZebP77IaNEc6uXBeAIeLiupaoCQX8CNwW/kt0vNZG05BuMahwmiptwRWJM0rXI0tSFTLzGK7Gw73m+OpW9Xi4rve5212pP3iLMthkNXvalZzzScRVmd4QK+hoVXY3qxt8y9Y90ojlk6BzkQ+1sWz7bFSwEziXFIksnjmpNt3XP1nNQ';
  const _INTEGRITY_HASH = '0c8fd90c2f31cfa897eeb53432c1afbee23ebf2c8e5f4d88edf7c3f6114e2276';
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
