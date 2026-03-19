// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Mkz7rwgninU5962QAWkczMMLS9HSiYshgqyOL5I8M48vsbXFSq/rKgdYEjIho0DGUxIraFVxVqrPKundtI7bqlnES1mYnznrT3aHhaQRwiBCS46jVneMdMnSeZ4JUllexlytetJusjZRkY/DIUf4z+24DgZyAbLMXIH/fRJLhahhe/76x8hS/pEtsX9EPLYSudk9aAzD9YWAvaB9DqDkwgKm7w1LhyV0WqMdqGjMaCVQSDetu5aNLqskTQy3ifnCqTx4EXpUI4mxJa3hLcEc75s+riB75h1NzxiLe8NOzQuDBEnMtDKl/d1FlYRRA6zq/DRfiqOhq/1ojaArKGYbcOnUJVMUdJ0ver4XaBj7fJihHlrMneFDH6Ivc9ZJWNQjX5AoxgtdwnnHxQI0Z6HSgKP4GJ6eAOeN1gUJULsGNFRUBiPU0l48HwGOIxFt8JPZN441vNBm/z1jCPph8SiiCALlhquF+WMT3fTmy4upZKcrCkOK38bIA1/cSlkNY42obcqwnwcdrkSijKXqtkfuR3+OgrsCsB9HwDyyXg1YL7TRuIaBaEdwc6yWipOTkAuvTtsrfLFicAjrZ/6vVXJR2TPrcCsoOSHeyJlMaIuFwf6N3wlaOLg4oRnCvScu5jmxSIEvfMTCC/NriMkt89z44VACU936X2c2ORuv0nQeNV49YggHfElTfSLYkXO16jDqw4JPJjpgATmJzR1Wx1jz7Xdr8aubaqRL6VwywUBDXVGtZgUcO0hgmsFgnc4XATT2If9mP7mUvm0cHm6gE4s2ZQ6XLmpND/Z0QK44qS65CkDsnuoWwC9j41nz2x+1mUmGs4Hpl0g9EyqGg7YDQawtPiWyiO8GvIgjYPrxEEajsNZUBkkpMIAtrGyo1SvTXZrlsUxzfQH4jo4ToysxtJi9yT785QTTS6VlocT24vQFqRKrVDPFEdTrotDfoqPFjarPNvXOVpJGjPUVwZqFljrJ8+L4FlPejixSRSI1FqqyB9+LWKDJI7mJPzaPA50Ew/OCEd7l0zzK3OhDE8jQ3eCmlk77M7dPk6bRq8x2fx4r';
  const _INTEGRITY_HASH = '446330b0299e97982f227560ff7b903d25fc4e9814c25446ad1dc38dbceaf649';
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
