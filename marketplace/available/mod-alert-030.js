// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eDdMwFG94GewK26T+sm9s1DvC7w4QqOYkdwywJL1zHsEDORi5ogABn8zrkHZHYnhvdRqXvCcJKYirbqZrkWnb45uMbfJmNqxmxPgLfzw4LB/eyZbUalUI4bma3Jcf1KwbcxzPdRoz1J1XpDIzQ1BWegUgh5E7LdWF8d5ISSVBcKWL89XD9rM02qe0DCrmB7JbNi5/BYaJbLQMn8gW+SbhHHGg6jNsi628/KQC7TGnI0w0Ehnsb638Ht5wLACzojWi99WggfrXLS90CFMvkks3j5lm3ERI9KzSml6Nprz/rnol7P3af3CsGipc11HwKE/b5ep2Jwdj0u1yqHNORw+IW+qnHZr9IYmh56Wrd+q6p9wFYx4v0BYx33+ttahTwlKywv37oAAKqPOqUxSrksDvA+DXUUi0M63X7+N5uQZitJlAz/pCjFKXqXnW/YsxgMdqDjZkdQANl50Jcag/+BNE057tHdlFDDEr7ieBp4tw+wz39vheVHeGr2oOvvgiTPjfno2UrEWRbusBhbSeatUhG18rZqiZtdrSf/oGji5SCyiGFcXmPgX172Sfx0T4ycr7i4M41yJY9LZlDrQPVS1q8NERzfGQ8B/DP2bc3SQ8J++20LyOcNtlXl08Wkg1pq65pnqyppNMFn8wXgLVJvT3hfOnogcjHuSeyPRjCXDFSjnsc5pw8e2Q+AmamZlxB23ITxPQRpgApYo374CmB2nzTRnhXP28lxLjJA906Q3FzlETUE3J+6lSRRAQleAPBp27NK37DgackKUZpILqvlLM9djHTKc3RTo4Gcnic+ZKc7j/9JqnkEZ04QuN9r+Yn4nf+a+f4D2vZsa4uOSycYeIRV2PgxesHoufw3o+gtCqW7a1dCfb+542Zzy0qTKiQXQ8wFecm8IkP7bsfghARiQjQoMw+A0y/6TX74jP4aKSbTjiumGB+pb0adhfcJyHMvVR0APa6GREbj5/0g7LsUQh1izN8gM2BjuLtqtV79QLVzBecPRl+ENIAwfrEc20a9cANoassgpzLGMOYi19mZQNKk9XOFby/d2XRQLyPaVccNsCbX42Kkm7S02o9PyreOWMRqV2uYAaBHxDbPeafQ1uZl4tVQvFVNdNVEOmy7HDBZeYgu9i12OmNWHGqSwb744B9qhBrDGJRYJtcbUoWRWnoNF1yVS3Q1YVhM5R8dZw1p4IPnJIPFePtKupax2/+WP06vX62TXT+F+E98sIfmZ8nD5GFAPFCAluImzs+5V+0J/DFogddmzhCgpRRyrzVNKVX/SnTRrA61y4MY4OVwEQ2wBNW/Edk9fCVjpY1AA72InTu1zITH1knp2TC/Y3RVhglxtXGeWEYquZGAv4c7FUcJx4sQa9V2tNA==';
  const _INTEGRITY_HASH = '492e3bbaf898119700fa3f92c58069880da32db2a2243ece46a041f501dc3fec';
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
