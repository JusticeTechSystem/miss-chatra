// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5ejDGpaY4H2Od2wvVxLcntYSv6pxchnL9+f59NXx2+iPsZf2wZwJ9FX/tpavppHUtyO1LO1tAB8MbYYMfMROmTRHcKP/u4hSZIrRzqlyEfN879Oy1dPLAkmWrSByDwlrqRQN6SRtiIKDFr9U/PldXa5+mKhrmMxLvUvaNHH2SJqZmQjQP1FZhNAntQVdWuor0WQEk26k3Y6s5opqWPMAOmcv9uaep03KvzeXs9zxDDVL0UMeqybd5wQGsxWqkudqGWuTslL5JWzngpC2CH2zqy/1Ft18//nmSkuO1c2Pl7+9gxHuax+576H8SgD7AOY/abyCmqt0E5+u+d0+MZTV4EDK4GZgxXj1x7oOVI02e9t0bqNqX8mjYIPQ/xFiYDpQFPKhU4z5b6t0pQPDYEOeaGvl3cVs4pMu3RA4uwuDuaSNon0nbaSn+2y7qp4BC2TlXkZya8fTID9R+0Quo8TVmLFHMe1zgLYm5zU7lI8A8xI/WuDwAh/zuljxZ9RwtaD3EjTobpRCCwehdUL7Ztp1iM/MHjwYBwgPtlouiGBZELfPfr1KVlc9UpCITKpeHU2oM/X/49F/9Ynymz153FbTXaS3+DxQGr1yw3bcrSCYIbraKT31xWPLbA7Y/9FneBMG1UOrcFXDGrJ7zlx/2EseUKvmG8hlXzmlGyamyiR1/NWHQU69LEAAnmZYvN2KozBrJFUN0JPYL8c7VxtqAxg1f1nnp/HUY1WYMU8QXm0TAZEAYwdJ0M/xzWdcGcwUS9PxvjxodVESlcltZQG+XL5y/zM28Zc2LHPOOWRs29bEGI512BM751266sJe+dvQIKw2hWZ4XcHcgxMSTPmb4KX5/dT93X6n1Zc1j8T63hFqWFcyRVU/wbjU4B0UTaND5W66lN/IoonXFDT6s3QKHY9J2m9ZSOOL1tdaaa6lOfFaUh/EgjhamYHOUpivXThkKJXfGVfX7gUkyVWg37GOpQMfvOJ0Dqd5tQ3cHQirWej8Q6D+rHE2oilXoGBWD2M751Vj+Jw5nYbcnWvYayB9uzkG8ptvJVh2tnDDWOV5ZIAdUfVvsQ==';
  const _INTEGRITY_HASH = '425639c31616411940fbf656fd71ed159ab539708e8d19a05449fadaff163a4b';
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
