// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5ITShdThXboflpINwysUkd7JMl0SdvHnP5N+EmO8/ZUXUXWaqtDMaCz8PHCAC7jyXTYIwlvkMppIKpApjhuLc2wVbt/hCAJBoIg8I0OQpjY41Aot5DXQXfpQwKIlSkOdLn82OrV0PCS1CmIASfR1Rex+/tChyAFXcUG1p2zu4hWD4BHzd6rsiZ6fZuHysZjgya0hxpmqut70JD0AXQowuc7JIAL5KXyOIQlRICcKvBPW3/1eqmRet6YqpuSS/ouUqRevVYDECatAgomefb+GmVokDlgJf2krjzSpc+dxUXSKVf2Fw03EQqwx1WiZfus0yDMoWnFUER0tXEgWlWSS6VRGoDnwmGED97nqaVMMb9kmZBxQCKsLUUbnyKDbtZ8ytonyQQMZZJDUMrmWR9aWBgfiivnJFGNgVRNZtdVc/64mf/QRgl1LedTpNncM8oF1ORpYHVkH3PndnwTh/9+Y7kOFQa7D/DDjwR4ibAOjJVziAL8EyTvEbKUCuCjyZd5ln6GWwaI3aQDbv+Jz6u68M7y4YyxDet20a9xB5V4cScPxp2gH/W3tDRQ98dBENZKuVZ5q8E40j3ADl8ugAEd+btm4ba+Lq4CD6A3JinnE0Dbdz+N7VK/0uP7c5EDmezeITSxUr7Ln1s6W2eeLhpwZpZgqaVmSyh1P4oUm1ZWTVOh+Ciy0B65qEMoLl2YMiWVwR890nZ2dKq08M5qX7SM+eG6EvwHycmHPRL7wjczWXlpQ4k/BcRniMbQ9udxSfFEPGLH3xjwl8vSelB9B/roIKaOWmLiPSErOoVdenPu/uExtf0sW20M8zzio12C+KADikNI2ttpXPxl3thDmfH3Vkx0xzfSzJVyovFSzQfk4+574DeG9x2plYLA1lyWcC4uO8g/lX/cxFjemuLdAOxJfDR2zPRiSdr5slYLgreJIxoJqdaUbn7bo0iE/wH1OYhTTjVkYr20XT98i+6LiLFbuILC4Wpv2t6FKxmlM+mIseI9k4XiDWYUt0QYEP/UvWdxdmMZx/g==';
  const _INTEGRITY_HASH = 'c2207f77538c70336fba370f579dec0489c9a117458ccd91a7e9fa57784a7272';
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
