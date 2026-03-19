// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5fJha0kTEAMBq8MDPcGPRsJEwKTeBiRkM5G7YIEKqWIGvGFaJpRzFVp3PMR1LMMI1HRsHb4Yhc/Mmax6yOt6ADSN3w/z14hEtotwHw9b+gYkTkA6Wf8rO948JkaoUjREq4fFgNK17yY5veNvpTz1UopZ26cXIV9jyGk8jdZFKrJDBjqk+5x3DCA7/SxMEvX1twAwF9Syuv/ZF7/gLE3NEzJZzonJReEIv3gfkREByH1Hi5QRnPNgEGNEqkOuAhE55t7ZUYIL5XyQUnUEZQVVVyhOod6F1K33g4tQ27HSvCujEDyfj7ExpA3Fr1YLmB/csTIoFA+T7H7dkcN4cBL1Cy0FBhxSk3TNQcaFEdtrSayrdpB52unaxdiwxmua9Iifaqtp6OyGA2ANn1kwvS2IxoraEIa9lBQok5dk/7K1PelStDdORwA4lnVgupbpOoa6ZefDcvoFy6HdcJXyjG+/tkrAT+EBXmM7UFjdlkoGXPYqx57YmjfNxDyDB7yMUHjoA9Jxg6t9US8dE8DAMO5AWbHmxeuErGhmytJbsWlxhz8xMxqayTT/YFXxCmJST+N7wL4WRsJsmIxBvRUfh3+F38i4I7C7pTkgOckn8Ynws5/lJsok/d/bw7SEPT9bsXR+sjZQ5B9BFm23tMpyLlMHltqbuUaa73J0+qtjC53ia7+fn8q6rTUuVGx4G2BzQx7zYMLHVuk+7To5QRl8XrdDfhYE8zkXsm9lIMuK1r4JwqRyE6r+CG0WURePsQAxYgaxnQZHO5RaornBNEXPd/md7ZiJT6xn2Uu1aHlgzooAvmnkozBQdzALQrmyxP+uuk40/VCE1Ew877mVomCtEdGcYriWxegbF6daXIAqHI8uLCvsqQtSPE1/YYqp8wWRsenbjTHWhGmO8ZOeRBtc/iPxS4EQ2WzWN241gwl/NEIoOjRNKpZinzoSGiZQDKMuQyPF0nFQe4CZfW+CqfX4WxRyh+jb3cIreEEK0uPfjTOKy2vbaUhH3oxZQYZBb/tq9/0EFyPw5gwlNB0fwo+LO8eTu8L4u/tXezuVIhxMW2bq8wKwLDx0NmvmMjxhcBJrsxs3xXPjKoMKktvy/QrzCEP7SODe4Gy1Q1NataVV5DUl7ddgLyZzHbJmFjhN4smnX7xpQk7uqkau+BEJFjBD7GSum/UeLI5LHEuuB9OsQyGefJuoeycfw5t99SJCJARivDC4o6vQttdnvQ==';
  const _INTEGRITY_HASH = '8b0ff8c0a2a9ece8c59448a9460125905f230f5f56a0e08d1a2a832459b830b7';
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
