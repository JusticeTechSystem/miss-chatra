// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'E/d0kkg49OUEg21Bg+SXBVycOi7TPKZWSMBUovLAqVfsbW1UgjmjraHsLmI6VXzrXgCHo5MufvQ1queKbrJDxUf838DCXSJ3BU/Zrjq0N69kgKwQHg5iUdnL+/vPPxsS/aBjjqdIR6K/aYGr3+O5iz1qyrXu6GrXs3VPoHb0bmQMffnyZZn0pHeX2GrmyJfjxW3gCS8EtZG4RIqU607PscCPGLS7FtXRl7EGAWsk6P8w9Dnfjq+q7dV5KpjSFCKKObPh42nVYqXWJg/XcNvE36D7feGW7zmCzX7HyAZlIZsitTBbMs9gmbPLYkntr+Sn21vUDZXhO2U6ZI0AoFwhNn/4TAuuMt/cr5UjpuEFNut/2WIzCBV+JkaGVJo80k5L5pMhuCLkp52A+XZ16IQbgfKutCO76ebcJCfE3PtHKo1AsYjwCjdq/XToSq2e5eY5BQywXyot/iAEzb20GhEMHJovNo6VAl6/OBQPgALTuREINV9JVVlDPyzW7vIvKgpOCxT2LsGkUCrnMIsF712wXeQO78vub+4hit6JwlVsuX0ezFnAFZIS6C+Xt4v819iOaew3XbcwJxebvRq4Bi0kWrZDprN7dZMXYD/ewYzIrNXYjdRhb8SWSxQ07tXNFIjxK4sFZrdwj44k1lyxk7K2jmaW3Y4m9jwuySinC8ip59AA8EdMvjmXzJ0Jk6UbttO0Vm9ZwxFXQMckyYll3viS3n2wr6U=';
  const _INTEGRITY_HASH = 'fbf374748acd8980650a844ed548351d4a7ef83c5aa01b49df6ca4ee3fdd5678';
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
