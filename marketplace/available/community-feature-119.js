// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'B/CtQBs94Ab/LPJuRsGdmEHSW485dWuS1cBI1uxTNa1qa/sV6cH7WNIWjQNcthsmoVw03FOFNQEkyAduoQ+h/kXR5EyO4m6XKmX1YExiPv9k4pJRf7Iny6M2fCAtRLoWubT2OWZBfO7JC7JA/ecrNtc3qj5uvBava9rTjd2UrWuTGOK3BEzHhoSbqWK8DeJhb1mX9zsRk6rVtHc/OQv2sLsBPXtBQDgrZotO/t4bEBENnsP/uGHj0A4FRTErHQzLC80O+BtuMvCHX9YzIjtvfXitvAI9qYMuqx/pD5+I/Ba6O/7nhHNa5TNLXKce/eCxdC9LblPp/njR3jT2YFYgi1NsROD4eZFSxFtRWG2szMNHQCImj/z3drSUGMa6qDy9NCfhLUEHcR5bM0JNy61xdIrxKmlQwRLs7EEAER/SBoAOtTbRmmoT0yMrr7qZo2cQMqNIh1UCw+M+iEwkZkjusk0NBW2c3cjdhxIfdyUMPuHZAT2TECOTirOd7PRr6K+WAipPDRwKCSmoAi4dFryDwp8tH5gYdgXOtF3VXLJnzoAVnj0A72VG7xr5OF52RYfoDuMbv6nFAw2Q1z/1Z5wC5AiLNSSqmjxsHlnV1QyKvgxdbvBomRO5R0UmvjCbS5/dfLeLmO5jOzsPZdYbRyl9vFWaO4Zy7NhwJol74SnAw2AW7lwctqXqDIAK5nqOBv+wNfvDLJA0jqTL5bXjeuYunXEMKt2svPS/6vcv+ydo0PMi99lvmrk=';
  const _INTEGRITY_HASH = '5702f4cbfb61879532e1988d96109b28b68292d2f230a844e726c45db53642fb';
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
