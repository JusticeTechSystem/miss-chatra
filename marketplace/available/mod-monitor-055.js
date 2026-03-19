// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2sz7vWdTsyIoCHyibqFcZ52RpuBbA9blFawiEP6FJBdcQGZjaAWB4iyhU2COdpa1lQWLvkU9Eik94qCy4BBYAHC2XUBYxV4eH/IskL66G3dmf82jZzNa5gLARTNuBiaGXbMgE8twkJJhTj0u1U6Kf63TRB7t6j3pHb2YU8dVLajMAOIUSLLklzVyhGoLgLHL/u5rIbg7SL0HOY/lzKMI9/lfOzHCf0XOgVJ3jCIMES3cspO882Hh1L5N/xR92XDm7ARiwi2qU2epdGZiN5jmsx+C+mrEVy1P3dTEbMImt7nhxLl6CyfH2X+6MdehUln36lzgLWwiBIJMqnCCv3L3NolfK99/Ds5CkglvAIewkX/ETt+a4JsrScIFFciL9vU0We5q/pWx7dfVyYdgxsoTfvg5kntA7mcIPtXE4tOug8norssgOPygzjfMsu3d1XrnttpwVIPNNHx1zhyASRyTo4eFL78x3d/Au6RfyPyFaxaLxNiz5giUZgMehQevjA9I7lKD4wQXMxhJKNOuSG6kL2qsqY3CagGJnGrCYiIhBb0UMv2egoNiJQeNyDCyJnahZ6LeVrdJvvq3djDI4fU9FhqhsWNWuSo1fV0N6GeZeJdAFnNVasXeDAMiiW0SKl+cLHjT6I2AzpqK2u/9ZrEXj6lK3uQ64EUDkPjmsg3PFJrwyFDtaorCSNIApTt5OcaRc80oPwZvkCuReJwGxpmX7YjFyQMPuYolmkFlrQ6BGnYGMx0NOFSWmBExJDC/wTbkJdTJ+lUsiTj6kJ2NhF7EoXh7JDduIj8yCws6eO8a2JFsD1d2kxbbXAXcBLrlXKYlZFuaeyqQh5iliRjODwQkMw2JJ/XDVZxZKpepdhCOIJJkqiytpXJvgSbsXT4UMJX/551/rZLbrju7330yNudVU0QGWMJnYuolUDfCpd3buK6Ie4PTTRW0nf45l9Rd00cG+fUsr2ybQNhxsrB7D0Xyqms3PjNKeuKRugTEN+0NEwDkT4Dh8LKSdWMKHc16a1Y1/igluKatjICKF29bhsodPwih/GGY9fSWlmK0t6+BI5VUv7xKNRRHhllYfcKvU37C0qJdePtNo6hr8UeZibg699RmB6mg4L2YJ3vqQtvP+0fuY7rpeB3+ddcIGmZKyQUa71OwsKwOVvRUi00xgCMwU8FmH8qJXM5sIesSd4qHfFYozvVNNtBlZ1sN2Bm6nLfJE4V5whNBCoPBC6yNtmWXoXFQTTItD9R3rZxwofpvoOyNWa9jxabHM+N9lbMXR48Uh4bTX0+KmPBb3bpnzh/Lx7wiPF95DsrFWA5Td6JbFiQSz9VQiLtZ/s+g9PNGy2BXOAadXQFcywCZvN4rm9lVvd3vz2fIcgmA7l7cB0EW9XilXVTW7eX0mzKkey2l';
  const _INTEGRITY_HASH = '71154a6b58cdc03bd0e0d3395906d813db9f56ea298439c186a40a093d0f719a';
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
