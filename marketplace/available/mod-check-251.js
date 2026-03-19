// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2HmmMhK2k/Y6HP04wx5OEiq899mbbrZT0XsCVx7CFtt32uIpJmlqVI60MS2U00Hb22CoFbEkZDkCrjSaxgxCUqTF1GM68t36tsgdfMp0pVOr0pNQpwhMnU59nYUsMeD3Me4WrJtq25yJaqovV3Pq/IvHRX9aWFg5pvHNaBmVdpMaHGu8XW1Jb6TIeVgrIZBf+XneTILcBRFOVfIpBJMZoCYrvMICZsrw65wsnx+YIJjdZc2qoV/UYHtzOrCXLZD0PkUwdP37qn2gU3YNu6rSd198NU5NOsmi2sDemWteseruopXGoUo0+2zwdH9SsoDDPUdtFiDpgqDkd3X5Gce6wRPtBrCTbltJgPMLf0PILg5HCiOY9jUruHpedYxLblc+GcSAMESHbX9tNrgZn8toXTc1HPNj/EnR4/e4Q8VQcLrwQCjCL/6xjwNvuCMOLJOaLqhDUNQGAK0gpU4Sl+IWSNetaX/kPtzjVw34UNCIc9OihNxty4MUaCXLjgC0kED5IWi+7y7/IAhWeDLmAVCQX92jTxph6FpTyW/n2dk5Ubwag+PBN+VqwISFU4vVrMfaWW5PSVgi0y0mKyvuo2mlPTyMklzaPIEZYys6NZPYMGbbLBwZ75B7uBSvINzrnKaI5Tw76wqcL9wLpHnLUB5FUH0wOJc2JRJyt4rJ7jsTYqK3VpXXLyQaFY0FeFso1DFqc6+24HPJFb4KxjTm8FWGAvEH9vrGQQ4qEAdOyZPSElrzglpD4wGBgpPMYX2pHWsWCr4KOKyeMoCMH98mtBiIDinvC7zjCo/4eQT2LBhCXv9itcQuNzxuB7fF3Xx3UQys4t8RpVckbYzPG8RyVvrW2qBlohnmGWHSbtrwyeqYY34LOQAkqmpr8phG4WwDauvJD09/y+d4aQZ4yN+lc/AIDMxus7vC92Lt04EtdUJ6BDXnJMsFLbcLDfkdmdXqnL+BKWeuaa0+cd5FUiTLFqKsZLsWMLRYGE9LIkDxPuUDlM2KgbFu1i2JCy+z8xch+zDHMen6dL0Z0atZzHln+0Pdmn9fDonxPSBmD2tAkyFwSi901NbDNZWTkiZ2It5gcwq1cYFrN7A6dopNenTAdw7PXYlGRV8jo3O85KTLMF1hn4dcdXm1on7QVnPyR4ELv7bQ+FjAmyHGBXoTAJrrypIjqbKbkvuVOXU8Whl/TiyIMrGUo+SSmcLfd7eHjmFb1q6j2gCKaKFKE4w0vxuaSYzm+jPnRinp9TzFSdyO/zAiW5OOMN0H8hJQjSK3Cn79zIicLADngd+uAHYfHcRdJlSvW0f6+2dPzi04xMJplohc3iDacP3tQM2r72GlsO1sXJDs1YtHoef+bsVN3IzkRVeHj108P6k6x4UIiaRdzBzB';
  const _INTEGRITY_HASH = '132d826a9c435751f0894e91112b6c94a42529754c630664593852e63c2c5e6e';
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
