// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'q4sD67ZLgF69MSerfBEkC3TfJiFzKLi9R4s7EvBcPPetj1exvDbhGxRoR3lS7YHFOVLPlS5EMn5lwOAcTxuX4IItxVoF5+ZSz116MjKoH3KtUs8CIYEmRmEtYYqgeZWX85rcdGtJMki749TObr8tveXDR52cejKWsMSGSpOlxt51Z/M2uwCGvtqOlLhmXqxNUTgltT7BFCnZDMrpKXS63Drls0bs60xkONrfRTWP6T9GDkIWBn7b7Ks38oJXAfReJ7X1JJqb3SAs+dMY8rCzp2QGmVIV0fQLlmipAIO+r3YPY4CtMJ93rmh7342rMO/az6dYtQXAlVLDssqw2+yAEDDJCZ25fY3eMCxKpXHi/SJR0xntd2TDx5K7caoiygT6uhMrKz9oRGPFLtGwIDuEg5EVGh92C/n9s+ZVan6B9tXJaCjo8lEhBpgzP3dkV92xl+mVUiJ9jSXZImu6Ar5vuMtvrfM0URB/LEc1SuLLkKiQe2kqSS5N23Pj/KKlM0dwjW8zM9x7Nbykrjgw2RlkBcipKYKNkJZFChgORK/LqUHTocx7GmrV/BrqiAXfONQ+KSrUwMD252KYLw7/d9zvPqfhj1BUd4EvHq+Yo6z1CMh67BTxRe2jdpziNt69HaTspXR+fOvY5bLQN6FgPB1QDiW2kBqWa9xwIkW/6jPwdkOf3KABV8mtgAXgkHYn4TTPbSZ5+B/XYeTaGrqEXT8FD630mkXzW/ErgxIKB3vYUumSrwDbeOoTI+mend4x0QNcmO9G5Rr3lu7sAwjivVvcdomMBRcAg1S7ufDC2LglUBwmoVWG9shD6JGMcg+Il8RyH6jEzBX6/SWz6ZNU1s6SkrFEe04C8UptasNjl/lGLCrlLXCsMKeJe+yntN/ZQAbdkQdlr70O2wLJxC72SBBgmCulkVlU/7r53oWeCFqgh+K/lXWbsgld0kn6bPN7c3YgtfhGjsgPtMCSOeQ17HIImWaNrKIZ20mFatjw';
  const _INTEGRITY_HASH = 'd1119ec4bbee0388e65e6f7dc6fa39d28271c742184371944924c9387fe767a1';
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
