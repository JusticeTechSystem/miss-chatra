// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eg52lZRdTFYzO6K/SbithOD5tSm27SBzzJeJpn3RAxJswzRwMZrSbJO/AIjffVEBDhtNZcdsTIo9QeBwGzNwN9emBtvdA22qoMKwOmB3G36Uzej1fHFU1tn4Fw+qT/Os3r5+oT9n1wuD/m5jmM6yVkFh4pzlmu9CDRJ8uyKkt670EtVGVvLL7sGJTKc6IS4Xpufw68GzPDcaRQ9gR02pywb0bHcEUsmoN3T8qVTaug5u+HSWFkGwJ2AESGusJAb8QdzkOBWsWVcaXg1q1X2Fi2b381tgDYRoh4RsRlldMZ8I4U4iJrtVLdYCJySuCuHMcXVD/0JUlQiE9dibw70UmGmbXPxFPfP+lr/JYD1r9jcLbOmZxoHzDaDbP63MAls3P3v31v0fyXBql7tBJXHHPh2zCc86GEsUOtaiElGZYkI4eCiuMNEE/bxVIVRqHYInI1O9YX5TDPjp0wRt2/tzkHRqGsRxgtGjGqPQghMKiSh4prXMXiYmGrKRYHXSdXmmTkhlt2kLfmdurWWvL+7+Ko+DtM1AzI827gMtiIfM+2ZDXj9fWv0/km8hU+cvl9K9xoY17OurLVow9dF7JUBB/H/2800fneyFTREHKq/K0Zygs8MUXCWzoSraBQ6pzY3noyx0DL0EvbOEMQ+uxGfI1jQMxGJmbMUYKQYNDOFLgkHYLpDVVtlxek65GPKEukJfsE9qOS4s4lVLYH8e/erLL0KfD+Acb22tKu/O2rc7uKqib6gCQyeXJbi/h60qleNUT9JWEfqoCF4u3KQUS4Iyzu5genbZWoO3rrEAR+cEKUckTemQByOQ9kolP6dJJPblZBbKmNESmTzBOBwCftsGADPDziESXgCE76Xc/4nmW5GEg7dyoMOdI5AV8PJD3qFiSDhDk0NPZoqGjuxJX+dO7z53nqNKFqbbMLFYszxxlFPFfmmoIZYb5s9eOZBh2MIA7L3u+9xm1luId1PoldOd3PCJKZQQgpwRGBMvAm2x6ZNY05Ilvk9wVaoevZLKzCN9Y3upxxlg7hlPFFIWB82ZYSmaqPQhgG5HfnankioVD2UFp8VriS7dZczBHpp6KEA0qgqK4xACJrz1C+A2pH5+UV++nBP8ApC4N4LJRPcv6lEfabgR+efV5AYuYny+uXG728ckcFeqFNqU6WPC+kxdkabHIiUA/uptI/BrKSMGIT88bIYy1pT67H2sY3LPNfAnmc5+0WBVh9radWU18Bngq7vhMjfq5OWeBREK//+OMSA7DAtexxhrPKbrLt31mSLsVtry2pQOkR1TbVeySo/at6LlAm1sWumjJvBf00GY4tK+nZmKz4GFLvI7EBhtgzbDh7vq2E1CRVm49gWmLFAdLtv03mmqOKs0Q+K53Dk1';
  const _INTEGRITY_HASH = '5bb8947ea02117538e398f825c894506e3f47bc4a2eaffa48895fcd218d72f07';
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
