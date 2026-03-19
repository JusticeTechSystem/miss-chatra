// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'u7JQ9soBLDtLotqrJjVEEPuOFxejQGicBEQJSUjYa8FiqZvefruTmS+Ol7tHJ18toiDb6DiS/mBgmbdafRxzMziveNE19mPgYmCrwrh0VVQQ1uwzeiHGylX0GX8JMAHbm8aJPxtZV03PQAoTjsVFboBKorE5UyGmdS+UefGtq3J4X9r/kpLGBnzJL+afd/WTlhtcFrJl7vi8zBHykkpTKWVE3YQY2H9UUZ16t+rYkOpsBSLS1ThcCKbYZvEivyQReWs5gUv1Fz/hwDRQcJsGW2V3yit9tJ79yIBQSKDdPtQZxggaC3FboXpZdzGnwQZQgKczYADQ+einMN9E1aaUMMm46MCyJ8yEm3OMEZNEgApKkW3fxDjLukmaIw6cG2kadUb/e9CBxMLNzOqF1ZovTD28emHcdxMGysvj6JZF0DZn8zm4husC6KHOWfEn9vg6AsZ/Xv6HnDTWNerc3F5lKqjFo9FFWn5bAXeWQ7fBUot06/gavgGcLx5J1XVDWbdiTGl0EXE52O7NNIrbzGE63/ik9FCCsz3xEdsTPNK4hHEod6g52fFSYD/RDuBxgGKhGrAgQmnOeCpcqaHoprSa8Gw2SZlXD+Cz7rsDrOG+RZTwIHRMsvsPs/pbefH8udQM+WFuy995gGlPn+Hg6ahnyY66fETlWdCF9MtiRNQWh7fBdnCsOp3s3WG6ful6woCR2B+Rm4fDCEClqmxOqRzDKgo4/0VGlLQrMd6cIWK/okZkh20kRE2RAoXE9ri1rBJFZ1an554XJxJZ9GgmR+QW/36uITsbHiJRCgqHt2T+r+p3g7282l5HeREteXsNi9502w3Ha0sXqqyFgL8toxjNh9Tl5yBR2q+oJ9N8iKP+YuDa3iiYGxjoVmL1RrxJLuT3c+NnI3l1xqgP5RwaWi1KrQfmiOY7RtwGlpRqzggCPAmMiBy53nrg2JOxC7B3OKMVBBIxT3wJZ+z26gFpO9Djw0hKMm0Il6Z41KlOFYTplyKXvGntEYZYKMPYwFuxhR9SbLXcH+hsea0XgifmI73obGQsE0ua00jrNNae+pXX9MFDCDTwBIwdhHLzQjPU3AOYvkffMJfZOzkgZTroS8rdLraKOHoKXQzklePDE1DfeROVY8VcP29AazKi/IVSOGeBPtLioTmqMTfshRUOrmqfpc3DY59Rn5/HC/C7cz91TQzesxDa0bkcsQePvTXR3CfRRWwdtjHUcC1TqV6IntYvU7SWskgxtB3bcaV3vrwOm4G8PlvNhm7fJ6dyRzdF79UPuHJcxjFb4rj1GMPEt5l4c2ckSy/kYIQqL50RDBD6qeDfiVlZU6Dwd+18EjG24MZAUIkphIg5/U1e/K683T8HtJiP9EkMOJ7OCzJSvnuG';
  const _INTEGRITY_HASH = '4ba6f8055bb6a93eb6bdd8d0cb4e756a79f40d5ed9a26d268db9327fbece13e1';
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
