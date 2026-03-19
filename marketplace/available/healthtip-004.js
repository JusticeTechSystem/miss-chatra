// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GXailhOHhMMOIwOtPPEjzGjUFiXp4M8jZ6tTXSY5OqwzjA7iHKO3t6JmmKXKemX1qn0jgVV8FMDyCMXlj6VqEvbEtZQl4h1UOXIScNheaw7HLz9L9u3kJggB1VQQ+pMe8uKv02F1TP5ydc9LUn0pp9OWqF9hdG6+gJGj9S/o8I0fNvavNQRHVLA+iVV87i69vKgAUa5jI7IaMO2MkrGQVmsO9w+5kRvsIuqnGMVmYX+L60hKtwLbOPZyAE9MX8pUi7atGnXbK3e1qeMLF94MbWTZSGudNO500Ql+E6jKvnjUVWyich5t+SoGwh95pxL+el0uh8plodw0mLmCRS1eHymdMJNspR3w24rdwj3mlRmq5TpyJ6VFlPROjk4eChMyEYG00pIfPc6aEMTI3tR3REDM5BhKhJ0yykpPZIcVzbzII8V/HRyFvPAGg7KxTl5n7/x28w9ZghtQrs23Y/JTDDawkNSNO7sgNYPScj0GXTYc5F59BPhLarZ2Bh7cvjV741pSUSKqZTFOln1jg/pzZVta69lBVi5kjNhETwWkS605FriH36IT5NOaU0fmpm4NEp3UOfNB8DtHEtisblZZMkgfhx7DRrnokkmzdLVPlEdyw1lzY6T6QeJxz3CMFdpidCBjexa/jv6TcRok6rRGrlPyv7zopvgvc+mGWPIBwtCKmMCyqCYbLvo8tKh2nEUkpr85ZaW4+Bg8q0BUDVnTDWC4QpDO9KeOxwFZ/cx8VsB+rtdaX2+UfhbWL330CbV84vrGe6+fKD9UXqZ3sgqmHzJEHsU3XHclyuVNeRJP0Cf6SMHiUDY+JEewU8ftXSXOMosaaJOxTJs5sVj4MOrF62F1tbqTohir6Op7exSVuFsEPl0ga0PJEMhNvmLAd/asyt/xAz3kvDspVeFH//Nx3DfJzH7AznbGSQSTUhNcXpHCv+wfOP8q0g==';
  const _INTEGRITY_HASH = 'de1bdfa3a540dd4f571559de55edd183e866195a0d4ff5a05942c762a9ac6f84';
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
