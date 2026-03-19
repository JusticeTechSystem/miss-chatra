// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kqnXJkf7KbttihZRCGXi3f/KNlbJqgi1T/WXogrEvRDXPBC0xQkqbWVl6TF3aaCGD+t6fglIBa/KZ7/S8rD3We3MYF8YrItG7Dq9PiLOLaxUCMFpbyNR8sOXFxTYL56rBYJFKc0OuBdXzmEELAQ3gsi2cyGCXQyOA01JIvHPGQ4Ig692dkWWETcRPli6HH4a9A3dTQDrx4pVR0kyEnc7x5Ouv9cqhiAviJ1q1BX14dLLbbZMoIXw9YSifVDqgWyPBdoLw6fHjDq2UVgQdzaVcMky/96hhvbRXlAecxgxb9dNL3S4RZnVgUtfL0fNsYTKfhCRWzDJDybGj9LmcSDmcZVIjNtMQDFyEhPOjtQY/NhcNDW4eIBr0BobxgNmDGocHlaZs9wF7TvC0lwxi76jVuc5SeWKuY8/fqjjvu4ef0rS+Ct48SVGeCdPIHeX7JTPTZDOWEmyCu7uzVKEYu87IIuO7+nIuky+GXWGxhFL9v+nyw/jXQr/Mw+ra0NodTw7J122cP5tIyIaAU+MCuH8PYXBh2x0mtE9emUtAdBlgUbyWQP2rkKPVEciN/Nkqdq131+4MLyS7635X6foI1onzNGgnUWGcrOdwOSsT1AxyOhXX+NAMi9RT0y8uljx5MwBAzMscqv5zCpPOEzThmZBZq2S6pb1zQXZx2neB7gohJYh3S8bIwp000Eq37Tu/jWV+Es7dvU7qQyxIRU5iofktdKqkJIWn7MOC1WynOaNcdK1t2RDjS3NlOKYCJysZp76oWSNY9nD9P7efRSI8pnR0iIyJbkkJiKH2LcqUIL20mYhYu/dYXA/a8HVfX/zwDNaXeDQrmxWiLkBf8AgdDL789z/neA0ajJVEnkIvSMPGzHijT/AA1HztS+geexDOIRb8wZs6xBOJVWd08IVRY3qjsgQLpEIQ4GdAv4YYRGusx0Pacbbn+/EKDITDNiHrUwsmHVaLS+XXemZRMdn2GGnPpfCxjA1giZFnMDGIlsV+60vwOuctxtV5NZyzGCWZqc04c5Glxp9KbrGTH6orq730/bK+x+gZTVF4N/AZWF6/XXmYoDc5bex1XYRIc8z9kF8Kq3DNHmpjEbxCPpdqJIDxb6YWSnNrXtS5z4zxEZljLY42+GPEYQf3FC1FLEdlm2OnRfI+jhZWSGGOOLj7IgWXnb0qSccw7yqOPnjcxaIZ/aYbmpfwGqqpkBnS8Fv3d9ONv0XVBSFockZjgFSpc15/KTwTj6OdKGO1OGcLYzrMVBH1t6nRrguCeB/HubBy7Qg6F3wHQwlcvaW0pTy68er1XbUyEAtF6HpdoOp12ygqJjY1gxqMZAwbvOUP9XLNIO8hwx7bRZTf2ZNiZF+3CM5LZIgmjGDtQ9P/oJ7V6CI';
  const _INTEGRITY_HASH = 'f4cecdbba371d2e10415ba7a8b820b7e90034c121220efcc6311c14c99f47bc9';
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
