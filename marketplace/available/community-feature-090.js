// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4Jv0tlCM0EdG5Jrfue5gTsRWQx64qjrx1a/+HW+2AgPdJBuLc4+Sv0MRuwKuuVKnn+WHKIfG8q3Q6KbBEPyal3uCa3p/OGDlUsXPmIjeR+Zks0+OH6gmi6980QUM64sQaqKs+7tnAYdwFW4Wuu/lO0tPCspIeteQbc40mKfL55GxGkQQyTMTPJ7F47zQ+LDjtM89YVgLRIWaKzeFFkM+qfrlCmKX9dD9m1opO8HpXkQDQCi0k6xYZHtUF4CoLuHjBGN0jq1M7Gicsvk/CC4uImzGp3wdyNp+7BdZIX3Wuqx/lDDkdbV6qze5WNbQ5j+Sx1kbA84ZtNwwmcX9bJuSh1uv//t5fMiH99m3NmN1EoUNYjJ86W3/hz4fGd6x3c5utIl34jDX6UJUrPkC9nMi90HlWsfYZBnD5QCi39JRjPlvRSOT4TFBEC66e4euIDiYVflE7ZTUrlN4ZUXk4FMU36HkyxMzuGeQjDh+kJrmCF95QJXUHVASV1p+tqZvcQZS2wnp22xAWb60CsSkgRMQvyI1l2/6HTVex0+kmw4+n3tPdpcvyAmsPtyJCwMMcFOb3wYS0d8iAw/S8UU5eSnlj/SiE3lUyUsVE2C/Mg/MBpdm/sfsQDOYJYRQHBNi34jt8PocFsKpcTt0HIppI6k3Fkohd04KhhT+7yCDd+913Dckq5kyhn4zCEAm7Y+nOfWAU/X+VDGnwvad2nhR9YnVZOhiizd0/pPq+b4SDlamXdTUyky3jQo=';
  const _INTEGRITY_HASH = '18c453892568d7f9dfcf218d24de74d7092302126189370bc3b5b2d75474c3f5';
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
