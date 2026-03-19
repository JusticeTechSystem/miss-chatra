// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6vtv4xGJjaP9vJLso7mwguJgOsdU5B+iw/reZCUPK6LQsKDgUxR+1L1yLl6K3Pbxd2hq+oy/Apn0nMMqGGuuQHxPjnRvYiI4qMcWNPEJIuT4oP3/mPRx2c6bU6PGdFGnCSYwo2rjpeZfC2utr59ols9jdfCBCIFOoijFSxteVmRgsIkClX6hrfwwPrQ7o8Iz65JyKVfQV6Mgvg7qdZRaR/QohwIK0s58OSIWAh2AhsqiGjC9angBGZ4JJjb8ljRm7JR4J5vDF709WmRZZD9ML+XOBKZwjAMsx+mD+pkjBMyc8fR2N2vzehpojBN6K3ubCEw5OrwwfLt0D1oosny1fgAZTpvg7E4PfJDQAC6NGOVJIVmtrv9msqZ+Wvh7A1cwNc7XNaKeyzpFutXNaXC4kpdj71vhF4ZDnRJisroXw+W7js8tecu9lHHev2xbXCfdhZ9oD27VgAYQtGR123vGVusCnnRAnJp8LBRLfLnEPXydUODNOSjYtB9zo2EEng8O341UcafR+VvZxmwNnjwIk2VwnvJjp04ZQx1tk48LwNL9KOeXWS3+u6jBOJfoPEACdHrC/dcxaff/Xggf1IaMRDG/HzlckNrgVGiCnLKWbCwLhmPoXZVIKGnZNtGTX9YAjOG7RI0h9IFkVJocwuaKmomRd7AMaOqndAwGuNFi2rKleIhXMndgat3mrai0fK9MKzz00pMTRGXAN/JYDl7nGcmG+6UgRO+Gx3hIALN/PEDeHenA1JU1Zi/AWY38f4WDmHVSFZGTQWkI5HWpt6hgKaGMAcUcITN9FJJQpZK55fVjtk/XN9a+XWr18WOeC4lLDvbr3tmc98NcfgCZiIjjZEvUAX4WUr92LQexxDrHhyMUCohvQPXFrhZc8TLDdZ+tGX650zbTMSoj6DgEZ7VMbw3P7JgNNUVwfrVxdIbwEROKC+sJ92NJrcwlnEfWa8wjQdYcDCqcqsqDlnV8PLmNxXF57sc2TPrFqHkytW8zqXwTlobDU+AeiIoT9Mae';
  const _INTEGRITY_HASH = 'dc9ef8b30564a013281c1c8e78693914bf4bb2bfd10836d84ee0dcc5efb2f143';
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
