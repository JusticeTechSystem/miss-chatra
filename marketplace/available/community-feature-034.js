// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'u+jpZwkvBqq93Vhee/saKenYRhZx05m07wOT/TGqWVNnfdXT1sl31jl2jffZQqx4KiS+kXa6gDgiw8FhaG4PZ7+onrN9UsI2USTZVMoO5NPXBGjSk4AbvkxlVeBj7+9moR3QoANC2TLrGwukuUhUI94rRuzKfmPxqKsdNjp9p4Feyq8fU7uR74SJVoX52o9KAJk4CajFhLnzkMw2TAW7C4/Xv948Q4lSGkAnisRMTsvaqRsd8ZyG3h8XV9w8FcmUyrEGMJcqThayydvDOhWsNAYR9G3KgpeVu9QPEWq0d6J4SacCW39cktXfXu+fpYiCoHxTrQJoNkiUs1CpA9pH1/tf7+hyN+mh4yE6jPfbdhbq2Td4h4OBtMDtLwh8B/QiaHnfc9KhuNVMhm0i3tJPmmWTEUyslUhV9bl9w1O7x6slZ0dC0zuv2qk8Kd+LhjCVqv6zHxtmhiawesV5e+p4ybEmNUcprvNPxpT840/sI/jJMVPSPe/AuHxVUFpRgjLIyYtzlVvoPOcqijh8A1l9+/v1isoKcXdpq4cOvh+AwconnXVWw1pr6EGamx9Nv4Jl121+vVjewDdLuX9ASq5HoSkEOrvRpfVCfO4YzpH77K7Di4WurgEpsRtm9hZvHkHSeOnTU/KsYh1SQvODKzAWqcu5AM1Ta05XI1keTGn2xbsH161+LKsNuCDlEQEoqPRfgIH0vZ7ueGyCNzm7qaM5WY8S0IPqBkIJRayu/NsK8P+TOw==';
  const _INTEGRITY_HASH = 'e32d14d520f18080573c2879698a7cb1773f4c68323d8f932b9ebdc6859ffc94';
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
