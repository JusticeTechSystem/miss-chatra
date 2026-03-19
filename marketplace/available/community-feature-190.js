// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0WqdzJDyUmZUFIfH3BAL44ZHI/8NgMByqowxC7n2fFmY2W5xb67VvfKKhfDJxJbrhh5g/jTM4MXm8D4Dh9lSiI8De7JTla6hLu/jdsUDAEvb1sTGJY/lIrWu1+Nf2X+2DLc+ZRmyIev4vgA5suXQsDAjSa725lMKxjhM6a97iFSZMjEuc6OWtf6kYKSNQqPtvD91an0jwdXSagov8xFuHqcht5n7uT/mmZfDtpDY++8DX8xlrLT0I5dWLdhFh5NgE5qOBy5OCXU4JFv0LP7HAzuxj5yr6sacMSNhzurWm6yrvSEuYbvm4YAl12Hf2BgQ5/ciwesj/ILZF9jC5NtXYo72DlmU+V0QVj0+E6pLGo9yyErJcsGR7tgt2ncHBwgID805J7RxXc/u2O80IY7KwZMpOzJ/ouBdoU9JeA+MGt5YkQQptwycMJ3UB+Z5Cw+0YHnRYOQlsChsaBkueu5jRO4Yy90Mdh6U0nkHj0JwQmtbEboOURk6z/emMAMMgzRPW0gVT+wMQUMateSpdgRrZGlLLBcY5BKsYGTxVpJjl6YphJqesg50JYQX3arONSzRROxtsxQKsg7vyE5ZdZyogFzI9loVHylwjOZiB9nMEkUiC352+Q3dM4ol7qB5Z802N9CIQItUJ3s9AhUWmWbLKKuZwGHOBXnx6vsvlVa3PNelonavw+Q2Gw9iWqyvJuk77DhDsB6JIppWsw9fJGOf7LDtJz49h0pZWuE9z5s1ZSpqX419vlnOGLzk';
  const _INTEGRITY_HASH = '883f9e18b571de3163463b16769beb9a184ced63404f17c8321ffb0f5f6a54a9';
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
