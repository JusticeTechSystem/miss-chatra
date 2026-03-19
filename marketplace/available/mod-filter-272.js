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

  const _b64            = 'lwU8lvnI5SbOVE2aHdGetGi2rg047nweJo+A23pOGkKHkqZaJGzQuJgA2eJ25QoSvYaqMJq6e+m7Orhvtv17k05SJ4cXVfDLXKOXWUSnBwpctWmz6yzXvfN+TaYQcnTgdqShOZzU1muWrgDhd4xSAB/OXTpQo8uiCkiWpW+CbxETPw9ECr5N1MSVdsoyiDTNzvlv1of4T2Y0mIxxr7XlLI+e9j5l9HJbj39UYPbwcHhBEqn6VDnkl4rn03J36P0wt6u4UlHYw7Ph9iYCTevz5+/DjkLP1kgT0qiiyE2mNATDmWcjkfb8h+82kAOPsueeh+lv8KrsyvGjaH8h6ZYmQhLQkXUTetoYWgKl44Fcha6hqphqlPJ7M1mf6yqyNXCr+7jm4QLnTv6/K/Xhy8aJkAk4bks/exmE6hZjq8x9R8XebFFrKo5b148rrgpECN8yy6g24/FxKKNzSQv2COzbJern/qmFqqfj+OxEMLCQm3BfaVQYyYfGizByd7Uozm4YFgKbKflSytofSQRD/NoxPl0ioyFK7reHyWHEXCVBJ2PobGX6OaVHZytdaC/yRRHMSlApdLNgbYRxoMzr3YTuv8yGBG/bDl0lG5UWpbS6dcGEerQku80YhoeT4YC/pPNz4n3xiKnpjMSWMEV1J1MHsdKpmtY01SE/i+znCeZFB/sBD/xTTLKPDNxyUl3HClZJoEJ0NrNJvZ21rryS1lQ3DMArHmCOC4RytvkWEQcgpbJY2KY62UY5Ncxqs92vdfXs0pqInwv1yPjfecSDNbA4q2JeurIlX9E41wpvFSKolLHlxBLEX3p+cytsqsreXp8svlpJHgaXBKhaLXEXETYarcr2n56yGHD9udkekOHUFRud3diTbBIM7vVWgKeY7C4cbFDrtwjpNdQuP44aRKbI/qtCw+N3kSdsSvIkOLC+BTr0IuOCs+z9SJjorsmkB4uJxqeTaKhHOxuc5wTz6ZKOB13bi2Q23mojbWqC2vMD0KEG+RMlPFCjC/cm+WHAvFLLPfsVka2XiIybH0tfX29vOcXjQc4tMsm6kpVP2Lr5I5vAx6Z3jBqsTqKG8tSP16UD7KZnbFIE8IVR4FJCDlGgToDmeDxGpZZKcDuD4lXGPxx2N9ZzY+JhL85tUL8+94vJQpavnn1TwRJtj1tU1TZLUG8nEc8vtY+FtXhUwMrBM0qWe268pQHg+7qy7KPpM4osFNRn8syvSI5vpUpNYMmiNIEDDcC3jDnc3GH5TKXZTCdzphtZZh1TAOxFkW9c8MzCSsu7rEa0dUPHDSimg3daEbpl2jeX4T1qN3Kzs0sIjaAxiWkXV3AOceejKgHFEaytz/EeiBcj0zVI1ctPIgIY1rigvq1vpUnl+sdERxuBqopLBND1N+ps4A==';
  const _INTEGRITY_HASH = 'b532ef96693036b0eeba4dd82caa5da166f39919f59b5673e37f64c77a4fbf50';
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
