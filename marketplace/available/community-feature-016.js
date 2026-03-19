// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZV1mcwrqt1Du4chsYNfDBH15K/RlWh3RWNsVaD/yCpd5YonbqSj7SB8jpzpPjy3Fm7NdveBo3xikOtFrZXGztz5DWs8cQ/Tc4SmEl37QJ7w3swFhpvpJxBM9A6IgvnRW8amslu4Z4dkHKbItZvLpckn/KalotcgSgJdyvUgg+LmEXjR6hzRR7HSVFAPxl0kM3yuiErqxajX/3dsvBd0SSzZinQHTEhrUdKjJp770f3PAbG+okQrJlPUsxiJmiMb4+yIkGCm3wDhj8EYCRwMaphNs0MIECPL0lSCzvjNRHfp7+r6Y0UQ63E/7415a6Y/0mJw8JC79JdeqvanBO/WMaqsFxl9BGACu9whaQpMD4pMmt0mnLYBXi9AwslAobPcbt71aE8sRiVTII83vlMcDZrifDIiDUCqQsTFU8Id40htBBbHwhx0ZusRpkVgFcK7/1xDt173gBjiFWEkmDWg1xnZTiLik3lORjTUW8uEC0RqhJva+l6/AvVccPDp/k8EN4gbhxubi/ZqqknMc/XRILgutAXOdD2xs+L/ROaoU9il0IBm1JLIPLNhoiRVP1O4riN0Z7OBd/FQ3x2BF0HWBabUWmGIe8VUxog4dfoS+5+WyDDlALVSPE3NIfujThDgXh8BUCwOUNM2fzfFZpAHYErUE7WxHLRIo9KdhO6wGj2aVE2D5HXs7T8SiEB3ut6rAiVrAObqMWu77S6WKTevie93eKGA=';
  const _INTEGRITY_HASH = '824a06e0d2c48d342d4d31d53af91d2b1a07c124ce0f3ff3675a2dba0e37a682';
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
