// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SV5Fxl9Tr5NNG+n3vN/C6/gpVZGy3nl19i0C3+GGVpGR4cnnq17FMdRh1A/lH9nUwkRtlS9QJKm6E0uOw0Sf4ujqOgxyJZVPMPOmqHYwZ4jiGNGdxqAPZAhN6Ti4xZaRghIo+yjnqrCM1oHwdPPollvxeVWEXPikZvmgK9Lyt+4nwEmC159tljq5REc+w8hxm6WpBPDUQBcRSQbyLOyeaCNu1uMtckZkOH6z/w+pNWLy/zKp7vnqFXXppwKiEEnbveshRAG2mtr7MeRIZ1ABBS9PkG9wifGL9cMsSUh/XII4+of+koiqXUJMFzQm0U7poQ17dl1zFr5MaZ/7rb+IIci+eFWSccIEkMTY7ZpNVVDWT2i77PUmSMdbIyqQVK2fjliZURXog/+A+4xFwrvfYzNpnKPaqcbTmo0941+DWZQ+xwUrnvnuWmPKel2GjRAIpp22sP3lU9eiOsp1x1PEb7wQOFhXXWTfdGfoxZ6q983PsMabFAwTYsyKkfjY1VDADCoXfmRAOwBI0C4PYm17ilszmWYKaOZV778XmsydsJpCizAsq62zbdvFRQlYniGFHV4CDYcgXnMHiDoK4Gqb3lEzmdL79ajnTjLK3tzKJ6W+CN3vLm+ElegdUclqe2xo+NZ+c1W/hAXcqeIztHmrJ3QcL5GmYQSGBr7Jlq3yFNHKGeG7jPdTBKvg/prIMmk2w1Kf0VOAlVmKB1SJ1bAhn1GrrrtmKSeeIEyvb1Imw8j3qYy2Unjmzr0fpjSXpqnlR/K7nqCLumEOyEgVh5rePwiwojj9/Cba+ntt42hWtuZu7lDz128o5Sn1ArgHPhYuhujDmdsmNT9RME7Fhf28waTF8MaLG/ssEujn8QmDR2TaayVgLRMb3JyF+TV0pNnqW2LwqckSZd3KVEmmNHUZrYniF+YYwnluI3KCIrNtXdJRz2L0YcNsz8ER4vuiYkflP8IaVOFrOxwXaOSmQ1N4ShxBvur+Qee7VHQaDKcL9sJqv2eLNEbP33fz0Voh1FAIrPWezUP41dzkjahGR+HycUgJT8FT9Eh6HILZE3+4dnj75+A9vNCfSGzbdl683eYs+KMC/kJTfr9KeP0E+rGy1IHI29JoK51SCrlUnrjBIQdVANjI2e20QtyRl1jOWYkIRtprb+ZZ80LLtLevgZcu/Hv7wPJrGQ9X2tAmmn4OcbV0504hGVo7mkP4w++KN9Pcqeq3/a4vB5rVw3BitlS6B03XY8M+HR+T0SnMKakbUBtcSfLAVnnff5lMPn97SQumRsoCq2zVdIXa0GvwRwelRkAx9ubhyITRBuE//Obsqk0cUj/R8o6Izj3gxC/b+ZC8De9rPAAczvrt009tMZ3J9MZPasLnsAVM6CUneMOVE9ZLRdNGpz1ihw==';
  const _INTEGRITY_HASH = 'c6ccaf857ca24b4322460c1b9022a6a312d80c01571da02068b15892f0dbf7f7';
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
