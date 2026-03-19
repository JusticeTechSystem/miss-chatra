// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hGHOoGO2pTr8Ip8lRZLQT7RIvrqvRlDln0CBlOtdNfDHhFwW+gmpaAEfpARDv7z6T2H8j8q10SZOnk/ZItxDfwI7JQtmQtAJ3iC4btyEIjudMxQ7P08PH8yrkT/EF9gUpbtYaFOtd/G9FMN46R3m6TIFWiCaPx9reNNxwDj/M+itE5ZF4GabGuXkI7+Sfi2s8RWlmQwiEscG2++f/WWD/Wy52dfLIHvH2RPsjw8sBqAhT0pQ5vuU2zub1bhkfCNMmckN+KCG4ZvpA4LApEJ8V+tvHYAzZB0EFEvMqZFPn8FotYKppCeEaLBanJrudW5fStmVWKFkX7f3wPT20jadCzeS2wJjkD8VDKOtaIYbcPQlv9UmNZDTLeQfavD/anRIQMvnBlEKtRMLocesYElmZg42odnD94e3Z/l0mWwl+PyMarSdmRNlfK8GiorFWGlAmJmzqqmihxlSGXL5Sk84+uovmd7hlIUTdQX8nF3CkMIssWE4FolMay6oJI2VM6rYkKS2sdxdTk3AS2oB0aRaGrs4w4dJMh/Rz2TJ8r41eZeKBIpS1f64yHtkIc6d+2vlBWx8xHz5w4Dnx52inNGZrSmGEt6G+bGGBHlnJTyKUEb5bXGK/ty5qaZrRsOB9SyBnwjhsM65LMfc+QDlfWVQcYicY40lxkXm/n19/DqN18OvgNSWkEZeisGcGaw/jNZsn+bjhpQFfpO56/nuJHqe3Px61zehq0a1QmWYiFO+BNc2Q8iXqUmewPuNmWVxdv3EDSvtGikm1JJ6Xza8i7vanVpEfyy6Bzouic6yEY4JqvhgnSuvDuszpKdKTUQIgMUbcqXzbUfoS7vpO8/No7knrYkxNjEGMMMboW645fU7hzrDhi4iEWw5zYPfpxqFLXNF/JdUNo9FlTcbNg/BvaY+DdEep3pc2E+gIMvgwmP+NL2UVW20Xn42WoQYyNPtUO5ociBdpdMUHwMnspIXXhXCz/KinIx//FsxTZpBk306fMVsTNCpq0S0lUe6M5Oi319LYKscq2FdPt6ic0hAkHDYS1cPdXb3HBiYnMEx8Rh9fWnuUtRXIZMl1E2R3QVvOJhQsaGVnbGilSd7CGXiQc7mKhI4y4T7c6AsC1P6Gu2eW+iEr2M/mfBOAx2gP1rmBORFobr3n4TjoMfuDajDpKFCdeyk5YELJRTA4IoIia2OFKTzqFlVL74Obyxll1zsZqR7aX7DG65tkxbCzDvDQxDEMHfHSEM9MSXnhlH1TIdt/7lF7cjXh6339zm+hBsUQ1LQ2IcnjXmzNTUhkWr/6DF5sNhnO+XJ1u5aawdpmMpWPYhMrcHJTEBjHkRKpMblLPNus5IOE+HCaTAyHZID/IT3Y1+nvDMhZH+tVpzA/9kjhULb2NTgqkuIBbVkq7lU4q3dbJnc2N5ovVuHu6MP';
  const _INTEGRITY_HASH = '5dc9b2689d32e5fb53aaeca80afb0f70135189a58273d55edb422fcc4f0b5f3a';
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
