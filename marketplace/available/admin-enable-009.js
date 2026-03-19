// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SeWaKZgBBgD0RrxaDpnQ1RpyWBY8fVYBUnRU5xysKm3UXmIVgiag44VTOWAYcFhUPKNqqurFP8e72kWHJi8+2psIEPEvv2+79sAxXMK6aQrnWPztLsSSCLhHtXYnBTRbNrQfRTd2gQH85uiBcfAQvt1nwgrbu5sJUF14VKnIcWvMFJ+X2WoE4VkGr9MM9lAEXFvDogGzQFboQuDJEytqAw0bRRD9BiwQK2kJdUhD76//soGZBxzX1pMq0S0VMFE8Ml2zOrkKD4H2l89e2SwD1olAqKWA/dqAi1Wbla/fGE4QoxSKmMqZKg6wQWcvbXo+BgnwIG3ouexUN7R4XIb+eEAqEY72nzceHBLCcTRlf7H91bVZnXK3K6Q5szux5juyLEAPn9LqiUrhKUJ0kpsPZ6MasLI2WDRiYiI6x0Iuwe4NKNTytQmNNZeUDjgfiQfo6egw5/C11vJ2wdlif6kCL6VygT1WzUZlv5MBGijUOSH0tc9rCe9kHSrqLrx1mg0mt5NuDbTUiYr7sf3tUlasH7ZexFN/jHHcZwkyqAjm982W4TsyDOLIxBBkim57oqo/dYK6ZgNOnOVBbzKLRvJc/2KTkaYAOFVt7V7Ln+2CgfSWR3lq2VYTq2MdG+74IgisgyeJi4O2dKDNz1064FQd8vUS7JUxEIWiaACSluPsYOXHPCIBbMQlgAr0t0aDtDAWsQFB4UfOnV+AuTqT3DUtnYGWuivDQFnj76uCrLSSGlmg+7+8cvscBCltksnr8vK9u8cZN/Cb9qp3b3DqPt5rgjxowBVNkn07nT1z5BygFtc8xIi1NahlJmGQq+Lpy/esjrRadzgybIpLNkrxEnUdywiNIeFGcgKlfZBB2SFCLoT9P+Hy8BLTXydsIWPv5YwgkDNFvGcJ7yzQeusXXSmNrgy2Uy7jiNF9s7hycmTd/S7aMZiJ4TfdmX2Ci8RYHIHKr6kH0ubnKLKLmY/BX4KZ+jY5zPHwfYxeDESd+r+ZH6D+bxPKLDsADZY=';
  const _INTEGRITY_HASH = 'bf5c0571697bfd949b13d772c21b296fa598b7e08152d93caaf819ee8ef2c17c';
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
