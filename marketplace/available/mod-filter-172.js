// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4J8U9TdXWrn040tEU9TF/cx7HcD0oUISig4IgkNOopjk07Y9hAtLntc0X54j3MiiBSQoMDBPPZpCxsJEc0TOVuxoimFtyaBKJ0VErsw6eil5sBUkglYdejoq1ji0Gf+2kd+ZRKj92ZI0oWuxLOH1su3pnRUR0lPNfAyLNXGkRBe1Z+NInUIbHwXoeCNs5U4SKhQkIfJqa9DV/cXoNYW8t/E/OKYCm3UxC9bc9KDBKgPRUwrkUYqgBTg0zt/jCy38wIkT5sMmwN3oJGq1wn2UtwolyKgu3TTbVKehbKMxgahogdSmM3GZZ5Wqb1pjgarLI0P/dmWRmPA8VLhGWZapWZUkaM5eCqfn69Xiav1sUIEHi9O2UbpOwGHUb0hMZ4rxKIALAhBVFC5mQkejv/VNREXkLwIZHGsJuLV0U/oaPElt++9Hw1DfUu7I49yoB9LAIAV7tPJh7/u7AaVnf4+kqzMki2PAePgJseFPoMNl+I5NXAvmAxK1DyVa/8e6crFdiJ/MKednowIbmzNBXjphNk4n2uX+q8JaxsLT5GYc2Ch54KXJBdH+H416H8QAidOb2+Ib3IBrrTW4Oe/BkWH42hmzb6VKMz26fJec6JYrh+lERJ4CInzqCA5OCFLa4t5tWNlwXC6B8e8QsKE604KQ+3krs3IU3XRcE89/GRkgrWqPUbl3mEdmZk6wXguZMXtO5Z1V96LDQDEl0XtJwHYLf4snM3/ObM2MVQ0+kxWxeunYy+2KcL3QsYH5T1L2tc2oEo+Gw88CbXJONFQFhJgGiZEuvjMypLJD1CCLVatGhTksaYgYwbHlnclv760e2Vk/xiVhtVVlabRXq3hpkx6wiLWWsB8gwenk3OPPLjLPsCG7dyT0xKF9VWpO8xXJYf7YoX6TEMAbXp18Q9j6PonOOP0kno1czk06MvQ2Xzc5EFgAbxewq0SnWIof8vAGF5+9r8Ef5FmXqzOQH0qOF8UaYCP6PYRbGAEJvdp2f6nCElw/9WbleaQjGlKV3cZh3lXaN3d5L6BWSwMJzf74ZhCknDI60xb5b0H3BeamNMswFgcNZc4gcVfQAaqhkPUtclygIbU1cxqQSPAVny6ZZUwQhGDBWqWCSy6ZEp+vAFXj/RB37jGBdZ4d3k0aIXN8FQsEEAxcPDKDgUSYcPb8Don3JV+PZw2cEs6lFa8ZB2jNLiBTKk3VJTBoAHv1iDmAtIu+MeuZA+Yi7yca2nnIZ0XjHyvbjGz6RozNsd7n+SA1PnsCpk+p3txldHm1QWYwOTst4AcvaSXrJuN6QQpDdWBdQV/qas6sdDRXbXs6aNr8yNZzWY9Z2i3f2MFZrlhu0reTTUYBA5/JmiGo19JTo6c4ftklhLI03FoBRG6Kcn89i8JCR2rIWhR4OQ==';
  const _INTEGRITY_HASH = '76e7c9f02e48c9eb73ad034b80cf617aaa81f4d1df4c32b0fb9e33dd201d559c';
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
