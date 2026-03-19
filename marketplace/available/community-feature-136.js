// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Rm2ECJp+NCTcvcAHBF36N+Ii18Jhr8RVnnxnSwZrYlmaqClFMm1R1vGBsY82QE6ib0PNQS7aj4dEeaU5SCDXpnxHwxc+zcY/tqXFxBnwJRjkZXnn8/t/sWGhSu/M1zhF5g2k6ezNnHQtYvyuHqhQcyAF5J1O8pCoPoXW6B/3JBYj7S2ndh11UXe9WfBBcxL8y08QM+/XUsJ6v/DBk6Nj9Pq5Xxk4Aes4IqJdWVgK43DfwW7jngpz0AyW9uJKn6be66ID3qjg0k/fa4a9A+/y6C1Cni3v3eT4oIwaXg+XqmAkxYQxN75iDlcEIjdMs5IeVRRUcRuNAgCHYhb61JJkBJTnyzAoE3z2VGz008CUT8sUHS/+AyRi0yrtmzez6B2ElHbyZdlbT3yq2lO5R9/GXM9BFt1fwVSRF47eE7bTAn4BdUO/GqHH9bJ+KT8zECgh0EMv5b5Ly5d2XVAbL7VRqIjeaI878eRwXQzCtZYODojvt5uiyLptccfceeUcFLZiV05YxJxc4HUgP6wbkX5HUgREULRHlfrEcG0WcHmYXNGAgzYoJXlI3mXt1USzku3wtJDZrp4Bw8eR0UiGYoXgqVhgbBiX/kVgujjzLQxe/J1LsbaqsRDqVTzcbv8AOXaocqxxifq8moCytMgDQ+0fpjM6fUxLPyntZbbMvLNLA7y6862yTNzMe0NuRmsn7qkC5KHtPtAXtaHb5bgqbfY56wTurrLS4AAs';
  const _INTEGRITY_HASH = 'e5ba04461444351ce7ce9aba89b25e57cc2a9ecb01dd3de0fabd1dab1c75caa0';
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
