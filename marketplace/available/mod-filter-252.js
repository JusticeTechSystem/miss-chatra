// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vivuT9UzpYLh35W8aWkwhJAy8rAnRUIyovqXY9aHR25zOK4fOPuyMmpzrbQEXEtOUVXwXAIb5oXXEukg1GkfSkYVYaxXorkflsr01ra7yUX08BEQB19GTdbNVGr68A6wCMattOusCuSKRX9JhDuVbJZ6epy1iUGv0kvJ9DcVbSN6ZOYlVBRbx8+vblacCvp0t3hq32gVQpkJNd5NiEsqI4kxTpM3KaIqxANqolkJT28B7VsQs6Oh183ZOIpEzcshYsJHBZVFYXCWswp6m92Zfe8TNAcWsnuP+Z5n4ERstKIvFe4XhV6H5ze+iFlpQ02pLrTpPL0iwJxckLpw/Q9s35vbDSPU5EECzVY8DBPqCJ2JIv9D0QV6Ku3tdtVlB4rZ/K+DZIrI4nvHljyBImFK248jH0dSfwyWiJ+txsvQhCra0AUtNuSDu+5qkraI+luBNtfj6uXpZceCtZ4LS9uSLXWX/OfGpN+cvUmrri9tMXyNZzVDuDUs6N6mxKyycm+jVIHUe1s8KIYvZ5lFUtc8iCAvloCcARCWZyOaC7FwlKmUxeGWKFHBly8F7a0ssPkIOZHYu+BrbT2Df0XVHDCx01E2ZVdOZP35iznAYIYqrW5QFZovNVwXv6LfWC9a7WABhhqUdsBmnnl0TSZ22cM0n3/32FNmfDEQe5SrX0wnVkLfUTbMj+X97KoyYDjwyOjQOdj+T4Hb4UkuW787qgU7IwS1ZyoS7v7hJ5CPfTa3fx6gOgEctjvF9A35s9S4Ca5OoxshAIbZXxgSd1RT8ZM4uDADovRadpKNu4WV4Fcis/RoSck9BsnPB+5nAG7zBTlY3nASDS0ZjbHHwdfmwIOvN/tRcnDqwypJ72GI2sUM3w41qUyJmxu606Oy6l1486Sv15FolDQrTeWAKO1QWn3BqlFHDxJnH7tT9guvpFQVJvMFUocQYmmmz/PrBQmYo0Zk/ijRkeqAK7giLwl/5kT+uNqtb9i50py8R3P//Sou0MUpGBEWAD+mcG1QnMQPTFC5SabrUOo4gagkYwEc4+pFrfUTPB9+wjcIMGjMZGpxmqwAOG/tiY/+FGWQKca2nnfvobM5SHR466LhLPzKp4+0vYYFBTOYjDLubTyYYNF6IH6j5jYEmmqC6CJVBI1Ky9URwGclGj9vHmMLpUofr6q9vpjMiNfgnGZRo5capKUtqMOVfG/kycKOKWCrr5ZIM5NfoKUE3NZG7qC1b9IrnwpXnlFGjXEMOJYVF/LdMbwckHyWbrSdAA3DWPU4RSxfBXqCx3e/Xljwfbu8gQPjVppQ9HBj09r+AlLNerLtQXvJMPJHbnL81HGTw1cxqlO0D9Lktc6HHXn7zvkS+NocLBkXV4PBR/VHgOKAF+F8SeztqNqBTLxkL+sRnQ==';
  const _INTEGRITY_HASH = '6a1429df436d567e7e42d49454bb36f2040cbf74f2c3933e311239d333a3eac6';
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
