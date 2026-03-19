// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pY4z5d4YrHdvW0d22BFlKyfAkrrL6jkUFGnhKNLSTL2WzSTvbSoLs+VLdEZPIoMqDtGSCamSNfEIaqxZwTvLXKLweStdGFBGkIFq694fM/vjwOFw8RuTAHck1WYjfzB+ITC/TuRSDm/eL88Bhm7k5kZGpPFmuHglQ9wRm1+fBNEcqYmasWGM1q6C4x0MTp4CH51tDe+ZUDjz/wt68jUlEIhYD0uNx6//heJ1QVtP4h1j8+SLHBCzqR2S6oiHIGXsfXWFYuHeSLN//OXdu47ciwYzXgTvjkH2HZDsRrboSF+t3xQgyN1wr1IqLVW4Sk+WCQcsZyrmvS9tObolI3cTKQaTH7T9g4SR/ol3iX8UxXX/FSYi+Nds2oPZdPH9IXDHwzTxRGzzIXFRcWROohSH/4HsbAscf8MioZiqoiKR6EvNMIArvw6AXQfODNEUhEv9FYC54jM56sGB0gSLsIWQvJr2fVQJLdYXwT2MiIVAXsPqST0ucSFaKFYBA0/MZHRRjVYdv6U/dP4PsHktVhkDlhf8QX2yMafX2S+hOpFCTyY2U7BFuA+AOBCnaBu/rLtF/MQEQAPzr0YL99NqApIT6ylv2O+s4iP44dvi9SBlcvO9+u6pB3ZknC6XrB+DfCJe5rKbzSPREEjxIe0tJsBC23+s7Irbh5VUA/Nh5jvOv+1lDMe+6CCHVKGl5NJMyxsveZNKNtdWEz9KUbuYN+DgdwQ+oIy39+KAptQ/olwpp6BDy5zVPJLpo32Bg1acgBPdeLLwk8MaY8UTV9J8/yomszvaoGwEEK079ViJVu5Tj14ttNFOag/BA7lLvy+HBnHxlx/5kmjlSIHMfMJrCjS3Zx9Mt6EZmiF5zYKFXT4lXZIUe57UGUqyBJh1NDyme6aTL3amfEH81r/MQf5zWbMFqvbmoGT9ZCSHtvgONWIZJTMsjj9OSYOQIvy48RpB2f3NpBIk+/crLrk9XhairOivuIFvYTVSXNUutnvK/lohXewQ1lmBwj2nT5Dm';
  const _INTEGRITY_HASH = '9d922de910adc8b72ecb9a50349a67238338bedfc3c74a11749a56639ebbf16e';
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
