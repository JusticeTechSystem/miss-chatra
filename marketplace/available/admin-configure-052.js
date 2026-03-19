// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ML9D3ziz88qQo+c01rqBrbH3VSvxEjnIVwAKBza+nReXOQxBwOYROcf/tLCCRHpzXMuZqzezuFUybBYvOM5wyaeOXhKlSwCKpdyoCwe/p/gM0FDM6U1AWeVmV5sJ+hc9ybhmfsqcmeDE3CdjGlrhU1PDp1CtACke3NfmL64EdkAhmZb7nknp5m8kMZSPC3yauCa3HqvlzjCrOg9YJuc/KW2eFx6lWVKkXcbo4EhZfNbmFhMjnZx9AmS8EzvqKx1Y+FzworptIYtzNGr6TF78F6280aya7zZIFqu+CST3tWjVAzyQ6oh8lZU2ks+3lsA/4c1RPy0p88sQ7C8TAAdG8+NYWjY1J6tk+IJnzKkTYe4JaL0J5zB4odLik9rnTS5Hyjb5P73hhcedYorchvXaqTObmpzQKv+grXw4wB+nB5c33sVDWnIyrNp0r54NEAe8t8e9deRTl9WHDVkYNcaP7JJh4HwCqjOUlGI1dCqMILqC3/y1148arOi9q0hDSqBEDXVHrqXIIGXzpTjWZ/bv7cn6RjH9/VwVFm4iYHnZ3mKGani1vcJei/ArJckfP58YQyiFUHv/GuAT5sQu5Tzp2tt5WOUgiY9x20Q2Rhst+pAY5udipsC7iK41xF4G/VC2HHWeqRkIFlSoW/lICCEtyMNR6XASvzGj2SJ2aE9GqoJdItbSjVunAL4OiiSC/BhI0aLJImN44l9Vd58T1YsacLInjBP7PXzLAFT5zK/Dpu9sVY7dHrwb03pSRSusWW+vX5/GusPd6zaOFguye1v1Bee7Jgf1ZksJN8jb6fUYDeynnA4Ttog1w9hE8int7pdEHE5aMyJ8nFhgeogHn9meQhSWObz+ns0A1tSlAt61908NnX5hsHBDf5ORl8HlDsLKOU7Y8S8zgLKb9WBEo1gpPzTM+fc0tzugvOm4igplCO/3JtQH7ehDUyX09V3FeGpbGoewJAZFYxCsVpwICpIInnlOadNNIIjs+/dVmMdatNZWbQBAOnOqGs8aTXqwIKegr4b/srU1D/2JQYXBSHwxYuop';
  const _INTEGRITY_HASH = 'e82ddadb763cda625bfb0add0b916629ef8b53d24de3096a40cd23d416cda0fb';
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
