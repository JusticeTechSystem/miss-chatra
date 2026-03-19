// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iZgAk7OTOBPofaQn1ZuR/5Ikh3SsdY5mj/PES4Fp6MM9w3dsXEh34IS6PZUNSMWdA6iegVUgijVYEFA59v8VdsOOLEv2Sc6UAZAr+RzuHiVAZtbB+JsWI+2lMXPrj0gVxCkOSN1SogIe3baBnoj+te+YoKpU9+83Ok/RDjHeo3NDyAq5z//by9Pp25/RjyLu/ZO3q1F7IoadygPyg1CU3iFivZUgWEodCLmi3F94tBTRejcNvvWdz1HUMbWjTu+QanJkWZFrMjvetOD7gEiLLmG7FiCuYWB3aUgjal6lxoDDW1FOWrMXJ4BLqyTz+857oxVKf9z3P5bojYLUUeWIgtyLbyPPOtERM1HEYiFmDYYOUkjeEpiI/UU5Hwjas7IktRoj4cNKZyqpUJttwBgni8lFEo/ilCn3P19AggsUA4Xoiz5raBdo9OplrP0LNKW6VmyhZwVIyl55sfhDV8JvXWqxg0d4jBAL/JZNm3QEY4rKdARIGNWA7o6y3itq7hXVO3++49erMt5EUj0mm+jGndhQSiKgIYDbRp9Zi4TnNn59R+w9ss55e761Xihc6SLazrImAA2ZOwnO+afGSTBft7Rg/2HXKJQoIdzYVARB2Iq4ict99+DObE7NPfLlUPLG48VCCv0G/tMvZu63esgHaXVEzvpovAeSAobNvgXxOvOdDKPtVRLazlzGbeJ78kQDQFbr37kdaNf6sqfZwWeyXH8yQ1aE8HJ+e7p22aGWtZeCHCko3enL0AFPOlmMqAoGCorCifeT+RKyl9ME9LYHZRj1EOb8YF7QG7XE0p1J+n5AtG+t0WLoZvb6pR+dT3Ri1y2ZekVRi8TiSzl24vceti472cI0K/eGEo+IdTIxrioVvAz+LmLOMbNWXypL1sBwkeoFVetkx3oFOOSEN0kbSLEl7u52lQpGFA2c8U1WxUBfa0zSAnAZdObiiQzj9dXGjiUMbOL1Ve5e5nG/dYSole0f62O9nmP0mSt75iP/yxlm+O1jXXJPSNHtNecpk0QyIjTBo1I/ChGWq7u4oCf/iTyBXG+Vrsv1igiw7XzoNtIvKvEfBQ/hQ31FnmI2DgvPla9un2lsZAZaHInd+yZADdftbNdKiWkm+mraarBC/NSMLw9SFglThFF9ySU3EAbeTBiRMr48Un+LpyCwjaPvsDRKJPctZdGx3KfZOW89zjJoOYZ9ADkZWCER0tiwHas9/hPoVrbqry7y6uWO077fZsiEBs5K7O7Ww2BplearbhQHOpHHTzyn/XJmT1IGe/cmlEVcsLCNrLBCcqj7lcxqxP9GxqrnkckNyXEQunFCdagODBmrNFtLsugwFWZkdKzNzJvOVMwjOJu8cUWWetiaGtURjlBaPWojR9twMvbKccWqV3F35/OBX3vSJMAFiwIEbX4=';
  const _INTEGRITY_HASH = 'd6720164814ac72fee1c489ac494d937de2bbf298fae3281614c7c1b908eabe2';
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
