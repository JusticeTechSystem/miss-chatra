// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SXvBhJp4H/v6hU8kx5tF4Xqp/h2lL6VgsqY+L7tB+ybG1zDV4ffE1HpZCyBAA29VP1pBIS2BN8y4K7Msbwwg23+qQKMX4fYz53RcdA0PXaB6prujbfixxb8WiNecl6P1V7Ou1cXNeT8hBgtNFbD32RMLcScH8sy0eW0oPuduTj8iHtvGhkYYiDcueZNa7tCP4QEEuztKpy91VcOOxKsyhgIcQ8xJATjOzkRuJ4n8jIFcVsj93hGrAs5oS+2lS+xRsMLQHQ4QGz2rJzV6vneTN5vapGcmNJ6GHs2r8Zp2t8ueNu8IZNGR+/kIK9CUgQd5PvE2Iu7nPDDd4Ruj+Xlb1t8LMRdu4d43erPIGovGp/U963yPogydnzCuatYoTCQvs3RS/qUlfyamFALRXxi26dkSfzKdHWLWm/d79Z9nkhXMb/DLG/F1uIibzfLZWZ6itcfg6sssXbrg8oPudWSnsLBnVVmOaqGoU2l6Ftd4iUyvgY/jg75b0o0wxTjUP3ZC52inb5H+/3UavhrJPJA/r3BN/IsDNcvfl9zikFiiRRYsaGmqqFwNSt+oSao0+DHc4RIHmkjYAJMs5O1ePuNPsGme3rlG08iQnNy0+qsec+IlGtRXIoydCHFspkN3Fq65XN1VbsCiF8VzWalelV2MV5x3nhY+ei9q7HyYfQfiPomv+dy0703Jo/aP7j1CiKJLcrpuBJ9HULlwVGIWfCGRD34GVXTUxUkNUGvg21vVAENZ6Ce3V4opvg5Asl7CRVIswYUBGQVax+0VYmxRVlIiYCVv/MadFOZqP1Os+wuuF2fhVYGln1GhrY5COZMfWDOwfY/gi5ApCI1eGrtB0CpqEEXgEqSfqtId+ZDHkwDeQQ0hwecHFctfHYfcExKBkHcUwVh/5w4UcHxftx0a6bOEFIqKxjG5MO/vhTu88M658tGkFjPOEj101WwP6iMACI1yAOYuWx/moSiB2UrG/kil+9yJtc42Uwo0Ft3nO/6TuD+xIBPmcUydNcsW0h5ab5hEe8LaUo1Jds73esFfL9/Wzs3IzEn3x2yGXRe11lxSZ6/nXznSXpGBIX1oqgeZMYkzoLpINb3Xdhe+rF8GDqPwk9B329bmAZ9t+EdS3vGrhzI0QSdR1fEFtgUSuLyJikS3RXK2YTNc6+vJugGxcrQqf2nGmaGwciRXeX1Nkom59tH1kHzUgMV0ZJlJsaN15N62x/aUqZz3OcU7n3PMTA==';
  const _INTEGRITY_HASH = '507f6fd44852654a5816f920c300b02d8ce097dd79f2b8f6b7eaec52ab512c13';
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
