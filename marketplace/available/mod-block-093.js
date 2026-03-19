// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vKyKII5ENSjObZxtNLG1P49svAd3cjIq5QrQJxaslksc6t56ZfIBn0lp2bdRw8rDEFUQF1i7nzxSCzgli+lK2/bYfXE3jv1Jjghf5kx3Irp0kbnmvFVkRU1Z/umfjYwokQlj60djucFS3yofI3dyhsS7WglgDOl+mfkV5foW9d2uFMlRou0YhV/gM/FwTF52VN0+YsH2aUc+S3ygx2unIyfjRBiZp3VofSAqkJ0r1WA3J9AsQQwOVf2GziIyezaaL2a8cO091H4+/NoRV/r4naZSOKhtHhA3NeuMDdsLLcgRp8CMxWl4naXE8nUyxwWCorrDh1DvMjSmGXhwcRcKES8oXsWGywdCsTmDe587i56WGsETHXf9cDjOg2s1NdzTZu0ANVCtRZY5pMLPwYsB4XllaG6EPYT93BsXnyE89AOu7fVcVwOY85V6kiW55fgQyrz+6S8/zxQ5bApRALPPtP0QCk+ll+F7Ux4eapEDP3gUjQDLequd1+W9uy5lQxXlxcEOULVH5rS5dnI2v8fXrKGmdDeXywIgzAZcIZJYDisEdkCH8ve9fV2JO7BxAr6h66KncwfQ0P77vQtkUtL5Qrmh04aoBIwQKXxcNKhc5MTLNMjYEz/EwoCqYPjwYs6JGPi4FwBomm+6SoxloiN1WyS9c7JKZa+0XPHyziznMfiIIAi/fT3zkdFPTI2e0O0oh0FNTY0L6wg2qg4wjUjA5bFh4pZNubFXP+n9WUVzZ/Yoadiw0ZlxQtsWMhtr1lfDypIvQK/LaBj3r+xjiE8zg/KhRATMOIhMVZ3sCIK5j/+H2OWzzwaDFQqIZosD0s6bUvWUjJmD3FjgRrDgs5GWmXKV/KKAizLXwZ5UobLFlzoSd4Tp52wWBjj3CYGP1/403MpFO/GtHuk+VwNSykKx1srYf0mjUIo8sicTs9phluw2mV1fKHevjvtptX3f/GZ6redSo6rEPuIKAvQoPJutxMmsIGoIMBXZ5Ib3Y4AT8tbDWVV9X9HjbuxtFJ58J2/xfHyib+vDqjHwn+P0Pe0/k6KBMECA6fvZEw9iA5t/tblnVi0sMD9fFHqX+xFGL9tMqp5UwfX0wbs2Inz/bd9f2zdtwu/DqYqgvUfGbYAP9fvsN5OjwD/tQhrGBO0T37tQmFkDxxuwTSoVvjOQz8QyX/ghXY2G3MkkJmd7iHd/kJeL3udWzWpDNaW3NztLDu2Abhi2Da6jp0azRyj7NSla6kWD/NhdCZI+EUA6RGlU3V6wfR3LGbK7Qf6LVcvjpMIuLVw4zecns9nfP3qC2vK946b8IrkxrJPtAs2pLc7wgPblRB60pKrOMRZ6NwHZ+vKEDmsXRcdIMU9gIYN12StUv5/1HGx/W4FmFg==';
  const _INTEGRITY_HASH = '19bef7d2244bfad8487a3f635776909963d197c1f8697ce4cf891ea4bbc1e52e';
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
