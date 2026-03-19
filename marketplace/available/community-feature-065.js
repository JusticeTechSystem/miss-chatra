// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ESAn3hDvECRWluNr1jH5FUaKHwtwTcobYfqq9ZC/2FKRr2+AzYVpaxxJWBiIr/auVKLUimXM4KUjqNOvgiOoABgEiB4nO+BoVpPTOgaYfAQUUx2/9+Lm8Wh76KkXuH4mtoQeqz21AcBcw7BTIZ4hbxpUrp1nqUxangdfFLBWUd1P4Vq6xozLcrXCsm6+0HnINuTSuoHYErxoAzQXlRJKzejJIgSzHMC17CrOa7zuw1qquyn/sFiSpbueHJmD4aIsE+jykcoQOIa6kGT8UXHtbrnVNpsBdEKfkczSQPaPS+0MeCxZJlD+ox0emCLdDRz/iGi/Z8MDTnq/RAjoXf8g4A3m30P0lsvov3bxE7bKkXD0cqdW0ua/pdjdwIV/Vra0S/WTDfqvWN2gU7jsDlZoBKqORxjdFyRjRbdPvIuuO2Lj13LFn+2uEmgN5xd2oL6FJ2u6ISEVtkRRun42PreRwA2RBFUXLc5cEsWl8y9+P+8XwQXjE8/Q7mOJgJUdmWRI0xA/ubiWsQ7X3nZyxZD1MYw18wVetwD3G8AjubGRt1qhmtC9UBDM95aaPhF9X5kuESXEDATbetEvo8oMmB5C9HAKC6gdZuWnNfm4VqP8ucMCWMKJI2vmOK6zMICh2Q4MvxUR4rvNEoIWIT8z/3qfXcBuNPcd/M1nXXHTYabjdCtwZMNVpNeZDi0yRJELUaG4pa84P/kKySkfOjjljFB+YEXyd/8UQao+997ktdIOOoXjTtpMNIE=';
  const _INTEGRITY_HASH = '4e5d0b87da3e7833b5402e4dbe9b3a2ee8545bd7355e5b31fd645c91e8d07cb7';
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
