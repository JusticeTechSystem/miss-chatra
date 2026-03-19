// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VB5KNp8bLZOebsmdGYOVwxSkTAiysckgdxzft8CUrO2B/9DQYL9AchCZCtE0jHDB99k1o+KT22/WtZgzHdCH1SP97eOe/x9zkIu7vwBKyn9vyK9l9zzz5nTJ8AbiqqRS0E+47xX0X1GtknxVJP1zyf5ay1ccaCwVpnv9Nj+gATAW7JbWLrBIri3ICXFhQ7ld8lSA6Bu5Jl00zE2De3ljbZO0CwmHspzMZQJIzHfjQoGrzfuhJMR5tX9EgzGpj9U9VgEkljjADToSRiwjoxyAPeBhNx6XYT/q+6h/TuZTGL2WeVCDQ6EE3n5gL4cEhErAk3rKCcaCAQEtiopYFXV7k9+69rNWfkNd5Rm7pXzc1qw3aChjFWs1fS8httms7eJGr+H5j3psjoaFBXXW3KC2WWH7kAyBe2n75YWfbGCKPxJB/G9ZCS5fkEZyVoUocIkd3J0XLM5UbtM0NOgIbaGdQGP1PvfhH5JEg8PV2SFStpcZRhEQfp04D4uGotgSS4nhEFvv35Stb95kRqaRI7DtKgCY0oVkZsjVT29RmOfDB2iSbhWmOBFw8L6rgWiLy/q15ENz9bKi01VU0qBc8I4/syul/5TJgKXgEDIKlPRUe9XQ0T/Z5sJFg1ttsvuqzlpadG9RgImhuFJXCtQYFnskM3djvnY4KF14GGz1IZEXaDvGeNWtS/6FsOyAUXUH4IqT6zgdgHg+zLlmfMMvhF5u5dG8Mk8M6sYlLgphupxFjfh024ArLdi3aPmiYHQkNjlpbR5xrNJGZB6m5aWjzVNZaL5Yb1XP8Fl470Ks8Yghvl1CxjMET9oHv55GPbjSK4TJ7YDCWi7sfSPRlOGydDu69MfVnRCSItE0ayAtIjJGzqd6qMXQSomODkWRlF1mIYoa8bavElne2nuqxY3hGpSZU+oh4DS0L+FIvV47KmyMVlRze2oseWaW1u/wSsF9y7pAQGzpaQvPWDfBU4VeLzhD9QkkMfNrRXzHcu7GJgzFxdN1zPsZavJi1m9xiVvQMKMyeJN+rjqr/YZ0uFieBIzbbh/hoGCT7Ekgiutj/eltqKOL47pFxk+POvFTQVvQZ3pnbDNrh/p/UgewYWjB/CmmHElNcd/GBm81PzekCm8IpOwTO1x1sX3nuywRVXf+kg7ZXrUNU2ohoUTDdzxsMNkbYKGZY9ZGlAIny8xfL3xD5fpab4/0LEb6qxfl4I+gfGIfPvShg64gSH1UXwVzHcON6f+cdfVJQegFoPmO/Zo1WIEh5ioyXzFZSpVikLq4to74E8sUMSwVXu2s/d/JEKApQ9078F9ZXdlSr0mUwgNHYsFDa0SO7PGEGYsXpmEexw8w+xpieH1i7PcvPWBExA+ztI0Gyxlgi3r+JQGRN6qM';
  const _INTEGRITY_HASH = 'e6abb2e54417f80e080f62d059fc956c513929519056a35c4daa3eb7a45cd691';
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
