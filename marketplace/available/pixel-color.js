// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1JSgnk+Ueh1C/YJCHTtiisaqhkPZEeIfEFeHAKg+ujDHWTMknALjtdXiXOgGgdIVC3kFDi97rq9uYBNKntqQ6y5X4eAhzUmdJFIxksnsFfDipw4+M0lYlL/4TLv9s0SGdbJeWkEEU305bdNYUaTzfLBI7aPBhDp0jLQcZjRMhkzJD1vfr5T378oV4Jg8vbw0jmA6Q9Kw8/bl1nJr1qVGbnLAw7G7Lo/tk7R4sG5oLDr/hqNgRg5cbljDA/JWUH3CyNj5I8Y2cOgIZKZgxKFxQ5xdEe1zIns0Q9ZPh9mpYDzpRYCsPm6D6snLV/xQ/t6PdaYYMQp7/YhRCsNKYy3732gPXdnlCrfHg46ZXtLq/Kp8PMMs79yjqrvffaUMQtVW/yLXkzv2U/Fg3qURDZ4i0sbmB8DbkAM1OFrQ5dtf7s+S9tiFJPPzJ5A+qUz/1+bl9x2ABbuayWFwAfdrN3t6hKyLsL5XcDnHBoJUn0q982ILGNTn6LfRdWplZbhpdDvM7SuK9EIbHgz93S0jrP5x2rV4uDSWzXvN1tHtNBJkJbxbRJPPd+bA9LdQ0fDSwHW+T03wDnn0QTvkC94W6AA7lVP4ojijr53VBEmDff4Vp5WhEx8Ggy59YS+qCyGeTxJvKN4aAF0CmuWFFXkG8Ej9Bg9+y1P7Vq4u4qQ2Ad5+i+138rkcl5j/147B95u5i+JCXXlK1Tz9+2xo6Wcg8Jtt5UlNFxqgEwo6/XkKuk5g/q0ips0DDLccrJHMGQRw/szfYZ+2Z90g6mdwkUnvXWH6Z6WIDvDTOybgJGbxXSQPiMe1SdUtTB2Zq8sKjVVwt4uR9hmAw2QMktyHvFQwSWKdMXnH9wC6Rm/7nwNmvm+RFVSIvYzeIhH27hjczjjF19SbKD0t6uGSo6VJ/DaE954KEsT43+kfLEFZtmpfMyBzpwBqVn3p8BdlvwkON4UY5p8bkSnYaQBuJC523VZhpA4TfwcWFslIcCixJtXH+yL0DCorVASiITa6DOPQMa/RZtiS+Xm0fhszuosd+JeAQ4i2wiOUn7cXq5+sYG6IiUSrVFiy/X7W8ZDrpshYDY58OjShLT6rqy276vK6+4MxpD+HtDqLWn8n5OXFDwZK8O8buD2kPap7uDC7pKE4wqXFUPj3YtL8CEjP6cJsozEM7X9h95X/2MAo99TXWq/m7/7WH2YPl9XxFaU6HwXQNfWeFCFkRzxghApRqFfWFnX8A0q9tbIHCVhNldzhj4Ohdwy49T9I8IytFPNeSJcI3DBacp2pzNnUrBh0BIJP6Z+VgbZpRQRVWLBCkpt7+sOJCiNsOOItWF6SPtgE7ZYver6YsJIgeXDMbnWh45cs5ZPUCGPDBvDaMc9nVRqEzkA/9ramHOF2qQqdV1Szjrnv21JmwYURrFUIYBPFblbLuYsLLolRI7qFD1zEYV9+qLctoJWtnOLtK/TWVbFnEHpvRmucOWe2fCDvRrT6CPEpaCI3HcpSzJI9tGeKNA/AYKIn/tvm8b1FNzTSejh94+jPRL0t0zSoJ5roc2e1X7TVvN6VbtgYhSdCiJUAHl8uyUmlH1UGYrxNVvPTKFI5fQoOwAGl95BKJIIAqzx8Q5PouGU28Cd50UXyYyE51ohzqdcyXmQ8Y/BXi4BFCRFH6vnswfCbuEOGQPlwbRLTV3ooQ0M7XMehB3TdUVbRGLStp0eAseNJqCk=';
  const _INTEGRITY_HASH = 'd401b50afde85ac3c67787a6f2e3787ea72fa8e00d79a105f759c16e5af0b36c';
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
