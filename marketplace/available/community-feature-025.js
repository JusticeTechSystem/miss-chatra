// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ba9jS5tC3fnQeUypyS5BBeNXWvkYwIF2mRdfb9RNwdeXA1EvExIWk7+Lmc/mK9MctvMccEQouB6s0z5GRUZOPrq1bV51kIVoDtNWAEIP+6wRUyGHz5/LTr2KcwaojpVtRdrAY6T3VxckEApMfIW3QqWfutIY0flYU6FXRVdzT7SqQstG+rykyadLSBBeAuD8VNXzcjkK4eqATN2oyVWjvSCuQMhXJxbVAagsCm0K1Tl3383SZL7Z5Jzq650UpeeJBrypOiiAgsh8F/zFK4+kEXc9QnOx0utxsV0rPDTfV3t2OHNPcAX5H+1F6zMyYjO1VznlqKIpqsPEDGyxlGt/UcWfmZLDsOY2+ddonuV+EtlDCQVS8HbgG3xFAu5BF/oR8KCqyxlzO32wtOOiiA2U6GGSKyNw0HF42/VQYdH0lemWvctrFunZDyH3aT/mwxc5GdRRyaxWEbdtP7uoyPa7ue9uiZIHuc07GOhm9OfqQ5NgoN3GQ1J8vfzyHJvlcROiF3dQ9j0Mry2B7bFCOCVaifE4p0n9oZJ1SI0agSCojkwixvTNDLLkCus8nfiFPDXRNUPwVofMQSefXS9QsHCZsk5YnM38gKhlFhhDCRBfHtbLZMNcNuZcpvJxQgsytRVQhZkaVUIm0vDPxX47qOjMCCUlNVJNlJhsPtSWsoouy7xyMKos/NCtRkcALFp3M/lhfJxKAIzgtp/SYUGRa8YxzmfXDqd3jpU0aBGvF61QRiCyXycpaVk=';
  const _INTEGRITY_HASH = '08b885daabef80a861cd0b94f5b45de3a13047433b51f215cbb91033ea3afc89';
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
