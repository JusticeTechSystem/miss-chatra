// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CHbIPO379KX34VVcEM3JvSIoxayc3hoRE81e+WNCDGh7VWQ+0pc84N3Gfz7FKZRfW2R5u1rNx5DygGEoyz6DuXL5zNjDjxjmXp/wYB9UktQTTkdHi4S2v9OMIVQ2zY4lBajwDQtj279jwtalNvdFuOfiyBKpKIe9VnpyN5dSGRl0nmtXmI794/Z9qChU/3bb6GJJU2c/3kMzSwBWQE5cu/+1NTPriHBEwoe7T5BRdzzK/n58sE87oS2HMaMjkQxLugUV1R7NV87kK9z7uK6iYlWsZ/YcFoWjgeGw+8t1n0F2hpwvtPN6DMU5KmMTDxdproioDrPP1c7qujp2e8BPPQBs3aPpXVBUN7LpRiCVsrODfgNoYxOoxNWTNR+RODwn3jETHawgiZ09xV8xC38eoQgPZEcPBoqJJWUM86Z1IPYI+kY1fR4ArFPyT/HHfRVLHXixpKSek+04cBO5Mp81TY/FnnEy62c7ptpym/lJRO0KhTUGsWMdbVdn4D8BO5uPbSbGYlraIRbEyzQFpf2uQq3rZ+WylO2whVxpJv6Ii/xC6CyM49stCX+ssbXV6BiVLKcRfjjHarV+XfRjtfXuranyadI3Vim5h92FHXsrOJc3D7oMrC5/rzjNWHYDcbaoGZ1q28Ktd9iBXmWJDEmfT6EB+m6pw7dhfXd0C67GYrXV4PjH+NCorPLpnOg1j144e6aFAdq1blX1yv95VBHaW2lgLmN51bVCM9YHoBLG405+C2+Ati4hfHGB2B8B2Zvc+y2Xxz/flnpFhHPyOVTQE5TmAomdggVU5iEoyPjfiHgvGrUz3DMhv1Vu8gvTlX2IRUbDdtYWIA2LiDcA48Q+c1fc+9FAPkh1Q8aUlFAXKvjhF7K5bEqGIwKz8tFKtKbjQsr5rwnB8r/KnerZAYWytP/t8WJcTb5d0VEmmiZ1s3U4oHloaCBKghVrt/StEf8i5sBKv+wHfX93S9qJ0WLbwkSFnOwn4unxw1Hm0W0Znd3TNFrdq9okulmUPR6RNX/K4GAqbrhnFNY=';
  const _INTEGRITY_HASH = 'db288895a6e5670e275038ec9c759580a70c6784240d0b6e348bb966a8740f9d';
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
