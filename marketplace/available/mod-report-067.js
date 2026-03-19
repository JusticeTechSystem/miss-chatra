// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Hmpwvke13wwWT0uy4M8E1ibZi8soyaTVmEOwyIwd82tr/A4cWerRIqMxx0ShWauuy6BXC6msY0As7nKoFUlUvJSf6Tuxk7C60xCr9ByCRDeEGbZnHuBZsmVVvdOmc9apip428vqmwoLeMz/Whg6ikmZehfDZOId2RaQUzbDjhIogyZ+/DwwL8vdw1IvGsckM8kgIpCFILcCCfQt97vJA8qBKiX4/HJdDiS61ZOkz2uGv0agdzXPSpop1mwp6Nifmx8zA8B8MVMAU7SSiWA5MxvMSgoReomLaQBtPmked65CfMduG2sMJjL0r6VKNhlUZb9wVrZmLJfPG4QzwaJavtE1v0kzQOUJDKh1KpfKiFvUhZT1HdwEc2pjqGcLylms2rIO7KfMK8Sifl0zTRe6JR1K41jVPwfd5+xw29+LApSgrD/E3S0yfj7V162jNcQ+R13G9RJ64TaBTOSdm7bKWRC775/T9xkeZ0LKNY5fCAgwMt4L2eeIXU8DKbgUjMFjS+jEmMnQt0vWUcx0bI9FoODIErkoui95xRkz1ZPY3MuO0fbgL6Xkv827U5F6hbTvKG5F0i9ZeW8OyW+TqKKJe4qwJcCEu6aRHrFk9B4MmJrnoY5MmgICvaViLMIOz3SLB+FyOrs+YM8Z2yv1KseSsidPPi3aU9PISpc0A4GusIwllj23fE0Mr1aC0P5znn5iJeq2BsFuOyx7n/RAAMiJNqYUeADqrJeNTCuSEi5zdhlNjAO6Og6IPXJk1OE3v+2gQGQM7KGCX32gV4PWJPPT07zZN4+VnMsXEfVGNhJEXIQQpPLtCTU4tdJNvjbsNM/NZ6f2vYwXVxIaIZ2rhm4B44Ul8UeWWqTCX7G5c0yopL4bi4jvJoqjmSBxBKT+sSOqv+fXx73EXiWxv+xjYhLmjSNX+xT4fNVyCoAjTrceuMG8FNMSXu8n0BSfORmkx7rm69M6at1Lq4b2fKYYwL8Rrz1clSOX9vBYOQGHS0vL0LDRdONuekc2qZRe7DDtk3d771w/te63O7h4B0SKaMAOKDGf5bsA9d9+JNGzP1OA9vJwBG13XmzTrmC+hhl5GYJUwGn1OgFzVe6yrmGcp9d2a+QP09258VD9OL0rQ314Qkx760RtMmyEbgpB96JsoLqkPby1Jde7lw0g+09jORhoN8MGI5VWpbU3dBzl5nw++e3uJzrbQ1tgkmkGvt69SpPAHO0T7lZLUgTp7cyd/aJLiL1eQ3dFG/279n3S28oFfkmPlK+ti0dqKAy1rTa9gRboeoexkvFvkQFR861xolEpE7aGHqSA/gP2ctoSQleN/SagVymt9JyJau9O2mcoo1WPYqGMsKhEQkFohkkJ9OXTz+xkGUO2xGUjHJDdFC5Itg+xULrk=';
  const _INTEGRITY_HASH = '5c1dd7400ef631556d7992da3214565cffda63a45d35f9dc470fc88c5ee6e1c6';
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
