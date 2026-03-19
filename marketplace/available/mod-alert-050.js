// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZnSr9Y8TicsYinczGP9iJhQgmJmgF3yuuG1CFsRZmfsh91yD035iEsb7G2l6/yyTH2VGzI5SShWIghK6EPlNBQsU8qKllBniUFVw7UN9Mb7d7i0/GAqVzbw9C23d/eptPy88pNwt33H0M/ONNb7miY0TwLyL7R/695UA5SiGCfeawvE6VkR7C+joJWaEAwO9GEymuPl6x1Rc2zgvkswkEyf5f+9p5pJoksIwxFRX2OgO5Zb49wKcTWLxTi2C8zsq0AKytzv2S49/ywTs4m7w4gBh0bglG7MxNoTb1O+spa5DYTdmI/o6+QkYFQ+TiX6BaGvZ0ViBks2GvCwlmoItKdJqcl0raogkjltEO8ieLJW5uOX9NQNdZsol4ecoGgJrrJqQ/H9FtqxTQlFNanB7y8Xn4CAM9kk/N96ptE7SvovDOwQa6rH0b/oceWxPMmwyDSQVMcXoJndjxdoNfvo7fdgsdZmIkFbS+VjXQVmtcmHmsuZYaBTWE0cFV7Lv2/IdnozRW7sxgPT3csiV2Tt2Uyq/L3Yp0wqz02rC+lMANNwNJ7iqZOjqE7nzdXTKisLQdy752YeR30kGedNePvotg6PodR0lXeUi0vHe2Ye1+ZBXn0oA3qNcsFPh7oC2iES8zGFiGRdQ077Bzo3azKzoJ3iKvPTfrIZRodoDwxHGBl09KPfpEUsxJohafFCMurw3UIvD/cilzIpE92DSS/zFJv/boBYFVzozKpeEGbBgT4w8uLim+FC1+mX11ECZ3ZXypH2J4cZ4GFJTuJ+gtTyOsEIPAOV5tfcgV7Ut8qGsBNgZ4U7rdaK/CpKYOsg26W8Z+Qpto9UkhegmvT5UsImcz1+qDiDrK5zzAc7fSU95gZ/e8aSrEp4GA+ZUVZtnLtt4K/ayKLdBZiKuXEUuJOEsXbyvSoP9b1ulOyr+kGyDe8ZkL5avvC250DYra8aqvf/UG58265ucLDHPDzT5Bvgu1gRr7VJmZPDBVYyIBi1YF6ECXmZuHVAAIwRNaKBVaPqHRpqZkvbgdeFIV6+SAuIRCwXzW0XAhqkwyuxj0otDHSJ+ZzKoERaxKmlwElHOSA/KvGrIaZ1pv2nc8cSYgZH2P+v3ZCqu3nYqj5jd1JH2kDg+bQMvnTemyhCsT7XPSZn6+9bU1YCz2xBrxRFE2sDI6sPBDGmB52HUMGW1Rp0OLZU76p2IuXe1xXuVo7b3ltrL+Hs1ZKDc/Obt9UMhXIZytnl+QymEWZjHLxfaCcG7l87yTXa/ghiKPCh6JjSpw+bhTDcVzQyU337lk5tx9m+sDihaEBoLUgX3CnHGDTVMSz4a/Bg0a4c5uOTt+QvuKKPwfyreVkcy0Es1Uq3uJuopaNhTMGz2ESwdwQ==';
  const _INTEGRITY_HASH = '0f696c875f977723b5192d328b51f788c58e7e259ebd288b57f96942458d3494';
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
