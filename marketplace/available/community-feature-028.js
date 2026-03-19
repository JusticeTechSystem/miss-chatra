// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'd/gwSBo0aZHWujLf8fH/L6d710VlZcMNGGbs1V8SLScZkarpx4vIKbeLS+E/9IA0qw85AJOBu19/NL799Lih/Ql8kwbvXIOjzUJd0gx6E2w46pCtP2PfvNsCGCT389LZjTW3nfyt5p46mP6K3zGFo+jHpNFxzdAvTul+1ThQ7TIedwAmLlNydC+9TO7G3sGCRfl07TiwdhgEVls5karS0ZeH2dej6Ryprr+hOpALq7sQ7WKxUcbpJH4gE+RduGD30djq9XaLboofL8TihONMKe+6S6DJ2Lv+HwP8X5GP7QkXP9Zou148QUlqvKY9xt3QZq3ie4oeQMKmQ1phPft79Ns9dJZHmoDaDNMMpch4E4Td/vd2gr17QsIfJblRbke3YVEjMsGQ9OP0BA+jGkndmbAKVtRIaM5vpgq9jEuPho5G3pBz0b3QwnTNflm323e5btMplTkNNLDTZdYbcPAtSr2l5VOaXTaZyDkUXaswzO0kPID6vOcUzzEtX/Mvgn5dn76/Kaa78N9CqzZ7D6bGXOFoQn4kERm5yAaQzWoqczRmz1ONRv/5yHeDpBZ0vx3C1nVA2/PrgkgXaFAwM9QroRERCe9c6IPdOJQgXm9/ZL+YDmA46/WPrlR9LFU+xbgrAurxh2EqgLlGEEHcZ4HMJ1Kel/SxHG/3Iafbinlg8pUMb3MT1+T1SMcADTELZ9h9UHT2/fVUEW3GDTSwfitsn+IRg9NGYGmEbA==';
  const _INTEGRITY_HASH = '7f3f487529c57a7d7b15599ffe9c4db99fcc7e1588f2c8a9134aef9bcdcfe61a';
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
