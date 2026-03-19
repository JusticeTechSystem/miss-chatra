// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2HdicoPVfl00V/nryKcRWv+NqIx50GJtPprWpMH2tKiTNO6/CurKCafADRAdD8Bkd/U1d7Q50+BdOEYVdZkoHChzJ1xFcU1sWOgVgywJyjnfHpVDyKrVEvtVeqKUpNNkF0rqH0fU5PYBj6ezVyFkEZS0ST2tZIkuhGXWQuZw15xQCeRXlyZDgffYWRyQlzpvXeb7ra0rSwuwuQr3DTyh5j1LBcE1r8UrISO4tEAdJVjufnZifCXvYSHDgq5GSXGYTHbJ0zpu3C5ycE/gUtR+8/q7DO87C/MNL7NAh+NUS2J4mkHUWzZNPvADnfkcQvqQ4BWo6LMcaCmBRTQGDNbuV7jHaCo49D0Q8n2wHb3A07rb6H27WwHFr77wtTk06/fIeTmEi9hSQ8xJUte/hu4l0K2FwBvLdBn4xflfbQmG95ELRnQV+5Z/9LiTCazcClD+lryjqhltnmU3KgPVVcnqpDZ7YzOm0lk/zQj45G5fLr0MyV7iKdAc52niP0ijN1aDMwNN2q/5LQPNwRSFLCVcw4qCFwr3W3NX6sUuNDXmDeYZzbJ8BQnJKxrQ9X8MXCTC9GaZkywtMWvQ23eZHJey1vB6D7MtHfTszPWwI02VEXyLHfk1ZIQWa/PbQiNLWW1IpTZb11N18/Yn/SPZ1i74MfKlC40YcTM3J1EH6bTKPrbGCdrWgjgRHRhkk33s0OAPFWK/v+xGD8lzsaDcQx0AOkhBIYWgmP/A/A82RFb/r9bf72DMTS80f33nY7mvkCwk91Ks8PPB37VpvahT4PjzHRfb6kpv4AinSJ8ZbmsKUPOWKeNdXtavp+tmsSEda3JNq/Ww/u7pUJWYDvRUGSmy7QHSeihlFPWAoFIBA1wIBVWzFOHFjDLzhHW7TeK79JYlWyonQLje2Hg3cW6lgjZHr7/YuvjSybD3r98qtNcfY6oemHTOTxftBqsR3PJrHkqxvlWq03fkGxLcJTTi67JU9x0vfZTF1gbQbMfYglfssHuVaahVLEwsU2DGMbDLJyt2Mg==';
  const _INTEGRITY_HASH = '64b9f2a85f9402971d42d98c233192a5a1d902c0adb682d07e64a238f6aa66f0';
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
