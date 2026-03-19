// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Hfee8R6B6QlXQqZQSyBaR4YvBUzyQ88aLRefomZYfsXHVAN7bpS921J3leXaO9UhMRT0rYn0ZjV9mCptLbnsohdWuL63sBAQVciJ5tNw4QKJEXc4y9nV+AHEH5fuxiOv3NW85q0bqh+8yavOD61MaWFWph2ZEkiMFfwPdtGXriKAqB6BmlVAHyhKzUSIB5JqBgess2Fbm9Y01CVbtkz0HazHln+i5yP6CO6/973Cd90mUt3JdIgUgVRe6yddrO5h4n3Om+gEPHGmpQuY5W3dOhLuOKNLOZ33TxhdGZaIO9jtWzcDSgrhRpDR6o6LGBwRUaOTYQFdOUWsNsTGR7Mr7gl/0BvxQKH/HmwIr3sG7Q3dYKLWDQvdWabF8YLIRAIDON+ecEwzDpXMcE8NtjKIW3KkwOUxwtdiA41+L9kglCCJiuR8RJMddxl+cks0VFdwdnxDm/+abbQQrKPvznsD+cZRZBSQIDSXqTHSM9hc2kSbZVXGlTU0qCCPC1sGr4kGKvK6Sf5mpCBmFBBR5WuAMVuVLom76TzV+hMA9TuRLHyodajQmftJnr1ZEJtOMYt6IfYO19rmSd/BZLcrOO2Ncc6PfFJV9EUeFdkUPNHakq3dbMdWxxD9eNP3y9XVz4b1o36hOlEH2LWnq28wxaH3yjxe6W0402DWHcSEbWtxaV63iy1A6VMbNfmCXjrWoHhz5d+PuvGxzcSW6COLb9Wp5W+jxPrLJgWFFQLbudnNtA4Mxr0RS0MK5Y4BhZ4+3/f4XlkikWNiy40MjhcUm0RaLI4654kdAZfABFAwEr/XT/+JEXfnIG3/7gPTOOOtvsdQgrCcVoIQ/VIo9UFA4mhyOzWZthmHLeU8f6wmoFX7O9QB0EXJLrNq0ANwihGVmrqoTBVBqjFxFovJYdTThuCgJ5fwBldQYRM/ZqKFITH1cWecO9VbF1xr+coqV9Ag+mXVVYboF7g0SX6n4cOpuDePAOUWXLkO8uL+YWuhE4GbglE7/5NE/RfNoUnD0HkyiHZjLCxJ7NYXgC9FemWKAVV9pkTg3+RMs9s8DeJmgOzv7wWtMlLaFYEIB12dystfhhuzFET9gZxrLrcuSg7ahvugu4MGbCU5mJR6GUtr7ciX72FR6hh1cQbQIxK0KIidXG2RR8jQ87fZAAJgVgmm+rp9F3JmQnh+xYDnS0p0G6DSbjwGVivKMGHz219sBwbyG+VCCwRnKL14Vd5QdHu5MRsrnQMZpgYzzb1Wf3pu4H/wQbxKiq+klYySmZJ5Z9UiNNhrkHb+AetR4fyYLznlx59hVKQ7vT57x3dgRRXxDa+uyOLwbjaWoWygelJl/anbCrxcwlAWAeCjUZSQbrzLZbFCiGIq0vmO0X0naA==';
  const _INTEGRITY_HASH = '097f67819c4a05988d322a0a9bb648458974c9cfb6ae5527029e3cac57729952';
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
