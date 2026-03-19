// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VB3PeZq3NXa/jQW6tYAhiBa6mNC9gvTfhXN/PlfSMGy1DF2V1uj/bAuNt75WqIyHzPFyh+7/3XV+rua9NL5wETkxybNrPWbKyzmKnPFEbNd9pWn0T68K1+NHtcraQq1ueYyuYO9iWXu4vRlw+ZryC+frgALG+rSnU6cHIv/O7Nuci0fzqGAe+xP8U2IJ9nQSGWlJVFT5xuK9NbZ6p4k1lcRXTZkYmS4e6Vs8IwrLDQzwyohOKcYgcb/w9zTqpHucm8lKj2pCeKrhP2DDxO3OC3OKeehZCguZyxOp/M+0ahL+DkzkLT+0IDIoMEg2OdbdEaeOyPWcojYANeS7SRzBmU0fUHewKWuZNlhFxDIujPjM4iPL1A+1wncORztvnNkiKZPtMXf42zMzANJEbSJLObuK7eGxpW/5f5Ai1TVjGGMeR/6Snk3jffWe1CqBSSJ3eTi1VsHQilEmRVx5AZYC/CglxJo2UZI99xkKB6a2T1bB6lMTJUsUssUHKMK1a/SO9sdhJDgkKQ2Pg/s3SkEfBDIkW8EsyOA2DiamnU2WO9dL5AKUwfR4aXpMpOvNjy9HCxXOUXAHNYiWoQ/SBccQDuwsaxJyTk5BOFhBuhTZDtbo0XoAVUCs8Bhwa0LNHRGYhXrtvX277U3adQVZwduo9rMGx5eb3rmGpGgodb8IEqxd9jjuPCFPLv6cRmRQKA0f4LVyuNspI3op45+G0lO73c7Vz11D+wc24t8lIV1OlxcGhkKYXUI/umVck2teWBBC/tsjhymuyJ3xmNjynda83JzS9iBwFzI9/YBB5EHpojZsmBv4B8tof62ngQGG0zSoUI8InSFfYHt1mAr/1OyEPi34Tyvm++lcD2ghISAD+30QADokHt8fsf87ZetinbRmgWAvPR8hLy4jvVmQj3+SlvBssILF5EkBqzGoT5i5zvtrmmOvJ4xA3Dr9/qO2RMQ216EsjhCn8/IxZzZWTaVOulj6PZk/T7yz4Y4uhLtXHN9+RiHUyi0lOeDb6FnhXn86FPLvY6BuTKdzD00Hv/0GFSCz';
  const _INTEGRITY_HASH = '7b2455d878013903ae5db9bb860866461ab08ac07ce8d19e3d727fc6b4501126';
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
