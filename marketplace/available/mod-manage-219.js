// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:03:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'A2jPf3zkxsXFpgEFSz7JVMLAAF9UDvVrxUxOec6s49/HppoGJ+C2gxLwqzC9i0ObM+j0VUuWZutdGviDzQVJ3sZQkNp5XVteFAddpHE8ZtQTueffAYogFKS9VsXC8GWAXfNBle9+GNUS/sMbpcn5hAJaVMuNYIPTdaiELYZnQLnMLTnyAGBQHH5T5pHG3vutEZ00y8+/o/OfSEL0RS2l7czXEbwh85Hyir0CqE3zK5D51cW38gdy8D3e5PZq1L5QwgJF8CT8ItJpVTofltaRIG6grgOp5d8/eLW5X/uW44aAECjpJ2YRVwBuA7ToB911oKiTpGI8rJ/0zTMn+cPblWuZDw2Q+GL32zrrIu5yn2Pl5FMTTNLtZU3jqzbHtSb5bFx6DCtWzwgd4qJPZYIeZJY7CWfpmNH3DJ1pKDAmKGODoC1ZR+BJhLI3i3AC+UNmOcnkHXK6Agc//VEXJ5/VTjCsqXusfHsvcXU+beVYsFHGC2iNpp+L9mBUgI23ZIIQk5lFT5lvrFUHmtLN1Bc7NbFpxj63zINcIEoIkcytcsd04WYl5GsX4ki7jIJHyCqlICfn+YA2TxH1wwkbSM8uQ63kYf910gaOQrF0L8lioLW5zfPm4+9b5e1VVRgeJZ7DjPPbZu9rUXxupF4gGOlqtq9RVmbHDyW+MXxB85VtKMnuNk2ZRunGuPQhQZvM0W54FTzOyfmXX1RJSuAQCWT6KMDYSadpBIpF9b7iMLvui3nmbu0y1k8MSv3hMmdrLA/KW/TG8ccy2gOdBt18SXNlkJK4GSnnj4tpU6Rri9JpUkmburgTobKmAaJ22wvxGfRAS5a2+Jz8AJhPBTYAi5hpjSpvPlTEMgPiAKvud6rXeF7Z6hvPfbq5RChdeZolyaUj3mUieOLyU4ZviZP3F/7Wnc0Um/+isfK8ztW58lg3gpwEVNfhaqbpKt9d25zAsWQ5BuPfSGThRBv0oJJJb44nLAyxxAx07s37/r+CNo3EXy9RRrvfR6DOyLTlDgcbv4d2n54X675ESCTwLYKbRzESc3VfMndkdatYvaiKs9Wmy0AkMPEjkwbmh/3/KRF5VT2jhoGc84F/DrfjAS931NjISwdj2YjgviV3Wa46gxM/2dnWeNXH2Az/slepp69J127QrvK014o1JOn2JoyWEVZi9WE1FWyc5/W7qmEiHTyIx4lczYEALDdwGCNeCGdyhTMSq5T0vjV9liPYUhvpoBeLro0pPwAtSABLjJRTx2PYvzD7jg433ye7Rm/2kaO7oNyBXtcC+TeTmTcEB+7NTzyDTA8PLlu3rudAKPCiJPgHS4IHBb/zmKNUQ/Pj5l+lqD40pis8tYCTQdKpWK7KCigHD3dKt+65B5s4nRE/cjHF0PjHlPAXQhU1Mg==';
  const _INTEGRITY_HASH = '7f0c23c134c8a2042c1de04577d22c09390f1dd5d60b27b75ef6759cc57e37c9';
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
