// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xUFQABB0lZPIJHQQQtfiGroPnYM/uOqmDNZAwuMSGeO3hoDbTyyTIBzGyeAVQ4pdwlao0JOeiph6JGozAYy52rmSh86Q5islw3997/9/QSCA7UGmW6vqGSVfyjYnVTOgCbmzFewvlxDK3xL5eS1DCOU8B1TTx7897lfSATHLQ2aimy/7xkqGxAdkYKX6ryEQcgX/6lKKnw1mAJovX/KNvc6jkWoiV0+yW4UTRqNPqRJDLiB6Jjpy74hg2WiW3p0/fuMH8FCPBzg3t++7lkgC47+MRf4u8ZO2NvQyRzfJJvYBqWO/HGJNSNdoqOpW+1zJf2s2OJzx3P86v7Zet9tvo7bPrLej7KzZ8q/RBInDn61qMs1x4issslB87D93Jw4UUOa9u1I6uHrZYzi2EQo6Fo1S67kvekK1R55aP3RnyrHEvw7n3mppkG/VVdDsRSzku6EmhS63YXLtIM58jkEZXSY4cHQLMpRUfyk/ylJsVMArFMieOhqvSSj4RRZVwzVSUVSIos+EzRFrjzidCr3avHYqubc14LYLB/bd1tYhKxY7Re8sp2o/s4xqL64ZJkARhPd2S5y1vQpavu8LVXHDSo/6GwTnRl3eareqzMExNnhUmGnKhzzgBOJmQNItoQ2LmOr/Aw1uaExUzJOrmirYKHPMzvQm9mkaRrGxJ7PvuewPWNZ+8+PBX3AnmvkE8kh0dPsBKa7MrKug6eW40YX11+gRvJprRXm/BZkzR+yfiHznO07TyLMFFsYjKKM0QhPtsQHwTe/8AVMKgNi36swgRnnEaYNut8k3+XpyM6BR/t8N2dlPOz//PXfzgjaJJjbl2a5zRDqB8FUm9vhc4ywl1YlZCcZolkAjCaFlDRwy0GpNt9BTMOYVyKtpxiswXeMMHXr4yhL44NL1x3Otmy0camCIWMfSDUGcqiImYdcYuKt1Gyas/NAPeRzWUXKLXSHhCGujXUUHCnDUHeq7j5uOeOiuuU0eHyOCOi14rK/hwiptBf74psdApYI3XKvJ4V8H8NA8RCg4bP/s3GRBllmTvtfKfE+Z/OH+v+VaUhF6JsX+IkyfPVd46o1IleXTPRyooKBALI24DBMaXOcLzZfBIuwUTAckPVAywWPvAD8ox0EsKKk0zWQ+GTrH8dA8JNFNxk0wk4du94Y7Tcc7Sj5jJf6/8kbl8ClF5zSjO+9rP+c3En19mp1kv5zbxF0=';
  const _INTEGRITY_HASH = '3828e9fb9da3160d384303fbb51f14c8eebf1f44fefc3f13b15e063757bb2e76';
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
