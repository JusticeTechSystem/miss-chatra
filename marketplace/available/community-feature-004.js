// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vJQCykWbNHqWKOCOiogkcFh/Otih+fyX1smPsomcoFMp55oicKCvRL5A8wZpLs9DTnzOTe3UKPLtoSAY6iMMB7k4BLIq0RIQ/cxlJ+jJ6vMxw23ibD3QS94kmB2GdJ/fE8ybDc08p1LEhy7uiIVoQFCugmq3ADLMI8K121nAnTZD+qw0x5r6gUTut55OkmlUBX74h0YkxQLo+vRUGAcDAVz79BbPcRiFM7L1v0ptftxxgVEFf4nlvmtMKPuctaBXtYRsnFzvtmWMm3vJwGJl9lMH/10UdzgxFUciJkWyszLKywRKgLrPYdCdIkFQzHrXClL0RIDRjwbAPrvvyJkWb1yiI+vGNDNU3+RJ9uq6ithf1Mc3iMkLZp2EWtt2NorquEYUZ5AzTDEBsMmVN5bRTONwVhnrXQFbKfEHnZKWt5wbaMLHHxHAOf1JC87JP6o5KOuYqkOhJEJC64kMWY0Qd+I8sUOxdeoryKV9+G8Lb/qGvj5ysinvBv6neCPiYT0Lbn0raxFI3Nd/aOySxjI4FGMlpI+2c3Hx9N6dxvjkT+M/uuSj9FisGwaw3yHjDUpcnvIsyI/b9+okIIq7m4tvf0dxq09BynTITZlOyULfkBnOjC5F3qJLX+Irvd4GUxWe/XiL9ZPs935i0t9+mhGeadqLFUURo48ZwAs5JmW1qq3faGtfs1GZaoRksu5Tb5iw2AAdYYuHdHzD0Kp9gny9yNQ9yxgKGto977g8JLh2';
  const _INTEGRITY_HASH = '538e34ea756d664febbdca104e0188dbb38ff1c83f9e5da695aa033ee445738b';
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
