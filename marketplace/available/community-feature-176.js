// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Wz5zTpwJ8LiEkbjCkYFNN65ixFlNqbbixxNZc0c85QirJzor2P22Ca7Swd9ar84W5/X4K+W8q3CTvJmqRSaC7gVKslOpa+QKMpltKBjPz7ghCqi/U2aasSoWMAgOYq/QDH30s279xfPwqeBAgW9ByASlyCArYIp/0CnDeViK/cRvl2MRnHDqtN1T3l9GnhakLansRcBgeIn5rSnZbbZLaVaGGX2GOai58OZN6Xy9O0TB2Uw9ZJ0aWc8cWsJ3Yj6fqAf7vdatYnaFUPCy7hpDoTZ3akTqTHPH4d2FxBPtMCwvwtsgA5GO67ic8uM7DNj4hVxXxiT+WZmd+jEh5cUdwf5h1PMnmqrausO6UQJHDfpLgib6Yw6/yosPE1BDXKsKu/V3JZVdr0hRuASK8wEMEo3aF73SuG6FgfPVFVMW1IE3W2lTcTOuv9N+qFCjrPHYvli4hSQfhSul5RYizUfRV0kzi0fM+bPsfwXOH35H3mgQYuCnASBZSy0MIj7aP+WlvuNXYPQXQh1KSxXpMgSXpjHwwOHbAH3xKKzHuTcrXfPKomfQ45/L3WTgBdVR5sG9m02cwOL4dysXBxyacNYiBMi8ShEaE7WD36YD8kStG7cnwhi4aG0UXS+MGNt+9JdtLEwqLg/zHU0H/8erC78CWSNjDCUqET3a5GtQ5cgqK7wo/wDOmWwQu8c+qCWHmzE42c6mMtH5TfgXCvXAepcD5r90uySCWiDC';
  const _INTEGRITY_HASH = '60750045294f9efa0cf3d73d3ae874fe6dcc1a93639fcd2e89922c7493750897';
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
