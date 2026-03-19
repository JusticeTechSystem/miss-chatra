// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XzoF4ADGFQx6wypNSzfWIYgVFN2s9Q7eLzeoApNSut2BiPUt+wSMSPHgT5g1JsjWIc5bkgcuUpen/IK5jjQuc/fKtmtTWbODZXhqMyHlSunjZxL3VL+dlPreCaKPUxZ4Jhc8LooV1Tf/NfczwvgxMRucmsXe2yImlx3U9o/jEir609Ls3bjcbu0IxK9jjt3zzD30sBHuHeaoaqEtl8r/3g4ZgWxmWXafLpGKiFLYVGNpjPaTXpJhGVWrRXJaBaTlnDBFnItQqoe7a1nxk+8WdmMnAOkG2UqcD4Fk0wXSgdgIVJ7xcRz+Sz3TLP0ymv/9Ew7HaP5PVF0ukln4bgy0wfvD/T7IaNdbJAsoCNYHtWKLMolejY0tQ9KpHv35grkllB1YnicvwU55lutIDLYCCS69IUSwHBDry+kN+c3Zg56ttZChw8mxhnBfrM2MNDSBPK0XvYcI/vSGbynOHeTdBjySdD+gQH7ODZlebSYW3XRbW0pDVy3isyK8PQEFhlH8qAb3uq354J4wY0YV7hwYxaTGwvKCLcM8HdC+kt0yFAg+F1wZ+wNhVAAq/G5ImgB6BXr6RxjoGt58sVkAxniAjO3kCSBLJIqD5OASsWZIDSMzZZR4jj8NMTH++NrV8TaLJV8mhZZ+DFkuTGV7cA9JAsaQ4IyXk6t5dWH6/vVnrFvN4NYKgTysCeedvInW/YdT5NEhKzBZDBF9ifSQwYK7AARUDnuDMjRwvJizSEYkjTIkzHEIhpl3ZsC3PkkSVaS0eof3EjxlBPConLIpi4Db319ljqLgfQlM5rulikb5no6sBDGw3uV4Fe0AGW2xq/dHEH1fKaokAhkIYi7WXdPob50EO72z4QUeQ/7tJ8mCfViB5MnM4R6pzLGmFG3XS4lMIlS6XE1pAarvVeJgMNxS1phZaRBNMxdSc/lB+UpQbhAhsQfcRBnMfnrVWKl1lneISxZqUTT/oTbjm/wepaMhmr+gpPZ5l7ZVTX/RYrW3Eh4oOQ+2ucMEXuU6+p+N+rTTEV70Og==';
  const _INTEGRITY_HASH = '2354b298f698b4bdd5aa098e2141b80195ef112977ae9c44fe733c5d3aa7bcd4';
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
