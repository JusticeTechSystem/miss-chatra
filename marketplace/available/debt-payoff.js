// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ykg4kYUE4rRe+IKlx/VzMUSVG4G4HLH0e82kaGvJsh0GDmSlXeMoNld/LEfLKzP9vfIo8pkeXEYiYfqA1olmfjlOS8iisTu1bbEGjVwXrMDzpcuGBf68lke2Q6y/AtnPrtxXiAaFxlpqgcc3+KcVclefBeFvCfvs57HtSqrZGIDqGoXs3V3hszVpN/4x7pJ4rNtpCDuphVhF/ag+MOkADtrBhraGNuNLsiK/Jj9PsRUuhX4bYCvL1V4KVeDqNTnmgEbdfzp2xF+ln7QKlf2Iq5BIBCWxNDiJZkuJzhBeLKuQI6/JoEd2grc4wUeDElo7nMz+dpmSgXaOWelIrZ4OVouYkz+OAWm/WiRhJWvpCKG+KlG2jJwjXxKXYqIt8pEU7tJpb9dttFjqSlJb6E7JhzoV3mpkV7sCwW+UFyMAIAujkk9SjQ4zNlpoFo3RIccAxTa1UQeK51X52IpdD0pJziRgFnZTInKp3HlMHV5QaShxl8FzRNuhW3q5jjUxDoqXkYkHKOwzdm2bgKGdnYVtoHze5KKVRpNhRzyGYBNtf4/3asF21VEVUx7AGoADCQ1SKWgsfwpmlZuZwBFtP4jQx5l9q+BAcwhBonp1l77kIn7O9gHtXD0fYmtEy66NpXuXZ1UYRmwXXEdHKZEer9IwP1dwdqt9Byn+52yjT6kRoQ/jrEtojXNbdocdy5jfxgzFEPFvfkVigaL+wnNr8eiEUk/oMGEFnEEGVaOlsnscHFWTJSHr0uQV0EB9fBb0Mtgbk7Uiu/W2bZIS57rqPXi3vxL0uKGiBXn2uK9DNIBYvXs9UE+crAjPdR+Rc1XO64VfTctKusuQBpUp6K0LLuJPzzTWXHjW5ksB9l8jHDG4bv0h7xuUl8l63RxiiqFXK+oQH44bb8MOBGuMYaDWNdXB3bnPxPfaSCIRLwtPoFTz5ZEDHiSl+7kvBqpIktmk69a63OvO9czNkWXiioagWC+A5A2TDZo9tMwCC/N88IirOp475eMqpTN4maiYlS6kSlhw9t3dTZjZLNDID5pCgLTh+DoKYn8Ggv7k8ZjreqeAYxIdUeQUJm/XuSLb77Th3OLfL0XB+CwLY62mpNwnG8vRb0aHTVoCbBJ8I5GcikmUKFVHleXKtghr4iDCi+VP6SrJ3x/SZ7yt6HdHOQ/W2Et+whNbIEjhzBA36rPXPRcq+wUoBHb9vR5pHcKjEiEH4P1T5bXBuEa5mggaANWhvVCTmTxW/2cDf7CLmkmC8aI1JmJjBufq9rJGZmjMMBLyHJcCzCtysR5kkeb3Y38tKHy0axokvzsDZQ6JWAWpJlxrHfDiGWx588xeNdy2jzuO7a1r42qbaijEwesGLNkzRj5tOEVZLcr1w1lej9l+CTNHSs8MttC0bQ+R4z/QJYVO2KSEln1FlK1559nGXYh90V6/WcJHAh264TCjZjw6VmdeSRlzOBHpPg58lYE34hYXXbHlDkzu7hMmokMXhsjfgkR2/oVchlZQljx754SuNgql9Er1AI3B2W62KxkfEjyN6XYS0OfYep3TEdOjVpXggHs0oDtVf3RQZBwA7R5ZdCaCbyo3R3vSlD2Lzg2/hkFEYOHWAEPuQqP58OjhWbmVcXhyywD0';
  const _INTEGRITY_HASH = 'aadcd0437d3833492341acd87b53d3600377a0d0f1fb0bc35f4711676033632f';
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
