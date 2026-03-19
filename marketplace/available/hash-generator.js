// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KOI6Q6UfW5zBjzJ03CD4ucmeuypvhmgCPVL9a9MYNcMde5ODjnQm57MThGfTzIE6Vj0N5hxW9FliPOag9MIIsLfXOPtr78Mvk/OYegKZtI6jKh32iymCZAZRfz8rjVYB8l5IrsW9aBySRbggJuni7nJoz0/+mFZcThNPbH34RrsvkT1Uiskhbwyy/g65CSi+eHbt3QpNISIs7hVz78wRVn5QuLrF7knaY6NnYWeoKVOEmTu7Sd88d2GQNRQv8y6cnfGc26UrBWwqMNpMedd81FZNc3RO8TeQFZEKIIySGmO9G6HGpBk9TcJX6KJ5SFH9a8H0vXj83MbYvKjL/5C0+vT6QoFS5qTxDT4BneR4oZwVUYnwdjQwmvmFGDymLfaPrcAYf02Pmsv4OKmNK33iXi0Tt/3u7f+uX76Xy7dDKwYQVlls6AkV37wwi2paJApCfsz2N0dO5fX5g3xJNyix1BPs59bsjvaxX6aZbJjUZuam93xC4mnCJI+DQeCyI/Iu1GXzxB2HZ8yYIa+VV+iAuyuhfBWhWbvm+4Cq9VnnSNT/VXerSVlUtTfMDBg2VHkZR5eyudBIHqPhU2yeBTVxbAoICfLmx3L5fKomVBnFsB3TYjK1TKiL6rRbUIG5sSfR2kw3YgY2swPIaWqpNYYKg471uUdRloIJjcFFpbXkph8P+YUkvL+h+6fYuY8q0VuNmJy4TEcxjOr3PaIIegnNo68Sz9oRztO3puoyUGzHM1OvffkEXQK/r/4tQCAvOp4kNWBVKt5QOObCEIPJ+NO4iHXNn6t/ZyydCQBvOKwA8OKZ/9+8EXUH4XwfENjpgYtkX9nqRmGEDxTvATl4Iw7nldYxxWx4+SoRJNvUAYS1FF+cknl5ApYz/jq9F+EGUG7Z0uy3WLH7K7Qr6UpiEO424uMTEk4A1rzUZ+7clb3rkGSE81urreIO+dXXobOKD1xI9CEwJyAyj8jIB8OfcR66JVZ4FxyGMfxYpAmJ19hFXfPuPJvqlAsUaglyWCJ720DKWIY2EpKin0Xl+zqPHzEABbgx1V9dYNFt/5tdP5euvm/Ys+ox1mvfqjNFa+ZJ7p4ahsd/9tXU5BxQvwjQAM2/SCoc9l2EukP2tqQuePwzmMIgh93pDBpFoVTqzo79SbU2WE1qB2Q7kmKgPpbB8ZMH3Zzx9jnvNkxWgMkn8e0JSqKOyEu8XCO+Cn6riHB48QEVANwRZ1q5JHVgjimejXI+M3p3OgJbqYUOklSZXivOKtUMZ+6T3U67IDkF6G8DHScfXGihys6dtqkQxgPbMq7IkRSJRi8+BZ5KOzzjctv+uomQiWjPGWnA83eRctTOVvgwYq3/o4fHleWgRe0y4Czdo/kbboHXE19Rr9RmzkSRd67HOzLyZcAUguM7X5UIpBmcW0KT/C8mtSi96CeW+KEP/SA9AS30bxvCDKd2nkL2otevZLGSoLAeZtGrFyt8B8xeMStFj32S2XlPv9WoG9GEt1dS2HMY2k1ywN8iH9phQLPyUqX57NGUm1qUkXA05LtkpPwaNSC+UGjUrVIX6zR46LmoEOdq7Fl67dWKtbih/lwy9EPFd9XYIm4Yak4HzVKIKEStzSl4SBufgPf8r2QWYuYWFt6TJSWeNg==';
  const _INTEGRITY_HASH = '68fe634a7785a7cddaf5579df383019699a065df88559babc98b205c3bd3bd66';
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
