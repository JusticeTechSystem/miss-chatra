// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w56ZAizeIS8NHBf76nrfwo7DYkR3EC80zWUSTpOIQjvzl5PpRBnpTGzbaEraEKjKQ91yDvQ3hFnsgMTc7t6b/kcz2U6dG6LybsJq/lYecoyj2HFipasFkqiJAKKJTqCM63l2F1mDDBE2QLxtGh9GMHeawVeBLDqQ815e8XOPcS1OWRtFEIfZl5gfg+NmyaYvcTq77TXVThx5cekLThOzUQLG7xB+uly44xaINUg66RBBACuk0zvwcXmE5HF0WUTp1Rg2nYn85XHgy9Eprqy8T/J2utwxV2iT6U+yi1RC5loL8MH4daVS9TOF/QalRmulnjAuMakuLoLR5xpfizzupHGD+lu7I/5fIdIpTOzq0sSH+6UFJkWuXi7h5vdvn4leKVZJ8pvBumx4pW7kX0fz+n/CXgor3qlYQzHYl4tJDjPB1Tb39liBYrxRqAQ5TuSRvj3BxoAHgqFZpWJ2GmczKa6dKmASaIQ0YZ5v/7dTAXHeGzKIxbeKtpf7/glxJBXN27L7Zk+4XfMMwsgRyJkQPpWHfXMaqDW4KQkOApaRwC7/PD9d2ktWVmod5QsQzwWzC7p2gUzD5esSnSnJVsawgO2bn02sFbTbcBnTFXDGdRSgX/KgMiX9CMyw8Uk7FbGFAhOkaF9T5PCO57J7MHb/MtvwBgbgYZOlBGUKb3zc2hUo+rmycW/c5d8TiYlUHaPw0QTQeq7sfrXEFlordAovmOB9NF08HsL/NarfJinVj8ac3vGI6tkju60NWInZT0kyXExBciqdX0peAqHVKciInu9vOnTIcp2/IeKSpskuoIC7Pg8C6j/miE801Y5yml/9Qpoujn7amn8onzECZnoPlQNlC6VljiR18Pwz6tnmPcsViKOiTBIIwJpvbwJUmnwL2m/9rvVi0Yrl+Dwf01ku2dHIcet7Y2pCF1gGZ0pSXdvlV1gS98Yh8ktgl+S/kRWvSnNMZPXRzoOBxRNFeLOBZaNcSSWYr+Ru64YyiXkLMaWZyvJdrGXs52uumK1THBflsIqApvtazaDpBUyMWIWLzeL0KOAuzvDu9Tlg1NDIxyV5sjlUUrMpJoCoAL7le5PziAT0OwN5S5bU4Z5m+Ox5J+kplz5byeTFyDZd6PEtfSWm11bx+uA7Rxt//qsYK1T6p1FbFYOw8Qr/4Z+ISnS7kKnQiK3jiY+wi3DFpKP46YPL6TCxIXK9TPxbFGCV03bmfwoBF0SGhfS3oMzU2wLZzO/wPMKIC+yDwx3Coe+gkcxX4TLLUv470tcRWY8U3IgDTXbPQJY3oth3UWpMAWJRHrOzKXvNH22uMmpyODnK8r/7jNaYj/jif7zj49YGCHJftBOzlytB817FB6TxOLi0Xbo6mU4oKGB0yTRIExaIyYDMJ9hPP+Eaiy50jiqjAGY77SSznPibHNKzc5ES';
  const _INTEGRITY_HASH = '2a9b0ce75f4840d5320efc6456f7f4f77695c70f3ba6ef9d8b820114b8578fd4';
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
