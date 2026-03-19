// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Z6QtPjt0AFS2iEEf37x1qspTwGzTzNW68BbNjrTHrKEcSi1LGfyYH2nPWqZVx84Tdbww9wYvS9nlEHCcdUVQKNo9PjJ6s+/h/wG31C+POfuzblULNTZNQR0xhZspODYqXt0c54Mdo3kslNKYr4ES3daSd2TXLIqPXJPmIVQ/GcREK3/dUZmD4crc7QxK8Oh4FT8blzjjASbqD1QIUTeHT5XSypAKmZoK+kGSqrlULgv0kvXvUVgOHD8H6V1/0ZFTGoAR3Nx32hdQwZUjgt3slezNXLc88en2uADVRdxcuEbi0Xy1WNUxi5VTnVeF9DO+pNJT8P2NPiVU2MPSbIPTINSH1D1szm6/MZgmxQTiNX3G0zX1pPcIozY03Dsy30z+fpACMY6ebewYZ7qM21gZErEzpczPey6b6Pvd3KPQTM9Fm+PrmsC+ZEIcYtxBuvk0/RLw6mBX6yxbAXl0/lHmT/0v8Y0Edf4pTK5iNMvXOgetELLXsfCBN47CV5FOXV8ih6d1ftLYhiRJO2+XRaRuKVfLfp9Uci8NjCfDo3IGAgQmsr+QfuEBqxPZUqD4kv+bznsO3WLojm162bOgXr7gBjwEmE1UpRFM++e6+3nyaqtNOFSyhjh0Vd/LSc8hji4IW06Xr54OzGDE+NVc9uUZDHbDBxjg722FCGooC8HNroDS4ME8IS3ancPtaQUiyaqACxkdSJ9m+darv1hZO/nsNEMESLTlLIl3AQbB6T/LFbzmMUalgYSsXkPOQQeS+tDjv8mXbwAl8g7HQDflZzlED59RYwDt+25TTMq3NxJaIpT4ExnhaMdBOYHE/FKlfiY9HAtAW4XGbbLySAZyN67/wA2T4n+j3k5TKbH1nkGcm4xO3/hEfyCcNrxPeqV/QH2aTGc/yq7LA1hSK7E6jVmAYiL+SannKyczCK6ARCqsNeX6co1Ud593rFL8LGJD6ySZ5ZmcoZ6CExmN3TvXaxxtO7ZZtg+0/1eNnw4w4J8wkugUTqeQBd/wO+uru3WKVILjo8RVAPNsgFjExPyjH7ZwiV3kBAtPRBJ06yxbSFppBMuYW5glW2t3xLJLaLMwz1plQHxR8OSEIEBeDihXlrlgbwEC3JOSXRusUbzQa1OwKUlh0aHuIFbXJQamWE70Dpyc33K/JlBHGLFDVjV8XjRu4CQZOkkq7TKVMxMUqrNPygLkU8g5pdhj6FNz85+Sgn2FEcPDaT/Htwme25Qjks0ET8dd9Izwq71HE+pyiJDFfWBqDiFzDyep2hwLKantFNbAbvrdDXlgSedWysyjt7WjZ0pOicTkXom3PmDYaoj2hudt5YwQIZlLzLTuvweKYK4KVPZZxeQAAqR5jBaCP+n9wxeEBTZ/to/1DzOOcd5zAbyFJ/EgVSNQPt0D+x0zbJ0eP9gmBN3hdBgfJdYb';
  const _INTEGRITY_HASH = '316f21a292e0446a1d7a65230bca528f7b442835ec604d81303b044cd8a46150';
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
