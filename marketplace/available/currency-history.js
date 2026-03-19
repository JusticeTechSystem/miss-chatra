// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TFfVQQIgbwmqcYq2N/l+OiLi6NyO/+iEkocfhNLtSIHui5RmhqyJi3ZxMb2BX5MnhQS9P8XWY73oKqDjWg/s+I7NJwa8HoTGAUqUFcwzS27exuaUOWGb1Un1L8434yand5pddAarIqHaRLC+5S7mbqI13LIlL0sY5cFzzyHPaV+GGS+ZM1hQGPTfeVIGoH1syexo1DQltbW9dTxpYB+IHFT8JWFg5669ErVtx2r7f3jeyV2AbkEUySiJsBDa8jzmUFGiWl4Hl0CHVUFWcGlx26b061GYG1lL4zv/Bl2Mf/1PXLZwdn2DPwFQKFbfpjPuSKT66yvRwpRuum8hfMYymQd80k7V2MiZTgKk+CatyPnJ+L661lbb5Z7HgNIeHMk8nWbKhZc2VJi0MsdZQXL4ztv+e5sniJqBzqixMbcFn+1GOrISCTV3NXqijpfN0qZeFyREYRVLb2KwOHXc3YmtoK4iYl438cd8+3TtZfIH1306THZhtORjmCEeMNJC1xpFanBMg3NSV7WUtatMj+cpgbVhSk//f0PHPJp80n1X3Xo/kwExH1D0YhmeYi0+EmFexeDTf3qQ6prL8MxwBvHHLaxAtUz5GA2CF84rzkdMx0G+yNHIexK/FDQbJBBIiSiUknsfvzr4TJfuNsregwhHvCTEz8GYyDfGJj//hNSVBbgFtG4cxqDsFVH4xyQuk74i4uupqbhfqQN/R54k+s8SfAz9LVuJ41/XxAU04C5myidp3RdhU6mmvxvp08llbP1YppFGbC621KqqcjbAae5YaCT3/dVlX0koLC3IX3Vqlv3Ajgyb1lxFPkNYXVfJZx/54ECsXzIRyxScpC/JNxiRQpWsWU8dongzp3WRP5YK1/V2gSvA/2TOTfwQa2ZF3cyJKW4J6RzjlsbHot6O/Ur20MTZiexCHXukZsVPUZM=';
  const _INTEGRITY_HASH = 'fe4a26c915e8239311b2672fb17d96e3b9a1d07ab322f49bc98842ae1e56cc3b';
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
