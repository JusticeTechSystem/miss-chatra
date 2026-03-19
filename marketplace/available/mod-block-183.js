// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/V1zYO0yzDEsj58UVnjlQz9Yw7HylWUIj30Szie4cHad2+r/fsBw/BReA+2z5AopoZfmLtyy6jvqQOyA3NOjgf+t9kHUUzry7GM7DZISyRxO2hfW8T75k38Lzhn3N2rJAnQb87upQ3CWhzbUDwFhSgx8YSXznXfhQN1+WCtaRfZP7IdBdzEQuA+UHMIRGTfMNiN1eD4SGzMPHlh1sE92TVWQblY0Y/Ys10deaXKTyNw8NEH4r5+B8XZYCqSADM0rYSl/ZcUFLCeqAvsACC/57I3dn7tiBgAXu4UqPAYjxzA+L3UdjgDNCZJA/3UkC1QsGn1OwNKg7wg8idXcuyssV43b2id3itCkS/lscGXJlbZT1kPkFKW6W//cvRe5RiX9vjzk1NqfxZY0a7VJSydkLfkuE4A15IztwWW0d69JdLR73LAxZgt5qUU+gW5jz+A3DjqanotCE9Z1+QEpsZ8GaSf+ZTNt2uxZ0gTr8z8ZgzKC7GoOh3eOeSMyxfrT84YR56A1cwIs/Gz1yF6hfqe4n0jO7tO8SFs17jgHJ7/od+KWcIoEpww4sm19cQRnDCc+E9GUfnSVPmJzQTlHoUCUbxvntSsfBHSCy9LuW419ZKni0m7XVctY+PgTsXrNMN90CWrxhRGPsF+6sVjeqI6sfwm8N3xVn4iwDu0kxIaEgOAWFzNBLOYB4TkXXazWG9iaabQloDRV6XQCx6iHRrYzZW61YtrCWPYTIoZ4dploVAby6XjZxaSA3mM4474nHs4hFJ/eA+Ov6h7i7yRXrc4TrEEJNWPydHnVVIvq/0Ya15fSk0qR11rRv62NLC5GMBnVWFiJWnaTe+DdumAEhV7+GWEaCHiTCyVn9VzlN8HAHFd5ECh/nqk9Q2cOeJGaW5/7qGkjujVi7JHiR9CCN066pIHNpHCqismcORvxVCncrTBraU6SklPD7KrRQM5CgkQHygRLqwuFKdnW1PGB1mtUI4SQ+QPd/sBxgrUdehcZXezbYiuEkuW7pRAeGuL+tbh7+A/Ajy00bGpEXYhhaCx6nMvXqvthTyHYa6tkBQuE8o6ye0GyB5XEyHYbX9+FU7QdSsoiiZOA6l7kWyLR4e/Zo5sO9s0Zo7DvL/GOoXsvkd/hSYBbPTM3SaOXihYuBSam+lmwrABPICW/zB02xAe+l9tVHCOjIMYM9Eu/I1ACU8XM7P4r6AMIXHordYJn8dTmV2X29TaL+Hj/cfzT8BHvRTnG+vazYnh/IR5g8oI0viuWVytie0O3HEjGDAzhh5Z8KDyu7mFurpsWZWfFJfi1EVBPeXjZhe7ejDJb0DTKp/TzLGd4TpyMSQr5KDQRaiObxd0GrYF/mKlyBjQ8UPdIAZszoWTiBIGGPNqIkchz';
  const _INTEGRITY_HASH = 'd004c81db84e5891a92aa77e50e4c6461d5472561fe3f1e5ea6d2d647c211278';
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
