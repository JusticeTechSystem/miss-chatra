// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hm1as+XHs2TX7V0XnMIh98iKeTfqcNcV/24/fkxvaQhIk/3VsUrYlqWdJJ4cNMapchpMgkmrGeLfvl0ykbEHtPhLgkFWpj2OS8fX4+Gu/7lQZ9ggkvtWKpbzL66mJFOkKGqNyGezXNcNsPBbVvywkieF6ozFDrccOIg7eMhDlVwcPqzQ6Ag58Ep/GZJt6Df5Azi91f9G9EMJ5C19O4erYMVSdJFlD5VDKkm0AG+RQYYc5GKfXphSXqAk6duxXf/WC/fbTsB/Quu+Ymcozq19P0bS3OFMl7CEMl1Bkxe/3OicGA1CYlzNKpi/k0Dgwuwg70oYvnIWLLpvw5DD4ME2WWr9aNIPLnrOsr9WmgEcdpa5WQCJaIUTdvM5JpAVpXU70i+vsp+bzRYWq9TFSi3aOdcnXdz4Ih6KJGvGc50K0xGPSnjWslheVpKr4szPpjBMJGzFx3KX6ns24D8rM6hMhDYyGKBQcAEGDWiJrEZQEk7mPmDJq9LafkF+TE15tjGNSwCIG1O1x0LQVUnbHtj7jNiEoSmJMIRftBDtZy4iUZc6Psn7QMr83fBUbgDs72R6yMEbbj4EA1BWlBrgCVNbamE5HNSW1FrernmQpkHCcOjIBot42vIzOTHjVZUnfA+VAOlq4Hqzu1nYqvjlGk+MrV68O9ehhU/honB5a4k/qyx087Xc5+XLZU1gAtiSZ/DQ7GYBYfNwOMAyMaTblbj/REx6KM+h2rqf467/gGBwaO1jY8vkF5/F7T2OifNXEeDkBsnV044ieBDJQaEVWNsjhBHVojKt3g2fa0YKHuEHW4MTOghLNr1qJumzNB6dSIfQnw1AMy5uAkj7p3Cey4lHLBNz+Wj/Gvp2QmHUFeNcA/bcpu34qrmp36NPLl7IyT71dd8mEHA1vrJZLbgA1It1FuQ3NfzMTvRarPFkfI/DfsEzUTWGGb8fo72K1JFqNduYsjHfTXzacGuXPoSiyWALWxsLEQ0pkIkz8kVS8QANGaY9Gbi/ETQGosh3CHae6Zh5aOWHgLNAeBxzkt6sl3jvx39ZJ0SChY5sjKzG6SL8';
  const _INTEGRITY_HASH = '010077cab04f8a5576e2b2def0d9a76b3789c7c4ce41fd05def6fbb6bc9361e2';
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
