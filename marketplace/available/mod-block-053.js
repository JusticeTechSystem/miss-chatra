// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oOzWY+ZiikMoNjcohl8g/w3pBatHlPed09unzkDs9nQ73Br14aR+ZPaJYyQqjY/iD39Tg0q5tM26lFVUBkz4qHEjc6XUfst52Y/LkZJCJdylaARKuGmee4HDyfg71cf0ocI4N8tyvTShRGJJXV+yzHYxj30aYB5315x+nKfo3G0zjhCLZZF+OeYNCjV3EZ9rWZPX1kDy/qaDbqVF/9f+BsfU93rap4mSdaEF2huUhm+MBuTCn/lFA+Av+BDFWJBGTnnUjK1PYtN5glqC1Lddn/Qv31lvlN6ofSsHeQB770xkd/I7lnJ8q7XPk+oEkh/JVJDYDXq1tTCnDXMK+Y03kPiJ5YGgfw9KLl5+80TMZ17g8b0NpxV7/0G+7OdhnNTYJhNh7ozHKeA4MUyMyyXrQd7MIEd44E4293iqPGmHZjNvI5pPumS4x0/YskD/LsNxDyVOmHlhP6gO061RQQSFzCmkISfe3fHA5JPsvjVBH15vMxnUe0Rp9tjmkU11m3pCCppLGI0UE1GvJWNUAFbHK033mlQcPDNo8tWGkyHWgMarSTOHvs8H6jzDCu+iIS6UTGKim4CAfiC2zslrNxk6dl6H8BQolYCM/XRpRCCa4DMuz6K4BgrxRqwcpx3TMKZTo9OHbrwIGK+4Dl/AYjrfvnH0RXeU/Rhj1ZksjAPrZHt9i1G6OXuUg72K6Dc/I8waDq8qmd29aJLBDqbsPJFRjgQzRkIyrIDRI7pm4aK+IYmAPPeQhAchxCmge+KaTnLNxN66BeG/66oJqFVn2DwYhCuVjZL70aroBz2NLYOB8VUE44ewkCElbPuC8e4SFClNxkyTaR5WfynXt+HfTKrmITOxmdOyeLCUUDsdnigMvv8ulr5Vh8eNCivwgvcvsw5RxcCfk76Y9PCjnVR+IPHrGzBUn0tYdelOiMwwNpLOZKXMSd0rGUFwIm1/rkug6V9G0q83pVgldprMOfa5BBwEU+bp6saQTh8LxdboAgZ1WFJnpzHRr7qf6GGvlDG94jLLDJuzDr6M8ao/f+sr2K0ykjLBUdFsurpYrov3Q4f2UlchGD+IJswkXEigVdf4yBWlRNzO8Yr+n9ummMeYH5+ZFsUOV2ics77mhKpX8SjgRqdpX4kEYSK3UPvrrZ+pebKMT2xCT0njfBSZ+bX/V1VkSe8BQ+NRyIKoI2jjtytlv+ECGFqVtEHu1+iyVlYuUaRE92ek7ycEFaaYXOPB2UjDeFH5f3N83JldGIEmvfmKuGHMQ89IQIy3Y1NwKdXEH6LmVr7HOkicOl5VBX5ZSyxLFw+qlfYwW6FHIbPHWWcZDU2skM9J8h4s2hY+652GvrP02UIKIVhdOqgmgvRr/100heKVQhOYGunihg==';
  const _INTEGRITY_HASH = 'b8a4fb9fc0d70e1362a759e0ba1d7f230d510e1a578fe13955fc6b9de3705761';
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
