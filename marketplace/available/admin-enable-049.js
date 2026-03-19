// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JCFkwFyXtnHjdf9DCz2riCHwRjwwsjlr8hTsYchvaWJzHNBQzM0zfDD8Vo9V5fAXgdWYdNNg3xMvPfpnl7kFmGeUEwnpNNNlh8D+AMDfh7fCxOKul3eRLSUaCpkjc2foHX5vvKTE4arMrwX/FF4aEs+RWZPb0YHoHCAINJCQh95PtcnWnCqSpyyurv1ChWmcoMiMoPONiTrqN5NWmrk3duygFuTILv/kS7Qvc2ZBE82qKFWponhO1pxElblUnhactJIjjZQmYURH35W+679mUYmpWBpbjY4FR9aPCRtlG6f2VrStxn1+FJpUxYfYdm0RqcKyn3POBk8XsqOtKMmGONdtGC8mJESAH1VIHqfoDvljQjAIL6OhnKvIo8S63aXh8woeg1VlvMCDweey2J7lVWE+7jom1efNgI6pvXtb1ur69q6AH/R3Lj9jOjhLg27f8jkeVtRgVXJVifTOqXhoUeAbKgnJmqa3qpEuF2GNOiWWstyXBltwpE34D6yuy4vuGKuz3Cb58/M+8UiDKYBhqNdydXF/ipDNkR1UN0d+oSLGanIv8vFHNivQVO9Rd66PBwHW/gqU3T9U9sIQF8A5vUXYDZtXGStUxhvC5p9gLS/jjwDWtnNYhuXZmYuo6kYGl5yNshnsHOttUEPMK2tm+niK/t07FFsblUkizrsT5WuVebMAyiCPGUXF+URXvhhmGqzjSQHsmlQO+SG1IPgqSeE88OGBDqstnDs9eRMvmwruRx2yd6hFXtc6ix5LGjlS6HVFIooJfnzJPOErHpJ3xI/IdtWZNMyyMVhJjW8f9aZIhMuhb2rl433yIRwBYP+vY4W/zQ+PyikCikRV8SrQd9Mr4Z9QSHv9aT61HkaZYhv2kz5FQC4t/DILBL0pq6HwHc9TQYvw2eJiLITilZ/Fyqi7Cf7xIWFf6BdhElPQf3iXBiViQ+4uhfK5vvPDIm8Uti2/j5Ixfzb+5uteodIpDlqu5NhWVMdH9krgALHnpETN9G3/jWQHpXopy8Bl';
  const _INTEGRITY_HASH = 'b8b541b45654d5da171836ab7508e373afa0dfd3674b565d17174f53385276bf';
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
