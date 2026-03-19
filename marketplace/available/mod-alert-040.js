// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ynN0l4D10L5hP22ynnCcJbMSSFoEFjpn6BrRJxSXMr97q+Q7tdEWoRuPkp/Sja9d0SR/DI3qm2fwLYfR+vZWwO5rN9hAy4dVW+e9goEJ2zHooW7JLOifeldxymLUX3hcf/H5+G4Mew/7BM7iL9j/9iVd7hZwwG393RD3qzv4oYpd6ESC0isDR17NKbeEQNGvFr80EEIg4v3Hyq1DLl3wYtU6PeWZERkMeHoF/NZtghyNZpAmWtSRONridr1GfULVm5P9pOZQTVNlZsA6tfQZ4g04VX36FChPkNJSPoEWSQ4uZJPQYiWkuixfvAxOL4qiqn5Cp+fx72bamXExq6M3lRYYFVpZ7Sf9vf5vrLQ/XzzNZE9vYJG8NGPoX5SzJiQbp59AjgQ1HNaXyHYik+COqMkK4dEp6yzjGQjOBF0wxZjsIcIcSyXMFLR7m5xWSh8X48nX/2dbdJkwQLRs1BuoIZQQk6z19+BYQKaeG/wAxMX7Jw1HAJ6yuKZvve/Ok55KaL7psYV0dUkKKCaD6ODpKiD0ED3Hdvr1+Djcn6VMEmpEbr+fkv+grKspHTJZjNopMjIgbbAnDFeeIDh5czVhsJxWc/oNOZ4uVPQdS8GzXT6qcYFyhhw+xwLCFFDr8JQDqybqMYb+qPQ+FQT9ru8Jjad28bQgMF0jSJ63HzGET2i7WAkdiNh69K9X2ZA8c4ftf36Vr2Z/vSbUemPXkzUztyTwT/AZH4uKrVhxjH8WVcOE5yg/RFbEhvaOdc1YQjzFHItB0V6CM3G3GwziTG8JmzrnoxtvVvNjRt6u48ksCpK7r0L56KAzNgGRWjvIf55AAX+CDudxS76xQL4VsKY43Xcq4BbIc9CKNS8TS7aiMghCLdIvNoezCH2tZL6p1Vm2vwCOPXCOl3BEDr/TIiGcG/y8dc+UoB0IgM4x0wXl5mUNGYMvMaoaa2S1NwCsnaJXOhk5NiP/ySgGq90UAxZ9jimp1gA4fE/w0ywWUREreJg/+PKmlK4htsUR2wu6eGcHR1XhyCC4l0ifDER5MUo21lgau3T6c4rKDN6FR0L+MftPxLdNoSBMhXR0fPJ2Cs++v0apvQVBFhZZqr0oiGsUuzAdLF4thcyIYg/XkcEiZeo+5IC0QTBhDhI1J9bHUJvF0YCSx2iJWIlUZ2FGVTbvfHJpfIA6aMcXuUQyR37Suc9US9oKLClX/tdA25ztBX9PcxbmP8xu41/CrxsWwS+hlDHVlZqbaQ+IuQJmoqtj0ymN5aigaS/cG9O4KoVqpCgBWOYA1gYWWbUShz+a1MpFDQRtHu+JxkAkZqLYAGCrrsVowMBP2etJ9wRup+sJ2D0zg7fzkE6gQQrq01es4NLgHl5QEtIWJ0QVAw==';
  const _INTEGRITY_HASH = 'f8db8d1a86b09a146c2f6dd332b5e9af6a3cb12e5fa81886f78c5d59e48310bd';
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
