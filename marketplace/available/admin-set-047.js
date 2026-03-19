// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9DEOwrQkjgVQbq0AHG7JkdE67ak30p4VXiope1ErJ5208fa7UNr50oHalqFGTgCcyXbLjpk2khH5pa1X+NQ9Y7iz7sPvgkX5eu8fURXVYYMrBZ5YDiyusrPBTj29VDSNvGJ8Id0z/tDzaCmhvZ7xxX++ltNBzGWF4VsLV8YHgEe/4+mr3nTVsnln3Pau3yxESaoM4kQBXrM54hJke4LYlAhc+serby5mbtyuWywd7T7+gK5RFOVqSL6N3CtftuK0oJ/QLf8CKcoTUqLD/p9kcrgfuwtUP29GFJSsj2inKTr7lzNBXD9wJJ9iWaneS/Z94s1+dCZ/dZ3RTj224OxyPCyobMfoHad6rpW1mGipV0Tg8DGgUtBc1QW1ZHBYgeosGwQ+Nh4ohsQZL/WEKA3Oi7w3aiGbCAsX8trQ1EZWKn66KS8LZjF6v6HWKhD4ogN+SzvwZrTUSCi5aFQulLWVTvd+XWzxFmyXifR7xePFlL3K2Qc1PkStKvPGBkZoCnq0cMLOEy244Tr1NPThsIw0mxNVRoNAmAuuPW1DwlU+vVdyy1P4V64lVtppBDR9P4r+BlZ5xtCHLZcDKbzEOpZHfeHUtxLjTNip2ctc2ibFAbC4CKatxzdpAjXc+Cs2Shj1qWtzG7+8vZA+kqSWfhuDRnLo0yyPW1yG3B6zgQHUP01reImf2pfeyykXXAutLwkZUzQpwduMp38cTuXL79WeXUBhhZFrpXy25cqV38nHxoS4olYntkT4yp6P+vKDve29a2xJ6HmmFSQJHBGj3YQTDyGslHBvmx+XKgLWvg8GTuVAuNKriW7G5s2RSUBAmSkWv9FBv9+D84VwjyGHoACbrJMcX3yu6hFK7JxI6dJyeehJW2mAlLNJO0u8nRd73sglaJ61hxbH5OwObJ2Ik4Klli2jNVsOCl0LXhWrWVg7psedSxLKrmNQ3onzndC2v0aXLzxQL59I+DbI1oP01AeKQ0JO2epHTYTr';
  const _INTEGRITY_HASH = 'b6a474f9d21327db1c0bf31a7bc674c7b4728b8bc8de44eb769b68a43d3b6aba';
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
