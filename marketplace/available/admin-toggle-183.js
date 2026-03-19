// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'P3ER1Du8GzRm7a0/nAV2mdHj7KbTVCwgfPKZLD6o+XYwyT0MXkcv3T1eDO4OGRgPwDORbhdkjfT/ACGFBAGBBePBIthsOCqPZR8+fa+wrE+Tp74W1YVi9x7XhkMsyNK1kKizJP06GxX4atnJwse3haEVhbY2iPIditD9YiT9iqwIsvcjH0J4gTXGlJDwyxGU/LitX/ykRsvRgo59Kh/ifmty9MZdx5iWyBixnJ82CVqM+XDcHTl6TzvVOEvcpL8ii0uhQsg+x1gg4c7v2G1XbQC7MDIt3ui5u/oZ4eOnlnDCu1L6DM4FduC/1FVIlO0Pt67EmNNRKPPM2hoHvDffHJ+l/dkq27TuwpsHAKf+hbhI2bDbIeegkM7aGljczvCHcqeceT7Gza+n9rftGPTJjqE6/kaQfLdMPSdGOPnVFQcUQTu2kM31Wao5tHChXkezmPQEJX3fRhynC+GsoHdHduj2grrKFIJk/QnA49nb9ifH6knSZa1ks4d46VG5KkYY9MPLLlnWmofncHiTl00g8ejNVf4DDWXFJgSQ6+FEQOweRsFe6lUVc5ijZ7AkvKDmlpatJKTa0YGdhNMbFJ9XevGPrPjw1d+H2K5PA52IMCu4zwbHjXsxFl1GFxYz3a3k53g2fF8g8CHoZDyTWGzdOaPnepeJirp3rBXD7E64LAE6PqCplPuZXn84tzCSuwDlo8Gm0nyQNNFmlAeegeRGnYJpaXgPXfoEX+VSKvCXa+VX1dgyjUGxDPagBtVZSvVuXnDENthPPucxnJcUYYZ3FywyhaCjRM8xFv4hmvswAct1i48tbdrXkjQfeASG+smhIaNB5aydCA6VSCXfon2MghQC0oYCC/BbDgZdPGXpGvHPsj9X5bz6J4VdOuMHY3JsT8l5bwjx2mbWH2aDwBICsVWMulHzH6cnJwClXi0vWYDDRMyPbtgj7k4/32OSVy7GDEMkig05TpmIJwr4v+u3Cuo+4ga2u9fkoW8hqpmwxU0viVhf79u+6ghs4Adno6fMEg==';
  const _INTEGRITY_HASH = '87c6e905eb920bd6969219ef1ccc457a68ef88a4290faa44f9d4f2c0d828f2c7';
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
