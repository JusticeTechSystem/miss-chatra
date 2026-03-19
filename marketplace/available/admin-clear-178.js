// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yZ32zEFdB5/Sn7TizWdVbnnq5M7q4N9+P/ctFSBBmkl2hUDz+A5KhksiLrLv8LNjeb5qhu/H4kjXFO9oqlUlkBjzLCS9BUC3n7p8r/LlCJIr7HyNRT6bbddyh6pzlhMZbDB9BtFndrWF2JHDOTyhZ2fRM24WK2eYSwt3vvaA1JEMP8Zbsny9dV5/l5wOG5gazt/uMeKdNu/c7vFgJ8glj590mszDpLF2BuYhWVoATTog/y56nrWHEVwrpSDnz/7h6thEhu6AeVGDlwMzprhfYVtiKA+Xy1CywikikSm/U3ooi0A26g5wfCxDHkUBbL2t0dtx61tBQ0gQj6qzdxXT+uQSgCwpjkZEoqk8+JxoEEjCtoY1gFkkKbxsV0wgv7BD1NotbfdlpAMyVgSUqosJwQ/+lV5oriMEy6j0vnfHBCrQ1LnCeQ4PTejn5Ra+I7P7JRobmfal4wktZNEDUHRTVcPQ0BEm+mbp0fa9bw8w2fAM4T6C7FyHG0t8QkDBKi900GfFsaJ3PlEHThTCZNCWCmr4lp/1PdlWzvgYvIw3P+CL7d9k7sJEfPk1u++uauh/QfwmhHDxqRBkZNUHfdaEhG2wVt5dYCmMrjy2XcswQtolsU6YjuVl5RUDriRfaVcdBOHDQf7wfNv89shGU+MN34+ebg+pCBZStLYhzFOV2lmGBru2G9sji9v8qMSbjxb6FgIepUCPOeZNr22BVHOSYM7fpbLPxIYmnAWyNXhXXolNz/px/VZQ8++rpQQ4+oaOdvd+OY3WPnJM7ytCEsaqYuCMK3CVcWryzykyv3qDEvKpBzMLkbZ+6vOdyeVP46fajo00RtEnVi6EDOxLARR+7l0Cias0IeASkTPl3HxKr7G3Bo4vF6XmGvhat1UcGvAPgzEopZNb01LHwCQZW+EkFWlhorFaHvLv9NES5O6pfMoXfLKPw2Kbozhyg0D3noL2eZwML8PoSW1k1MYcUym9sb200wNHHXYp+vZ97oHELZ1kO3rJNsiUhxDF';
  const _INTEGRITY_HASH = '73d9a022fa8613038514b8208dacc96667c795bede9b64abef47602782615ed3';
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
