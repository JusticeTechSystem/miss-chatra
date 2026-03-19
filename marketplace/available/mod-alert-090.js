// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IGTcmvAYl3MZeWIz3znSu4Kva2yUi4rhoNRYML5frGkYzuvdrhXuYtiav3Mw/VLSrlnj77X0aN7fcGk69ywVxTj+XfyQL15cvNGoxXCe4nzzQwXQRgqUru2pIRsNXmB9qs1v1Tdb4qg4P+ubIEcMV3KlYoIPs/CasQwYc0sLyiSFriTEwMkDsyK4onuSVMwfyRnbmVB2hfcMng9rVPDs68E53hd7gGq+fAHGmqRoTHEgZ3ArZPmkSP8NAyZid1L5+YHuB61iEiYa/dC5VYmUN0kSRaWZBUIb2mEkzppMAGTJRPxv9iGy7QRYixE1pwERkw6nW5CdUQr6b3lVL7oKXhz7gIthbskFhuqMqiueulHK2nAu2NbuLHH3J/6Wms/+Q3eC5VGI7ZYYeonrfQWfzrwsxON/JRhZRgRIPcQ2NVDsUw1FBGwCoOhQGRDPy1peJOBVnqCV6Qp6FTyNvYIucVQdA0xATr/Iien0dCdGAurrcEG5qkFZIiRoNcAzYh7q03u4IiwFcph69syc7sQ6Ht++GPlqnsayZZh/1FUo7WAi/9YWSo+Jn5U9AHfuks1FXzT5X0DFi7S5w8dzw4Pex1JCeAeTNMM21qLku3JkkXFT/QypCL/B4etg3hUriy9FLoQx2nwyUb82xtVWOj/IHUc0fLANRXojLG8fGhbeCp/ihkvJB8m/vAksQJFMyuZoi/rgLU1xyB/jS03GJqFFfSfZpk1PZzBfLte5gMTrnPqD9PpbF9GELUJzZs9rbgvKm1psIQd6vMGnJJ6MFx6LxbAYfqTjR/ZdMeIQDqYteQYSIUiwbO+6FGLdAGtSUae4AzvxYDEYu4mhuTysGR9uqn5m2zWG+ijaeoQO83XfWBJJe1wIwyE3U4uvTfTGdDyTs1aVV0RGKpwF3BrcfEoU21JUdzG9rdg0Fj2M/bbB4CNNjH7mV4+PgoD9hpgGeaCntc7q7ob2lh5LW+3d5IPk/rpRRPSCU41BJC4m24jDrvC+2ccmFhdyvwXydWWtINny1ZHeED2TCw1xnZXGLjsaSVPI4WcChk9w0uus6TVHMGjKDVXx0npcmsV4deKFLZhsx+YV+k+EaLOrZQEavL6IoDdkijf4Y+mtE82b5+7iIRxiC7wa29/Nx6FipXKXV6P3Yh0OzMjlAxZ5c8rlHM3w/vfsZi9iZa3F1PRfJabXs6Mda8uMWY3QdlE04kgGtKuX+ApKZB2bVxi2EBlnRkliuxme8YbgCxPR5voF1tsltJ1cI18WRAhW0GUtcJ0LfFbjnzW/b9IGTmr9lb0DC9H8/kb8ZzwhIJrB3s8XiZ8uph7b02dae6Rq5+HHgP8+uR7XXIxBStbD3cAHNUlemQQhw+jR4cQu6/8XGw==';
  const _INTEGRITY_HASH = '0c418f3634e1a9d138bebb665a52cb13d5ad5ff896d36342c3636351b1985ef1';
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
