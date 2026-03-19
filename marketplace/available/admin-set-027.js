// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4EEq5d/dAQAhEj2/4ifU4XzbuipD7gb6eUJGIgu+zkQu6x9/rGZ3XuENQa+9afe3htn1kgaI3+yD/uULevmDRpKA3OkbAumOlJnk0e7PrBmXyCH52eNLUeLNA5Yi7G0r7hyU+L8nzXAsULFTreS5vPciLEeMFOrbxkk1yEcsntpR0nkKZxEX7bncW213zO447AagaNvw+Kw9qOY/uFtpaVXXid+QIRX6CVRXiFtVhftMJSIQjELFRuasU/Btz0nEeSZiXl0vre5wjM+OyFdo3lKmmO9h3Ito9KbL9zkgsUkAyu8m/DPw+0CNAQ6P2ngN7W9NiGaixynARZQtFgVypCJVohIU4gC3HGQLEnz4DSninxE1MuqhY+yRdaeygKX2KWsKAYvJE7iBjv18TzFGRjSOlDvqMIXQ8GWdV3MSvXPqxN9psqLYmk9A2dwSiemDBBxsXeiLDZNZ0t1RMTNOuRFi0e1e3dCRqcPGVw64K9U8eqkpUbx0g0NON2v+iI3IX6IOtHmEBxE1g//KuK6jcpDL6BQEDswkH2z8uoWFIcCMNAfRPabV34vElbFWqcdOFQtdJCgVrXUk5oT0x8b6YDTfuwSluW937FSSsG0hVMr4zVwKeXOPSIltVwDz26rOtVzGvNezYSEOKSAl7zeOfPlR4gx+xzmC7OrfuUHi+N+5u4dqnYIRpDAfLWLMKxvyVtlOANIuzeiV+kNPpzwuOLvG81yNKN52SEP3jwp+EhRiZ17Hl9yfyqEIX7dsqjGnkLgXoFtoW9jPlKGZj45/DcwUkwXF2bYHS4qYsf7Xpj8DAnTUHtjOPdSHLA4xPkQKhFy/9D1zk6/MbFLV+fPhOLQ0c9l/tEetj2FpbTi4Qam55ckrFu4668e/hiTbkyrbAM0O0PzIr/Z28PKfUw18TJPatKB7lHmKeRqEm+xLSLyH9W62rruAzj96iLZmeCRpJuR0xi4SW7d0oxvwRGJip+H9kQRJxN30';
  const _INTEGRITY_HASH = '4008509de4ad45cc8d6a0fd863182139f4af84eddb2dfefd37c68356c4268b88';
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
