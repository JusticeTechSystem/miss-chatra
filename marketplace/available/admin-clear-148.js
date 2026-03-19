// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DclUAnJrgq8ZDJkrZbZP0gM2r2FzLJzf+HtHK+2pzkXpOp60/VKnzaizgMggLEcur6kfkDwu2IVYjcoQnCmwa91xv5wfefsgVBUJ9mX+/Nq5nStLxjf9ajJ3V4dDWbgJckrvAIOdoeGJM+jj/3EPYSLLI9N7RFq+H0CGYTL+xOFAgzDunhT07lAr/ZhkVfsuLmohDBddODXylXtVkwcnI7JTZF7PxdlP747WBvq9eRhJSC322vwDOjeicBw3E27C4BNis/aTmbdPKW+MR+SNvBlHk4hOnrL+4vuf1AcYkj6pHrjOwL2Qfo1rP4JXPZOs4JDS32Hxvor3bhnYSeJ/LC3Z5vWoKdEBTFUhEsTyDSQ1CXAQzviJGoKdnXJipdxKINqouCFVwbAeArRIW2MYARur6I/Ibb8TFshQ3ktp4+U08EPUsrUA6KoAm7/AzlEuySyV0244WOGTt482Xo+d2RIF+3aYAB7uwz+ICSet3rQ2IgYl4Vkgh+S+EElyBqVK1HjXG21YD/X8geBlUXNPPcZbNr6qnh8K+1ZW9QnAf8TPlM3ZyBumFZGKzJSCrXY0XJYCIZTa3G0BuiWnQH9bIKF6usVprtj+q9mzbo14FqyohrdRiU7mkoSZ4WIMeEN+xbf+QNompzfWYU9RVA4qhtWz7/Ng5w9ygcLhlaMlHf27BiqLy/mCDaneYbq7AIrb0K13i1l6uwzLKYXFE6s5Wf7YckxWQwRvgHq8xcFC1v6obT2ykM6AG82tGRaS2WQmWwPD7l31BxKnh3ck+9RCAUVcZ0RzOmDNHCA8Z+slY6mBPxKD0Jm4UG5jSQx4+Zjyme36tUAuQ3JiXc6Rhk4kxlhrpHR43hk2sAi2CRMp3l642vhWo5/oA8XCjK6VJuwhDCz2sxAVywng+4iPj08xmreNI67r7X4vpyZjcgmZGx01QEHRfv1N6UzpcXb7XM4gqqX8tFkqshPASxeJ/X2bsn0k+tb+yBwxipGH1oqO7q6L6bB/92HHlboo';
  const _INTEGRITY_HASH = 'bc0e8d5b23e9fde83dd34d4296ad2b1845e65ed6b12459572d8d0cf944ad2108';
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
