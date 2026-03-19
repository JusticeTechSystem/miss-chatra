// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Gs87vLDbFkMCWXQ+IJwlw+cYxORcAAHsFpaDvdvhXwRvZumLTWGec2TblDllV6+b4/ueAtcYJZgx4vs4/2fzHcuWfuGBLNe4GytnmULWxjQ7rZZ/zMaA1JWu69ztpvX8+oS6sl64eyQZlR4Gc8698OJGJ0J4N4SbQ30fCXzwgax5T+QJ+X7PpDy+sBTvzITDLnKehWh1Z0lCOxkUncnVBut2/3d7jGeWAaSuRcpa1iiHmQSe3Viqy/EQnjF8po9AbLS1Ir7DRhBI5LuY0nv/VxsaUnxUilmVrPv29m7fN+YcUJJs7z4QoRuVy0hxPYGdA6CN1MEqTxv2ttPZ1C0GlkLl74VJmYUvUET91Wj9OgA18D+CdZsIhA7B6kZNOGrn7KnaP5DSJ+5Zv09XfFTU1TKzjkeKJnIxyO2zLai7RNV1JEDp89XDqYdmQFcrxx/pU68mw/1O7xQTmiaV7bdmgesO0fLPbVu471BfHbHLV/H7iQbYKuoDxfOHLv0QAJUOcAidhz8/OGw4hh/PtOmd64ABJWmpRrehID5mb9dtNDW9W55aC4zbSazERnwO2lY7B6sFIdgWtkMEoWfAlj92gOVJw2KV2J4NVSPHlwBGt4X3vKo5W4Jyn+n7AlLQnx7DVH73Sqz0lwgiG2hMjAt0RSwsqikDXWfFWK9bv7ckn/w6aMaF3ioivDQZPbCGeDbatuk7vfappZ7qe4QJPNUCDjGo8/OkRKZ8uBoFLeM=';
  const _INTEGRITY_HASH = 'a5f64de4ff81f049f33871592592779429127f0fda833bb7a3a864638c0e1cf3';
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
