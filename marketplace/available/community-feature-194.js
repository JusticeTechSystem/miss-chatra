// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CtUB/H8akHafN8PgvKLALihEtGEHnkmcsRfzOSOH1qlcGFI8kZ2Zgwa9Zok1zr53vYPAkf2KxaP1cKoFIFvTZ471z9DYXxy9127F+Pq5JSiIU0igNg04j7o8FzzJEfzK8teK4ZtreLQBzB2KnS0HSin9u/q2lHPHNgVGS1FBA9YuiroJslmtYZwIFe4Oub5L9w8ylNZ8w+7sldoZnro9/3Qu2bPDKzILDmmUJmlAHVdT8e2a/iw/eZxodXIM48lXZbTcNdrKaviqoAEuNJOiLkJAhekw7KmC/xUvW0rX2oMQ2rTeA/+5ZMsJgJOTu00KKMcrjfrJwUyF/NMwF2uS0TIzRki1tT6ctgM0sUp2EDY6UcS4tXpUSiVorqyp/ZTNO1tS6Fdn9p2MR4ckCOdtspaDJY4wFFVR48VRlf2z9DISQfibDvQig/EKytt3OmOA9uZENggWq4pVenQwjhIKNz7VFew7GHPrCtAUoZpn6iUWEo5r1rspVhjM2jDdpS5LPJwbk9NS6Gsyv/0WHQnYNxQnHdBm5sZ55bUT4WqtIcIyuPgExybmsZGUo2+6fUFi4E8v2y3Xaf1i6y4oQIsVEiO+FbNWVpwXjAVo1xD1DKR9NRYIAmVU20iFDcfLIySNvqwlY0rDeD1tP5vFzpm6fFZNNeewTDhXYOu/lbgM4qrfT5Dor36roPswidQcWC68m5hOeF99fEXwoYdB/gILEyfqgZKL1q8FsIJUGlXozY1UDExpWQE=';
  const _INTEGRITY_HASH = 'cc6134c13e43891d7aad185175cb76d54431dccdba1674612542bbf0c08fb1e7';
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
