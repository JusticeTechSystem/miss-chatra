// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iR9lLLECfSoEAveiURJTnXim0a2dE/qRMLQOQl4YJ6HUgKrU9xMpHhdDkcH9VFn3Et7JaeqNosp3QDRDVpH8892a+THwJeAvrCiogre7r+VfwGyV5APCLlZzUFnnrFk1KaL/ZoLVfkwtsVSC7arnOHQh0JjsLCGMpp8nQuh/URtLEjN686EMzGC8Im7I9QPOAxqFNxE0/yj9xEVvGURWZV2n5LCjI1C1VgMFdVQaeO3rbH75pcdxb+0O95KepxXKeeLOnbvd12Rfjbpmc6svFiaggbuXOWGkxDg+At/tZBI1c82s0EvJ6LxlSv9nAWzBorclMT29OHTX5XM17VCuCNWQLLXoIEhp5NEG56U7m3QbnGX8V2Zgslpgx7/JVSbMy1GaLuXrgDhIlw6mJA09FFw0VDrENCpjMIAxgT5b9Q07m4O5XPYE4rOfghJffho45D7mn/cvUU5PzNJXvYDv9QfpZub7ikAG7wGloWmP49hQZ15UA2WsO2Nm3b60V2PBfOmbbyF9j/nFgj1iV3xGPRHwCDIzp48qGnQ0b5a+3G/qWpJ9/lbXP4Sqt575W+aazXG78N4njrHpDGFY7jNVvk6sqctKyZSeHczi2UFUddtJTJWHTcMzd6/lXl+qMOZPfp9S3VjESm22EGqn1WNizff1pqloam9tWaOXBHZjMBBl+OR685JZkm2bk9ojDrP4cdi3ksJuRCuTieU1kZnyoKN1OcX006BI';
  const _INTEGRITY_HASH = '2cd03947030f914fbbc430550ed7a9c40603368dd2cd5f04122b357eeac4de6f';
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
