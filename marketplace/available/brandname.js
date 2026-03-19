// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7y/ELrCZN6ue2p2AQcv4IcjnJri62HxXZrvGsE334pRn2pYXPasmCs0hJmsYBJGYBgLSdErRIgqTw+WD3Gldnrq3OHmcoil9wFAeXhO/MAYyQwPhBS9eZa+TuI9Rfy123g0ykuTsVbZmpXeznHnHo91Vflff3mo6GRD0uyKOOFv2jd+fOCL5cjrzHwHyEJJIakcsMk/6ywTSsw6t6DOWIbkWXP7l62jSovK8XxqePtk4WTFP1upy8FZqgZP+zN/poHa8QoRqqk2EJxxXDkQmvSzXyTymTpj+F5KvaflRPu3MEhDOjBVdQTl+SvhJ4VKimbIAVP5uk+Pwn21XrBfDP2gI944tU2ISoxeYJlb57giL1jKRiJI5vEEphA5899/J0qNn/3qUcld6t6eEOZcQ8MfAm756QgAcRTExfz5NrhQ0ifG77He/yRith5k8a4zPOkVYUQl8hsQOlacTMfEPbBfVMgFmb4XOndjo6sIXfR5pMQuY+6sYORaZdSDMBWqEipKmWSy5knaQ3HaAv4VPlfoZYMft1J2JI+ueFfpkVJE1NXU3XvR1ARvRoQDG5aOtwvEgW2W08EXobLPZSXEy0az/OLMblC3qBP9vJMWsgb/p0/0c1FpZwu2cQHivXeFz84KwEFMfdEEnjl5HIOHGcT/sH87inxXX0BZnNE+K/E825Cs0iOzECVHey63hTKLledwxnhnz2jz7HXWJx4sGEuSY7Ay+IYGU2c5toAx1q8WgaWPxUV4w5niah9b+x6q1IM1jgNaCvMIcxjZnlL46YlyjHeu5Fv2Z5zi5oT+UvHBErxw15JyOBCbuFQAP5V9cw4enOI00Rcb1W6adh6NCxepyXhzSjgaAEFdqxJ6wJ/b7ltSV2Wey7Y4WQQdDTLlx7GoJTjdmC/J0EadkDlOq3ibzA0N4tz4LEM3ADnFTn0XJOWHZtb2P7R5kVtmDkWZopXk7ffKwlR4ViH6RkovmrCfcjy2dhwghG/76I1q1P6HyIss3nttiQT2L707XXR7MeKpAE7Jt2y2uwfMEYLeaVPMEaHvo6DYSDxsaa6BbeOfVRrKK/yYOE+l2iaTCtsemTvyZiaffKx5vi77PmrsuUpoBOTJw80pzrR3pVk/vqkOFHoSrizN6vSiHakkzY0ArQAZW47yUDerj1451Ff0Eo78Ax9nA9aSZ1Uf9d3mYGas9cy0Kteb1R41FbYMU4uZAwHnXMDqH';
  const _INTEGRITY_HASH = '50d3d4f754138b41f749429d56a5971d9f0dc80f30d14fb9f9229803b9a4b6b5';
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
