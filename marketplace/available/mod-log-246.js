// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3Jrwna/NpyCfmVwmD4sE+xrag3UDuWmiX3fFllSh7JjlZhvO2CTP/As+P3V09UdeBVMRIvGZu/C6qH7wABwQ+jPxZRSgRdj692q9fM3V9DHejsT141mPUsjB68ePQz+TgG6T+MumBGeSO2ZwR8Ar0zJ+MjBoF8dhVlfOqFEgWIQo8oezaa/N3X/ZX+HLNFTFiuWaCg4DEs8R5VmMDPERuDI+KHA4Tv7LSaAm3Dv2nwVuGBL57DbVoPnWCx+ozqqNRiZP4UyKXIH6Rg/abuC94gimMf8oiISbMiOfxTRlz9WiwbPkCC0AXRIr8q9L+mbNC59DTl95kFL8QxP2fbHRAOBEAP9C0FeEYb59zqOH7Oz3KX+QS24bdDR+2rl4g3cRlYg3TXsGGDlJq4hMIvwXE5MErq9B+0vQj21P/TDoFBESjs4aBC6/q/ff2PsPAXnKWsRYQwrjdQfxB0v2PUJXv6YyJbSB0DD8BHfjvexWnyO0NzW37dTWfmudKtGFiic+a3PMXDCH3fJN5ZYyvemkp5Ssur1p+3/uo2c476oVm66cSsHPkUwbW6HJTeY8wHsLVE7jOCDDVdVubluXccLXGt/AgrTiNO99dKCyorDCGnbzpShBWMT+44m9d3krEPRCNdZZ3DtPukGARZ5TxwXUDM4Nhf6VfVMg0GytE0EYWD04JWPQ83FKrFGmHj6DXx1f805tZBQD9T//kp+XxIq56/U8j82fmWX5a0qj+OT883HVwZbDzQ0xpeeb7kKqrkbGqS2435maD8TiR8gU/LEya9dABl9mT+Tv7Vd4W1Cebaz1DbKV4tzG8t3iv4bhlQTa2KVe+Dhoso0d0M16+9/yJrIQjJWBBoTGmBPmtvnu1oUNtinLbUG95e+5TuYavh5QiDtNSB0JLmPbb4ZGMlL6unUfCzKnYENBWPmSvLVOptp2DlyveR+3U/s0ryzqz7N2ghdLeSooa0Hko0tc0W6hXAFEuGP6AsBO59Z/XJpKVxyj5XEGc+OZ0KkdeIwN+H4H2nhxzixEGhYunDX0G/CaiPHz3jcrq57POrBt+MKIyzxAt7578539T6ZN8cvqSsP6V6datqW7GVjvl7tOAdJqvsgosR9rPj2F4jS3vPX0ib6Qj1bGsD4xynCuIrDaZw26FxexhF5u5GHm/sxVspqXpcdRsH4wIkc0nj/iolA2AGF2yChtT6fDgFnpnpSkZuMkSJpgOhI+1W4wyNNuFaxtlNqrUDo7YwP80A2f+ex4rglb2hHew4TpR8KwE3e/q/Hfk3fjBqKHMtcHx2z4rI9ly2qdwT1F7vGPsBf4DR7FpgoyhoG9/7pR/jlL9yVG0+vngYE+WynzEvFurw==';
  const _INTEGRITY_HASH = '34ff1c31bf77ab48fcc64f67529b3f0920dc4e00ea92287715d64e60e4668c0e';
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
