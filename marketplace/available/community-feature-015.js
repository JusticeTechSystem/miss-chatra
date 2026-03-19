// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EXaN8qduNO/lnu1wekaYhH/ivQTp5SpAEn8YRnAb1fIYLs/vp7r00mM4ArU6a0ge0lBacuH+aj3zEkUEV3oF626v9+dg9T+KTzoyl99Z/dG4u+kWJMwK/yWIc4K3jEv2xZEqhqSWQGCYPnfE37pHCu7U2zRAcSm7T8eLz6uooC7CJCMA2b5usBcLeQl6rXFw6tBc4BqMbGWcejWf6gwmAGjbTBy/uXIMNYQqRLfX9/ZVbOiVocP2u+62CmQ+DSa1Q7GOri3ENDieo3atURJOmDA/vhyELlJkj7fWF0tj50l3m/7SVkBl4juxpTk29NPE/TANOUVKNshn6cVjr3+cDcCSoJJKJgBTKb5J7YDDtJBXiXopv/sRqD6/rr0DeVj2xAxTCsECINPySb532bbe9QHql67RftMArNsG9s/yFwUK/yJl+1uFzegbuAxGiK3a3pY31IiEy/FOUW1YboRbt6y8rmojmJ3dvWSak+tsnDLrZO8NQ4DdVsP6I94RSts7XT7RKpUl9wjyC33Mkso4S8yjtv8FUDQePTb4SB1XFL88vvIVu2ETYLL6Emc7d45R2bN4HLg8oz/HjrhO9u7eHdutNhhL7sVS83ouwTGUeQmMqNso/7uPeeEo+vjPXXtAF1BKFacLPcUMFr4SNcBclVTxh4PTsYc3Zs0ZNCrrrXmR0N9lolJxL+u0aFJmQ3G0Gbhtiem1EVFWe5TmVRI9V6/ph3uGAeN7uWffT+g5TR3QnPEoYRo=';
  const _INTEGRITY_HASH = 'd3fa08333548682945dd320cb23f5d72a3787cc0eb83eb1c9da532acb1f808c0';
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
