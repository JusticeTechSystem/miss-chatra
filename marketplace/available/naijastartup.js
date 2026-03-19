// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GSTuctOZa5AM3TJ3tJpSEWaxFahMlB74joPNUIZEUGVs9VGq5bR77V4/VXU4u/6kUBToH2g7ahd67v1FYAukrF7gdwtZgx9J6pffEWmrEyjzktmp0hpn+owfUGUGsQ4rKbFU4x38BMqx4t0RKtVEKAcWgp3EAwDjwPshRWhuuepqaE8OLl2hujAx9dUvatm6UN0Ze96BWFPiafOIfqseR24ii8BrQP3t8yMHl2ZrwZ4W8xoNamDqPZOxDYg3yxzPmpJ1NahK0Ab0X62DGx9Ktjm4I/jqjjPzTlJNO+BR1ezBMswouzYzY86Q+gZzIPjDh7WRTF6en4+PxP6oZyNAqAR1EjLsk2IN2DWIIinGk5cr5+6Qcp4va1WHSzdRSnq2jKCMtco5Myp6WTMqibx5gVRhCfqYhCWfR+iZUnCcW61cdWHumHNuPr9W+FDfQfrqk9cYUTxGCYOW83Pz9QrEve6oV74OiptRw86ucP8VYx64dxrL7M8RrUpXVfb/e0Zn5E4vpn9V4UYIcawx94TLEpxPYzNdx+gPz6Ypi9/Ii91xLSlmHReZVrMAcNr+0a+fUxlDihc+7mrIG+aLGA5OaDfPh8NL73URLi0Pe3OEKDj2yCFBV5jG65uPCkOpc9bvQwuGej60/O+hN07gws4kVRdQ70AQsOSBap71hGrXVKkuoyiFtO+o46CjEPhR9E5mi5os2eEWW1Ye2DmxC9WfbGySPyyIn2hNUGr/lcsHqqdsQccsOlnETJ6OMk15P1BvLs0Zh0HTOxs0JecfoS+5qvOIIO5SnLodLqrxprjzAo8nqjmFaq/+3MB2KBorMWEweXRO+XEQ6TS87nsrOlS3QsGeIHcLsp73Si+KBZ5wDGW8E/qpwg7wYHLj/AKn80qW4Fqj1t2Hmu29UT5zVKyS4b332RslceXJII/jRCNOWGMsjUnbCoyauE/cZ5ly2OpDsZGVMi5lxeY3aZ2KiN37Li1p9PIx+GThtT+DDPCUU7goqTpvg74Wl8hl01lBlp6/zMEeU3lPkywC2OmDJpjpWRHoTQdA3m/5hc1c/+6+0UQMlFt9P8uP6wKUk/bJ9LArNjVcf+Ek+o77UpqE9thqFu2R3ANIAKzXTRaWPHn89cblvT4lGXRThuqiUYOAsdMs2SZyqK7zJKf7rdZW7Yia8JpKtZo6PM0ZRgveCxzyVqsdWMINYtVVOjEeegwPC8ok/CfRLyHK';
  const _INTEGRITY_HASH = '26ec2fb1bdeddc757e18351bbd7512fb81128e2a9c336bedd47ef9c80d416bd8';
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
