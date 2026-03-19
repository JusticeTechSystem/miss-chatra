// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AorzVbvfVnVG6wEvZSMLrmdQOd+D3T3IXOquYFsPCISqCgl8sZsy1HHaWAKScXqMVexzbiq4Cv0OHMbB+kyJBeVFy5G1zQzsHFVDR3E7ORotQQlmUzWkCAAT75aD30xs0Y61gc+5UBbFDEThmqAAj5M8FOA/gWw3oE/iSO/qEO5qN/cOlRcDEqMtZS3WwDvqBYMmsHT2kf7vDkBFEzBOdRi73S1zTpZiOLGaVr65MV+g4YyDAOlxu0WpEV0LsP3jpqSLzXJDO4lXmzuyKzJHH1BtH4yFe0bl7QQKW37/kd948dXwgDqUBB1v4q4KuT8pzQlwllhFeN3+uMxWdv7lrRnlgD3tPuO5QufP+LoyXVrujzAFbdbD2LGRTqJ/QGJIi5T+giTXi2+MyIgm0+eWKq6MpuhC0ZCK4ae5W91yGt01l6dMfDKn35H3rAe7QQePai+Kr10N2opdlpzOSzmZ0QvhX+XIGInLHBbP66ZAAYQUuL7bv2VofFUqSpTVLNTzOb6XKw/B2xFrdptnCLGd+fPQLcSC9aApykyuLg4t/kZzyvqH8citYAHZaMW5omDUpNXbhEkrhKjbtTuXtZGhLd0bMaQicRKP4m8KjIMnNN8iPggWu6hA0jjpHI0PUqoxs1/Q4CaOsLvpyEFKk5Pv2kUCD6jqUwtoV9LLdODMn1Dt2bDvuarHCy0peCRxQgcxYAjNcuuEyJ9/E87zv4hX4E14ebZ0vd9Uf/92irthGa+AcKwdcM23Uk+a6goXzx4lQwyk5GyijkkLpLtf/O5l5o2bHkVYs4qn47LzuYjmsGjyT1ZV6godtp3a3CoMhAW//mXiSD6Hf70jWq/CvRaCGlh1CWLSFQfyCohAtXlHEqKnavYGm2OTrRxDDJw2iGAJ6POGp/iVpzWEwHEQAmmt6wLdbt5okB7/T9O3mQ0ELpYyxDqmU6iNFDzfw13jomSwT0LY36Im1qJMWh1+uBxeYXPwfAYKu1B3jh6YLljaqGpdNGJGeuktHg7I+uZcLHiXdPD/2LATvXPXdb1aLIE8Equs2Mc7XPydD2FZXeOrXUNHgtES5PFnodqz5faTvBAMae5w8c0Ce949uwTANDoNRGViOxn24Ha2hUDIbysRKOQEMV9bZi8P1Ka2GpfaK0ObiVg8JhtVaHdDT3EwnhT/BAl4dZNZKFjYV7LWTS4srxUS/7sZF4VsLtT6sZ8ZMQ3uBuet0ESpfWMu3N8nesZfbsW0zpifdOj1m90dnTvEYu84HD/3VW/DL8rs1v4kT92CC9u2Bosx/cCOzRxQP14RTwIvNGBaSJRe9UEhm3gOuU/vOog71J+wTXW7ICRIpsSYMiDE0T8cGrmiWKHnkPCxtDLsi0lYJaPclj8QS60gjphtW4YF+liRvtAh/lZb1RmZdtU2KawPa8NGyd8YxKyxSuUJ3+d338vMB5PYXOhvG4IiUrPCJQQv1g3x9hvsUHKL6u+LctUNMQ3Zg54lhkOqs8lGmawl/nbzEOKUm+oPOqhTF8Hbc6TvbFyrC41tSPuEKxfXyq05NTBztTbP6yTHe9jvbD8rcJ7TQIapIqvWqeoCRt7Zjpy6VkoFg1FVvxWWz+7ZCy094bO+etw7GvqkvK1u1XhyQOOoBhfLzuzOE8OTFZ3IMrr3pR+5kqRFcPL0TONokOKAM6f/cI4fc2x9VqvlcbY1Xw4hxcS9img9qOqbD9cG58rrGabX7inLPJkU1WR5X+IdjPNti3lLU64eMcO0tYyj7KUTxQBMuKuB0FIuB4tSwoImIw==';
  const _INTEGRITY_HASH = '161c1804ce604d05c0731e3672b710e6fd8a703a7bfeb0b18f86a9f63188bf5a';
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
