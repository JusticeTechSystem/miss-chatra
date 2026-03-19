// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '462WcrdJN7T7eNLXAxO0eHgIcIW0jzunfmjQp/5AEMp/rsyTi5By9jhmP+5e1Hl/G0Ghz3WCgXIMV5rhr35MoGHjMsebgl/rpD8gSFF+lgpjf3SHDNndpKSqPUPWwIe3v+p8d4rserUwuNY8UNkZh9bPWJ/Rhcw8B/AXj2Pp2z8zizn04G9xPvYYrIXNaPYh54O/+kR2BJSf9t6WdDo3fu9LIefeByh8DQOM3e1l+rer2IzKJqllS8T9dAKsksUCWXIPxEVvOFl3XazA9/9bt+pf5l4vKqE2eMlljBLKe8w8MjCEj7Qw0JHsiUmpHaKYIf2BqUWr46zgnUdWbgN2QbuJ/QmvwqJ7CmtMKJTC4zYyn1HHvJrjK7ceepoJGQveMuEQ5fzz2vOktifQtRhaUdv+2N7oCUM83bodOkr71T0z0NLfXmar6LoNgcMgpZnD4r5gXwp8nwk/A41MsTiDaxvmgEF6bQkv15j/1UCWdVr7GpS/BFK23kbqRq+XaRVBIkunNX0YfiJvaJACZoxbeZrkZ6QsfXcfWEyZSQUdyUM187Vex34YYf2Uu7UTc2f1FsGO3NXPBek1+Ys+Dh+oQ5Lpks/ZUfavBp8wuci7bazXyya9jCQ/GE2pw+LxivdTJALjbqz3PCnzWZoiTcbvEHL9yM+KO8/8p4KLlAisnINesFEDpO6bnk7lxUJ1rsDYhFhmHkZEF4JbshUNBf3ig7W/T1FJvswFWU5vHZlNp4wLgiZ85KrfsYL7S5Zn+2GCOfe/lnh6xC7AWs3vpddRjUdWyvJmBM4t8iYudJN4OhP0J2fgod8X5zDbay3YOYEsVg6Kmp4dUXddAxWullNuZjaJaY17OrioEEGF1zig1P1wW+AWeb/93bhMn4uJyVYlkIS9gEUimlWMqgX8rc5+l6KTeSCALh6zJNQ2wdn9EeWunhHQfD1LdlwbLoxZybql2R8261GB7tK8LyG/PjIWhM05Sp7+H8HYDGDpZVuau4vq7J5KvN33utUb1MobwFakOeAzkzxbErGft3HkPkeJWeIcjYD32TdTBO0CmuBeqs/bOaCPzaCsEOrZ+9CgYBonZPiy/gC7oEee/0B+kV5ED/DLIaKKAndgRVoAWFiXcrJBC4xDVyKxdJYs4qqYQefr4OPtQNQuKtIK26gyifqtNoN1SB7BOd4gRjGVENxgMGGmTTboAKnPhSaeerRp6sBiYoSjTz5xwfCafF1C';
  const _INTEGRITY_HASH = '49390562166dd661625fd0b856b9605fe09c37d373b003ab5fb09ecaf60ecc72';
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
