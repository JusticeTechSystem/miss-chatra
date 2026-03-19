// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'C0osJYcQJufwR1kECfjPe7U375fTFe806J8ScvGtlkChPLRxcg/waIqBHHuGiqYtcs5H37jIieOL1peuWHkXaHXq3BIcUif73/mZgkaD7K5ivGDvo6p/5Pb5Ck2+LUnkq05vDwCj6Ouvhi/uoeLC6XNnLXtYy8RnDGSCNu9YUp1tWB5r7dMzQj9gb++AF99IacBmwm6XdObdfzl1/MnHjzGAtdFTFwGV5AijzY639180r8ii52yVkgk9gFkYFCVfn2zxgMfAMH6ZOVA5TfSasbRY9xHVCr8l1sImjcw8gk+S2yurjM6yj0iBu1Sdw56AiZzmetohohtEZXbGS0JBgANhR90JIYICPvi4UzHHP/7NMmWiAQdla8b01U+skfH37j1UN2C0KEXjf84K0i6BJ+n0SO+drlMP2nRoX0odZ4qyTSdw8y9DC5FrGfk3552h+LH+yR5VFe7bd03jn1KcauAA/FgKmEpGQlWLJJqI6vyTOokADNz0IGuwyGxrW3JOrOXFFTMToYvasLfQ0N3n8xrLhACA8uf7U2s19w0H0ae/tqayrqNkPGINFBp5L4u4FEzM9Ohf/9IUunD2Kp48wXrAXD04CrjiyFjjpClPO1cTm3FUvozaJpd7u7Haqj43F/GdPj97Wwocc0KLfXYUk8H/gtCug3ETgRqthIeydnQxQzVYm3cpfNek4cQLwzV4hjpTk//9UaRTYLWPct9pgqP2Tq611liwQOhn9NXDSllh1loqhf7crutubzzQDIuQ1bG5mC//6qGF72JN86Py2mFRgcde/6jvSiwy5JKxXgodxXixdkM3uh5JX4gmmNdRde7IUgS2TcuvdBqUNmkYYr3GfZlYBPcM5Mw4mR0NGdudigdW9gcj45kxghl1kSRQk7xfdUq6I95DmuO0nGcdUquVhw8DBwQ5lbBYtxizWkLFMTYzQVFKNRIBXbT1yeUeTDizWODPnv5lNmruOCdsh5+nzXTbfbfillK5du2BP6Nfl4CDA1p8UQPY';
  const _INTEGRITY_HASH = '20e47777dbe2891863b6c60868727dfc93d46e65637d9ad664c2638d5e7f26af';
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
