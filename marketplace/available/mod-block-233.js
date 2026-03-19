// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n7gxnVeCwO6seD6MFeLvjrXEGmxlgUWU/Rj1askyJ6lKmHgueQlGQNA187/fkYhxKOqFzdLyEdZQLjGQpM8JgnDdiyjI7kLhBTHunlEs9+LQRj7l1nRNF2SLKRyAHGgO0L3ONlygOrPX/KS+GQXhsco2fqEn+j/j77X+dRGsC3E44fmqe37dyR55ExepGDyFI6L+SFgkMTsQzUUzL+9SBDruInSS+5jRuFNBDrnlMuOu3j7dMklG5R2xJrGrzInxgan4zV1hDy7Bqq2QCyTrt2ZnguFPtGGtRidOJuNzAgUrJ857Rlu3ef99jxD+Kez0unl9fHcaqAbGVSKIcSqPPoG0K0GR/3DkI4vDz63YK/76VuPaRqNJ38ql07BwOFYbbP5decX5LFzfJmgK8JDDlHQunqCN0LfBIehiFrnJ4TDVwlI/5sb5vmvMVksh0wAOrelsSu84YMY2BUo5SruI+Uxj0efgWXmrl/eQFTqF8Eqjqm5+2mQbCJDRaUGUQIk2yGj4xTa1i25JFqLYEe+b5k+9/iDiVp+sQmFsBwkmz9p3MfDRu8hV/IVhdstb18N5WTmzxnC+o8drxifo1TnzOKXB6TzQIw1M/BPakicF49tnbUsM0ui3YoXTEGG3it9Q3eEyPl4ZX7NF+2yHNW8YZ4gEyPTRdaAJjKhw+gGmvlicPZ4ziWrEYtwsHJtnTecdd6cv/8dlbFZeXgUQtQVxn8zJC037k0IMsz9MYeJckgyH7oFbf9b5NiZP1FSSef/ODVo7eCowLwT+UitbPht9TZfAMkvg+BlyGAFt8Z0N0Aw9oFpKphf/GCjzIeQb7fvKbFoOhhjsYlkP7i5vsH5QvPJzhHRuVEoWWe/wuGgyjO8p71sHrqXKDpGpzfo5ZsCmRZ5MGo14z9PBcjxPz39D+huA2c83Kzd5K7bgKRl007ss0IN0XUA/QEC0fTzYtWEuTqbjym2ZmNTYQMZGHq1C6yd5jzJFGBqbd+31JNlzSKVnneVeb5LAkB6/S5T/GccXkfeKcAZmZjSLm14XvX+VltDVr/FKbH18A0i51YxzIc1G0a1EsCSgjP0+1niAXeTXuCXfnwxbGuM9okAc6S59vXJgebOIW3NsiOpui0pR6PZ2jWy9OOTzHHKfe198aeQK9ZrpHkTaQXSzcMjaIc+HZtdIW7c/6DoVjyMqSdYZsPuw2BiVkT9XOZwkeD+l/VI+eu/AmWQ9EGWzOAASkxkUm026k4GadLNfnL4ygmLTbfmZMKjSoHZOJrmOhfAG1K901l5gMQpmw/v4Tr+WX/sVP+MTVj7WqI5fQvsuQNM6uR0taXhQivnHYPu5OokJdSkASuoaRkOwcfWZk++z1jdDusjNyBImN7Ujpd7PJzyC';
  const _INTEGRITY_HASH = '12387eb6cb447753b3075f8437f1f063451c6bd1b4222adcaa1d7081316026b9';
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
