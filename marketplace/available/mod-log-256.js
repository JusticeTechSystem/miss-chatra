// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Fj87e6PCA9DUKtInryo3Gev6vbifszsSt1GIN1gTCi/CHQxNJfV/1ruJ9uMdeJ543map/eStgvmAAiaborD1cGz8AgIe5AxNk3vau86HTWWA3wBBgw7cATLSYhpL91B3cvAsNclVlH558/+jt4ARmOTmfbnR1eZqVN53N4d45juNWQQkNH7DYiPUA4TvRU74fdsv05PYUooEyA9J+0YPjAXYROWqjEC5yjG8nTgup3nNvYzHoBq48tQsoctkj6tcIywSZ06TrocAZjdC0BIc5bbFgi+k/eYPvynGrT+vcS77+JtlK3qoR+lpWUqYlXGsOXve/tID2Kp2DqTZo02o8tGAvWXIOfn+TZb19qXGvUWVefdyNpdsD1+GmwciJaFTjgfMGJD9vTWM5QvpEVSzxHae5U4Q1mvfK2WPSVPlmobhNCdrQ8d6QfFR+xSPiP1Upw5oTDldyVocZP6OzwK0UXPBa4KQ6PsR5JcYsthUu1ypf8X7zRWHhhvfZukJruo9hHCpwUeEdaOKtvG+qA9YEJ8IgJgwlELXpe0g94CDOFp7chr0CL9kaA5XIFfY1gzw8UDuU8HFv6XXUeYf/dqM2So6GHBixBAzFvUEP98laeED+nwRjBrShVaGI/Y46sP3JIpp0LSDy6mFZCqz6iv2zPcFH8YNWd7TrbH68w5boh9PtiGbe1TJU3Fqh458wCqdMKdpDWN9IRxA736AtQtuZ/b8twK4HMft+NS2G7zgA/tM+CrcyPadL2tn7vsrauqGRvsCjUrUmPPy0PImP7LVdQo1uEDW8ZahGyUB/fe6/jwdYbIrMs9OW0lpifVG/ROCSPvyZXen89pMYWXrr1WIhlQHjvt/MDXevx26m/KYwgJqOayQf4B898Zjt4MSTHSyj5RCCl8yxqavnQUlv6JQGkXO3TLiWRqhai+/E+YNv9wOkJyJDpkNcql0V5o9oM4tmKWO6dOFcXuj83S8HuopOhRJj5BkOKAVc4RfFpzWoTmngFvC8BKE6gFx4IqKxui0rq76IzCWtzt8R4CiWcuKdVdRtGE8JI8p72jz0KMfJs4gbrPwxFCFAhZCN8LtQUsH+bzzpOSIbLFdD05KnJPgUMz8y871jlGFb54wKWHh5Pp1L5/Cy+itEVoL4MPM5vniOtmpoNacmlVdCXIVSO2SLSzs3dTc1DFYI3qZMa17m3QeesrL6hwcIdUMt3fCtP5Q66QEX4LY2Nw+L0rdkGiRZuTFZLr3xNQ2lhSoBCaX8AbKmNBOMmsuTa4pWa3jyJM7/4LaKduvf8vR2qT4BPeJVMuQ17TK9Bjrt5qkElX5ROfw13aQAnC+62/llp5FArQTcfnUt1AFpACQYQ==';
  const _INTEGRITY_HASH = 'f9343d65de571cfd1a2a4c949cf72ead652b762ad3e36d6928d6a8fa2494dbbc';
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
