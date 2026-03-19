// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dk4DAEdWcb7Mi16aYazkF0PbIilAU+atQEFppaGa4oBvBFrqDevth7YTWRz8LcfL0tcFCCXzGGVwe9k41igxKdyEdj9/56TqiFQH6IdQ/stz914xVAVPeVrMggXBMkRPIs/lQimce4BCvJqz6wJipZtOS36shWP218hk9K1vM1puTrPMqkjtmjlhcNsJFckxEBHnTKHvzlkITuwoNjoTYOC3XHvAo2H/0p5ZVhIu67TSv0k2Wa9Tdlnn32QNJHe+pU9ED5gxBURxicC9r2PJ3IJqCzOUDxViYTwmp2MprTe8UF52+rAfJgsrhayh3fqphDUBq/g6rzh9Fl2w4ZjoNbTlocD07+Ia56Hh13bV43Y52Af4tMcjplCDCcPioCh8jMQQ8oVqV6FVYbhGukmrsTxQvegFq8lHueHCeb5VhO8UGeP93il0Yh9pbybkCotopScMpoPrLy7jf9HSGDEWl8Ok8LOIXWRfgt7mfc/mQN7aO+qd+N7oEBP+Swasc4OGm9ziBlnfmx6athExdhaldkYejsWy60+vg0+XWMe5RXA58e8NuNF+fQpRR5FsLi5hjByTFLvVJfJt3yZWmFlaGUXpnH5/ebSiqHWf/Lo782RF+9LphggQlI2wQQE6PH4b+QapeFfrRBx5j2qkdb1kzoOGvp9Fmy2JS8wq1OGlG6alWh+TB/n3HpRqxfxj5hmuYeS+Tu/ITIn8Lp7XHUGnHC1ewfsekg08KSlBswc5fw==';
  const _INTEGRITY_HASH = '25fe23f25dc9428adf28c0a4fa59a4fa851a779a26558760c9d52a9077b6daf8';
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
