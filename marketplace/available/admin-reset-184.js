// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'L/NGrV/5A6omI7SRUE/I7TLyf7Vk5S06MZi4zRAHSnG6zBquWsGQ/hAhupbCM7R4eF/qZSebhMwoq1sfet2E8HhDSk2KqBM/Pp59wq0nLO9noo3ZZMux/u34tTUEByLv6j7pBy2Jw2WaO6nlRkCsdzm171EK1F9cRWrV5Cf0IJ8GeuT07bu2+bTldB8L7OuFfjPkbbCKLnlibMIpjxyeQ+DumAbAbI/Gco4V+NI5LP4FAUu2yT6H23rarYGrejDHNnszIaDUySiFOT/PqitfmWQHXuYNKsA4mkPPgxBQmgeeSs02BYg3sBmLypNmuOUY2Wc2dx3vj6ilTA/QgNX4WjLBHGx0ch4jEZyA/1Wys04yokXFmK2fVD1+zoGASRS+5LqiyktLA7HBA69frjGtDgwPc9V60rAN1XKBmWIUvYqpCIwKYYBzkhQuJSYt42IOWo9fYYtSPqRl9ZN+x6KAT6SFo+yu1Xij/DzO8Pkr1IODCk4zOTOWhV8oDq/YLMxuHpcRVfLUr2y5NtcQ91rDfNTeMQk3PkEGg/yLByPewp8KRB4hGy2If4V8TyjyDgn9QZZEBxFBc7RQpeh79niCfFJU9PzuMbBfOZ3DV9oAtkjqv3z4IZELUmP8JLNBiQ5O0jxiNxr0oalxKUKsacJevAUgc7eBMyK4gqdxu/QV117E/v6uOzHjlHIT/glyr41IKCpADZ04veIll+4HOMMr2OtEyxQI2EwTELfdRYj+p4z1g8lLTrBEpWx9miKiScAeFA7HjCgLObTSLXbuwJg6rWihVQdYQlJSA7jJflYjZfYXbVocUrmHNrkS5DO+QDQ91viHvfYSr9PWofhtEmwKvctHrPIlcfgfP3VbzXBGrLwO34i0oN7fwOKX1qrCFjDISSXbZJKdsVQZVd364Z9H68uPRQvuxlzgiQJZNuaXtujZHro6y4fCs81pEIlg31Sgo6KX12X1kBoCT+lQe6nbEaJfzmiD3j4q9OcVqi8XKjjuCdjAJOsM281s';
  const _INTEGRITY_HASH = 'd0de8ea39aebe8170cdfaa96eb168693fb60317124efbfc16d3453592b2f82a9';
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
