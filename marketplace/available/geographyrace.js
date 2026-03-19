// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Hsx9hLaqEsX0YNKVBRDurRHa/+FFVgmAkHJ1hmGDZZ9O1mi1YVbTX/WYusqhfXq3RoDGI9PtLw0WtURIfry5iRyGKq0NAQHFb5OrsMaVpo9w6gFXR7wLRW/eIP9zKmEr9IqST4fP8ZcHkwo5P4sn0ZfgT1aHY163XYGlVk7IYPyaF2e9scXKnBbYl8Ip2fGlGadbZjP9IlBWrIg2uNzjsUzMJz0UOuhFmGtsW2RO/4X0Zv76BXi6AodzjIdpPYDlrpTvA1gPyEnIq30PkCxLU87loiukfN4P1hVJyqNUfnL8G87Iur6HgKv+bXmz5fBcgmg032b+vUP2p0pgenq57e5N/6kaT1SPOyPXEfaj+hF0SC66QSUF+QYRh6SjB7FEBzxx2bFDJtD5vsAPM06BGd7mE1cvKJF1v6+sLDYypB2EktxkCGiaQnkGyGOsV9k51sgXDu+ccGABNgQQS772zNDBkQQyMQVn+VGscuQ7goxAbSoJfOoOXPv/qv51mcBLiPKUQYgUbdpzOrVfOKXe1XNZsC32luqcXr4rzt6d8E6JSX2J9L8ChBOKtwR8YnrmicaPpFI5Zxgvke9Uhh2/cFodweKvzBtmMXPjLblS03g3l5VWcDLaPoSw0Ra4cORoN9g0TRHIXV2WMt+shz2+RRBVAvCr57LPhqIo+c1LAW/gR0OprN5D0Er6/5uzH0yWJ/kvRC8fxv0S/FbHe1T3E+Ua0rIU1aMernxK8u1QgfpFe+kvz/DrgL+EWr/wAhBp9k0lzPX7DTLQE2DVKqVDHa75b8Euz+n63Xwl3a3UsQGUDYkE3kKfuAMFES+k4Kio5XRcqWQE1ceTH/m2Xok5l/VNczWMX255/v6iA2QHyc3D+99PYqcBbdiHlOFD6IGMufOAXxJW6AJGY6eOfFZleTRrTk7l4jIXdxlRKpt0pXi356k+ZfZpph9NWITaOT4/mPzK/JuiWSdAB13FuBOgQo6Di9SnrHgIF8YkzysAmdsLuAUSHc3UB2uh5UMA+9P1fJMdtv5JX1itwiRX+vB3Uh+C1YZZ2r3CM0gqu+Qm4nhMmVy0WSQy04NojwntETWj78cNsLKNN4ePaodrLtAUtAQC3TzkSSR2KzU5kFzyuSeIbPy2lqbO0S6qplpYFwYDWAuDh99ZW8krZdXlN2s4sxCoC4CynfDj7dWJEG7A+LQ4IABng+9kXdyGzkzMKuEB3s84RSLLctht/wEUYFs=';
  const _INTEGRITY_HASH = '920815988890d3d7e91c867179f9b468a2fd7fe708e2d4bdd16323dc86247c4d';
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
