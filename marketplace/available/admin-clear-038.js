// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:20:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'C8E/bFYFwdRuhOtGHrsrUygNwFINqpYM8X3US0IRhmgND5ZUMKgS7Ye7VMFZH0R1bsq//+mHtnLKuWoRFE4yepJyZAVwn0u4hCgcH52bpX05PnVrI0B72oWS5QG9s/aZHiBVr27eW9oLIGTLKRT5ehRWx8GxA8tbURdX4b41ulP2LV8BtA7Iw3XdGNliPfCgFg6y6WQGbsSRW5JK6G5MGJtaEb7e7Bb/tV3rWNVKADJ/Syb8iWhE14geFNdB3vjQcF4g2x327nYs4qoaG4KwnCudf9tynxVglnfcClpO/BZspO+VjqZzkpaZaOqRplMGtyM5l3E84ysffC37DaF94dEiIsqUl2kB8N6uoY7QZXfxzjpmH4TjJMiyDTUw8jxz2AYD2PN4PCkyaZTeozACMPOZ/dXugdq9p/OtgDj/wmyIhazf3+KMXXxCNZz20p/QcAHTSAlvPgtbZG+uNOtKLLl5XI1ABC60E1BlOT8TNYEdy84XjBgnq1mSi9K6Hiz7bh3uKpQE42PWGnRigDRGqKSSkQMWiwmKejmY5MLsNIUVsC5bp6swLFerhsl0gpTjg8A+k2l6BlnfQcaT6Iybv+wziOxIQCmt9POi/gIj0ZZ+YsFDqp0FaOmF1HyN6RE8IdAFyGuJeJLzhZBVmgQByInMF+emmLoTbU/4cVn3oJkl1aQ67JYp+anH5/3DnpMEv6SEmsmkERA/ozHGpmhEcFHlINllRNvn/fphOdpSsCPiEIfXLPfHHGEoa5H3P5H0BFLzL2SDxJX9uP3JDPdCOFrJNVz6+9446fzbk9Vhw5L9+qYoWyjtnjZO5TYQ6+/GXXgNDG5wnLd+bE1nmsE1PY+RX8ZKXQeN4h8Zs2MjEs8EcntusOeyj0Oip+sMv1cj+rVPcSYxIV4ZqUix4fqlAgvVuJ2VPYNfVpkFm3WMiaI30Vxazo/iaN3znm6o8qyFUnCO4wNBDPgbIWhHg4dTrnXUrf/hez2hSprdAp56uwL/tlZ4a5E=';
  const _INTEGRITY_HASH = '3e8a4a23cb4b90c5b9f0a9dfb543cd90289ecee7ffc74e0c181090ff9026c208';
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
