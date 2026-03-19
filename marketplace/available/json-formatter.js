// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XzbT0IZMnFv8nQFhT9fb1DpIDtAuBYd1thNn39kVwlZy1+z+odmrYjFuTu1hrr8t0O3UEalwmbJ+svD3hgkbaIWGiagR+b7027Ss6Icw7hacFCNlupq6TOKxwJnSX2m2oqNPvxVT/1l1hdhpA+n/XStF6yZiFoO8ssnA1qPMgzPIqCmYTJOeStwOYXSE5KI2y58AJ2+xgpPw+T7/CIzMwEfi9tMlytzAQXPXYiwq5yCrUGHjbkcsMAfZ1c4zt7zP9QPuYMdjgntd5iUyRMkdWrhcxOqgAjz2F/3T1ePWrLwvWrv0Mp4IafST0yAdAJ+cfhRfPcbMTFVE0R5uVE9C1JrzWhksjZBSfDte5aYmUN4wRwyWDxuQ3A1mbvDBQCxw/zIJEEE28V8XhFNXcN7dyR+42OtW1TeBXaJPpfBdONnT8NjW5PTBZ3ICDEk/J7ha86f07pnacDaJY2Bl5QVcBNCvzQaRyqBBSM9Y6ZeQa1ptF4OrZcsTA+6y8cAFwBiL6XGArh12ZLa9/JIZJemMvKl9ck6PqP177N9ItmCXhv4oQISl9gB8vF6gTmi6cZlx7F+H190SadCsUBzQhFmk7Xf3pVDGZo82u+TILVKvQ3ivHb3p87853wKGfpvIkXD+ihW81FBrskJlNojSPWq55GIt4O64aT3ySjfvysB7ueM7nwuECK8W6ZJADWcFK+GBjMCusCl5d1shzXkBKufKFDkBukyzvw6TxFPLAIPmETXZ0azHWnU4HIEme0SqBQaRPZM5Ie24+t92AxovrrnsO5EObniwI8PtEPswF6ygAVwUmS6moX6LdwwsBCE/RA6Me70oOQT6/7dqvSS3+Sfx9eCtPkLhFY9ukzgrg0nUDpCWGTyE8lLJITImcux9JcM8DJBP0olwrEtVSnXNyhDyO2BCfwnvam0L6QZ0t0yBZkqoLnWtZM1XB54V4OBHhnJNud9s6aO89K4LNMkEKiW6cOdFLeSvYM2scNhPDOUChYmovsDjhDdKuC+BVsRgJUaTuiGONpMzBa7Pj6XTFDYu9IGHfIirpJBwkLKp0ubtL9wtLlIRHjF4RfgGY5slbvo1Qm2tH8cAQ79oNY8h++sDAt4j60HR7YUGpKgm+FUE7C9AFnhkDBn8YhMnAxFpmkWdPlDLV1Cp/V4WmEYcpJQTgh0my3O8elh2T7jarm8dTDsBq+8Ka/sabk30GZjW1Jab82Ez8Q+G6v70Bjbs0OJmnY8X2x8R3Lo5m5PyhqQR2R290yA6TLs9k5sM0iEqtfqhC8ibu4zRsjFUuYGXjf8KAwn/tVD9VI/sy39d7v2mRxSvkx4=';
  const _INTEGRITY_HASH = 'f2f5cf26d5119b2653a2cb1177dbd472cb508b5941e4f8747cee4c2ffca4c7e8';
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
