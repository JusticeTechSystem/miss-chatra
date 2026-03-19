// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eLM92o+7kpkI8Zd0SgV4h0WeUxdHf/v+2+6qZoWDr1oowJiD1190cYUfuozwukktAuIkzGWJPN7CEyW5sITBiqTc4dh0ahsTG/kGpVMaUqWtLZCumkO0TIc9nq4yE1WG8KLRJ65zsQXUMTLFGlJke+P63kxvf7+98cQBWfef3kyO/peRv6vTRq/FK9OdZQCW0ETr/GY/kWahv2FEF5YJo3ydpKYhMpitRYKYfXkBUeAl/BRD8SV6lAdO0MQilM9tn4VjZ40PhBzkHIpLI5lqOmRLn4UfrGf28zn/WJDoVl6vgehBVIva+D/hofvXnf3uJyRDpHDYa9g/iaJgIWl2e9rv6wXOMYeR9qb1Mk/uhyU5feaMfIp7vzteigRrMswNe/Dyp5D+J8xFvtnJB3T/mISJm1cv4jJMe9ajjZSBKCiP6LvWhYGuESJVgpph4b3sFAxaH9K0/XY/mfjXl7SMYwlL8hQ1T0dZbZLdx0gwuYXzfBscCCsRB0i4KOsu5+IKa4dw+GMZHkmnpRHb8fsjNU2lSzVfncQrStNfADHFCZFZcLMryUAy47HwIutgOJL8/L6pw/loke5E3gnJZOBmkYgr5hIEZgTC9Stxpw/wvOG/sT7U9qskYKojrv3wNkYeSUWFZd5VfVIraoIPV+2oOEKJyOPZeEHBUux23lhvKU030ApMj2gy4uyADxnbNxfP3SvsegjYfzhvWtsaRS3WDUbN7OVpLcuA';
  const _INTEGRITY_HASH = '48c1919816aabc8cd321981e986e270819b6dabac571802c3d6f74adfce3c6be';
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
